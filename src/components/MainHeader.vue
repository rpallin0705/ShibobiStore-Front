<template>
  <header>
    <div class="container">
      <img  v-if="!(isMediaQueryMatched && $route.path === '/store')" src="../assets/logo_texto.png" class="logo">


      <slot></slot>

      <nav>
        <ul>
          <li>
            <RouterLink to="/" active-class="active"><span class="material-symbols-outlined">Home</span></RouterLink>
          </li>
          <li>
            <RouterLink to="/store" active-class="active">
              <span class="material-symbols-outlined">Shop</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/login" active-class="active" v-show="loggedIn == false">
              <span class="material-symbols-outlined">Login</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/profile" active-class="active" v-show="loggedIn != false">
              <span class="material-symbols-outlined">account_circle</span>
            </RouterLink>
          </li>
          <li>
            <a @click="log_out" active-class="active" v-show="loggedIn != false"><span
                class="material-symbols-outlined">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script>
import { RouterLink } from 'vue-router';
import { mapMutations, mapState } from 'vuex';
import swal from 'sweetalert';

export default {
  name: "MainHeader",
  computed: {
    ...mapState('auth', ['loggedIn']),
    isMediaQueryMatched() {
      return window.matchMedia("(max-width: 767px)").matches;
    }
  },
  methods: {
    ...mapMutations('auth', ['logout']),
    log_out() {
      this.logout();
      swal(
        'Sesión cerrada',
        'Esperamos que vuelvas pronto',
        'success'
      )
      this.$router.push('login');
    },
  },
  components: { RouterLink }
};

</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");

header {
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.473);
  z-index: 1000;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  max-width: 100%;
  max-height: 100%;
  margin-right: auto;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}


nav {
  max-height: 100%;
  max-width: 100%;
  text-align: center;
  margin-left: auto;

}

nav ul {
  height: 100px;
  float: right;
  position: relative;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 40px;

}

nav ul li {
  display: inline-block;
  line-height: 90px;
  margin: 0 5px;
}


nav ul li a {
  color: white;
  font-size: 20px;
  padding: 7px;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 30px;
}

a.active,
a:hover {
  background-color: rgb(255, 115, 0);
  transition: .5s;
}



@media only screen and (max-width: 767px) {
  
}
</style>