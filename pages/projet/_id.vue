<template>
  <main class="detail_project">
    <transition name="opacity" appear>
      <div class="block_projet">
        <h1>{{ detailProject.name }}</h1>
        <h2>{{ detailProject.summary }}</h2>
        <p v-html="detailProject.description"></p>
        <button v-if="detailProject.link" class="btn__link">
          <a :href="detailProject.link" target="_blank"
            >Lien vers {{ detailProject.name }}</a
          >
        </button>

        <h2>{{ $t("projectsIdPage.tech") }}</h2>
        <p>{{ detailProject.tech }}</p>

        <h2>{{ $t("projectsIdPage.gallery") }}</h2>

        <div v-if="detailProject.loader" class="block_projet--loader">
          <p>{{ $t("projectsIdPage.loader") }}</p>
          <loaderOhmyfood />
        </div>

        <video
          v-if="detailProject.video"
          controls
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
          width="300"
        >
          <source
            :src="require(`~/assets/images/${detailProject.video}`)"
            type="video/mp4"
          />
        </video>

        <carousel
          v-if="detailProject.imageURL"
          :ImageCount="slides.length"
          :ImageArray="slides"
        >
          <!-- envoie le nombre d'image en props -->
          <carousel-slide
            v-for="(item, i) in slides"
            :key="item.id"
            :numImg="i"
          >
            <!-- envoie index de l'image a afficher en props -->
            <div class="carousel_slide">
              <img
                :src="require(`~/assets/images/${item}`)"
                :alt="detailProject.name"
                class="carousel--img"
              />
            </div>

            <!-- passe la src en dynamique avec item defined -->
          </carousel-slide>
        </carousel>

        <Goback />
      </div>
    </transition>

    <aside class="autres_projets">
      <h2>{{ $t("projectsIdPage.other") }}</h2>
      <ul>
        <transition-group
          class="autres_projets--liste"
          name="slide-fade"
          tag="article"
          appear
        >
          <li
            v-for="(item, l) in relatedProject"
            :key="item.id"
            :style="{ '--i': l }"
          >
            <NuxtLink
              :to="localePath({ name: 'projet-id', params: { id: item.id } })"
              class="liste--orange"
              >{{ item.name }}
            </NuxtLink>
          </li>
        </transition-group>
      </ul>
    </aside>
  </main>
</template>

<script>
import carousel from "@/components/carousel/carousel";
import carouselSlide from "@/components/carousel/carouselSlide";

export default {
  data() {
    return {
      id: this.$route.params.id,
      detailProject: {},
      relatedProject: [],
      imageUrl: "" /* si on passe directement url dans le mounted */,
      slides: [],
      metaTitle: "Gg Web Dev - ",
    };
  },
  head() {
    return {
      title: `Gg Web Dev - ${this.detailProject.name}`,
    };
  },
  nuxtI18n: {
    paths: {
      en: "/works/:id",
      fr: "/projets/:id",
    },
  },
  mounted() {
    this.detailProject = this.$t("projects").find(
      (element) => element.id === this.id
    );
    this.relatedProject = this.$t("projects").filter(
      (element) => element.id != this.id
    );
    this.slides =
      this.detailProject.imageURL; /* recupere aussi le tableau d'images */
    /* const filename = this.detailProject.imageURL
        this.imageUrl = require(`~/assets/images/${filename}`); */
  },
  components: {
    carousel,
    carouselSlide,
  },
  methods: {},
};
</script>
