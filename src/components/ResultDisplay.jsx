import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const ResultDisplay = ({ result, loading, speechRate = 0.75 }) => {
    const [progress, setProgress] = React.useState(0);
    const audioQueueRef = React.useRef({ sentences: [], index: 0, isActive: false });

    React.useEffect(() => {
        let interval;
        if (loading) {
            setProgress(0);
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 90) return prev + 0.1; // Slow down near the end
                    if (prev >= 70) return prev + 0.5;
                    return prev + 2; // Start fast
                });
            }, 200);
        } else {
            setProgress(0);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [loading]);

    // Ensure speech is stopped when component unmounts
    React.useEffect(() => {
        return () => {
            window.speechSynthesis.cancel();
            audioQueueRef.current.isActive = false;
        };
    }, []);

    const getBestVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        // Priority: Google US English > Any Google English > Any en-US > Any English
        const googleUS = voices.find(v => v.name.includes("Google") && (v.lang === "en-US" || v.lang === "en_US"));
        if (googleUS) return googleUS;

        const googleAnyEn = voices.find(v => v.name.includes("Google") && v.lang.startsWith("en"));
        if (googleAnyEn) return googleAnyEn;

        const anyUS = voices.find(v => v.lang === "en-US" || v.lang === "en_US");
        if (anyUS) return anyUS;

        return voices.find(v => v.lang.startsWith("en"));
    };

    const processNextInQueue = () => {
        const queue = audioQueueRef.current;
        if (!queue.isActive || queue.index >= queue.sentences.length) {
            queue.isActive = false;
            return;
        }

        const sentence = queue.sentences[queue.index];
        const utterance = new SpeechSynthesisUtterance(sentence);
        const voice = getBestVoice();
        if (voice) utterance.voice = voice;
        utterance.rate = speechRate;
        utterance.lang = 'en-US';

        utterance.onend = () => {
            queue.index++;
            processNextInQueue();
        };

        utterance.onerror = (e) => {
            console.error("Speech error", e);
            queue.index++;
            processNextInQueue();
        };

        window.speechSynthesis.speak(utterance);
    };

    const splitIntoSentences = (text) => {
        const abbreviations = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "U.S.", "e.g.", "i.e.", "etc.", "vs.", "St."];
        let tempText = text;

        abbreviations.forEach((abbr, i) => {
            const placeholder = `__ABBR${i}__`;
            const regex = new RegExp(`\\b${abbr.replace(/\./g, '\\.')}`, 'g');
            tempText = tempText.replace(regex, placeholder);
        });

        const sentences = tempText.split(/(?<=[.!?])\s+/);

        return sentences.map(s => {
            let restored = s;
            abbreviations.forEach((abbr, i) => {
                const placeholder = `__ABBR${i}__`;
                restored = restored.replace(new RegExp(placeholder, 'g'), abbr);
            });
            return restored.trim();
        }).filter(s => s.length > 2 && /[a-zA-Z]/.test(s));
    };

    const speakText = (text) => {
        if (!text) return;

        // Reset and stop existing speech
        window.speechSynthesis.cancel();

        const englishOnlyText = text.replace(/[ぁ-んァ-ヶ亜-熙。、、「」]/g, ' ').trim();
        const sentences = splitIntoSentences(englishOnlyText);

        if (sentences.length === 0) return;

        // Initialize new queue
        audioQueueRef.current = {
            sentences: sentences,
            index: 0,
            isActive: true
        };

        // Some mobile browsers need a small delay after cancel() before speaking again
        setTimeout(() => {
            processNextInQueue();
        }, 50);
    };

    const handleContainerClick = (e) => {
        const target = e.target.closest('p, li, h1, h2, h3, code');
        if (target) {
            const text = target.innerText || target.textContent;
            speakText(text);
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="progress-label">解説を生成中... {Math.floor(progress)}%</div>
                <div className="progress-track">
                    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="loading-subtext">AIが画像を解析して最適な解説を作成しています。</p>
            </div>
        );
    }

    if (!result) {
        return (
            <div className="placeholder-text" style={{ marginTop: '2rem' }}>
                <p>画像を選択して「解説を作成」ボタンを押してください。</p>
            </div>
        );
    }

    return (
        <div
            className="result-display markdown-content clickable-text"
            onClick={handleContainerClick}
        >
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            >
                {result}
            </ReactMarkdown>
        </div>
    );
};

export default ResultDisplay;
