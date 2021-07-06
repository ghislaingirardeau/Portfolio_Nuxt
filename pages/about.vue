<template>
    
    <main class="page__about reveal-0">

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
                        <div class="reveal-2 about__personal">
                            <img class="about__personal--img" src="~/assets/images/moi2.jpg" alt="photo de Ghislain montagne">
                            <p class="reveal-3 about__personal--text">{{personal}}</p>
                        </div>
                        
                    <h3 class="reveal-2">...Professionnellement</h3>
                        <div class="reveal-2 about__personal reverse">
                            <img class="about__personal--img" src="~/assets/images/moi.jpg" alt="photo de Ghislain montagne">
                            <p class="reveal-3 about__personal--text"> {{experience.id1}} <br> <br> {{experience.id2}}</p>
                        </div>
                </article>
                <article>
                    <h2 class="reveal-1">Mes souhaits d'engagements</h2>
                        
                        <div class="reveal-2 about__wish">
                            <img class="about__wish--img" src="~/assets/images/environement_respect.jpg" alt="ecology">
                            <p class="about__wish--text">{{willingness.id1}}</p>
                        </div>

                        <div class="reveal-2 about__wish reverse">
                            <img class="about__wish--img" src="~/assets/images/data_protection.jpg" alt="data protection">
                            <p class="about__wish--text">{{willingness.id2}}</p>
                        </div>

                        <div class="reveal-2 about__wish">
                            <img class="about__wish--img" src="~/assets/images/business_relationship.jpg" alt="business relationship">
                            <p class="about__wish--text">{{willingness.id3}}</p>
                        </div>

                        <div class="reveal-2 about__wish reverse">
                            <img class="about__wish--img" src="~/assets/images/freelance_me.jpg" alt="freelance">
                            <p class="about__wish--text">{{willingness.id4}}</p>
                        </div>

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