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
          :::

        ::: danger
        这是一个危险警告
        :::

        ::: details
          这是一个详情块，在 IE / Edge 中不生效
        :::

        ::: tip 自定义标题
          你也可以自定义块中的标题
        :::

        ::: danger STOP
          危险区域，禁止通行
        :::
        `,
        },
      };
    },
  },
];
