import { createStore } from 'vuex';

const store = createStore({
  modules: {
    auth: {
      namespaced: true,
      state: {
        loggedIn: false,
        user: null,
      },
      mutations: {
        setLoggedIn(state, loggedIn) {
          state.loggedIn = loggedIn;
        },
        setUser(state, user) {
          state.user = user;
        },
      },
    },
  },
});

export default store;
