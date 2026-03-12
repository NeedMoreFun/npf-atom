export default ({ env }: { env: any }) => ({
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::page.page', // Проверьте этот UID (инструкция ниже)
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'page',
              slug: '{slug}',
              secret: env('PREVIEW_SECRET', 'your_secret_token'),
            },
          },
          published: {
            url: 'http://localhost:3000/{slug}',
          },
        },
      ],
    },
  },
});