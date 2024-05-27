<template>
  <div :key="resetApp">
    <start-anim v-if="isStarEnable" :key="isStarEnable" />
    <TheHeader />
    <Nuxt />
    <TheFooter @hideStar="disableAnimStar" />
  </div>
</template>

<script>
import startAnim from "~/components/startAnim.vue";
export default {
  components: { startAnim },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: "GG Web Développeur Portfolio",
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "GG web dev, auto entreprise de création de site internet, développement d'application et de solutions digitales. Je suis Ghislain freelance, indépendant et je vous propose mes services de développeur HTML, CSS, javascript, vue js, nuxt, sass, node js, mysql. ",
        },
        ...i18nHead.meta,
      ],
      link: [
        { rel: "icon", type: "image/PNG", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        ...i18nHead.link,
      ],
    };
  },
  data() {
    return {
      isStarEnable: true,
      resetApp: 0,
    };
  },
  methods: {
    disableAnimStar(payload) {
      this.isStarEnable = payload;
    },
  },
  mounted() {
    window.addEventListener("resize", (event) => {
      this.resetApp++;
    });
  },
};
</script>

<style lang="scss" scoped></style>
