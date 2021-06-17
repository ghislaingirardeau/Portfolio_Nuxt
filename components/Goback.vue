<template>
    <div>
        <button @click="goBack" class="btn__goback">go back</button>
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
