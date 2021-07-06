require('dotenv').config() /* appeler le fichier .env */

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  router: { 
    base: './', /* test sans sinon passer en ./ pour le deploy static */
    mode: 'hash'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  /* generate: {
    routes: [
      '/projet/1',
      '/projet/2',
      '/projet/3',
      '/projet/4',
      '/projet/5',
      '/projet/6',
    ]
  }, */

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "WebDev",
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/PNG', href: '/favicon.PNG' }
    ]
  },

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
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: 3000, // par défaut : 3000
  },
  loadingIndicator: {
    name: 'circle',
    color: 'white',
    background: 'linear-gradient(to top left, rgb(37, 35, 35), 85%, rgb(231, 230, 230)) no-repeat'
  },

}
