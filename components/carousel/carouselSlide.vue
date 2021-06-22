<template>
    <div v-show="visible">
         <slot></slot>
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
        numImg : Number
    },
    computed: {
        visible () {/* Etapes 2: je rends l'element visible si l'index du slide correspond a celui du parent carousel */
            return this.numImg === this.$parent.index 
        }
    }
}
</script>
