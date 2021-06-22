<template>
    <div v-show="visible">
        index: {{index}}
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
    computed: {
        visible () {/* Etapes 2: je rends l'element visible si l'index du slide correspond a celui du parent carousel */
            return this.index === this.$parent.index 
        }
    }
}
</script>
