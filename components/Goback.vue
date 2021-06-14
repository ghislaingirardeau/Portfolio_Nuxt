<template>
    <div>
        <button @click="goBack">go back</button>
    </div>
</template>

<script>


export default {
    methods: {
        goBack() {
            return this.$router.go(-1) /* nombre que l'on veut remonter dans history de router */
        }
    }
}
</script>
