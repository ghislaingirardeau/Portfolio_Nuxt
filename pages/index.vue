<template>
  <div class="container">

    <h1>Venez découvrir mes créations</h1>
    {{date}}{{interval}}
  
    
  </div>
</template>

<script>


export default {
    data() {
      return {
      time: new Date(),
      second: 0,
      interval: 0
      }
    },
    computed: {
      date() {
        let dateFormat = "Le " + this.time.getDate() + "/" + (this.time.getMonth() + 1) + "/" + this.time.getFullYear()
        let timeFormat = "Il est " + this.time.getHours() + "h" + this.time.getMinutes() + "m"
        return dateFormat + " " + timeFormat
      },
    
      
    },
    
    mounted() {
        const self = this
        this.second = setInterval(function() {
              self.interval++
         }, 1000);
      
    }
}
</script>

<style>

</style>
