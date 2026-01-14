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

    const speakText = (text) => {
        if (!text) return;

        // Stop any current speech
        window.speechSynthesis.cancel();

        // Remove Japanese characters (Hiragana, Katakana, Kanji, punctuation)
        // This is a rough filter to keep English sentences
        const englishOnlyText = text.replace(/[ぁ-んァ-ヶ亜-熙。、、「」]/g, '').trim();

        // If no meaningful English is left (e.g. only symbols or very short), don't speak
        if (englishOnlyText.length < 3 || !/[a-zA-Z]/.test(englishOnlyText)) return;

        const utterance = new SpeechSynthesisUtterance(englishOnlyText);

        // Apply speech rate
        utterance.rate = speechRate;
        utterance.lang = 'en-US';

        window.speechSynthesis.speak(utterance);
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
