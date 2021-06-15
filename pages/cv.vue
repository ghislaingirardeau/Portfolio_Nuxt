<template>
    <main class="head__page">

        <h1>CV</h1>
        <a :href="downloadUrl" download>
        <img src="../assets/logo/cv.jpg" height="900" alt="Image preview..." id="cv" @click="downloaded">
        </a>
    </main>
</template>

<script>
export default {
    head() {
        return {
            title : "Portfolio: CV",
        }
    },
    data() {
        return {
            downloadUrl: ''
        }
    },
    methods: {
        downloaded: function() {
            const url = document.getElementById('cv').src
            this.downloadUrl = url
        }
    }
}
</script>