import vue from '@vitejs/plugin-vue';
import { viteMockServe } from 'vite-plugin-mock';
import unplugin from './unplugin';
import { configMockPlugin } from './mock';

export function createVitePlugins(viteEnv) {
  const plugins = [
    vue(),
    ...unplugin,
    viteMockServe({
      mockPath: 'mock',
    }),
  ];

  if (viteEnv?.VITE_USE_MOCK) {
    plugins.push(configMockPlugin());
  }

  return plugins;
}
