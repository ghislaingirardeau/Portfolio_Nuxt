<template>
    <div class="carousel">
        <slot></slot>
        <button @click.prevent="previousSlide" class="btn__slide btn__slide--prev" v-show="ImageArray.length > 1"> < </button>
        <button @click.prevent="nextSlide" class="btn__slide btn__slide--next" v-show="ImageArray.length > 1"> > </button>
        
        <div class="btn__index" v-show="ImageArray.length > 1">
            <button v-for="i,l in ImageArray" :key="i" @click.prevent="indexSlide(l)" :class="{active: l === index}"></button>
        </div>
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
        /* recupere le tableau de data de _id.vue et ainsi ma longueur d'image dans le tableau */
        ImageArray : Array
    },
    
    methods: {
        nextSlide() { /* etape 3: faire varier les index de slide au clic */
            if(this.index === (this.ImageArray.length - 1)) {
                this.index = -1
            }
            this.index++
        },
        previousSlide() {
            if(this.index === 0) {
                this.index = (this.ImageArray.length)
            }
            this.index--
        },
        indexSlide(i) {
            this.index = i
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
