<template>
  <v-app class="xa-0">
    <Navbar />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
  // computed: {
  //   theme() {
  //     return this.$vuetify.theme.dark ? "dark" : "light";
  //   },
  // },
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
