<template>
  <main
    class="carroussel_block"
    :key="windowSize"
    :style="{ height: heightBlock() + 'px' }"
    @touchstart="startDrag($event)"
    @touchend="endDrag($event)"
  >
    <h1>{{ $t("projectsPage.title") }}</h1>
    <p class="text_clickOn">{{ $t("projectsPage.description") }}</p>
    <span :key="reload" class="element_fixed"></span>
    <span :key="reload + 1" class="element_fixed2"></span>
    <div class="swipe--text">
      <span> &lt;--- swipe ---&gt;</span>
    </div>

    <!-- <div :key="swipeReload" class="swipe_element"></div> -->
    <transition name="fade-button-slide">
      <button
        @click="goRight"
        v-if="slide != 2"
        class="btn__goback carrousel-ctrl-right"
      >
        &gt;
      </button>
    </transition>

    <transition name="fade-button-slide">
      <button
        @click="goLeft"
        v-if="slide != 0"
        class="btn__goback carrousel-ctrl-left"
      >
        &lt;
      </button>
    </transition>

    <transition-group :name="slideDirection" tag="article">
      <projet-carrousel key="0" v-if="slide === 0">
        <projet-slide :listsOfProject="listsOfProject" />
      </projet-carrousel>
      <projet-carrousel key="1" v-if="slide === 1">
        <projet-slide :listsOfProject="listsOfProject" />
      </projet-carrousel>
      <projet-carrousel key="2" v-if="slide === 2">
        <projet-slide :listsOfProject="listsOfProject" />
      </projet-carrousel>
    </transition-group>
    <div class="btn__index">
      <button
        v-for="i in pageNumber()"
        :key="i"
        @click.prevent="goToProjects(i - 1)"
        :class="{ active: i - 1 === slide }"
      ></button>
    </div>
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
      en: "/myWorks",
      fr: "/MesApps",
    },
  },
  components: { projetSlide },
  data() {
    return {
      slide: 1,
      listsOfProject: [],
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
        /* switch (this.listsOfProject.length) {
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
        touchLength > 90
      ) {
        return this.goRight();
      }
      if (
        $event.changedTouches[0].clientX < this.touchBeg &&
        touchLength < -90
      ) {
        return this.goLeft();
      }
    },
    pageNumber() {
      return Math.ceil(this.$t("projects").length / 4);
    },
    projectsList() {
      if (this.slide === 0) {
        return (this.listsOfProject = this.$t("projects").slice(0, 4));
      }
      if (this.slide === 1) {
        return (this.listsOfProject = this.$t("projects").slice(4, 8));
      }
      if (this.slide === 2) {
        return (this.listsOfProject = this.$t("projects").slice(8, 12));
      }
    },
    goRight(index) {
      const r = document.querySelector(":root");
      r.style.setProperty("--direction", "180deg");
      r.style.setProperty("--launcherStart", "launchLogoRight");
      this.slide >= this.pageNumber() - 1 ? (this.slide = 0) : this.slide++;
      index ? (this.slide = index) : null;
      this.projectsList();
      this.slideDirection = "slide-rotate-right";
      this.reload++;
    },
    goLeft(index) {
      const r = document.querySelector(":root");
      r.style.setProperty("--direction", "-180deg");
      r.style.setProperty("--launcherStart", "launchLogoLeft");
      this.slide <= 0 ? (this.slide = 2) : this.slide--;
      index || index === 0 ? (this.slide = index) : null;
      this.projectsList();
      this.slideDirection = "slide-rotate-left";
      this.reload++;
    },
    goToProjects(index) {
      index > this.slide ? this.goRight(index) : this.goLeft(index);
    },
  },
};
</script>

<style lang="css"></style>
