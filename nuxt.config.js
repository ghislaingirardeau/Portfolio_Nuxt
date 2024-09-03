require("dotenv").config(); /* appeler le fichier .env */
import i18n from "./config/i18n";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  /* test sans sinon passer en ./ pour le deploy static */

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

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

  css: ["@/assets/css/main.css", "@/assets/css/main.scss"],

  plugins: [],

  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-analytics"],
  /* googleAnalytics: {
    id: process.env.ANALYTICS_ID,
  }, */
  env: {
    googleAnalyticsId: process.env.ANALYTICS_ID,
  },

  modules: ["nuxt-i18n", "@nuxtjs/robots", "@nuxtjs/sitemap"],

  sitemap: {
    hostname: "https://ghislain-girardeau-portfolio.netlify.app/",
  },

  i18n: {
    seo: false,
    locales: [
      { code: "en", iso: "en-US", file: "en.js" },
      { code: "fr", iso: "fr-FR", file: "fr.js" },
    ],
    baseUrl: "https://ghislain-girardeau-portfolio.netlify.app",
    defaultLocale: "fr",
    vueI18n: i18n,
  },

  build: {
    hmtl: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },
  loadingIndicator: {
    name: "circle",
    color: "white",
    background:
      "linear-gradient(to top left, rgb(37, 35, 35), 85%, rgb(231, 230, 230)) no-repeat",
  },
};
