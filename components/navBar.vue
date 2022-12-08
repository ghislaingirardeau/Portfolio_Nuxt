<template>
  <header class="header">
    <div class="header__logo wrap">
      <!-- envoie animation du cube en dynamique pour la modifier au clic -->
      <div
        class="cube"
        @click="spinLogo"
        :key="componentKey"
        :style="{ animation: animCube }"
      >
        <div class="front">g</div>
        <div class="back">dev</div>
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="left">G</div>
        <div class="right">web</div>
      </div>
    </div>
    <nav
      class="header__navBar switchLang__anim--opacity"
      @click="spinLogo"
      :key="componentKey"
    >
      <NuxtLink :to="localePath('index')" class="header__navBar--font">{{
        $t("navBar.index")
      }}</NuxtLink>
      <NuxtLink :to="localePath('proNew')" class="header__navBar--font">{{
        $t("navBar.projects")
      }}</NuxtLink>
      <NuxtLink :to="localePath('service')" class="header__navBar--font">{{
        $t("navBar.services")
      }}</NuxtLink>
      <NuxtLink :to="localePath('about')" class="header__navBar--font">{{
        $t("navBar.aboutMe")
      }}</NuxtLink>
    </nav>

    <div class="header__lang switchLang__anim--opacity" @click="toogleShow">
      <nuxt-link
        class="toogleLang"
        :to="switchLocalePath(lang)"
        v-show="lang === 'en'"
        >English</nuxt-link
      >
      <nuxt-link
        class="toogleLang"
        :to="switchLocalePath(lang)"
        v-show="lang === 'fr'"
        >French</nuxt-link
      >
    </div>
  </header>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      componentKey: 0 /* pour faire un re-render du cube avec :key */,
      animCube: "spin 7s .3s linear" /* anime par default au load */,
      lang: "en",
    };
  },
  methods: {
    spinLogo() {
      let time = 2 + Math.floor(Math.random() * 10) + "s";
      this.animCube = "spin " + time + " linear ";
      this.componentKey += 1; /* pour faire un re-render du cube */
    },
    toogleShow() {
      this.lang = this.$i18n.localeCodes.find(
        (element) => element != this.$i18n.locale
      );
      const navElt = document.getElementsByClassName(
        "switchLang__anim--opacity"
      );

      for (const element of navElt) {
        element.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 500,
          easing: "ease-in-out",
        });
      }
    },
  },
  mounted() {
    this.toogleShow();
  },
};
</script>
