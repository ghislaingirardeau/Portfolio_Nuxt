<template>
    <nav class="navBar">
        <NuxtLink :to="{ name: 'index'}">Accueil</NuxtLink> |
        <NuxtLink :to="{ name: 'projets'}">projets</NuxtLink> |
        <NuxtLink :to="{ name: 'cv'}">CV</NuxtLink> |
        <NuxtLink :to="{ name: 'contact'}">contact</NuxtLink> |
    </nav>
</template>