import { request } from '@/utils';

// 关于我
export function getUserInfo() {
  return request({
    url: '/getUserInfo',
    method: 'GET',
  });
}
