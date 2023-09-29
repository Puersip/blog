export default [
  {
    url: '/api/getBlogDetails',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          id: 1,
          title: '# 博客标题1',
          summary: '## 你好吗',
          content: `::: warning
          这是一段警告
          ::: `,
        },
      };
    },
  },
];
