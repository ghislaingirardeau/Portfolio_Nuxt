<template>
    <main class="head__page">

        <h1>Mon parcours professionnel, mes formations et mes expériences personnelles...</h1>
        <div class="page__cv">
            <a href="../assets/logo/CV_développeur_web.pdf" download>
                <button class="page__cv--btndownload">Télécharger mon CV</button>
            </a> <br>
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
    /* methods: {
        downloaded: function() {
            const url = document.getElementById('cv').src
            this.downloadUrl = url
        }
    } */
}
</script>