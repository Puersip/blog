import { request } from '@/utils';

// 归档
export function getArchives() {
  return request({
    url: '/getArchives',
    method: 'GET',
  });
}
