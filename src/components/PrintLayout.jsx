import React, { useEffect, useState } from 'react';
import ResultDisplay from './ResultDisplay';
import '../print.css'; // Corrected Import Path

const PrintLayout = () => {
    const [data] = useState(() => {
        const savedImagesStr = localStorage.getItem('print_images');
        const savedImageLegacy = localStorage.getItem('print_image');

        let images = [];
        if (savedImagesStr) {
            try {
                images = JSON.parse(savedImagesStr);
            } catch (e) {
                console.error("Failed to parse print_images", e);
            }
        } else if (savedImageLegacy) {
            images = [savedImageLegacy];
        }

        const savedResult = localStorage.getItem('print_result');
        return { images, result: savedResult || "" };
    });

    const [showProblem, setShowProblem] = useState(true);
    const [showOCR, setShowOCR] = useState(true);
    const [showExplanation, setShowExplanation] = useState(true);
    const [documentTitle, setDocumentTitle] = useState("");

    // EFFECT: Override global app styles
    useEffect(() => {
        const originalRootStyle = document.getElementById('root').style.cssText;
        const originalBodyStyle = document.body.style.cssText;
        const originalHtmlStyle = document.documentElement.style.cssText;

        document.getElementById('root').style.height = 'auto';
        document.getElementById('root').style.minHeight = '100vh';
        document.body.style.height = 'auto';
        document.body.style.overflow = 'visible';
        document.documentElement.style.height = 'auto';
        document.documentElement.style.overflow = 'visible';

        return () => {
            document.getElementById('root').style.cssText = originalRootStyle;
            document.body.style.cssText = originalBodyStyle;
            document.documentElement.style.cssText = originalHtmlStyle;
        };
    }, []);

    const parseResult = (text) => {
        if (!text) return { ocrText: "", explanationText: "" };

        const ocrRegex = /1\.\s*(?:\*\*)?\s*(?:文字起こし|OCR).*?(?:\*\*)?\s*(?::)?(?:\n|$)/i;
        const explanationRegex = /2\.\s*(?:\*\*)?\s*(?:解説).*?(?:\*\*)?\s*(?::)?(?:\n|$)/i;

        const ocrMatch = text.match(ocrRegex);
        const explanationMatch = text.match(explanationRegex);

        if (!ocrMatch || !explanationMatch) {
            console.warn("PrintLayout: Markers not found.");
            return { ocrText: "", explanationText: text };
        }

        const ocrStartIndex = ocrMatch.index;
        const explanationStartIndex = explanationMatch.index;

        const digestPart = text.substring(0, ocrStartIndex);
        const ocrHeaderLength = ocrMatch[0].length;
        const ocrPart = text.substring(ocrStartIndex + ocrHeaderLength, explanationStartIndex);
        const explanationPart = text.substring(explanationStartIndex);

        return {
            ocrText: ocrPart.trim(),
            explanationText: digestPart + "\n\n" + explanationPart
        };
    };

    const { ocrText, explanationText } = parseResult(data.result);
    // Dynamic Rendering Logic:
    // If NO problem components (Image/OCR) are selected, do NOT render the problem section container.
    // This allows the Explanation section (which follows in normal flow) to move to the start (Left Column).
    // CSS columns fill strictly sequentially.
    const shouldRenderProblemSection = showProblem || (showOCR && !!ocrText);

    return (
        <div className="print-layout">
            {/* Header Control Panel (Hidden in Print) */}
            <div className="no-print" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                background: '#f0f0f0',
                padding: '0.5rem 1rem',
                borderBottom: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                boxSizing: 'border-box'
            }}>
                <div style={{ flex: 1 }}>
                    <input
                        type="text"
                        value={documentTitle}
                        onChange={(e) => setDocumentTitle(e.target.value)}
                        placeholder="タイトルを入力..." // "Enter title..."
                        style={{
                            padding: '0.5rem',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                            width: '300px',
                            fontSize: '1rem'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', gap: '2rem', flex: 2, justifyContent: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={showProblem} onChange={e => setShowProblem(e.target.checked)} />
                        問題画像
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={showOCR} onChange={e => setShowOCR(e.target.checked)} />
                        問題文 (OCR)
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
                        <input type="checkbox" checked={showExplanation} onChange={e => setShowExplanation(e.target.checked)} />
                        解説・解答
                    </label>
                </div>

                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <button onClick={() => window.print()} style={{ padding: '6px 16px', cursor: 'pointer', fontWeight: 'bold' }}>
                        印刷する 🖨️
                    </button>
                </div>
            </div>

            {/* Document Title Display (Top Left) */}
            <div className="print-title-container">
                {documentTitle && (
                    <h1 style={{
                        fontSize: '1.8rem',
                        margin: 0,
                        paddingBottom: '0.5rem',
                        lineHeight: 1.2
                    }}>
                        {documentTitle}
                    </h1>
                )}
            </div>

            <div className="print-content">
                {/* Left Column / Problem Section */}
                {shouldRenderProblemSection && (
                    <div className="problem-section">
                        <h2>問題</h2>
                        {showProblem && (
                            <>
                                {data.images.length > 0 ? (
                                    data.images.map((img, index) => (
                                        <div key={index} style={{ marginBottom: '1rem' }}>
                                            <img src={img} alt={`Problem Page ${index + 1}`} className="print-image" />
                                            <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>- {index + 1} -</div>
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ color: '#999' }}>画像がありません</p>
                                )}
                            </>
                        )}
                        {showOCR && ocrText && (
                            <div style={{ marginTop: '2rem' }}>
                                <div style={{ borderTop: '1px dashed #ccc', margin: '1rem 0' }}></div>
                                <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.2rem', color: '#333' }}>問題文 (OCR)</h3>
                                <ResultDisplay result={ocrText} loading={false} />
                            </div>
                        )}
                    </div>
                )}

                {/* Right Column / Explanation Section */}
                {showExplanation && (
                    <div className="explanation-section">
                        <h2 style={{ marginTop: '0' }}>解説・解答</h2>
                        <ResultDisplay result={explanationText} loading={false} />
                    </div>
                )}
            </div>

            <div className="print-footer">
                ECCベストワン藍住・北島中央
            </div>
        </div>
    );
};

export default PrintLayout;
