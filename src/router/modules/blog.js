export default {
  name: 'blog',
  path: '/blog/:id',
  component: () => import('@/views/blog/blogPage.vue'),
  meta: {
    title: '博客详情',
  },
};
