<template>
  <v-row>
    <v-col
      v-for="beer in beers"
      v-bind:key="beer.id"
      @click="seeDetails(beer.id)"
    >
      <v-card outlined class="mx-auto" elevation="5" color="secondary">
        <div>
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
          <v-card-subtitle
            class="text-center font-weight-medium"
            color="secondary"
            >{{ beer.tagline }}</v-card-subtitle
          >
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Beer-comp",
  props: {
    beers: Array,
  },
  methods: {
    seeDetails(id) {
      this.$router.push(`/beers/${id}`);
    },
  },
};
</script>
