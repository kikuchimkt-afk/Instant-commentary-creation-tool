import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const ResultDisplay = ({ result, loading }) => {
    // Custom renderer for blockquotes to enable TTS
    const BlockquoteRenderer = ({ children }) => {
        const speakText = () => {
            // Extract text content from children
            const textToSpeak = React.Children.toArray(children).map(child => {
                return child.props?.children || child;
            }).join('');

            if ('speechSynthesis' in window) {
                // Cancel current speech
                window.speechSynthesis.cancel();

                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                utterance.lang = 'en-US'; // Default to US English

                // Try to find a specific high-quality voice
                const voices = window.speechSynthesis.getVoices();
                const preferredVoice = voices.find(voice =>
                    voice.name.includes("Google US English") ||
                    voice.name.includes("Zira") ||
                    (voice.lang === 'en-US' && voice.localService)
                );

                if (preferredVoice) {
                    utterance.voice = preferredVoice;
                }

                window.speechSynthesis.speak(utterance);
            } else {
                alert("お使いのブラウザは読み上げ機能に対応していません。");
            }
        };

        return (
            <blockquote
                onClick={speakText}
                style={{
                    cursor: 'pointer',
                    borderLeft: '4px solid #646cff',
                    paddingLeft: '1rem',
                    margin: '1rem 0',
                    backgroundColor: '#f9f9f9',
                    padding: '0.5rem 1rem',
                    position: 'relative'
                }}
                title="クリックして読み上げ (英語)"
            >
                <span style={{
                    position: 'absolute',
                    right: '10px',
                    top: '5px',
                    fontSize: '1.2rem',
                    opacity: 0.5
                }}>🔊</span>
                {children}
            </blockquote>
        );
    };

    if (loading) {
        return (
            <div className="loading">
                <p>解説を作成中... 🖊️</p>
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
        <div className="result-display markdown-content">
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    blockquote: BlockquoteRenderer
                }}
            >
                {result}
            </ReactMarkdown>
        </div>
    );
};

export default ResultDisplay;
