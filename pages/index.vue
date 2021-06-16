<template>
  <div class="container head__page">

    <h1 class="presentation">Bonjour, <br> 
        je suis Ghislain, <br>
        Développeur web
    </h1>

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
