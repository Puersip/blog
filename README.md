# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 目录结构

```
├── dist/
├── build/                         // 项目启动构建相关的配置
    ├── config/                    // vite的配置目录
    ├── plugin/                    // vite项目导入的插件目录
├── mock/
    ├── api/                       // mock的接口
    ├── test/                      // mock的测试接口
    index.js                       // mock入口配置文件
├── public/                        // 项目的静态资源
├── settings/                      // 项目的环境设置目录
└── src/
    ├── api/                       // 接口请求目录
    ├── assets/                    // 静态资源目录
    ├── common/                    // 通用类库目录
    ├── components/                // 公共组件目录
    ├── router/                    // 路由配置目录
    	├── modules/  // 路由模块
        ├── index.js  // 路由配置文件
    ├── store/                     // 状态管理目录
        ├── modules/  // 仓库模块
        ├── index.js  // 仓库配置文件
    ├── style/                     // 通用样式目录
    ├── utils/                     // 工具函数目录
        ├── common/                // 公用组建封装
        ├── http/                  // axios组建封装
        ├── plugin/                // 第三方插件导入封装
    ├── views/                     // 页面组件目录
    ├── App.vue
    ├── main.js
├── tests/                         // 单元测试目录
├── .editorconfig                  // IDE统一的配置文件
├── .env                           // 项目环境基础配置
├── .env.development               // 项目开发环境配置
├── .env.github                    // 项目github环境配置
├── .env.production                // 项目生产环境配置
├── .env.test                      // 项目测试环境配置
├── .eslintignore                  // ESlint过滤规则
├── .eslintrc-auto-import.json     // ESlint插件自动导入检测配置
├── .eslintrc.json                 // ESlint规则
├── .gitignore                     // git过滤规则
├── .prettierignore                // prettierrc过滤规则
├── .prettierrc.json               // prettierrc配置规则
├── .stylelintignore               // stylelintrc过滤规则
├── .stylelintrc.cjs               // stylelintrc配置规则
├── commitlint.config.cjs          // git通用提交规范
├── index.html                     // 项目入口文件
├── package-lock.json              // package-lock文件
├── package.json                   // package文件
├── README.md                      // README文档
└──vite.config.js                  // Vite 配置文件
```

## 技术栈

- ⚡️ Vite 3 - 构建工具（就是快！）
- 🖖 Vue 3 - 渐进式 JavaScript 框架
- 🚦 Vue Router - 官方路由管理器
- 📦 Pinia - 值得你喜欢的 Vue Store
- 💻 TDesign - TDesign 适配桌面端的组件库
- 🎨 Less - CSS 预处理器
- 🔗 Axios - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js
- 🧰 Husky + Lint-Staged - Git Hook 工具
- 🛡️ EditorConfig + ESLint + Prettier + Stylelint - 代码规范
- 🔨 Commitizen + Commitlint - 提交规范
- 💡 GitHub Actions - 自动部署
