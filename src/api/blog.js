import { request } from '@/utils';

// 博客列表
export function getBlogList() {
  return request({
    url: '/api/getBlogList',
    method: 'GET',
  });
}

// 博客详情
export function getBlogDetails(id) {
  return request({
    url: '/api/getBlogDetails',
    method: 'GET',
    params: {
      id,
    },
  });
}
