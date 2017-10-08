// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'moment';
import 'jquery';

import 'fullcalendar';
import '../node_modules/fullcalendar/dist/fullcalendar.min.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Vuetify);
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
