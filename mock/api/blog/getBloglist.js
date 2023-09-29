export default [
  {
    url: '/api/getBlogList',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          {
            id: 1,
            title: '博客标题1',
            summary: '博客摘要1',
          },
          {
            id: 2,
            title: '博客标题2',
            summary: '博客摘要2',
          },
          {
            id: 3,
            title: '博客标题3',
            summary: '博客摘要3',
          },
          {
            id: 4,
            title: '博客标题4',
            summary: '博客摘要4',
          },
          {
            id: 5,
            title: '博客标题5',
            summary: '博客摘要5',
          },
          // 添加更多博客数据
        ],
      };
    },
  },
];
