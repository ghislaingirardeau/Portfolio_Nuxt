<template>
    <main class="head__page detail_project">
        <div class="block_projet">
            
            <h1>{{detailProject.name}}</h1>
                <h2>Description du projet et objectifs :</h2>
                <p> {{detailProject.description}}</p>

                <h2>Les technologies utilisées :</h2>
                <p> {{detailProject.tech}}</p>

                <h2>Galerie du projet :</h2>
                           
                <carousel :ImageCount="slides.length" :ImageArray="slides"> <!-- envoie le nombre d'image en props -->
                    <carousel-slide v-for="(item,i) in slides" :key="item.id" :numImg="i"> <!-- envoie index de l'image a afficher en props -->
                        <img :src="require(`~/assets/images/${item}`)" :alt="detailProject.name" class="carousel--img"> <!-- passe la src en dynamique avec item defined -->
                    </carousel-slide>
                </carousel>      
            <Goback />     
        </div>

        <aside class="autres_projets">
            <h2>Mes autres projets</h2>
            <ul >
                <li v-for="item in relatedProject" :key="item.id"><NuxtLink :to="{ name: 'projet-id', params: {id: item.id}}" class="liste--orange">{{item.name}} </NuxtLink></li>
            </ul>
        </aside>
        
        
    </main>
</template>

<script>
import projects from '@/store/projects.js'
import carousel from '@/components/carousel/carousel'
import carouselSlide from '@/components/carousel/carouselSlide'

export default {
    data() {
        return{
            id : this.$route.params.id,
            project: projects.projects,
            detailProject: {},
            relatedProject: [],
            imageUrl: '', /* si on passe directement url dans le mounted */
            slides: [],
        }
    },
    mounted () {
        this.detailProject = this.project.find(element => element.id === this.id)
        this.relatedProject = this.project.filter(element => element.id != this.id)
        this.slides = this.detailProject.imageURL /* recupere aussi le tableau d'images */
        /* const filename = this.detailProject.imageURL
        this.imageUrl = require(`~/assets/images/${filename}`); */
    },
    components: {
        carousel,
        carouselSlide
    }
}
</script>
