<template>
  <div class="page__projet--layout">
    <NuxtLink
      v-for="(item, index) in listsOfProject"
      :key="item.id"
      class="page__projet--link btn--projets"
      :class="{ [`${animDirection}-${index}`]: true }"
      :to="localePath({ name: 'projet-id', params: { id: item.id } })"
    >
      <article>
        <h2>{{ item.name }}</h2>
        <p>{{ item.summary }}</p>
        <p class="date--text">
          {{ $t("projectsPage.dateCreation") }}: {{ item.date }}
        </p>
      </article>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    listsOfProject: {
      type: Array,
      default: () => [],
    },
    animDirection: {
      type: String,
    },
  },
  mounted() {
    console.log(this.animDirection);
  },
};
</script>

<style lang="css" scoped></style>
