<template>
  <v-col cols="12" class="d-flex justify-center my-2 pt-0">
    <v-btn
      class="mx-2 p-2"
      fab
      dark
      medium
      color="accent"
      v-on:click.prevent="previous()"
    >
      <v-icon> fa-solid fa-arrow-left </v-icon>
    </v-btn>
    <v-btn
      class="mx-2"
      fab
      dark
      medium
      color="accent"
      v-on:click.prevent="next()"
    >
      <v-icon dark> fa-solid fa-arrow-right /> </v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  name: "Pagination-comp",
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    next() {
      this.$emit("nextPage", this.page);
    },
    previous() {
      this.$emit("prevPage", this.page);
    },
  },
};
</script>
