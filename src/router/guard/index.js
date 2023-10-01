import { createPageTitleGuard } from './page-title-guard';

export function setupRouterGuard(router) {
  createPageTitleGuard(router);
}
