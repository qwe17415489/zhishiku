import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import path from "path";
// import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [eslint({ cache: false }), react()],
  build: {
    outDir: 'build',//想要把dist修改成什么名字在这边改
    // assetsDir:'文件名'//想要把static修改成什么名字在这边改
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#': path.resolve(__dirname, 'types'),
      '~': path.resolve(__dirname, 'src/modules')
    },
    // 忽略后缀名的配置选项, 添加 .vue 选项时要记得原本默认忽略的选项也要手动写入
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
});
