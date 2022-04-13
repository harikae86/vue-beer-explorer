import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BeerView from "../views/BeerView.vue";
import RandomBeerView from "../views/RandomBeerView.vue";
import BeerDetailedView from "../views/BeerDetailedView.vue";

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
  {
    path: "/beers/:id",
    component: BeerDetailedView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
