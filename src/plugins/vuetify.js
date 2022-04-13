import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
  },
  theme: {
    themes: {
      light: {
        primary: "#50a7cc",
        secondary: colors.grey.lighten3,
        accent: "#64225f",
        background: "#50a7cc",
        warning: "c8a327",
      },
      dark: {
        primary: "#50a7cc",
        secondary: "c8a327",
        white: colors.white,
        background: colors.grey.darken3,
      },
    },
  },
});
