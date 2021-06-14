<template>
    <main>
        <navBar />
        <h1>Projets</h1>
        <div >
            <NuxtLink v-for="item in project" :key="item.id" :to="{ name: 'projet-id', params: {id: item.id}}">{{item.name}}</NuxtLink>
        </div>

     
    </main>
    
</template>

<script>
import projects from '@/store/projects.js'

export default {
    data() {
        return{
            project: projects.projects
        }
    },
    
}
</script>




