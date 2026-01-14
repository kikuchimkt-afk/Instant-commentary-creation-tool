import { GoogleGenerativeAI } from "@google/generative-ai";

const GENERATION_CONFIG = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 8192,
};

export const generateExplanation = async (apiKey, imageBase64Data, modelName = "gemini-1.5-flash") => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const genAI = new GoogleGenerativeAI(apiKey.trim());
  const model = genAI.getGenerativeModel({ model: modelName });

  // Handle both single string and array of strings
  const images = Array.isArray(imageBase64Data) ? imageBase64Data : [imageBase64Data];

  const imageParts = images.map(img => ({
    inlineData: {
      mimeType: "image/png",
      data: img
    }
  }));

  const parts = [
    {
      text: "あなたは熟練した学習塾の講師です。与えられた画像の学習教材（問題）について、以下の構成で出力してください。\n\n冒頭に、時候の挨拶や「こんにちは」などの会話的な前置きは一切不要です。\nその代わりに、この問題の**解き方の概要（ダイジェスト）**を簡潔にまとめてください。\n\n1. **文字起こし (OCR)**:\n   画像内のテキストを正確に書き出してください。複数枚ある場合は、ページごとに区切って記述してください。\n\n2. **解説**:\n   生徒が理解しやすいように、ステップバイステップで丁寧に解説してください。\n\n3. **解答**:\n   最終的な答えを明記してください。\n\n出力はMarkdown形式で行ってください。"
    },
    ...imageParts
  ];

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: GENERATION_CONFIG,
    });

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
