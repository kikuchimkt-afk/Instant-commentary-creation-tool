import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase the warning limit to 1000kb to suppress warnings for now
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manually split chunks to keep the main bundle smaller
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['@google/generative-ai', 'katex', 'react-markdown', 'react-image-crop']
        }
      }
    }
  }
})
