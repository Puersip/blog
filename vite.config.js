import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './src/utils/plugin';
import { convertEnv } from './src/utils/common/convertEnv';

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
  // const isBuild = command === 'build';

  const env = loadEnv(mode, process.cwd());
  const viteEnv = convertEnv(env);
  // const { VITE_PORT, VITE_PUBLIC_PATH, VITE_USE_PROXY, VITE_PROXY_TYPE } =
  //   viteEnv;

  return {
    plugins: createVitePlugins(viteEnv),
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
  };
});
