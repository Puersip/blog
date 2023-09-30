import { request } from '@/utils';

// 博客列表
export function getBlogList() {
  return request({
    url: '/getBlogList',
    method: 'GET',
  });
}

// 博客详情
export function getBlogDetails(id) {
  return request({
    url: '/getBlogDetails',
    method: 'GET',
    params: {
      id,
    },
  });
}
