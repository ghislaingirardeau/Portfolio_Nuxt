<template>

    <header class="header">
        <div class="header__logo wrap">
	        <div class="cube">
		        <div class="front">g</div>
		        <div class="back">dev</div>
		        <div class="top"></div>
		        <div class="bottom"></div>
		        <div class="left">G</div>
		        <div class="right">web</div>
	        </div>
        </div>
        <!-- <div class="header__logo">
            <div class="anim--g">g</div> <div class="header__logo--web">web</div> <div class="anim--G">G</div> 
        </div> -->
        <nav class="header__navBar">
            <NuxtLink :to="{ name: 'index'}" class="header__navBar--font">Accueil</NuxtLink> 
            <NuxtLink :to="{ name: 'projets'}" class="header__navBar--font">projets</NuxtLink> 
            <NuxtLink :to="{ name: 'cv'}" class="header__navBar--font">CV</NuxtLink> 
            <!-- <NuxtLink :to="{ name: 'test'}" class="header__navBar--font">test</NuxtLink>  -->
        </nav>
        
    </header>
    
</template>