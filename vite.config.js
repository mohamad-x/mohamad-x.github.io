import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // default for root-hosted deployments
  // For GitHub Pages subpath, uncomment and set your repo name:
  // base: '/<repo>/',
})
