import { createStore } from 'vuex';

var sesionIniciada = localStorage.getItem('sesionIniciada');

const store = createStore({
  modules: {
    auth: {
      namespaced: true,
      state: {
        loggedIn: false,
        userName: null,
        iD: null,
        email: null,
      },
      mutations: {
        setLoggedIn(state, loggedIn) {
          state.loggedIn = loggedIn;
          localStorage.setItem('sesionIniciada', loggedIn);
        },
        setUser(state, user) {
          state.userName = user;
          localStorage.setItem('username', user);
        },
        setUseriD(state, id) {
          state.iD = id;
          localStorage.setItem('id', id);

        },
        setUserEmail(state, correo) {
          state.email = correo;
          localStorage.setItem('correo', correo);
        },

        logout(state) {
          state.userName = null;
          state.email = null;
          state.loggedIn = false;
          state.correo = null


          localStorage.removeItem('sesionIniciada');
          localStorage.removeItem('username');
          localStorage.removeItem('id');
          localStorage.removeItem('correo');
        }

      },
    },
  },
});

if (sesionIniciada === 'true') {
  // obtiene datos de local storage
  var userName = localStorage.getItem('username');
  var iD = localStorage.getItem('id');
  var email = localStorage.getItem('correo');

  // Actualizar el estado del auth
  store.commit('auth/setLoggedIn', true);
  store.commit('auth/setUser', userName);
  store.commit('auth/setUseriD', iD);
  store.commit('auth/setUserEmail', email);
}




export default store;
