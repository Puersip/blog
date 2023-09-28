import { createApp } from 'vue';
import '@/style/style.css';
import App from './App.vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';

async function setupApp() {
  // 创建App实例
  const app = createApp(App);

  // 挂在状态管理组建pinia
  setupStore(app);

  // 动态加载路由信息
  await setupRouter(app);

  // 挂在App
  app.mount('#app');
}

setupApp();
