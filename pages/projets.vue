<template>
    <main class="page__projet head__page">
        <h1 class="reveal-0">Découvrez la liste de mes projets</h1>
        <p class="reveal-1">Cliquer sur un projet pour en savoir plus: technologies utilisées, objectifs attendus...</p>
        <div >
            <transition-group class="page__projet--layout" name="slide-fade" tag="article" appear>
                <NuxtLink v-for="item,l in project" :key="item.id" :style="{'--i': l}" class="page__projet--link btn--projets" :to="localePath({ name: 'projet-id', params: {id: item.id}})">
                    <article>
                        <img src="" alt="" class="page__projet--image">
                        <h2>{{uppercase(item.name)}}</h2>
                        <p>{{item.summary}}</p>
                    </article>
                </NuxtLink>
            </transition-group>
        </div>
    </main>
    
</template>

<script>
import projects from '@/store/projects.js'
import { uppercase, reveal } from '@/store/function.js'

export default {
    data() {
        return{
            project: projects.projects
        }
    },
    methods: {
        uppercase
    },
    mounted() {
        reveal()
    }
    
}
</script>




