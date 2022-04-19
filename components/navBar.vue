<template>

    <header class="header">
        <div class="header__logo wrap" > <!-- envoie animation du cube en dynamique pour la modifier au clic -->
	        <div class="cube" @click="spinLogo" :key="componentKey" :style="{animation: animCube}">
		        <div class="front">g</div>
		        <div class="back">dev</div>
		        <div class="top"></div>
		        <div class="bottom"></div>
		        <div class="left">G</div>
		        <div class="right">web</div>
	        </div>
        </div>
        <nav class="header__navBar" @click="spinLogo" :key="componentKey">
            <NuxtLink :to="localePath('index')" class="header__navBar--font" >{{$t('navBar.index')}}</NuxtLink> 
            <NuxtLink :to="localePath('projets')" class="header__navBar--font" >{{$t('navBar.projects')}}</NuxtLink>
            <NuxtLink :to="localePath('service')" class="header__navBar--font" >{{$t('navBar.services')}}</NuxtLink> 
            <NuxtLink :to="localePath('about')" class="header__navBar--font" >{{$t('navBar.aboutMe')}}</NuxtLink>
            
        </nav>

        <div class="header__lang" @click="toogleShow" :key="lang">
            <nuxt-link class="toogleLang" :to="switchLocalePath(lang)" v-show="lang === 'en'">English</nuxt-link>
            <nuxt-link class="toogleLang" :to="switchLocalePath(lang)" v-show="lang === 'fr'">French</nuxt-link>
        </div>
        
        
    </header>
    
</template>

<style>

</style>

<script>

export default {
    data() {
        return{
            componentKey: 0, /* pour faire un re-render du cube avec :key */
            animCube: 'spin 7s .3s linear', /* anime par default au load */
            lang: "en"
        }
    },
    methods: {
        spinLogo() {
            let time = 2 + Math.floor( Math.random()* 10) + 's'
            this.animCube = 'spin ' + time + ' linear ' 
            this.componentKey += 1 /* pour faire un re-render du cube */
        },
        toogleShow() {
            let langChange = this.$i18n.localeCodes.find(element => element != this.lang);
            this.lang = langChange
        }
    },
    /* mounted() {
        setInterval(() =>{
          this.componentKey++
          this.animCube = 'spin 7s linear'
        }, 25000)
    } */
}
</script>
