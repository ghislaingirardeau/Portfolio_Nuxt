require('dotenv').config() /* appeler le fichier .env */
import i18n from './config/i18n'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
/* test sans sinon passer en ./ pour le deploy static */
  router: { 
    /* base: './',  */
    /* mode: 'hash' */
  },

  // Target: https://go.nuxtjs.dev/config-target 
  target: 'static',

  generate: { // pour un crawling plus aisé des bots
    routes: [
      '/projet/1',
      '/projet/2',
      '/projet/3',
      '/projet/4',
      '/projet/5',
      '/projet/6',
      '/projet/7',
      '/projet/8',
    ]
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
 // head envoyé comme fonction dans le layout
  /* head: {
    title: "GG Web Dev",
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', 
        name: 'description', 
        content: 'GG web dev est une auto entreprise de création et de développement de site web, appartenant à Mr GIRARDEAU ghislain' 
      }
    ],
    link: [
      { rel: 'icon', type: 'image/PNG', href: '/favicon.PNG' },
    ]
  }, */

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  
  modules: [
    'nuxt-i18n'
  ],
  
  i18n: {
    seo: false,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
    ],
    baseUrl: 'https://ghislain-girardeau-portfolio.netlify.app',
    defaultLocale: 'fr',
    vueI18n: i18n
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  loadingIndicator: {
    name: 'circle',
    color: 'white',
    background: 'linear-gradient(to top left, rgb(37, 35, 35), 85%, rgb(231, 230, 230)) no-repeat'
  },
}
