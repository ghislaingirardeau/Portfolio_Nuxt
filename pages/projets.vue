<template>
    <main>
        <navBar />
        <h1>Projets</h1>
        <ul v-for="item in project" :key="item.id">
            <li><NuxtLink  :to="{ name: 'projet-id', params: {id: item.id}}">{{item.name}}</NuxtLink></li>
        </ul>

     
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




