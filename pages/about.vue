<template>
    
    <main class="head__page page__cv reveal-0">

        <h1>En savoir plus sur moi</h1>
        <!-- <div class="">
            <a href="./_nuxt/public/CV_développeur_web.pdf" download>
                <button class="btn btn--download">Télécharger mon CV</button>
            </a> <br>
        </div> -->
            <div>
                <article>
                    <h2 class="reveal-1">Qui suis-je...</h2>

                    <h3 class="reveal-2">...Personnellement</h3>
                        <p class="reveal-3">{{personal}}</p>
                    <h3 class="reveal-2">...Professionnellement</h3>
                        <p class="reveal-3"> {{experience.id1}}</p>
                        <p class="reveal-3"> {{experience.id2}}</p>
                </article>
                <article>
                    <h2 class="reveal-1">Mes souhaits d'engagements</h2>
                        
                    <p class="reveal-2">{{willingness.id1}}</p>
                    <p class="reveal-2">{{willingness.id2}}</p>
                    <p class="reveal-2">{{willingness.id3}}</p>
                    <p class="reveal-2">{{willingness.id4}}</p>

                </article>
            </div>
    </main>
    
</template>

<script>
import about from "@/store/about"
import { reveal } from "@/store/function"

export default {

    data() {
        return {
            downloadUrl: '',
            personal: about.personaly.text,
            experience: about.professionaly,
            willingness: about.willingness,
        }
    },
    mounted () {
        reveal()
    }
    /* methods: {
        downloaded: function() {
            const url = document.getElementById('cv').src
            this.downloadUrl = url
        }
    } */
}
</script>