export default [
  {
    url: '/api/getUserInfo',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: {
          username: 'chen',
          age: 18,
        },
      };
    },
  },
];
