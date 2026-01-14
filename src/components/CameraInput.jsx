import React, { useRef, useState, useEffect } from 'react';
import CropModal from './CropModal';

const CameraInput = ({ onAddPage }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [mediaStream, setMediaStream] = useState(null);

    // Cropping State
    const [tempImage, setTempImage] = useState(null);
    const [showCropModal, setShowCropModal] = useState(false);

    // Initialize camera stream when isCameraOpen becomes true
    useEffect(() => {
        if (isCameraOpen && mediaStream && videoRef.current) {
            videoRef.current.srcObject = mediaStream;
            videoRef.current.play().catch(e => console.error("Video play failed:", e));
        }
    }, [isCameraOpen, mediaStream]);

    const startCamera = async () => {
        // Validation: Check if browser supports mediaDevices (often fails on HTTP)
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            alert("カメラ機能がサポートされていません。HTTPSまたはローカルホストで接続してください。");
            return;
        }

        try {
            const constraints = {
                video: {
                    facingMode: { ideal: 'environment' }
                }
            };
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            setMediaStream(stream);
            setIsCameraOpen(true);
        } catch (err) {
            console.error("Error accessing camera:", err);
            alert("カメラの起動に失敗しました。詳細: " + err.message);
        }
    };

    const stopCamera = () => {
        if (mediaStream) {
            const tracks = mediaStream.getTracks();
            tracks.forEach(track => track.stop());
            setMediaStream(null);
        }
        setIsCameraOpen(false);
    };

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const imageData = canvas.toDataURL('image/png');

            // Go to cropping instead of direct set
            setTempImage(imageData);
            setShowCropModal(true);

            stopCamera();
        }
    };

    // Paste Event Listener
    useEffect(() => {
        const handlePaste = (event) => {
            const items = (event.clipboardData || event.originalEvent.clipboardData).items;
            for (const item of items) {
                if (item.type.indexOf('image') === 0) {
                    const blob = item.getAsFile();
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const imageData = event.target.result;
                        setTempImage(imageData);
                        setShowCropModal(true);
                    };
                    reader.readAsDataURL(blob);
                }
            }
        };

        window.addEventListener('paste', handlePaste);
        return () => {
            window.removeEventListener('paste', handlePaste);
        };
    }, []);

    const handleCropComplete = (croppedImage) => {
        onAddPage(croppedImage);
        setShowCropModal(false);
        setTempImage(null);
    };

    const handleCropCancel = () => {
        setShowCropModal(false);
        setTempImage(null);
    };

    return (
        <div className="camera-input">
            <div className="image-container">
                {!isCameraOpen && (
                    <div className="placeholder-text">
                        <p>ここに画像をペースト (Ctrl+V)</p>
                        <p>または</p>
                        <p>カメラで撮影して「ページ追加」</p>
                    </div>
                )}

                {isCameraOpen && (
                    <video ref={videoRef} playsInline style={{ width: '100%', height: '100%' }} />
                )}

                <canvas ref={canvasRef} style={{ display: 'none' }} />
            </div>

            <div className="controls">
                {!isCameraOpen && (
                    <button onClick={startCamera}>カメラを起動</button>
                )}

                {isCameraOpen && (
                    <>
                        <button onClick={captureImage}>撮影</button>
                        <button onClick={stopCamera} style={{ backgroundColor: '#ccc' }}>キャンセル</button>
                    </>
                )}
            </div>

            {showCropModal && tempImage && (
                <CropModal
                    src={tempImage}
                    onCreateCrop={handleCropComplete}
                    onCancel={handleCropCancel}
                />
            )}
        </div>
    );
};

export default CameraInput;
