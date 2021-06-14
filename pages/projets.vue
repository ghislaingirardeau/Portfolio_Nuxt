<template>
    <main>
        <navBar />
        <h1>Projets</h1>
        <ul v-for="item in project" :key="item.id">
            <li><NuxtLink  :to="{ name: 'projet-id', params: {id: item.id}}">{{uppercase(item.name)}}</NuxtLink></li>
        </ul>

     
    </main>
    
</template>

<script>
import projects from '@/store/projects.js'
import { uppercase } from '@/store/function.js'

export default {
    head() {
        return {
            title : "Portofolio: Mes projets"
        }
    },
    data() {
        return{
            project: projects.projects
        }
    },
    methods: {
        uppercase
    }
    
}
</script>




