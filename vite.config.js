import { defineConfig, loadEnv } from 'vite';
import { createVitePlugins } from './build/plugin';
import { convertEnv, getSrcPath, getRootPath } from './build/utils';
import { createViteProxy } from './build/config/viteProxy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const srcPath = getSrcPath();
  const rootPath = getRootPath();
  const env = loadEnv(mode, process.cwd());
  const viteEnv = convertEnv(env);
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_USE_PROXY, VITE_PROXY_TYPE } =
    viteEnv;

  return {
    plugins: createVitePlugins(viteEnv),
    base: VITE_PUBLIC_PATH || '/',
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
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
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      open: false,
      proxy: createViteProxy(VITE_PROXY_TYPE, VITE_USE_PROXY),
    },
  };
});
