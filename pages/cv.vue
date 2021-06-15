<template>
    <main class="head__page">

        <h1>Mon parcours professionnel, mes formations et mes expériences personnelles...</h1>
        <div class="page__cv">
            <a :href="downloadUrl" download>
                <button @click="downloaded" class="page__cv--btndownload">Télécharger mon CV</button>
            </a> <br>
            <img src="../assets/logo/cv.jpg" height="900" alt="Image preview..." id="cv" >
        </div>
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