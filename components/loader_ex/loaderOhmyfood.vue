<template>
    <div class="loader" @click="reloadLogo" :key="componentKey">
        <div class="contain_logo">
            <img src="@/assets/logo/background-1206941__340.png" alt="" class="logo1">
        </div>
        <div>
            <img src="@/assets/logo/icon-2073974__340.png" alt="" class="logo2">
        </div>
        <div>
            <img src="@/assets/logo/label-2780146__340.png" alt="" class="logo3">
        </div>
        <div>
            <img src="@/assets/logo/shop-5890185__340.png" alt="" class="logo4">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return{
            componentKey: 0, /* pour faire un re-render du cube avec :key */
        }
    },
    methods: {
        reloadLogo() {
            this.componentKey += 1 
        }
    },
}
</script>