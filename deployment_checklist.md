# Vercel Deployment Checklist

Your application is now ready for deployment! Follow these steps to deploy to Vercel.

## 1. Preparation
- [x] Application Build Check (Checked via `npm run build`)
- [x] SPA Configuration (`vercel.json` created)

## 2. Deployment Steps
1.  **Push to GitHub**: Ensure your latest code is pushed to your GitHub repository.
2.  **Import to Vercel**:
    - Go to [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **"Add New..."** -> **"Project"**.
    - Import your GitHub repository.
3.  **Configure Project**:
    - **Framework Preset**: Vercel should automatically detect `Vite`.
    - **Root Directory**: Leave as `./` (default).
    - **Build Command**: `vite build` (default).
    - **Output Directory**: `dist` (default).
4.  **Deploy**: Click **"Deploy"**.

## 3. Important: API Key Settings
Since this is a client-side application, the Google Gemini API is called directly from the user's browser.

- **For your own use**: If you are using your own API key, ensure valid domains are set if you have restricted them.
    - Go to [Google AI Studio > Get API key](https://aistudio.google.com/app/apikey).
    - Click on your API Key.
    - If you have set **"API key restrictions"**, add your Vercel domain (e.g., `your-app-name.vercel.app`) to the allowed list.
    - If "None" is selected, it will work immediately (but is less secure).

## 4. Environment Variables
- This app uses `localStorage` for the API Key, so you **do NOT** need to set the API Key in Vercel's Environment Variables. Users (including you) will enter the key in the browser.

Enjoy your app! 🚀
