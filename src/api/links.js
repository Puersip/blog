import { request } from '@/utils';

// 博客列表
export function getLinks() {
  return request({
    url: '/getLinks',
    method: 'GET',
  });
}
