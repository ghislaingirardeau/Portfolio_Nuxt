<template>
    
    <main class="head__page page__cv">

        <h1>En savoir plus sur moi</h1>
        <!-- <div class="">
            <a href="./_nuxt/public/CV_développeur_web.pdf" download>
                <button class="btn btn--download">Télécharger mon CV</button>
            </a> <br>
        </div> -->
        <transition name="opacity" appear> 
            <div>
                <article>
                    <h2>Qui suis-je...</h2>

                    <h3>...Personnellement</h3>
                        <p>Après 10 d'expériences dans la distribution d'articles de sport, j'ai décidé de réaliser un vieux
                            rêve et de partir faire un tour du monde pendant plus de 2 ans. <br>
                            Une aventure riche personnellement qui m'a ouvert de nouvelles valeurs :
                            autonomie, ouverture d'esprit, aventurier, curieux, respect. <br>
                            Passionée de sports, investi dans le développement web, j'ai aujourd'hui le souhait de mettre à disposition mes compétences dans des projets
                            enrichissant tant humainement que professionnellement.

                        </p>
                    <h3>...Professionnellement</h3>
                        <p> Auto-entrepreneur et freelance en developpement web :
                            Réalisation de ce e-portfolio via Vue et Nuxt Js, 2 framework js que j'apprécie particulièrement !
                        </p>
                        <p> OPEN CLASSROOM : Formation 6 mois développeur Web.
                            Partisans des méthodes AGILE, tous mes projets sont issus du monde professionnel et ont éte préenté à distance en visio conférence.
                            J'ai organisé mon travail en tout autonomie dans le respect des délais impartis.
                        </p>
                </article>
                <article>
                    <h2>Mes souhaits d'engagements</h2>
                    
                    <p>Parce que les nouvelles technologies ont aussi un impact sur l'environnement... J'ai le souhait de 
                        m'engager sur des projets ou des entreprises partageant l'idée de réduire notre consommation en énergie.
                    </p>
                    <p>Parce que la protection des données est un enjeu très important dans un monde oú tout va plus vite,
                        oú tout devient dématérialisé... la confiance, le respect, la confidentialité sont des valeurs indispensables.  
                    </p>
                    <p>Parce que les nouvelles technologies nous facilitent la vie... Il ne faut pas oublier qu'il y a des individus
                        derrières celles-ci : utilisateurs, clients, employés, développeurs, entrepreneur... Faire que la relation entre les 
                        différents acteurs soient la plus saine, équitable, juste et constructive est une notion indispensables pour moi. 
                    </p>
                    <p>Parce que le métier de freelance nécessite une relation de confiance et de l'autonomie... Je fais des points réguliers 
                        sur l'avancée du projet, planifie mes objectifs pour tenir les délais, discute des feedbacks constructifs pour 
                        faire aboutir le projet.
                    </p>
                </article>
            </div>
        </transition>
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