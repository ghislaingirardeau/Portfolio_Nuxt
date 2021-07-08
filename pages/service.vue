<template>
    <main class="page__service">
        
        <h1>{{$t('services.header.h1')}}</h1>
            <p>{{$t('services.header.p')}}</p>

        <h2>{{$t('services.header.h2')}}</h2>
        <div class="container__etape">

            <article class="container__etape__block reveal-0">
                <h3>{{$t('services.stepOne.h3')}}</h3>
                <p v-html="$t('services.stepOne.description')"></p>
                
            </article>
            <article class="container__etape__block reveal-1">
                <h3>{{$t('services.stepTwo.h3')}}</h3>
                <p v-html="$t('services.stepTwo.description')"></p>
            </article>

            <article class="container__etape__block reveal-2">
                <h3>{{$t('services.stepThree.h3')}}</h3>
                <p v-html="$t('services.stepThree.description')"></p>
            </article>

        </div>

        <a class="page__service--link reveal-3" :href="calendfy" target="blank">{{$t('services.footer')}}</a>
                
    </main>
</template>

<script>
import { reveal } from "@/store/function"

export default {
    data() {
        return {
            calendfy: 'http://calendly.com/gg-webdev'
        }
    },
    mounted () {
        reveal()
    }
}
</script>