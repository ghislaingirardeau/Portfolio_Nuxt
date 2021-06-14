<template>
    <div class="detailProject">
        <navBar />
        <Goback />
        <h1>{{detailProject.name}}</h1>
        <p>Description du projet et objectifs: {{detailProject.description}}</p>
        <p>Les technologies utilisées : {{detailProject.tech}}</p>
    </div>
</template>

<script>
import projects from '@/store/projects.js'

export default {
    data() {
        return{
            id : this.$route.params.id,
            project: projects.projects,
            detailProject: {}
        }
    },
    mounted () {
        this.detailProject = this.project.find(element => element.id === this.id)
    },   
}
</script>
