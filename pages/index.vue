<template>
  <div class="container head__page">
    <div class="block__presentation">
      <h1 class="block__moi">
          Bonjour,<br> 
          je suis Ghislain,<br>
          Développeur web
      </h1>
      <div class="block__valeur">
      <h1 class="">
          Valeur responsable, <br> 
          Valeur responsable, <br>
          Valeur responsable, <br>

      </h1>
    </div>
    </div>
    
    

    <div class="date">{{date}}{{interval}}</div>
  
    
  </div>
</template>

<script>


export default {
  data() {
    return {
    time: new Date(),
    interval: '',
    date: ''
    }
  },
  mounted() {
      this.date = "Le " + this.time.getDate() + "/" + (this.time.getMonth() + 1) + "/" + this.time.getFullYear()
      this.test = setInterval(() => { /* this.test refére a window.test qui est une variable temporaire */
        let timeDate = new Date()
        this.interval = " Il est " + timeDate.getHours() + "h" + timeDate.getMinutes() + "m" + timeDate.getSeconds() 
      }, 1000);
  }
}
</script>

<style>

</style>
