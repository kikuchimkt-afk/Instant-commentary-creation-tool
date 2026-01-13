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

      const text = await generateExplanation(apiKey, base64Images, model);
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
        <div style={{ display: 'flex', gap: '10px' }}>
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
          <ResultDisplay result={result} loading={loading} />
        </div>
      </main>
    </>
  );
}

export default App;
