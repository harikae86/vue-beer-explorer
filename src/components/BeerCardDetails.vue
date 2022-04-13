<template>
  <v-card
    outlined
    class="mx-auto my-5"
    elevation="5"
    color="secondary"
    width="70%"
  >
    <v-card-title
      class="text-center d-block text-wrap font-weight-bold warning--text"
      >{{ beer.name }}</v-card-title
    >
    <v-img
      :src="beer.image_url"
      class="mx-auto"
      contain
      max-width="80%"
      max-height="300px"
    />
    <v-card-subtitle class="text-center font-weight-medium" color="secondary">{{
      beer.tagline
    }}</v-card-subtitle>
    <v-card-text class="text-justify">{{ beer.description }}</v-card-text>
    <v-card-title class="warning--text"> Food Pairing </v-card-title>
    <v-list dense v-for="(food, index) in beer.food_pairing" v-bind:key="index">
      <v-list-item>
        <v-icon left>mdi-food-fork-drink</v-icon>
        {{ food }}</v-list-item
      >
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "BeerCard-details",
  data() {
    return {
      beer: [],
    };
  },
  methods: {
    async getSingleBeer() {
      const url = `https://api.punkapi.com/v2/beers/${this.$route.params.id}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.beer = data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getSingleBeer();
  },
};
</script>
