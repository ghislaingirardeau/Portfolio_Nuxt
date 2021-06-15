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
      interval: ''
      }
    },
    computed: {
      date() {
        let dateFormat = "Le " + this.time.getDate() + "/" + (this.time.getMonth() + 1) + "/" + this.time.getFullYear()
        
        return dateFormat 
      },
    
      
    },
    
    mounted() {
        const self = this /* creer une contanste self pour se referer a la variable du store */
        this.test = setInterval(function() { /* this.test refére a window.test qui est une variable temporaire */
          let timeDate = new Date()
          self.interval = " Il est " + timeDate.getHours() + "h" + timeDate.getMinutes() + "m" + timeDate.getSeconds() 
              
         }, 1000);
      
    }
}
</script>

<style>

</style>
