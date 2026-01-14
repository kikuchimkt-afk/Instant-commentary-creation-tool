import React, { useState, useRef } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';

// Helper to center the crop initially
function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
    return centerCrop(
        makeAspectCrop(
            {
                unit: '%',
                width: 90,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    );
}

const CropModal = ({ src, onCreateCrop, onCancel }) => {
    const [crop, setCrop] = useState();
    const [completedCrop, setCompletedCrop] = useState(null);
    const imgRef = useRef(null);

    function onImageLoad(e) {
        const { width, height } = e.currentTarget;
        // Set default crop to full image
        setCrop({
            unit: '%',
            width: 100,
            height: 100,
            x: 0,
            y: 0
        });
    }

    const getCroppedImg = () => {
        if (!completedCrop || !imgRef.current) return;

        const image = imgRef.current;
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        canvas.width = completedCrop.width * scaleX;
        canvas.height = completedCrop.height * scaleY;

        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            completedCrop.x * scaleX,
            completedCrop.y * scaleY,
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
            0,
            0,
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
        );

        // Convert to base64
        const base64 = canvas.toDataURL('image/png');
        onCreateCrop(base64);
    };

    return (
        <div className="crop-modal-overlay">
            <div className="crop-modal-content">
                <h3>画像をトリミング</h3>
                <div className="crop-image-area">
                    <ReactCrop
                        crop={crop}
                        onChange={(c) => setCrop(c)}
                        onComplete={(c) => setCompletedCrop(c)}
                    >
                        <img
                            ref={imgRef}
                            src={src}
                            onLoad={onImageLoad}
                            alt="Crop me"
                            style={{ maxWidth: '100%' }}
                        />
                    </ReactCrop>
                </div>
                <div className="crop-actions">
                    <button onClick={onCancel} className="crop-cancel-btn">キャンセル</button>
                    <button onClick={getCroppedImg}>トリミングを完了</button>
                </div>
            </div>
        </div>
    );
};

export default CropModal;
