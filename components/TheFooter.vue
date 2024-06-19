<template>
  <footer>
    <div class="footer__layout switchLang__anim--opacity">
      <h3>{{ $t("footer.title") }}</h3>
      <ul>
        <li>
          <div
            class="footer__layout_link"
            @click="
              goToExternalLink(
                'https://www.linkedin.com/in/ghislain-girardeau/'
              )
            "
          >
            <img src="../assets/logo/linkedin.png" alt="linkedin icon link" />

            <span>Linkedin</span>
          </div>
        </li>
        <li>
          <div
            class="footer__layout_link"
            @click="
              goToExternalLink('https://www.malt.fr/profile/ghislaingirardeau')
            "
          >
            <img
              src="../assets/logo/malt-svgrepo-com.png"
              alt="malt icon link"
            />

            <span>Malt</span>
          </div>
        </li>
        <li>
          <div
            class="footer__layout_link"
            @click="goToExternalLink('https://github.com/ghislaingirardeau')"
          >
            <img
              src="../assets/logo/github-mark-white.png"
              alt="github icon link"
            />
            <span>Github</span>
          </div>
        </li>
      </ul>
      <p class="footer_comment">
        <small>
          {{ $t("footer.description") }}
        </small>
        <label for="starsAnim">{{ $t("footer.animation") }}</label>
        <input
          type="checkbox"
          id="starsAnim"
          name="starsAnim"
          @change="animStarState"
        />
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      animStar: true,
    };
  },
  methods: {
    animStarState() {
      this.$emit("hideStar", (this.animStar = !this.animStar));
    },
    goToExternalLink(link) {
      window.open(link, "_blank");
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
