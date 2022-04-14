<template>
  <div width="90vw" id="main">
    <header>
      <v-container width="80%">
        <h1 class="display-4 text-center accent--text pt-4">
          Explore our Beers
        </h1>
      </v-container>
    </header>

    <v-container fluid grid-list-md width="90vw" class="mx-auto">
      <Beers />
    </v-container>
  </div>
</template>

<script>
import Beers from "../components/Beers.vue";

let currentPage = 1;
export default {
  name: "Home-page",
  components: { Beers },
  data() {
    return {
      beers: [],
      search: "",
    };
  },
  mounted() {
    this.fetchBeers(currentPage);
  },
  methods: {
    async fetchBeers(page) {
      const searchQuery = this.search !== "" ? `&beer_name=${this.search}` : "";
      const alcoholQuery = this.isAlcoholfree ? "&abv_lt=1" : "";
      const url = `https://api.punkapi.com/v2/beers?page=${page}${searchQuery}${alcoholQuery}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.beers = data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.v-application .display-4 {
  font-family: "Bebas Neue", cursive !important;
}
</style>
