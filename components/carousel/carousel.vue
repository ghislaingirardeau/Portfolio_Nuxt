<template>
  <div class="carousel">
    <slot></slot>
    <button
      @click.prevent="previousSlide"
      class="btn__slide btn__slide--prev"
      v-show="ImageArray.length > 1"
    >
      &lt;
    </button>
    <button
      @click.prevent="nextSlide"
      class="btn__slide btn__slide--next"
      v-show="ImageArray.length > 1"
    >
      &gt;
    </button>

    <div class="btn__index" v-show="ImageArray.length > 1">
      <button
        v-for="(i, l) in ImageArray"
        :key="i"
        @click.prevent="indexSlide(l)"
        :class="{ active: l === index }"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      direction: null,
    };
  },
  props: {
    /* recupere le tableau de data de _id.vue et ainsi ma longueur d'image dans le tableau */
    ImageArray: Array,
  },

  methods: {
    nextSlide() {
      /* etape 3: faire varier les index de slide au clic */
      if (this.index === this.ImageArray.length - 1) {
        this.index = -1;
      }
      this.direction = "right";
      this.index++;
    },
    previousSlide() {
      if (this.index === 0) {
        this.index = this.ImageArray.length;
      }
      this.direction = "left";
      this.index--;
    },
    indexSlide(i) {
      /* changer la direction de l'animation suivant la pagination */
      if (i > this.index) {
        this.direction = "right";
      } else if (i < this.index) {
        this.direction = "left";
      }
      this.index = i;
    },
  },
};
</script>


