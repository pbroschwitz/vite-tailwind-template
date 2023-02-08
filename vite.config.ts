import { defineConfig } from 'vite'

export default defineConfig({
  root: './src/',
  build: {
    outDir: '../dist',
    assetsDir: './assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: new URL('/index.html', import.meta.url).pathname,
        legal: new URL('/legal-info.html', import.meta.url).pathname,
        privacy: new URL('/privacy-policy.html', import.meta.url).pathname,
      }
    }
  }
})
