import React from 'react';

const AdditionalInstructions = ({ value, onChange }) => {
    return (
        <div style={{ margin: '1rem 0' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>
                AIへの追加指示 (任意):
            </label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="例: 小学生にもわかるように説明して / 関西弁で解説して / 文法を中心に解説して"
                style={{
                    width: '100%',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    minHeight: '60px',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                }}
            />
        </div>
    );
};

export default AdditionalInstructions;
