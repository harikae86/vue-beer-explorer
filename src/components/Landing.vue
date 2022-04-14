<template>
  <div>
    <v-img
      no-repeat
      fill
      height="100vh"
      src="../images/background.jpg"
      alt="background"
    />
    <div id="wrapper">
      <div id="title" class="container h1">Welcome to the world of Brewdog</div>
      <div id="button-wrapper">
        <Button btnText="Get me a beer" @btn-click="getRandomBeer" />
        <Button btnText="See all beers" @btn-click="goToBeers" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Landing-page",
  components: { Button },
  methods: {
    getRandomBeer() {
      this.$router.push("/randomBeer");
    },
    goToBeers() {
      this.$router.push("/beers");
    },
  },
};
</script>

<style scoped>
#button-wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: space-between;
}

#wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-between;
  height: 40%;
  z-index: 1;
  top: 30%;
  left: 0;
  right: 0;
}
img {
  z-index: -1;
}

#title {
  font-weight: bold;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.1rem;
  margin: 0 auto;
}

.h1 {
  color: white;
  text-align: center;
  font-size: 4rem;
  transform: translateY(-600px);
  animation: 1.2s slideIn ease-in-out forwards 1s;
  z-index: 10;
  opacity: 0;
  position: relative;
}

.h1::before {
  content: "";
  width: 0%;
  height: 1rem;
  background-color: #50a7cc;
  position: absolute;
  bottom: 1rem;
  animation: 1s underline ease-in-out forwards 2s;
  mix-blend-mode: screen;
}
@media screen and (max-width: 900px) {
  .h1 {
    font-size: 3rem;
  }
  .h1::before {
    bottom: 1.2rem;
    height: 0.5rem;
  }
}

@media screen and (max-width: 700px) {
  .h1 {
    font-size: 2.5rem;
  }
  .h1::before {
    display: none;
  }

  #button-wrapper {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: space-between;
    height: 50%;
    width: 30%;
    margin: 0 auto;
  }

  button {
    font-size: 0.2rem;
  }
}

@keyframes skewBg {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes underline {
  100% {
    width: 100%;
  }
}

@keyframes slideIn {
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>
