import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const ResultDisplay = ({ result, loading }) => {
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
            >
                {result}
            </ReactMarkdown>
        </div>
    );
};

export default ResultDisplay;
