import { createStore } from 'vuex';

const store = createStore({
  modules: {
    auth: {
      namespaced: true,
      state: {
        loggedIn: false,
        userName: null,
        iD: null
      },
      mutations: {
        setLoggedIn(state, loggedIn) {
          state.loggedIn = loggedIn;
        },
        setUser(state ,user) {
          state.userName = user;
        },
        setUseriD(state ,id) {
          state.iD = id;
        },

        logout(state) {
          state.userName = null;
          state.userName = null;
          state.loggedIn = false;
        }

      },
    },
  },
});

export default store;
