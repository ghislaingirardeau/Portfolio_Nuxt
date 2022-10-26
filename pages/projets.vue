<template>
  <main class="page__projet head__page">
    <h1 class="reveal-0">{{ $t("projectsPage.title") }}</h1>
    <p class="reveal-1">{{ $t("projectsPage.description") }}</p>
    <div>
      <transition-group
        class="page__projet--layout"
        name="slide-fade"
        tag="article"
        appear
      >
        <NuxtLink
          v-for="(item, l) in $t('projects')"
          :key="item.id"
          :style="{ '--i': l / 5 + 's' }"
          class="page__projet--link btn--projets"
          :to="localePath({ name: 'projet-id', params: { id: item.id } })"
        >
          <article>
            <h2>{{ uppercase(item.name) }}</h2>
            <p>{{ item.summary }}</p>
            <p class="date--text">Date de réalisation: {{ item.date }}</p>
          </article>
        </NuxtLink>
      </transition-group>
    </div>
  </main>
</template>

<script>
import { uppercase, reveal } from "@/store/function.js";

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
      fr: "/projets",
    },
  },
  data() {
    return {};
  },

  methods: {
    uppercase,
  },
  mounted() {
    reveal();
  },
};
</script>
