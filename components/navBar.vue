<template>

    <header class="header">
        <div class="header__logo">
            <p>logo</p>
        </div>
        <nav class="header__navBar">
            <NuxtLink :to="{ name: 'index'}" class="header__navBar--font">Accueil</NuxtLink> 
            <NuxtLink :to="{ name: 'projets'}" class="header__navBar--font">projets</NuxtLink> 
            <NuxtLink :to="{ name: 'cv'}" class="header__navBar--font">CV</NuxtLink> 
            <NuxtLink :to="{ name: 'contact'}" class="header__navBar--font">contact</NuxtLink> 
        </nav>
    </header>
    
</template>