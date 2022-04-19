<template>
  <main class="container" >

    <article class="block__presentation" :key="render">
            
      <div class="block__cible" >
          <article class="block__cible__service">
            <h2>{{$t('index.offer.hService')}}</h2>
            <p class="block__cible--font" v-html="$t('index.offer.textService')">
            </p>
          </article>

          <article class="block__cible__projet">
            <h2>{{$t('index.offer.hWork')}}</h2>
            <p class="block__cible--font" v-html="$t('index.offer.textWork')">
            </p>
          </article>
      </div>
      
      <div class="block__moi">
        <h1>
          <span class="block__moi--animation1" :title-value1="$t('index.me.p1')"></span> <br>
          <span class="block__moi--animation2" :title-value2="$t('index.me.p2')"></span><br>
          <span class="block__moi--animation3" :title-value3="$t('index.me.p3')"></span>
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
    }, 35000)
  }
}
</script>