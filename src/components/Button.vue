<template>
  <v-btn
    :x-large="$vuetify.breakpoint.lgOnly"
    :large="$vuetify.breakpoint.md"
    :medium="$vuetify.breakpoint.xsOnly"
    color="accent"
    elevation="10"
    @click="onClick()"
  >
    {{ btnText }}
    <v-icon right>mdi-glass-mug-variant</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "Button-comp",
  props: {
    btnText: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
  button {
    font-size: 0.5rem !important;
  }
}
</style>
