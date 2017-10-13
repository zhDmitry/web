import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: null,
    userId: null,
    fullName: null
  },
  mutations: {
    signIn(state, payload) {
      state.role = payload.role;
      state.userId = payload.userId;
      state.fullName = payload.fullName;
    },
    signOut(state) {
      state.role = null;
    }
  },
  actions: {
    signIn: ({commit, dispatch}, payload) => {
      commit('signIn', payload);
      dispatch('redirectToHome');
    },
    redirectToHome: ({state}) => {
      router.push({
        admin: '/students',
        student: '/students/' + state.userId + '/subjects',
        teacher: '/students',
        methodist: '/students'
      }[state.role]);
    }
  },
  plugins: [createPersistedState()]
});
