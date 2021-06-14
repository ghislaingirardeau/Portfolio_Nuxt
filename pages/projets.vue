<template>
    <main>
        <navBar />
        <h1>Projets</h1>
        <div >
            <NuxtLink v-for="item in projet" :key="item.id" :to="{ name: 'detail-id', params: {id: item.id}}">{{item.name}}</NuxtLink>
        </div>

     
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




