<template>
    <main class="page__projet head__page">
        <h1>Découvrez la liste de mes projets</h1>
        <p>Cliquer sur un projet pour en savoir plus: technologies utilisées, objectifs attendus...</p>
        <div class="page__projet--layout">
                <NuxtLink v-for="item in project" :key="item.id" class="page__projet--link btn--projets" :to="{ name: 'projet-id', params: {id: item.id}}">
                    <article>
                        <img src="" alt="" class="page__projet--image">
                        <h2>{{item.name}}</h2>
                        <p>{{item.summary}}</p>
                    </article>
                </NuxtLink>
        </div>
    </main>
    
</template>

<script>
import projects from '@/store/projects.js'
import { uppercase } from '@/store/function.js'

export default {
    head() {
        return {
            title : "Portfolio: Mes projets"
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




