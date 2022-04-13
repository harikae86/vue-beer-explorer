<template>
  <div>
    <FilterBeers @alcoholFilter="setFilter" />
    <Searchbar @searchData="setSearch" />
    <v-container fluid grid-list-md class="mx-auto">
      <v-row>
        <Pagination @nextPage="goToNext" @prevPage="goToPrev" />

        <BeerCard :beers="this.beers" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BeerCard from "./BeerCard.vue";
import Searchbar from "./Searchbar.vue";
import FilterBeers from "./FilterBeers.vue";
import Pagination from "./Pagination.vue";

let currentPage = 1;
export default {
  name: "Beers-page",
  components: { BeerCard, Searchbar, FilterBeers, Pagination },
  data() {
    return {
      beers: [],
      search: "",
      isAlcoholfree: false,
      currentPage: 1,
      hover: false,
    };
  },
  mounted() {
    this.fetchBeers(currentPage);
  },
  watch: {
    search: async function () {
      await this.fetchBeers(currentPage);
    },
    isAlcoholfree: async function () {
      await this.fetchBeers(currentPage);
    },
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

    setSearch(query) {
      this.search = query;
    },

    setFilter(query) {
      this.isAlcoholfree = query;
    },

    goToNext() {
      this.currentPage += 1;

      this.fetchBeers(this.currentPage);
    },
    goToPrev() {
      this.currentPage -= 1;
      console.log(currentPage);
      this.fetchBeers(this.currentPage);
    },
  },
};
</script>
