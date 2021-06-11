<template>
    <main>
        <navBar />
        <h1>Projets</h1>
        <NuxtLink :to="{ name: 'projets', params: id}">Détail du projet</NuxtLink>

     
    </main>
    
</template>

<script>
import projets from '@/store/projets.js'

export default {
    data() {
        return{
            
            projet: projets.projets
        }
    },
    
}
</script>




