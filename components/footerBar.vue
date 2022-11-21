<template>
  <footer>
    <div class="footer__layout">
      <ul>
        <li>
          {{ $t("footer.title") }}
        </li>
        <li>
          <template>
            <a
              href="https://www.linkedin.com/in/ghislain-girardeau-a879b2201/"
              rel="noreferrer"
              target="_blank"
              >Linkedin profil</a
            >
          </template>
        </li>
        <li>
          <template>
            <a
              href="https://www.malt.fr/profile/ghislaingirardeau"
              rel="noreferrer"
              target="_blank"
              >Malt profil</a
            >
          </template>
        </li>
        <li class="email">
          {{ $t("footer.contact") }}
          <a href="mailto:g.girardeaupro@sfr.fr">g.girardeaupro@sfr.fr</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>
