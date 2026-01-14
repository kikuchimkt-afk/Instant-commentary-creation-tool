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
  const [activeTab, setActiveTab] = useState('input'); // 'input' or 'result'
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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
      alert("APIキーを入力してください (右上の設定アイコンから設定できます)");
      setIsSettingsOpen(true);
      return;
    }

    setLoading(true);
    setActiveTab('result'); // Switch to result tab on mobile
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
          <div className="speed-controls desktop-only" style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '2px' }}>
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
            className="desktop-only"
            style={{ padding: '0.5rem', borderRadius: '4px' }}
          >
            <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
            <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
            <option value="gemini-2.0-flash-exp">Gemini 2.0 Flash</option>
            <option value="gemini-3-flash-preview">Gemini 3 Flash Preview</option>
          </select>
          <input
            type="password"
            placeholder="Gemini API Key"
            className="api-key-input desktop-only"
            value={apiKey}
            onChange={handleApiKeyChange}
          />
        </div>
      </header>

      {/* Floating Settings Button for Mobile */}
      <button
        className="mobile-fab-settings"
        onClick={() => setIsSettingsOpen(true)}
        aria-label="Settings"
      >
        ⚙️
      </button>

      {/* Settings Drawer for Mobile */}
      {isSettingsOpen && (
        <div className="settings-overlay" onClick={() => setIsSettingsOpen(false)}>
          <div className="settings-drawer" onClick={e => e.stopPropagation()}>
            <div className="drawer-header">
              <h3>設定</h3>
              <button className="close-btn" onClick={() => setIsSettingsOpen(false)}>✕</button>
            </div>
            <div className="drawer-content">
              <div className="setting-item">
                <label>Gemini API Key:</label>
                <input
                  type="password"
                  placeholder="API Key を入力"
                  value={apiKey}
                  onChange={handleApiKeyChange}
                  style={{ width: '100%', padding: '12px', marginTop: '5px', boxSizing: 'border-box' }}
                />
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--primary-color)', marginTop: '10px', display: 'inline-block' }}>
                  キーを取得する (Google AI Studio) ↗
                </a>
              </div>

              <div className="setting-item">
                <label>使用モデル:</label>
                <select value={model} onChange={handleModelChange} style={{ width: '100%', padding: '12px', marginTop: '5px' }}>
                  <option value="gemini-1.5-pro">Gemini 1.5 Pro</option>
                  <option value="gemini-1.5-flash">Gemini 1.5 Flash</option>
                  <option value="gemini-2.0-flash-exp">Gemini 2.0 Flash</option>
                  <option value="gemini-3-flash-preview">Gemini 3 Flash Preview</option>
                </select>
              </div>

              <div className="setting-item">
                <label>音声再生速度:</label>
                <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
                  {[0.5, 0.75, 1.0].map(rate => (
                    <button
                      key={rate}
                      onClick={() => setSpeechRate(rate)}
                      style={{
                        flex: 1,
                        padding: '10px',
                        background: speechRate === rate ? 'var(--primary-color)' : '#f0f0f0',
                        color: speechRate === rate ? 'white' : '#333'
                      }}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  onClick={() => setIsSettingsOpen(false)}
                  style={{ width: '100%', padding: '1rem', background: 'var(--primary-color)', color: 'white' }}
                >
                  設定を閉じる
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className={activeTab}>
        <div className={`split-pane left-pane ${activeTab === 'input' ? 'mobile-visible' : 'mobile-hidden'}`}>
          <section className="scroll-area">
            {images.length > 0 ? (
              <>
                <h2>問題 (全 {images.length} ページ)</h2>
                <div className="images-list" style={{ display: 'flex', gap: '10px', overflowX: 'auto', marginBottom: '1rem', paddingBottom: '0.5rem' }}>
                  {images.map((img, index) => (
                    <div key={index} style={{ position: 'relative', minWidth: '100px', maxWidth: '150px' }}>
                      <img src={img} alt={`Page ${index + 1}`} style={{ width: '100%', borderRadius: '4px', border: '1px solid #ddd' }} />
                      <button
                        onClick={() => handleDeletePage(index)}
                        style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', width: '24px', height: '24px', padding: 0, fontSize: '12px', minHeight: 'auto', border: '2px solid white', cursor: 'pointer' }}
                      >
                        ✕
                      </button>
                      <span style={{ fontSize: '0.8rem', display: 'block', textAlign: 'center' }}>P.{index + 1}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="setup-guide" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                {!apiKey ? (
                  <div className="guide-card" style={{ marginBottom: '2rem', background: '#fff9e6', border: '1px solid #ffe58f', padding: '1.5rem', borderRadius: '12px' }}>
                    <h3 style={{ marginTop: 0 }}>Step 1: APIキーの設定 🔑</h3>
                    <p style={{ fontSize: '0.9rem', color: '#856404' }}>まずは解説を作成するためのGemini APIキーを設定してください。</p>
                    <button
                      onClick={() => setIsSettingsOpen(true)}
                      style={{ background: '#ffc107', color: '#000', border: 'none' }}
                    >
                      設定を開く
                    </button>
                  </div>
                ) : null}
                <div className="guide-card" style={{ background: '#f0f7ff', border: '1px solid #bae7ff', padding: '1.5rem', borderRadius: '12px' }}>
                  <h3 style={{ marginTop: 0 }}>Step 2: 写真を撮る 📸</h3>
                  <p style={{ fontSize: '0.9rem', color: '#0050b3' }}>「カメラを起動」を押して、問題を撮影しましょう。</p>
                </div>
              </div>
            )}

            <CameraInput onAddPage={handleAddPage} />

            <section className="custom-instructions-area" style={{ marginTop: '1.5rem', marginBottom: '1rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', background: 'white' }}>
              <h3 style={{ marginTop: 0, fontSize: '1rem', color: '#555' }}>AIへの追加指示</h3>
              <div className="preset-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                {PRESETS.map(preset => (
                  <button
                    key={preset.label}
                    onClick={() => handleInstructionsChange(preset.value)}
                    style={{ fontSize: '0.8rem', padding: '6px 10px', background: '#f0f0f0', color: '#333', border: '1px solid #ccc' }}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <textarea
                placeholder="例：特に英文法の説明を詳しくして / 文中の英単語リストを作って ..."
                value={customInstructions}
                onChange={(e) => handleInstructionsChange(e.target.value)}
                style={{ width: '100%', minHeight: '80px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical', fontSize: '0.9rem', boxSizing: 'border-box' }}
              />
            </section>
          </section>

          <div className="action-bar">
            <button
              onClick={handleGenerate}
              disabled={images.length === 0 || loading}
              className="generate-btn"
            >
              {loading ? '作成中...' : '解説を作成する ✨'}
            </button>
            <button
              onClick={handlePrintPreview}
              disabled={images.length === 0 || !result}
              className="mobile-hidden print-btn"
            >
              印刷 🖨️
            </button>
          </div>
        </div>
        <div className={`split-pane right-pane ${activeTab === 'result' ? 'mobile-visible' : 'mobile-hidden'}`}>
          <h2>解説・解答</h2>
          <ResultDisplay result={result} loading={loading} speechRate={speechRate} />
        </div>
      </main>

      <nav className="mobile-bottom-nav">
        <button
          className={activeTab === 'input' ? 'active' : ''}
          onClick={() => setActiveTab('input')}
        >
          <span className="nav-icon">📷</span>
          カメラ・入力
        </button>
        <button
          className={activeTab === 'result' ? 'active' : ''}
          onClick={() => setActiveTab('result')}
        >
          <span className="nav-icon">📖</span>
          解説表示
        </button>
      </nav>
    </>
  );
}

export default App;
