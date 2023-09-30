import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

export default [
  AutoImport({
    imports: ['vue', 'vue-router'],
    dts: false,
    eslintrc: {
      enabled: false, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
    },
  }),
  Components({
    resolvers: [
      IconsResolver({ customCollections: ['public'], componentPrefix: 'icon' }),
    ],
    dts: false,
  }),
];
