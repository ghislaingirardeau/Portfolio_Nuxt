<template>
  <main class="container">
    <navBar />

    <h1>Présentation</h1>
    <p>{{presentation}}</p>
    
  </main>
</template>

<script>
import moi from '@/store/moi.js'

export default {
    data() {
      return {
        presentation : moi.presentation
      }
    }
}
</script>

<style>

</style>
