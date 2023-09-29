import { request } from '@/utils';

// 关于我
export function getBlogList() {
  return request({
    url: '/api/getBlogList',
    method: 'GET',
  });
}
