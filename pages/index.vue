<template>
  <main class="container" >

    <article class="block__presentation" :key="render">
            
      <div class="block__cible" >
          <article class="block__cible__service">
            <h2>Mes services</h2>
            <p class="block__cible--font">Envie de vous lancez dans un projet digital web... <br>
            Mais vous ne savez pas, par oú commencer ?<br>
            Retrouver le détail de l'accompagnement je peux vous proposer ! 
            </p>
          </article>

          <article class="block__cible__projet">
            <h2>Mes projets</h2>
            <p class="block__cible--font">Vous êtes déja initié au technologie du web... <br>
            Et vous souhaitez en savoir plus sur mes compétences et mes réalisations ?<br>
            Découvrez les technologies que je maitrise et les projets sur lesquels j'ai travaillé ! 
            </p>
          </article>
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