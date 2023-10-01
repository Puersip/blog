export default [
  {
    url: '/api/getLinks',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          {
            id: 1,
            name: 'Friend 1',
            avatar:
              'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
            url: 'https://www.baidu.com',
          },
          {
            id: 2,
            name: 'Friend 2',
            avatar:
              'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
            url: 'https://www.baidu.com',
          },
          {
            id: 3,
            name: 'Friend 3',
            avatar:
              'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
            url: 'https://www.baidu.com',
          },
          {
            id: 4,
            name: 'Friend 4',
            avatar:
              'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
            url: 'https://www.baidu.com',
          },
          {
            id: 5,
            name: 'Friend 5',
            avatar:
              'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
            url: 'https://www.baidu.com',
          },
          {
            id: 6,
            name: 'Friend 6',
            avatar:
              'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
            url: 'https://www.baidu.com',
          },
          {
            id: 7,
            name: 'Friend 7',
            avatar:
              'https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg',
            url: 'https://www.baidu.com',
          },
          // ... 可以添加更多的友链数据
        ],
      };
    },
  },
];
