import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint({ cache: false }), react()],
  build: {
    outDir: 'build',//想要把dist修改成什么名字在这边改
    // assetsDir:'文件名'//想要把static修改成什么名字在这边改
  }
});
