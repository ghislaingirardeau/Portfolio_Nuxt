<template>
    <main class="page__service">
        <h1>Mon accompagnement dans votre projet de digitalisation</h1>
            <p>Chaque étapes est plannifié avec un rendez vous visio pour échanger</p>
            <p>Une plannification des rendez vous en visio suivant nos disponibilités grace à Calendfy</p>
            <p>30 à 60min de visio suivant votre projet</p>

        <h2>Des étapes personnalisées et gratuites jusqu'à votre validation finale du devis</h2>

            <h3>Présentation et échange sur votre projet</h3>
                <p>Définir ensemble votre stratégie, vos ressources et vos besoins</p>
                <p>Ce que je peux vous apporter dans votre digitalisation</p>
                <p>Premier retour sur la faisabilité et la viabilité de votre projet</p>
                <p>Réponse à vos interrogations et questionnements</p>

            <h3>Etude individualisée de votre projet</h3>
                <p>Evaluation des possibilités, recommendation et solutions adaptées</p>
                <p>Proposition de devis, délai et cahier des charges reprenant le résultat convenu</p>

            <h3>Lancement et développement du projet</h3>
                <p>Plannification des étapes pour le développement</p>
                <p>Un rapport hebdomadaire sur l'avancement du projet</p>
                <p>Un échange visio pour avoir les impressions du rendu</p>

        <h2>Consulter mes disponibilités et prenez rendez-vous sur : <a :href="calendfy" target="blank">calendfy</a></h2>
                
    </main>
</template>

<script>
export default {
    data() {
        return {
            calendfy: 'http://calendly.com/gg-webdev'
        }
    },
}
</script>