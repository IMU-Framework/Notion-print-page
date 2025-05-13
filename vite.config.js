import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.', // 告訴 Vite 從根目錄（index.html 所在處）開始
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // 明確指定入口
    },
  },
});
