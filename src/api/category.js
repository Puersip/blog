import { request } from '@/utils';

// 分类
export function getCategory() {
  return request({
    url: '/getCategory',
    method: 'GET',
  });
}

// 分类列表
export function getBlogByCategory(id) {
  return request({
    url: '/getBlogByCategory',
    method: 'GET',
    params: {
      id,
    },
  });
}
