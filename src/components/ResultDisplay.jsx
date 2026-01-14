import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const ResultDisplay = ({ result, loading, speechRate = 0.75 }) => {
    const [progress, setProgress] = React.useState(0);

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

    const splitIntoSentences = (text) => {
        const abbreviations = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof.", "U.S.", "e.g.", "i.e.", "etc.", "vs.", "St."];
        let tempText = text;

        // Temporarily replace dots in common abbreviations to prevent incorrect splitting
        abbreviations.forEach((abbr, i) => {
            const placeholder = `__ABBR${i}__`;
            const regex = new RegExp(`\\b${abbr.replace(/\./g, '\\.')}`, 'g');
            tempText = tempText.replace(regex, placeholder);
        });

        // Split by punctuation (!, ?, .) followed by whitespace
        const sentences = tempText.split(/(?<=[.!?])\s+/);

        // Restore abbreviations and return cleaned sentences
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

        // Stop any current speech
        window.speechSynthesis.cancel();

        // Remove Japanese characters (Hiragana, Katakana, Kanji, punctuation)
        const englishOnlyText = text.replace(/[ぁ-んァ-ヶ亜-熙。、、「」]/g, ' ').trim();

        // Split into smart sentences
        const sentences = splitIntoSentences(englishOnlyText);

        if (sentences.length === 0) return;

        // Queue each sentence separately for natural pauses
        sentences.forEach((sentence) => {
            const utterance = new SpeechSynthesisUtterance(sentence);
            utterance.rate = speechRate;
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        });
    };

    const handleContainerClick = (e) => {
        // Target paragraphs, list items, and headers
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
