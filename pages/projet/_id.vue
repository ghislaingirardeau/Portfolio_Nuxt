<template>
    <main class="head__page detail_project">
        <div class="block_projet">
            
            <h1>{{detailProject.name}}</h1>
                <h2>Description du projet et objectifs :</h2>
                <p> {{detailProject.description}}</p>

                <h2>Les technologies utilisées :</h2>
                <p> {{detailProject.tech}}</p>

                <h2>Galerie du projet :</h2>
              
                <div>
                    <img :src="imageUrl" :alt="detailProject.name">
                </div>

            <Goback />
            
        </div>

        <aside class="autres_projets">
            <h2>Ma liste de projets</h2>
            <ul v-for="item in relatedProject" :key="item.id">
                <li><NuxtLink :to="{ name: 'projet-id', params: {id: item.id}}" class="liste--orange">{{item.name}} </NuxtLink></li>
            </ul>
        </aside>
    </main>
</template>

<script>
import projects from '@/store/projects.js'

export default {
    data() {
        return{
            id : this.$route.params.id,
            project: projects.projects,
            detailProject: {},
            relatedProject: [],
            imageUrl: ''
        }
    },
    mounted () {
        this.detailProject = this.project.find(element => element.id === this.id)
        this.relatedProject = this.project.filter(element => element.id != this.id)

        const filename = this.detailProject.imageURL
        this.imageUrl = require(`~/assets/images/${filename}`);
    },
    computed: {
        
    }
}
</script>
