import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // 確保 index.html 是在這個目錄下
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
