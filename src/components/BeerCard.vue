<template>
  <v-row>
    <v-col col-3 col-sm-6 v-for="beer in beers" v-bind:key="beer.id">
      <v-card outlined class="mx-auto" elevation="5" color="secondary">
        <v-hover v-slot="{ hover }" close-delay="50" open-delay="50">
          <div>
            <v-card-title
              class="text-center d-block text-no-wrap font-weight-bold warning--text"
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
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out v-card--reveal white--text accent"
                style="height: 100%"
              >
                {{ beer.description }}
              </div>
            </v-expand-transition>
          </div>
        </v-hover>
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
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  font-size: 0.7rem;
  opacity: 0.8;
  padding: 1rem;
  text-overflow: auto;
  position: absolute;
  width: 100%;
}
</style>
