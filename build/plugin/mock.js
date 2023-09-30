import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin() {
  return viteMockServe({
    mockPath: 'mock/api',
  });
}
