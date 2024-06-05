// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  runtimeConfig: {
    public: {
    }
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/main.css'
  ],

  modules: ["@nuxt/image", "@nuxtjs/i18n"],

  image: {
    providers: {
      bookCoverProvider: {
        name: 'bookCover', // optional value to overrider provider name
        provider: '~/providers/book-cover-provider.ts', // Path to custom provider
        options: {
          // ... provider options
          baseURL: ""
        }
      }
    }
  },

  i18n: {
    locales: [
      {code: 'en', name: 'English', iso: 'en', file: 'en.ts'},
      {code: 'sl', name: 'Slovenian',iso: 'sl', file: 'sl.ts'}
    ],
    lazy:true,
    langDir: 'lang',
    defaultLocale: 'sl',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  }
})