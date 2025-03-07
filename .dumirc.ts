import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    editLink: false,
    sourceLink: false,
    showLineNum: true,
    footer: false,
    // name: 'Shan',
    logo: '/shan4.svg',
    nav: [
      {
        title: '简历',
        link: '/vitae'
      }
      , {
        title: '作品',
        link: '/opus',

      },
      {
        title: '目标',
        link: '/goal'
      }
    ],


  },
});
