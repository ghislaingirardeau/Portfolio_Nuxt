<template>
  <main class="container head__page" >

    <article class="block__presentation" v-show="show">
            
      <div class="block__valeur" :key="render">
        <h1 class="">
          Respect et Humilité, <br> 
          Ouvert et Communicatif, <br>
          Responsable et Autonome, <br>
        </h1>
      </div>
      <div class="block__moi">
        <h1>
          <p class="block__moi--animation1">Bonjour,</p>
          <p class="block__moi--animation2">je suis Ghislain,</p>
          <p class="block__moi--animation3">Développeur web</p>
        </h1>
      </div>
     
    </article>
  </main>
</template>

<script>

export default {
  data() {
    return{
      show: true,
      render: 0
    }
  },
  mounted() {
    setInterval(() =>{
      this.render++
    }, 5000)
  }
}
</script>