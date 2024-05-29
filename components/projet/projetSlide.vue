<template>
  <div class="projects_carousel_slide">
    <NuxtLink
      v-for="(item, index) in listsOfProject"
      :key="item.id"
      class="projects_carousel_slide--link"
      :class="{ [`${animDirection}-${index}`]: true }"
      :to="localePath({ name: 'projet-id', params: { id: item.id } })"
    >
      <article>
        <h2>{{ item.name }}</h2>
        <p>{{ item.summary }}</p>
        <p class="projects_text-underline">
          {{ $t("projectsPage.dateCreation") }}: {{ item.date }}
          {{ item.imageURL ? item.imageURL[0] : "" }}
        </p>
        <!-- <img
          :src="
            item.imageURL
              ? require(`~/assets/images/${item.imageURL[0]}`)
              : null
          "
          :alt="item.name"
          class="projects_carousel_slide_image"
        /> -->
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
};
</script>

<style lang="css" scoped></style>
