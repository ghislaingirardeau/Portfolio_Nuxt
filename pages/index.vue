<template>
  <main class="container">
    <article class="block__presentation">
      <div class="block__cible">
        <article class="block__cible__service" @click="goToRoute('service')">
          <h2>{{ $t("index.offer.hService") }}</h2>
          <p
            class="block__cible--font"
            v-html="$t('index.offer.textService')"
          ></p>
        </article>

        <article class="block__cible__projet" @click="goToRoute('proNew')">
          <h2>{{ $t("index.offer.hWork") }}</h2>
          <p class="block__cible--font" v-html="$t('index.offer.textWork')"></p>
        </article>
      </div>

      <div class="block__moi" :key="reloadMe">
        <h1 v-if="$i18n.locale === 'en'">
          <span class="block__moi--animation-en1"></span>
          <br />
          <span class="block__moi--animation-en2"></span><br />
          <span class="block__moi--animation-en3"></span>
        </h1>
        <h1 v-else>
          <span class="block__moi--animation-fr1"></span>
          <br />
          <span class="block__moi--animation-fr2"></span><br />
          <span class="block__moi--animation-fr3"></span>
        </h1>
      </div>
        
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      render: 0,
      reloadMe: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.reloadMe++;
    }, 15000);
  },
  methods: {
    goToRoute(uri) {
      this.$router.push(this.localePath({ name: uri }));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 500px;
}
</style>
