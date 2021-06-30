<template>
  <main class="container head__page" >

    <article class="block__presentation" :key="render">
            
      <div class="block__valeur" >
        <h1>
          <p class="block__valeur--animation1">Respect & Humilité,</p>
          <p class="block__valeur--animation2">Ouvert & Communicatif, </p>
          <p class="block__valeur--animation3">Responsable & Autonome,</p>

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
      render: 0,
    }
  },
  mounted() {
    setInterval(() =>{
      this.render++
    }, 15000)
  }
}
</script>