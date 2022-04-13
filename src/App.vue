<template>
  <v-app
    class="xa-0"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <Navbar />
  </v-app>
</template>

<script>
// import Landing from "./components/Landing.vue";
import Navbar from "./components/Navbar.vue";
// import Beers from "./components/Beers.vue";
// import Landing from "./components/Landing.vue";
// import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
}
</style>
