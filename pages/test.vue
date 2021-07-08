<template>
    
    <main class="page__cv">

            <h1 >{{$t('welcome')}}</h1>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
            <nuxt-link :to="switchLocalePath('fr')">Français</nuxt-link>

            <form action="" method="get">
                <transition :name="animationForm" mode="out-in">
                <div class="form-example" v-show="on === 0">
                  <label for="name">Enter your name: </label>
                  <input type="text" name="name" id="name" v-model="name" required>
                </div>
                </transition>
                <transition :name="animationForm" mode="out-in">
                <div class="form-example" v-show="on === 1">
                  <label for="email">Enter your email: </label>
                  <input type="email" name="email" id="email" v-model="email" required>
                </div>
                </transition>
                <transition :name="animationForm" mode="out-in">
                <div class="form-example" v-show="on === 2">
                  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                  <label for="jack">Jack</label>
                  <input type="checkbox" id="john" value="Johnd" v-model="checkedNames">
                  <label for="john">John</label>
                  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
                  <label for="mike">Mike</label>
                </div>
                </transition>
                <transition :name="animationForm" mode="out-in">
               <fieldset class="form-example" v-show="on === 3">
                <legend>Choose your favorite monster</legend>
                <input type="radio" value="kraken" name="monster" v-model="monster">
                <label for="kraken">Kraken</label><br/>
                <input type="radio" value="sasquatch" name="monster" v-model="monster">
                <label for="sasquatch">Sasquatch</label><br/>
                <input type="radio" value="mothman" name="monster" v-model="monster">
                <label for="mothman">Mothman</label>
              </fieldset>
                </transition>

                <div>
                  <input type="submit" value="Subscribe!">
                </div>
            </form>

            <button @click="prev">prev</button>
            <button @click="next">next</button>
            
            {{name}}
            {{email}}
            {{monster}}
            {{checkedNames}}
            
    </main>
    
</template>

<script>

export default {
    data() {
        return {
            on: 0,
            name: "",
            email: "",
            monster: "t",
            direction: '',
            checkedNames: []
        }
    },
    computed: {
        animationForm() {
            return 'slide-' + this.direction
        }
    },
    methods: {
        next() {
            let test = document.getElementsByClassName('form-example')
            
            if(this.on === (test.length - 1) || this.name === "") {
                this.on
            } else {
                this.on++
                this.direction = "right"
            }
        },
        prev() {
            if(this.on === 0) {
                this.on
            } else {
                this.on--
                this.direction = "left"
            }
            
        }
    }


}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>