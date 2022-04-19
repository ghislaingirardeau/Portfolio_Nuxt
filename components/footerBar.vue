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
        <li class="date">
          {{ $t("date.day") }} {{ date }}{{ $t("date.time") }}{{ interval }}
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      time: new Date(),
      interval: "",
      date: "",
    };
  },
  mounted() {
    this.date =
      this.time.getDate() +
      "/" +
      (this.time.getMonth() + 1) +
      "/" +
      this.time.getFullYear();
    this.test = setInterval(() => {
      /* this.test refére a window.test qui est une variable temporaire */
      let timeDate = new Date();
      this.interval =
        timeDate.getHours() +
        "h" +
        timeDate.getMinutes() +
        "m" +
        timeDate.getSeconds();
    }, 1000);
  },
};
</script>