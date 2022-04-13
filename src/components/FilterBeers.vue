<template>
  <v-container class="mx-auto">
    <h1 class="display-1 warning--text">Don't drink and drive!</h1>
    <h1 class="title primary--text">Check our alcohol-free offers instead!</h1>
    <v-checkbox
      v-model="isAlcoholFree"
      @change="sendData"
      label="Show me the alcohol-free options"
      class="secondary--text"
    ></v-checkbox>
  </v-container>
</template>

<script>
export default {
  name: "Filter-beers",
  data() {
    return {
      isAlcoholFree: false,
    };
  },
  methods: {
    sendData() {
      this.$emit("alcoholFilter", this.isAlcoholFree);
    },
  },
};
</script>

<style scoped>
.display-1,
.title {
  font-family: "Roboto Mono", monospace !important;
}
</style>
