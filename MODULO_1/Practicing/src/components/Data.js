export const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/code-front-braga.png',
      name: 'Leonardo Primo',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala, galeraaa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'leo.design/doctorcare' },
    ],
    publishedAt: new Date('2024-06-14 17:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Full Stack',
    },
    content: [
      { type: 'paragraph', content: 'Fala, galeraaa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'mayk.fullStack/doctorcare' },
    ],
    publishedAt: new Date('2024-06-14 17:30:00'),
  },
];
