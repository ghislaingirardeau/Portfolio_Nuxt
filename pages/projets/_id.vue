<template>
    <div class="detailProjet">
        <h1>Detail du projet</h1>
        {{this.$route.params.id}}

    </div>
</template>

<script>
import projets from '@/store/projets.js'

export default {
    data() {
        return{
           
            projet: projets.projets
        }
    },
    computed: {
        postdata() {
            console.log(this.$route.params.id)
            return this.projet.find(projet => projet.id === this.id)
        }
    },
    
}
</script>
