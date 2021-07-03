<template>
    
    <main class="page__cv">

            <h1 class="reveal-0">Mon CV</h1>

            <div class="cv--layout reveal-3">
                <img :src="require(`~/assets/images/CV_developpeur_web.jpg`)" alt="cv developpeur web">
            </div>
    </main>
    
</template>

<script>
import { reveal } from "@/store/function"

export default {

    mounted () {
        reveal()
    }

}
</script>