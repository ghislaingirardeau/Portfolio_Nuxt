<template>
    
    <main class="head__page page__cv">

        <h1>En savoir plus sur moi</h1>
        <!-- <div class="">
            <a href="./_nuxt/public/CV_développeur_web.pdf" download>
                <button class="btn btn--download">Télécharger mon CV</button>
            </a> <br>
        </div> -->
        <transition name="opacity-slide" appear> 
            <div>
                <article>
                    <h2>Qui suis-je...</h2>

                    <h3>...Personnellement</h3>
                        <p>{{personal}}

                        </p>
                    <h3>...Professionnellement</h3>
                        <p> {{experience.id1}}</p>
                        <p> {{experience.id2}}</p>
                </article>
                <article class="reveal ">
                    <h2>Mes souhaits d'engagements</h2>
                    
                    <p>{{willingness.id1}}</p>
                    <p>{{willingness.id2}}</p>
                    <p>{{willingness.id3}}</p>
                    <p>{{willingness.id4}}</p>

                </article>
            </div>
        </transition>
    </main>
    
</template>

<script>
import about from "@/store/about"

export default {

    data() {
        return {
            downloadUrl: '',
            personal: about.personaly.text,
            experience: about.professionaly,
            willingness: about.willingness,
            test: ""
        }
    },
    mounted () {
        const ratio = .1
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: ratio
        }

        const element = document.querySelector('.reveal')

        const handleIntersect = function(entries, observer) {
            entries.forEach(entry => {
                if(entry.intersectionRatio > ratio) {
                    entry.target.classList.add('reveal-visible')
                    observer.unobserve(entry.target)
                } 
            });
        }

        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(element)

    }
    /* methods: {
        downloaded: function() {
            const url = document.getElementById('cv').src
            this.downloadUrl = url
        }
    } */
}
</script>