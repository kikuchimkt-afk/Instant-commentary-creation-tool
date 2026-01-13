import React, { useEffect, useState } from 'react';
import ResultDisplay from './ResultDisplay';

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
        return { images, result: savedResult };
    });

    useEffect(() => {
        // Auto print dialog
        if ((data.images.length > 0) || data.result) {
            setTimeout(() => {
                window.print();
            }, 1000);
        }
    }, [data]);

    return (
        <div className="print-layout">
            <div className="print-content">
                <h2>問題</h2>
                {data.images.length > 0 ? (
                    data.images.map((img, index) => (
                        <div key={index} style={{ marginBottom: '1rem' }}>
                            <img src={img} alt={`Problem Page ${index + 1}`} className="print-image" />
                            <div style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>- {index + 1} -</div>
                        </div>
                    ))
                ) : (
                    <p>画像がありません</p>
                )}

                <h2 style={{ marginTop: '2rem' }}>解説・解答</h2>
                <ResultDisplay result={data.result} loading={false} />
            </div>
            <div className="print-footer">
                ECCベストワン藍住・北島中央
            </div>
        </div>
    );
};

export default PrintLayout;
