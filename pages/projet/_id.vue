<template>
    <div class="detailProject">
        <Goback />
        <h1>{{detailProject.name}}</h1>
        <p>Description du projet et objectifs: {{detailProject.description}}</p>
        <p>Les technologies utilisées : {{detailProject.tech}}</p>

        <aside class="autre_projet">
            <ul v-for="item in relatedProject" :key="item.id">
                <li><NuxtLink :to="{ name: 'projet-id', params: {id: item.id}}">{{item.name}}</NuxtLink></li>
            </ul>
        </aside>
    </div>
</template>

<script>
import projects from '@/store/projects.js'

export default {
    data() {
        return{
            id : this.$route.params.id,
            project: projects.projects,
            detailProject: {},
            relatedProject: []
        }
    },
    mounted () {
        this.detailProject = this.project.find(element => element.id === this.id)
        this.relatedProject = this.project.filter(element => element.id != this.id)
    },   
}
</script>
