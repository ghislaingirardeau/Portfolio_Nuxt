<template>
  <main class="container head__page" >
    <article class="block__presentation" v-show="show">
            
      <div class="block__valeur">
        <h1 class="">
          Respect et Humilité, <br> 
          Ouvert et Communicatif, <br>
          Responsable et Autonome, <br>
        </h1>
      </div>
      <div class="block__moi">
        <h1 class="">
          Bonjour,<br> 
          je suis Ghislain,<br>
          Développeur web
        </h1>
      </div>
      
    </article>
  </main>
</template>

<script>

export default {
  data() {
    return{
      show: false
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.show = true
    }, 2000)
  }
}
</script>