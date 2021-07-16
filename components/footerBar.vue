<template>

    <footer >
        <div class="footer__layout">
            
            <ul>{{$t('footer.title')}}
                <li><a href="https://www.linkedin.com/in/ghislain-girardeau-a879b2201/" target="_blank">Linkedin profil</a> </li>
                <li><a href="https://www.malt.fr/profile/ghislaingirardeau" target="_blank">Malt profil</a></li>
                <li class="email">{{$t('footer.contact')}} <a href="mailto:g.girardeaupro@sfr.fr">g.girardeaupro@sfr.fr</a></li>
                <li class="date">{{$t('date.day')}} {{date}}{{$t('date.time')}}{{interval}}</li>
            </ul>

        </div>
        
    </footer>
    
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
      this.date = this.time.getDate() + "/" + (this.time.getMonth() + 1) + "/" + this.time.getFullYear()
      this.test = setInterval(() => { /* this.test refére a window.test qui est une variable temporaire */
      let timeDate = new Date()
      this.interval = timeDate.getHours() + "h" + timeDate.getMinutes() + "m" + timeDate.getSeconds() 
      }, 1000);
  }
}
</script>