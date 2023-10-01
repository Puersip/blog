import { createRouter, createWebHashHistory } from 'vue-router';
import {
  basicRoutes,
  NOT_FOUND_ROUTE,
  EMPTY_ROUTE,
} from '@/router/routes/index.js';
import { asyncRoutes } from './routes';
import { setupRouterGuard } from './guard';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: basicRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

async function addDynamicRoutes() {
  try {
    asyncRoutes.forEach((route) => {
      if (!router.hasRoute(route.name)) {
        router.addRoute(route);
      }
    });
    if (router.hasRoute(EMPTY_ROUTE.name)) {
      router.removeRoute(EMPTY_ROUTE.name);
    }
    router.addRoute(NOT_FOUND_ROUTE);
  } catch (error) {
    console.error(error);
  }
}

export async function setupRouter(app) {
  await addDynamicRoutes();
  setupRouterGuard(router);
  app.use(router);
}
