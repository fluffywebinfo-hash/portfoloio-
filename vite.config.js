import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Note: no `base` is set so the app serves from the domain root.
// This is correct for Vercel/Netlify (portfoloio-tawny.vercel.app).
export default defineConfig({
  plugins: [react()],
})
