import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo name is used as the base path for GitHub Pages project sites:
// https://<user>.github.io/portfoloio-/
// https://vite.dev/config/
export default defineConfig({
  base: '/portfoloio-/',
  plugins: [react()],
})
