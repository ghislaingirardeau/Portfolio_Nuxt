<template>
  <div class="page__projet--layout">
    <NuxtLink
      v-for="item in list"
      :key="item.id"
      class="page__projet--link btn--projets"
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
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
