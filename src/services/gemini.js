import { GoogleGenerativeAI } from "@google/generative-ai";

const GENERATION_CONFIG = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 8192,
};

export const generateExplanationStepped = async (apiKey, imageBase64Data, modelName = "gemini-1.5-flash", additionalInstructions = "", onProgress) => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const genAI = new GoogleGenerativeAI(apiKey.trim());
  const model = genAI.getGenerativeModel({ model: modelName });

  // Helper to wait for rate limits if necessary
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  try {
    // --- Step 1: OCR (30%) ---
    onProgress(10, "画像を読み取っています (OCR)...");

    const images = Array.isArray(imageBase64Data) ? imageBase64Data : [imageBase64Data];
    const imageParts = images.map(img => ({
      inlineData: {
        mimeType: "image/png",
        data: img
      }
    }));

    const ocrPrompt = `
      以下の画像のテキストを全て書き出してください。
      数式や図形が含まれる場合は、それらも可能な限りテキストで表現してください。
      解説は不要です。テキスト抽出のみを行ってください。
    `;

    const ocrResult = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: ocrPrompt }, ...imageParts] }],
      generationConfig: GENERATION_CONFIG,
    });

    if (!ocrResult || !ocrResult.response) {
      throw new Error("OCRステップでレスポンスが得られませんでした。");
    }
    const ocrText = ocrResult.response.text();

    onProgress(30, "問題を分析しています...");
    await sleep(500); // UI feel

    // --- Step 2: Explanation (70%) ---
    onProgress(40, "解説を作成しています...");

    const explainPrompt = `
      あなたは熟練した学習塾の講師です。
      以下の抽出された問題テキスト（および元の画像）に基づいて、生徒にわかりやすい解説を作成してください。

      [追加の指示]
      ${additionalInstructions}

      [問題テキスト]
      ${ocrText}

      [出力構成]
      1. **文字起こし (OCR結果の確認)**:
         上記で抽出したテキストを整形して提示。
         **重要: 英文は必ず \`> \` (引用記号) を行頭につけて記述してください。** これにより読み上げ機能が有効になります。

      2. **解説**:
         ステップバイステップで丁寧に。
         ${additionalInstructions ? `(注: "${additionalInstructions}" を意識してください)` : ""}

      3. **解答**:
         最終的な答え。

      出力はMarkdown形式で行ってください。
    `;

    const explanationResult = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: explainPrompt }, ...imageParts] }], // Send images again for context
      generationConfig: GENERATION_CONFIG,
    });

    if (!explanationResult || !explanationResult.response) {
      throw new Error("解説生成ステップでレスポンスが得られませんでした。");
    }
    const explanationText = explanationResult.response.text();

    onProgress(90, "仕上げ中...");
    await sleep(500);

    onProgress(100, "完了しました！");
    return explanationText;
  } catch (error) {
    console.error("Gemini API Full Error:", error);
    let errorMessage = error.message;
    if (error.response) {
      try {
        errorMessage += " (Details: " + JSON.stringify(error.response) + ")";
      } catch (e) { }
    }
    throw new Error(errorMessage);
  }
};

// Legacy function (kept for reference or fallback if needed)
export const generateExplanation = async (apiKey, imageBase64Data, modelName = "gemini-1.5-flash") => {
  return generateExplanationStepped(apiKey, imageBase64Data, modelName, "", () => { });
};
