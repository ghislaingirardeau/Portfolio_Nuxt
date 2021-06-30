<template>
    
    <main class="head__page page__cv">

        <h1>Mon CV</h1>
     
        <transition name="cv--animation" appear> 
            <div class="cv--layout">
                <img :src="require(`~/assets/images/CV_developpeur_web.jpg`)" alt="cv developpeur web">
            </div>
        </transition>
    </main>
    
</template>