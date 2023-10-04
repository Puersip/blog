const Layout = () => import('@/components/layoutPage.vue');

export default {
  name: '',
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [
    {
      name: 'blog',
      path: '/blog/:id',
      component: () => import('@/views/blog/blogPage.vue'),
      meta: {
        title: '博客详情',
      },
    },
  ],
};
