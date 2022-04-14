<template>
  <div
    class="d-flex flex-column justify-center align-center mt-5"
    height="100%"
    width="80vw"
  >
    <BeerCard :beers="this.beers" />
    <div class="my-5 text-center" width="80%">
      <Button btnText="New beer" class="mr-5" @btn-click="getRandomBeer" />
      <Button btnText="All beers" @btn-click="goToBeers" />
    </div>
  </div>
</template>

<script>
import BeerCard from "../components/BeerCard.vue";
import Button from "../components/Button.vue";

export default {
  name: "Random-beer",
  components: { BeerCard, Button },
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
    goToBeers() {
      this.$router.push("/beers");
    },
  },
};
</script>
