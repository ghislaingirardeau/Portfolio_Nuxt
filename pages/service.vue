<template>
    <main class="page__service">
        
        <h1>Mon accompagnement dans votre projet de digitalisation</h1>
            <p>Chaque étapes est plannifié avec un rendez vous visio (30 ou 60 min) pour échanger</p>

        <h2>Des étapes personnalisées et gratuites jusqu'à votre validation finale du devis...</h2>
        <div class="container__etape">

            <article class="container__etape__block reveal-0">
                <h3>Etapes 1</h3>
                <p>Présentation et échange sur votre projet</p>
                <p>Définir ensemble votre stratégie, vos ressources et vos besoins</p>
                <p>Ce que je peux vous apporter dans votre digitalisation</p>
                <p>Premier retour sur la faisabilité et la viabilité de votre projet</p>
            </article>

            <article class="container__etape__block reveal-1">
                <h3>Etapes 2</h3>
                <p>Etude individualisée de votre projet</p>
                <p>Evaluation des possibilités, recommendations et solutions adaptées</p>
                <p>Proposition de devis, délai et cahier des charges reprenant le résultat convenu</p>
                <p>Réponse à vos interrogations et questionnements</p>
            </article>

            <article class="container__etape__block reveal-2">
                <h3>Etapes 3</h3>
                <p>Lancement et développement du projet</p>
                <p>Plannification des étapes pour le développement</p>
                <p>Un rapport hebdomadaire sur l'avancement du projet</p>
                <p>Un échange visio pour avoir les impressions du rendu</p>
            </article>

        </div>

        <a class="page__service--link reveal-3" :href="calendfy" target="blank">Cliquer pour prendre un rendez-vous</a>
                
    </main>
</template>

<script>
import { reveal } from "@/store/function"

export default {
    data() {
        return {
            calendfy: 'http://calendly.com/gg-webdev'
        }
    },
    mounted () {
        reveal()
    }
}
</script>