<template>
  <div v-show="showAnimStar">
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
    <span class="light_flash"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAnimStar: true,
    };
  },
  watch: {
    $route(to, from) {
      const disable = () => {
        return new Promise((resolve, reject) => {
          this.showAnimStar = false;
          resolve(true);
        });
      };

      if (from.fullPath === "/Apropos" || from.fullPath === "/en/about") {
        disable().then(() => {
          this.starAnimState({ toDO: true }, 200);
        });
      }
      if (to.fullPath === "/Apropos" || to.fullPath === "/en/about") {
        disable().then(() => {
          this.starAnimState({ toDO: true }, 200);
        });
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.animStar();
    }, 2200);
  },
  methods: {
    starAnimState(payload, time = 500) {
      this.showAnimStar = payload.toDO;
      if (payload.toDO) {
        setTimeout(() => {
          this.animStar();
        }, time);
      }
    },
    animStar() {
      const starsLight = document.getElementsByClassName("light_flash");
      const layoutHeight = parseInt(
        window.getComputedStyle(document.getElementById("__layout")).height
      );
      const layoutWidth = parseInt(
        window.getComputedStyle(document.getElementById("__layout")).width
      );

      for (let index = 0; index < starsLight.length; index++) {
        let integrer = Number.isInteger(index / 2);
        let positionX = Math.random() * layoutWidth; // position absolute of star
        let positionY = Math.random() * layoutHeight; // position absolute of star
        let randomX = Math.random() * layoutWidth * 0.3; // max translate de 200 mobile
        let randomY = Math.random() * layoutHeight * 0.3; // max translate de 200 mobile
        let getRandomX = () => {
          if (positionX / layoutWidth > 0.7) {
            return `-${randomX}px`;
          }
          if (positionX / layoutWidth < 0.3) {
            return `${randomX}px`;
          }
          return `${integrer ? "-" : ""}${randomX}px`;
        };
        let getRandomY = () => {
          if (positionY / layoutHeight > 0.7) {
            return `-${randomY}px`;
          }
          if (positionY / layoutHeight < 0.3) {
            return `${randomY}px`;
          }
          return `${integrer ? "-" : ""}${randomY}px`;
        };
        starsLight[index].style.setProperty(
          "--light-width",
          `${Math.random() + 1}px`
        );
        starsLight[index].style.setProperty(
          "--light-positionX",
          `${positionX}px`
        );
        starsLight[index].style.setProperty(
          "--light-positionY",
          `${positionY}px`
        );
        starsLight[index].animate(
          [
            { transform: `translate3d(0px, 0px, 0px)`, opacity: 0 },
            { opacity: 0.8, offset: 0.9 },
            {
              transform: `translate3d(${getRandomX()}, ${getRandomY()}, 0px)`,
              opacity: 0,
            },
          ],
          {
            duration: 10000,
            pseudoElement: "::before",
            delay: Math.random() * 6000,
            iterations: Infinity,
            easing: "linear",
          }
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
:root {
  --light-width: 10px;
  --light-positionX: 100px;
  --light-positionY: 100px;
}
.light_flash {
  z-index: 100;
  position: absolute;
  left: var(--light-positionX);
  top: var(--light-positionY);
  &::before {
    position: absolute;
    content: "";
    opacity: 0;
    width: var(--light-width);
    height: var(--light-width);
    border: 2px solid white;
    border-radius: 15px;
    background: white;
    filter: blur(2px);
  }
}
@keyframes opacity-change {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
