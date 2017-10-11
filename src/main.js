// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'moment';
import 'jquery';

import 'fullcalendar';
import '../node_modules/fullcalendar/dist/fullcalendar.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

import App from './components/app';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<app />',
  components: { App },
});
