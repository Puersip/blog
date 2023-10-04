const Layout = () => import('@/components/layoutPage.vue');

export default {
  name: '',
  path: '/',
  component: Layout,
  redirect: '/home',
  children: [
    {
      name: 'categorys',
      path: '/categorys/:id',
      component: () => import('@/views/category/categorys.vue'),
      meta: {
        title: '分类列表',
      },
    },
  ],
};
