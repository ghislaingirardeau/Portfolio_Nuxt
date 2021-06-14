<template>
    <div class="detailProjet">
        <h1>{{detailProjet.name}}</h1>
        <p>Description du projet et objectifs: {{detailProjet.description}}</p>
        <p>Les technologies utilisées : {{detailProjet.tech}}</p>

    </div>
</template>

<script>
import projets from '@/store/projets.js'

export default {
    data() {
        return{
            id : this.$route.params.id,
            projet: projets.projets,
            detailProjet: {}
        }
    },
    mounted () {
        this.detailProjet = this.projet.find(element => element.id === this.id)
    },   
}
</script>
