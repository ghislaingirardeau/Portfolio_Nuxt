<template>
  <transition :name="animation">
    <div v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
  props: {
    numImg: Number,
  },
  computed: {
    animation() {
      /* pour donner la direction de l'amim (recup la direction du parent) */
      return "slide-" + this.$parent.direction;
    },
    visible() {
      /* Etapes 2: je rends l'element visible si l'index du slide correspond a celui du parent carousel */
      return this.numImg === this.$parent.index;
    },
  },
};
</script>
