import vue from '@vitejs/plugin-vue';
import unplugin from './unplugin';
import { configMockPlugin } from './mock';

export function createVitePlugins(viteEnv) {
  const plugins = [vue(), ...unplugin];

  if (viteEnv?.VITE_USE_MOCK) {
    plugins.push(configMockPlugin());
  }

  return plugins;
}
