import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { viteMockServe } from 'vite-plugin-mock';
import prismjs from 'vite-plugin-prismjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
    }),
    prismjs({
      languages: ['json', 'java', 'javascript', 'shell'],
    }),
  ],
  resolve: {
    alias: {
      // 定义@为src的别名
      '@': resolve(__dirname, './src'),
    },
  },
  esbuild: {
    // 在这里添加一个配置项，将 .js 文件视为 CommonJS 模块
    jsxFactory: undefined,
    jsxFragment: undefined,
    require: {
      '@/.prettierrc.js': '@c/.prettierrc.cjs', // 修改为实际的文件路径
    },
  },
  dev: {
    // 是否开启https
    https: false,
    // 端口号
    port: 5174,
    // 服务启动时是否打开浏览器
    open: true,
    // 允许跨域
    cors: true,
  },
});
