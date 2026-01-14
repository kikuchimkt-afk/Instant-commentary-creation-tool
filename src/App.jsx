import React, { useState } from 'react';
import CameraInput from './components/CameraInput';
import ResultDisplay from './components/ResultDisplay';
import { generateExplanation } from './services/gemini';
import PrintLayout from './components/PrintLayout';
import './print.css';
import './crop_modal.css';
import './index.css';

function App() {
  const [images, setImages] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || "");
  const [model, setModel] = useState(localStorage.getItem('gemini_model') || "gemini-1.5-flash");
  const [speechRate, setSpeechRate] = useState(0.75);
  const [customInstructions, setCustomInstructions] = useState(localStorage.getItem('ai_instructions') || "");

  const PRESETS = [
    { label: "標準", value: "" },
    { label: "要点まとめ", value: "特に重要なポイントを3つに絞って解説してください。" },
    { label: "中学生向け", value: "中学生にもわかるように、難しい専門用語を使わずに優しく解説してください。" },
    { label: "文法の解説重視", value: "使われている重要な英文法事項について、例文を交えて詳しく解説してください。" },
  ];

  const handleInstructionsChange = (val) => {
    setCustomInstructions(val);
    localStorage.setItem('ai_instructions', val);
  };

  // Simple "Routing" based on URL query parameter
  // Hooks must be called before this conditional return
  const isPrintMode = new URLSearchParams(window.location.search).get('mode') === 'print';

  if (isPrintMode) {
    return <PrintLayout />;
  }

  const handleApiKeyChange = (e) => {
    const key = e.target.value;
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
  };

  const handleModelChange = (e) => {
    const newModel = e.target.value;
    setModel(newModel);
    localStorage.setItem('gemini_model', newModel);
  };

  const handleAddPage = (imageData) => {
    setImages(prev => [...prev, imageData]);
    setResult(""); // Clear previous result
  };

  const handleDeletePage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setResult("");
  };

  const handleGenerate = async () => {
    if (images.length === 0) return;
    if (!apiKey) {
      alert("APIキーを入力してください");
      return;
    }

    setLoading(true);
    try {
      // Extract base64 part
      const base64Images = images.map(img => img.split(',')[1]);

      const text = await generateExplanation(apiKey, base64Images, model, customInstructions);
      setResult(text);
    } catch (error) {
      console.error(error);
      alert(`解説の作成に失敗しました。\n詳細: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handlePrintPreview = () => {
    // Save current state to localStorage for the print window to pick up
    localStorage.setItem('print_images', JSON.stringify(images));
    localStorage.setItem('print_result', result || "");

    // Open new window with ?mode=print
    const printUrl = `${window.location.origin}${window.location.pathname}?mode=print`;
    window.open(printUrl, '_blank');
  };

  return (
    <>
      <header>
        <h1>インスタント解説作成ツール 📝</h1>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div className="speed-controls" style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '2px' }}>
            <span style={{ fontSize: '0.8rem', margin: '0 8px', color: 'white' }}>再生速度:</span>
            {[0.5, 0.75, 1.0].map(rate => (
              <button
                key={rate}
                onClick={() => setSpeechRate(rate)}
                className={speechRate === rate ? 'speed-btn active' : 'speed-btn'}
                style={{
                  padding: '4px 8px',
                  fontSize: '0.8rem',
                  minHeight: 'auto',
                  background: speechRate === rate ? 'white' : 'transparent',
                  color: speechRate === rate ? 'var(--primary-color)' : 'white',
                  border: 'none',
                  borderRadius: '6px'
                }}
              >
                {rate}x
              </button>
            ))}
          </div>
          <select
            value={model}
            onChange={handleModelChange}
            style={{ padding: '0.5rem', borderRadius: '4px' }}
          >
            <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
            <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
            <option value="gemini-2.0-flash-exp">Gemini 2.0 Flash</option>
            <option value="gemini-3-flash-preview">Gemini 3 Flash Preview</option>
          </select>
          <input
            type="password"
            placeholder="Google Gemini API Key"
            className="api-key-input"
            value={apiKey}
            onChange={handleApiKeyChange}
          />
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'underline', alignSelf: 'center', fontSize: '0.9rem' }}
          >
            取得はこちら
          </a>
        </div>
      </header>
      <main>
        <div className="split-pane left-pane">
          <section>
            <h2>問題 (全 {images.length} ページ)</h2>
            <div className="images-list" style={{ display: 'flex', gap: '10px', overflowX: 'auto', marginBottom: '1rem', paddingBottom: '0.5rem' }}>
              {images.map((img, index) => (
                <div key={index} style={{ position: 'relative', minWidth: '100px', maxWidth: '150px' }}>
                  <img src={img} alt={`Page ${index + 1}`} style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
                  <button
                    onClick={() => handleDeletePage(index)}
                    style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', width: '20px', height: '20px', padding: 0, fontSize: '10px', minHeight: 'auto', border: '1px solid white', cursor: 'pointer' }}
                  >
                    ✕
                  </button>
                  <span style={{ fontSize: '0.8rem', display: 'block', textAlign: 'center' }}>P.{index + 1}</span>
                </div>
              ))}
            </div>
            <CameraInput onAddPage={handleAddPage} />
          </section>

          <section className="custom-instructions-area" style={{ marginTop: '1.5rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', background: 'white' }}>
            <h3 style={{ marginTop: 0, fontSize: '1rem', color: '#555' }}>AIへの追加指示</h3>
            <div className="preset-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
              {PRESETS.map(preset => (
                <button
                  key={preset.label}
                  onClick={() => handleInstructionsChange(preset.value)}
                  style={{ fontSize: '0.8rem', padding: '4px 8px', background: '#f0f0f0', color: '#333', border: '1px solid #ccc' }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
            <textarea
              placeholder="例：特に英文法の説明を詳しくして / 文中の英単語リストを作って ..."
              value={customInstructions}
              onChange={(e) => handleInstructionsChange(e.target.value)}
              style={{ width: '100%', minHeight: '80px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical', fontSize: '0.9rem', boxSizing: 'border-box' }}
            />
          </section>

          <div style={{ textAlign: 'center', marginTop: '1rem', display: 'flex', gap: '10px' }}>
            <button
              onClick={handleGenerate}
              disabled={images.length === 0 || loading}
              style={{ flex: 1, padding: '1rem', fontSize: '1.2rem' }}
            >
              {loading ? '作成中...' : '解説を作成する ✨'}
            </button>
            <button
              onClick={handlePrintPreview}
              disabled={images.length === 0 || !result}
              style={{ flex: 1, padding: '1rem', fontSize: '1.2rem', backgroundColor: '#28a745' }}
            >
              印刷プレビュー 🖨️
            </button>
          </div>
        </div>
        <div className="split-pane right-pane">
          <h2>解説・解答</h2>
          <ResultDisplay result={result} loading={loading} speechRate={speechRate} />
        </div>
      </main>
    </>
  );
}

export default App;
