<template>
  <main
    class="carroussel_block"
    @touchstart="startDrag($event)"
    @touchend="endDrag($event)"
  >
    <h1>{{ $t("projectsPage.title") }}</h1>
    <p class="text_clickOn">{{ $t("projectsPage.description") }}</p>
    <div class="swipe--text">
      <span> &lt;--- swipe ---&gt;</span>
    </div>

    <projet-carrousel>
      <transition name="fade-button-slide">
        <button
          @click="moveSlide($event, null, 'right')"
          v-if="slide != 2"
          class="carrousel-ctrl-right"
        >
          &gt;
        </button>
      </transition>

      <transition name="fade-button-slide">
        <button
          @click="moveSlide($event, null, 'left')"
          v-if="slide != 0"
          class="carrousel-ctrl-left"
          :style="{ visibility: buttonLeftIsVisible }"
        >
          &lt;
        </button>
      </transition>
      <!-- <transition :name="slideDirection"> -->
      <projet-slide
        :listsOfProject="listsOfProject"
        :animDirection="slideDirection"
        v-if="slide === 0"
      />
      <projet-slide
        :listsOfProject="listsOfProject"
        :animDirection="slideDirection"
        v-if="slide === 1"
      />
      <projet-slide
        :listsOfProject="listsOfProject"
        :animDirection="slideDirection"
        v-if="slide === 2"
      />
      <!-- </transition> -->
    </projet-carrousel>

    <div class="btn__index btn__index--media">
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
      slide: 0,
      listsOfProject: [],
      slideDirection: "slide-translate-right",
      touchBeg: 0,
      windowSize: 0,
      buttonLeftIsVisible: "hidden",
    };
  },
  mounted() {
    reveal();
    this.projectsList(0, 4);
  },
  methods: {
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
    moveSlide($event, index = null, direction = null) {
      // animation pour la sortie du slide
      const projectsFade = [{ opacity: 1 }, { opacity: 0 }];

      const projectsFadeTiming = {
        duration: 200,
        iterations: 1,
      };
      document
        .querySelector(".projet_carrousel_slide")
        .animate(projectsFade, projectsFadeTiming)
        .addEventListener("finish", (event) => {
          // quand animation de la sortie du slide est fini
          // execute l'animation d'entrée du slide
          direction === "right" ? this.goRight(index) : this.goLeft(index);
          this.projectsList();
        });
    },
    goRight(index = null) {
      this.slide >= this.pageNumber() - 1 ? (this.slide = 0) : this.slide++;
      index ? (this.slide = index) : "";
      this.slideDirection = "slide-translate-right";
      this.buttonLeftIsVisible = false;
    },
    goLeft(e, index = null) {
      this.slide <= 0 ? (this.slide = 2) : this.slide--;
      index || index === 0 ? (this.slide = index) : "";
      this.projectsList();
      this.slideDirection = "slide-translate-left";
    },
    goToProjects(index) {
      // pour les boutons de navigation, va à la slide (index) correspondante
      index > this.slide
        ? this.moveSlide("_", index, "right")
        : this.moveSlide("_", index, "left");
    },
  },
};
</script>

<style lang="css"></style>
