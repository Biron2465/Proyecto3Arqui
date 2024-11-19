// nuxt.config.js
export default {
  app: {
    head: {
      title: 'Game of Thrones',
      meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },
  },

  build: {
    transpile: [],
  },

  compatibilityDate: '2024-11-18',
};