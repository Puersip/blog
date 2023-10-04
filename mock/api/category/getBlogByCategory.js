export default [
  {
    url: '/api/getBlogByCategory',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          {
            id: 1,
            title: '博客标题1-JAVA',
            category: 'java',
            summary: `  太阳升起就去耕作田地，太阳下山就回家去休息。
            凿一眼井就可以有水喝，耕田劳作就可获取食物。\n这样的日子有何不自在，谁还去羡慕帝王的权力。
            太阳升起就去耕作田地，太阳下山就回家去休息。`,
          },
          {
            id: 2,
            title: '博客标题2-JAVA',
            category: 'java',
            summary: '博客摘要2',
          },
          {
            id: 3,
            title: '博客标题3-JAVA',
            category: 'java',
            summary: '博客摘要3',
          },

          // 添加更多博客数据
        ],
      };
    },
  },
];
