import { request } from '@/utils';

// 分类
export function getCategory() {
  return request({
    url: '/getCategory',
    method: 'GET',
  });
}
