import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BeerView from "../views/BeerView.vue";
import RandomBeerView from "../views/RandomBeerView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/beers",
    name: "beers",
    component: BeerView,
  },
  {
    path: "/randomBeer",
    name: "randomBeer",
    component: RandomBeerView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
