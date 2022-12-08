<template>
  <main
    class="carroussel_block"
    :key="windowSize"
    :style="{ height: heightBlock() + 'px' }"
    @touchstart="startDrag($event)"
    @touchend="endDrag($event)"
  >
    <h1 class="reveal-0">{{ $t("projectsPage.title") }}</h1>
    <p class="text_clickOn reveal-0">{{ $t("projectsPage.description") }}</p>
    <span :key="reload" class="element_fixed"></span>
    <span :key="reload + 1" class="element_fixed2"></span>
    <div class="swipe--text">
      <span> &lt;--- swipe ---&gt;</span>
    </div>
    <!-- <div :key="swipeReload" class="swipe_element"></div> -->

    <button @click="goRight" class="btn__goback carrousel-ctrl-right">
      &gt;
    </button>
    <button @click="goLeft" class="btn__goback carrousel-ctrl-left">
      &lt;
    </button>
    <transition-group :name="slideDirection" tag="article">
      <projet-carrousel key="0" v-if="slide === 0">
        <projet-slide :list="list" />
      </projet-carrousel>
      <projet-carrousel key="1" v-if="slide === 1">
        <projet-slide :list="list" />
      </projet-carrousel>
      <projet-carrousel key="2" v-if="slide === 2">
        <projet-slide :list="list" />
      </projet-carrousel>
    </transition-group>
  </main>
</template>

<script>
import projetSlide from "~/components/projet/projetSlide.vue";
import { reveal } from "@/store/function";
export default {
  head() {
    return {
      title: `Gg Web Dev - ${
        this.$i18n.locale === "fr" ? "Mes projets" : "My works"
      }`,
    };
  },
  nuxtI18n: {
    paths: {
      en: "/works",
      fr: "/projetsNew",
    },
  },
  components: { projetSlide },
  data() {
    return {
      slide: 1,
      list: [],
      slideDirection: "slide-rotate-right",
      reload: 10,
      touchBeg: 0,
      windowSize: 0,
      swipeReload: 0,
    };
  },
  mounted() {
    reveal();
    this.projectsList(0, 4);
    window.addEventListener("resize", (event) => {
      this.windowSize = window.innerWidth;
      this.heightBlock();
    });
    if (this.windowSize < 700) {
      setInterval(() => {
        this.swipeReload++;
      }, 5000);
    }
    this.goLeft();
  },
  methods: {
    heightBlock() {
      if (process.browser && window.innerWidth > 1040) {
        return "700";
      }
      if (
        process.browser &&
        window.innerWidth < 1040 &&
        window.innerWidth >= 700
      ) {
        return "850";
      }
      if (process.browser && window.innerWidth < 700) {
        return "1100";
        /* switch (this.list.length) {
          case 4:
            return "950";
            break;

          case 2:
            return "475";
            break;
        } */
      }
    },
    startDrag($event) {
      this.touchBeg = $event.changedTouches[0].clientX;
    },
    endDrag($event) {
      const touchLength = $event.changedTouches[0].clientX - this.touchBeg;
      if (
        $event.changedTouches[0].clientX > this.touchBeg &&
        touchLength > 20
      ) {
        return this.goRight();
      }
      if (
        $event.changedTouches[0].clientX < this.touchBeg &&
        touchLength < -20
      ) {
        return this.goLeft();
      }
    },
    pageNumber() {
      let page;
      Number.isInteger(this.$t("projects").length / 4)
        ? (page = this.$t("projects").length / 4)
        : (page = Number.parseInt(this.$t("projects").length / 4) + 1);
      return page;
    },
    projectsList() {
      if (this.slide === 0) {
        return (this.list = this.$t("projects").slice(0, 4));
      }
      if (this.slide === 1) {
        return (this.list = this.$t("projects").slice(4, 8));
      }
      if (this.slide === 2) {
        return (this.list = this.$t("projects").slice(8, 10));
      }
    },
    goRight() {
      const r = document.querySelector(":root");
      r.style.setProperty("--direction", "180deg");
      r.style.setProperty("--launcherStart", "launchLogoRight");
      this.slide >= this.pageNumber() - 1 ? (this.slide = 0) : this.slide++;
      this.projectsList();
      this.slideDirection = "slide-rotate-right";
      this.reload++;
    },
    goLeft() {
      const r = document.querySelector(":root");
      r.style.setProperty("--direction", "-180deg");
      r.style.setProperty("--launcherStart", "launchLogoLeft");
      this.slide <= 0 ? (this.slide = 2) : this.slide--;
      this.projectsList();
      this.slideDirection = "slide-rotate-left";
      this.reload++;
    },
  },
};
</script>

<style lang="scss"></style>
