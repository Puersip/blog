export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: {
          username: 'lumi',
          age: 18,
        },
      };
    },
  },
];
