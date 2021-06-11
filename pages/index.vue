<template>
  <main class="container">
    <navBar />
    <div>
      <Logo />
      <h1 class="title">
        portofolio
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import navBar from '@/components/navBar'
export default {
  components: {
    navBar
  }
}
</script>

<style>

</style>
