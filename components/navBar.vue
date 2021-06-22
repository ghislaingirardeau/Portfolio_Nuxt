<template>

    <header class="header">
        <div class="header__logo wrap" >
	        <div class="cube" @click="spinLogo" :key="componentKey">
		        <div class="front">g</div>
		        <div class="back">dev</div>
		        <div class="top"></div>
		        <div class="bottom"></div>
		        <div class="left">G</div>
		        <div class="right">web</div>
	        </div>
        </div>
        <nav class="header__navBar" @click="spinLogo" :key="componentKey">
            <NuxtLink :to="{ name: 'index'}" class="header__navBar--font" >Accueil</NuxtLink> 
            <NuxtLink :to="{ name: 'projets'}" class="header__navBar--font" >Mes projets</NuxtLink> 
            <NuxtLink :to="{ name: 'about'}" class="header__navBar--font" >A propos de moi</NuxtLink> 
            <!-- <NuxtLink :to="{ name: 'test'}" class="header__navBar--font">test</NuxtLink>  -->
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
        }
    },
    methods: {
        spinLogo: function() {
            
            let cube = document.querySelector(".cube")
            let time = 1 + Math.floor( Math.random()* 10) + 's'
            cube.setAttribute("style",`animation: spin ${time} linear;`);
            console.log(cube)
            return this.componentKey += 1 /* pour faire un re-render du cube */
        }
    },
    /* mounted() {
        let cube = document.querySelector(".cube")        
        cube.setAttribute("style",`animation: spin 6s linear;`);
        console.log(cube)
        

    } */
}
</script>
