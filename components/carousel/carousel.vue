<template>
    <div>
        <slot></slot>
        <button @click.prevent="previousSlide" class="btn__slide">precedent</button>
        <button @click.prevent="nextSlide" class="btn__slide">suivant</button>

    </div>
</template>

<script>

export default {
    data() {
        return {
            index: 0,
        }
    },
    props: {
        ImageCount : Number /* recupere ma longueur d'image dans le tableau */
    },
    
    methods: {
        nextSlide() { /* etape 3: faire varier les index de slide au clic */
            if(this.index === (this.ImageCount - 1)) {
                this.index = -1
            }
            this.index++
        },
        previousSlide() {
            if(this.index === 0) {
                this.index = (this.ImageCount)
            }
            this.index--
        }
    }
}

</script>

exemple de montage de carousel au chargement

mounted () {
        this.slides = this.$children /* Etape 1: pour connaitre le nombre d'enfants (soit le nombre de slides totales) au montage*/
        this.slides.forEach((slide, i) => { /* pour chaque slide, on vient leur donnée un index */
            slide.index = i
        })
    },
