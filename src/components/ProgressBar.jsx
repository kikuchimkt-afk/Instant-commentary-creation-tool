import React from 'react';

const ProgressBar = ({ progress, message }) => {
    return (
        <div style={{ width: '100%', margin: '1rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{message}</span>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>{progress}%</span>
            </div>
            <div style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#e0e0e0',
                borderRadius: '5px',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    backgroundColor: '#646cff',
                    transition: 'width 0.5s ease-in-out'
                }} />
            </div>
        </div>
    );
};

export default ProgressBar;
