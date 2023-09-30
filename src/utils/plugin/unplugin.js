import AutoImport from 'unplugin-auto-import/vite';

export default [
  AutoImport({
    imports: ['vue', 'vue-router'],
    dts: false,
    eslintrc: {
      enabled: false, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
    },
  }),
];
