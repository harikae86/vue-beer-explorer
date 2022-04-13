<template>
  <v-card class="mx-auto overflow-hidden" width="100%">
    <v-app-bar color="background" dark prominent height="50%">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      top
      temporary
      dark
      class="background--text"
    >
      <v-list>
        <v-list-item-group v-model="group">
          <v-list-item>
            <router-link to="/">Home</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/beers">Beers</router-link>
          </v-list-item>
          <v-list-item>
            <router-link to="/randomBeer">Random Beer</router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </v-card>
</template>

<script>
export default {
  name: "Nav-bar",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
</style>
