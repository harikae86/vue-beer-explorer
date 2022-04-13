<template>
  <div>
    <BeerCard :beers="this.beers" width="70%" />
  </div>
</template>

<script>
import BeerCard from "../components/BeerCard.vue";
export default {
  name: "Random-beer",
  components: { BeerCard },
  data() {
    return {
      beers: [],
    };
  },
  mounted() {
    this.getRandomBeer();
  },
  methods: {
    async getRandomBeer() {
      const url = "https://api.punkapi.com/v2/beers/random";
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.beers = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
