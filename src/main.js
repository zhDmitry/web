// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'moment';
import 'jquery';

import 'fullcalendar';
import '../node_modules/fullcalendar/dist/fullcalendar.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync'

import App from './components/app';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);

sync(store, router);

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<app />',
  components: { App },
});
