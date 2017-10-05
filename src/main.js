import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import App from "./App.vue";

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  el: "#app",
  render: h => h(App)
});
