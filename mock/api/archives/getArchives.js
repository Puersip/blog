export default [
  {
    url: '/api/getArchives',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          { date: '2023-01', titles: ['Article 1 Title', 'hello1'] },
          { date: '2023-02', titles: ['Article 2 Title', 'hello2'] },
          { date: '2023-03', titles: ['Article 3 Title', 'hello3'] },
          { date: '2023-04', titles: ['Article 1 Title', 'hello4'] },
          { date: '2023-05', titles: ['Article 2 Title', 'hello5'] },
          { date: '2023-06', titles: ['Article 3 Title', 'hello6'] },
          // Add more entries as needed
        ],
      };
    },
  },
];
