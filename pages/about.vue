<template>
  <main class="page__about">
    <h1 class="reveal-0">{{ $t("about.h1") }}</h1>

    <div>
      <article>
        <h2 class="reveal-1">{{ $t("about.h2who") }}</h2>

        <h3 class="reveal-2">{{ $t("about.personal.h3") }}</h3>
        <div class="reveal-2 about__personal">
          <img
            class="about__personal--img"
            src="~/assets/images/moi2.jpg"
            alt="photo de Ghislain montagne"
          />
          <p class="reveal-3 about__personal--text">
            {{ $t("about.personal.text") }}
          </p>
        </div>

        <h3 class="reveal-2">{{ $t("about.professionaly.h3") }}</h3>
        <div class="reveal-2 about__personal reverse">
          <img
            class="about__personal--img"
            src="~/assets/images/moi.jpg"
            alt="photo de Ghislain montagne"
          />
          <p class="reveal-3 about__personal--text">
            {{ $t("about.professionaly.id1") }} <br />
            <br />
            {{ $t("about.professionaly.id2") }}
          </p>
        </div>
      </article>
      <article>
        <h2 class="reveal-1">{{ $t("about.h2commit") }}</h2>

        <div class="reveal-2 about__wish">
          <img
            class="about__wish--img"
            src="~/assets/images/environement_respect.jpg"
            alt="ecology"
          />
          <p class="about__wish--text">{{ $t("about.willingness.id1") }}</p>
        </div>

        <div class="reveal-2 about__wish reverse">
          <img
            class="about__wish--img"
            src="~/assets/images/data_protection.jpg"
            alt="data protection"
          />
          <p class="about__wish--text">{{ $t("about.willingness.id2") }}</p>
        </div>

        <div class="reveal-2 about__wish">
          <img
            class="about__wish--img"
            src="~/assets/images/business_relationship.jpg"
            alt="business relationship"
          />
          <p class="about__wish--text">{{ $t("about.willingness.id3") }}</p>
        </div>

        <div class="reveal-2 about__wish reverse">
          <img
            class="about__wish--img"
            src="~/assets/images/freelance_me.jpg"
            alt="freelance"
          />
          <p class="about__wish--text">{{ $t("about.willingness.id4") }}</p>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import { reveal } from "@/store/function";

export default {
  head() {
    return {
      title: `Gg Web Dev - ${
        this.$i18n.locale === "fr" ? "A propos de moi" : "About me"
      }`,
    };
  },
  nuxtI18n: {
    paths: {
      en: "/about",
      fr: "/Apropos",
    },
  },
  data() {
    return {
      downloadUrl: "",
    };
  },
  mounted() {
    reveal();
  },
  /* methods: {
        downloaded: function() {
            const url = document.getElementById('cv').src
            this.downloadUrl = url
        }
    } */
};
</script>
