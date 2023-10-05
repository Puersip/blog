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
            createTime: '2023-01-12',
            summary: `  太阳升起就去耕作田地，太阳下山就回家去休息。
            凿一眼井就可以有水喝，耕田劳作就可获取食物。\n这样的日子有何不自在，谁还去羡慕帝王的权力。
            太阳升起就去耕作田地，太阳下山就回家去休息。`,
          },
          {
            id: 2,
            title: '博客标题2',
            createTime: '2023-02-12',
            summary: '博客摘要2',
          },
          {
            id: 3,
            title: '博客标题3',
            createTime: '2023-03-12',
            summary: '博客摘要3',
          },
          {
            id: 4,
            title: '博客标题4',
            createTime: '2023-04-12',
            summary: '博客摘要4',
          },
          {
            id: 5,
            title: '博客标题5',
            createTime: '2023-05-12',
            summary: '博客摘要5',
          },
          // 添加更多博客数据
        ],
      };
    },
  },
];
