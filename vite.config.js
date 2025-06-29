import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssVite from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    base: './', // for relative paths (especially for GitHub Pages or Vercel)
  plugins: [react(), tailwindcssVite()],
  resolve:{
    alias:{
    "@":path.resolve(__dirname,"./src")
    }
  }
})
