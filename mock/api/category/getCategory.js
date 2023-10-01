export default [
  {
    url: '/api/getCategory',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          { key: 'java', value: 10 },
          { key: 'javascript', value: 2 },
          { key: 'vue', value: 3 },
        ],
      };
    },
  },
];
