import Vuex from 'vuex';

const getStore = () =>
  new Vuex.Store({
    state: {
      permissions: {
        canStudentEdit: true,
        // ...
      },
    },
    mutations: {
      mutate(state, payload) {},
    },
  });

export default getStore;
