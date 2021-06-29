<template>
    
    <main class="head__page page__cv">

        <h1>Mon CV</h1>
     
        <transition name="opacity" appear> 
            <img :src="require(`~/assets/images/CV_developpeur_web.jpg`)" alt="cv developpeur web">
        </transition>
    </main>
    
</template>