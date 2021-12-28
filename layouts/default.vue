<template>
  <div> <!-- Mettre les composants en format camel !!!! -->
    <navBar />
    <Nuxt />
    <footerBar />
  </div>
</template>

<script>
export default {
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: "GG Web Dev",
      htmlAttrs: {
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "GG web dev, auto entreprise de création de site internet, développement d'application et de solutions digitales. Je suis Ghislain freelance, indépendant et je vous propose mes services de développeur HTML, CSS, javascript, vue js, nuxt, sass, node js, mysql. "
        },
        ...i18nHead.meta
      ],
      link: [
        { rel: 'icon', type: 'image/PNG', href: '/favicon.PNG' },
        ...i18nHead.link
     ]
    }
  }
}
</script>

<style>

</style>
