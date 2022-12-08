<template>
  <main class="page__service">
    <h1 class="reveal-0">{{ $t("services.header.h1") }}</h1>
    <p class="reveal-0">{{ $t("services.header.p") }}</p>

    <h2 class="reveal-0">{{ $t("services.header.h2") }}</h2>
    <div class="container__etape">
      <article class="container__etape__block reveal-1">
        <h3>{{ $t("services.stepOne.h3") }}</h3>
        <div
          v-html="$t('services.stepOne.description')"
          class="container__etape--content"
        ></div>
      </article>
      <article class="container__etape__block reveal-2">
        <h3>{{ $t("services.stepTwo.h3") }}</h3>
        <div
          v-html="$t('services.stepTwo.description')"
          class="container__etape--content"
        ></div>
      </article>

      <article class="container__etape__block reveal-3">
        <h3>{{ $t("services.stepThree.h3") }}</h3>
        <div
          v-html="$t('services.stepThree.description')"
          class="container__etape--content"
        ></div>
      </article>
    </div>

    <a class="page__service--link reveal-3" :href="calendfy" target="blank">{{
      $t("services.footer")
    }}</a>
  </main>
</template>

<script>
import { reveal } from "@/store/function";

export default {
  head() {
    return {
      title: `Gg Web Dev - ${
        this.$i18n.locale === "fr" ? "Mes services" : "My service"
      }`,
    };
  },
  nuxtI18n: {
    paths: {
      en: "/services",
      fr: "/services",
    },
  },
  data() {
    return {
      calendfy: "http://calendly.com/gg-webdev",
    };
  },
  mounted() {
    reveal();
  },
};
</script>
