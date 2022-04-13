<template>
  <v-container width="100%" class="mt-0 pt-0">
    <v-text-field
      outlined
      v-model="search"
      @input="sendData"
      label="Search beers"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  name: "Search-bar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    sendData() {
      this.$emit("searchData", this.search);
    },
  },
};
</script>
