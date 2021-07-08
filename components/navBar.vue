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
            <NuxtLink :to="localePath('index')" class="header__navBar--font" >Accueil</NuxtLink> 
            <NuxtLink :to="localePath('projets')" class="header__navBar--font" >Mes projets</NuxtLink>
            <NuxtLink :to="localePath('service')" class="header__navBar--font" >Mes services</NuxtLink> 
            <NuxtLink :to="localePath('about')" class="header__navBar--font" >A propos de moi</NuxtLink>
            
            <!-- <NuxtLink :to="{ name: 'CV'}" class="header__navBar--font" >Mon CV</NuxtLink> --> 
        </nav>
        
    </header>
    
</template>

<style>

</style>

<script>

export default {
    data() {
        return{
            componentKey: 0, /* pour faire un re-render du cube avec :key */
            animCube: 'spin 7s 1.7s linear', /* anime par default au load */
        }
    },
    methods: {
        spinLogo() {
            let time = 2 + Math.floor( Math.random()* 10) + 's'
            this.animCube = 'spin ' + time + ' linear ' 
            this.componentKey += 1 /* pour faire un re-render du cube */
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
