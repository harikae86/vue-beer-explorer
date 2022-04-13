<template>
  <div>
    <FilterBeers @alcoholFilter="setFilter" />
    <Searchbar @searchData="setSearch" />
    <Pagination @nextPage="goToNext" @prevPage="goToPrev" />
    <v-container fluid grid-list-md class="mx-auto">
      <div v-if="beers.length !== 0">
        <BeerCard :beers="this.beers" />
      </div>
      <div v-else class="warning--text text-center">
        No match found. Please try again.
      </div>
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
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage -= 1;
      this.fetchBeers(this.currentPage);
    },
  },
};
</script>
