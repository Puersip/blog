export default [
  {
    url: '/api/getArchives',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: 'ok',
        data: [
          {
            date: '2023-01',
            titles: [
              { id: 1, title: 'Article 1 Title' },
              { id: 2, title: 'hello1' },
            ],
          },
          {
            date: '2023-02',
            titles: [
              { id: 1, title: 'Article 2 Title' },
              { id: 2, title: 'hello2' },
            ],
          },
          {
            date: '2023-03',
            titles: [
              { id: 1, title: 'Article 3 Title' },
              { id: 2, title: 'hello3' },
            ],
          },
          {
            date: '2023-04',
            titles: [
              { id: 1, title: 'Article 1 Title' },
              { id: 2, title: 'hello4' },
            ],
          },
          {
            date: '2023-05',
            titles: [
              { id: 1, title: 'Article 2 Title' },
              { id: 2, title: 'hello5' },
            ],
          },
          {
            date: '2023-06',
            titles: [
              { id: 1, title: 'Article 3 Title' },
              { id: 2, title: 'hello6' },
            ],
          },
          // Add more entries as needed
        ],
      };
    },
  },
];
