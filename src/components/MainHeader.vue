<template>
  <!--<header>
    <div class="head">
      <img src="../assets/logo_texto.png">

      <div class="box" v-show="$route.path === '/store'">
        <input type="checkbox" id="check">
        <div class="search-box">
          <input type="text" placeholder="Type here...">
          <label for="check" class="icon">
            <span class="material-symbols-outlined">
              search
            </span>
          </label>
        </div>
      </div>

      <nav>
        <input type="checkbox" id="checknav">
        <label for="checknav" class="checkbtn">


          <span class="material-symbols-outlined">
            menu
          </span>
        </label>
        <ul>
          <li>
            <RouterLink to="/" active-class="active">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/store" active-class="active">Shop</RouterLink>
          </li>
          <li>
            <RouterLink to="log-in" active-class="active">Login</RouterLink>
          </li>
          <li>
            <RouterLink to="/sign-up" active-class="active">SignUp</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>-->
  <header>
    <div class="container">
      <img src="../assets/logo_texto.png" class="logo">


      <div class="box" v-show="$route.path == '/store'">
        <input type="checkbox" id="check">
        <div class="search-box">
          <input type="text" placeholder="Type here...">
          <label for="check" class="icon">
            <span class="material-symbols-outlined">
              search
            </span>
          </label>
        </div>
      </div>

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



#check {
  display: none;
}

.box {
  max-width: 400px;
  width: 100%;
}

.box .search-box {
  position: relative;
  height: 50px;
  max-width: 50px;

  margin-left: auto;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  transition: all 0.3s ease;
}

#check:checked~.search-box {
  max-width: 400px;


}



.search-box input {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 25px;
  background: white;
  outline: none;
  border: none;
  padding-left: 20px;
  font-size: 18px;
}

.search-box .icon {
  background: white;
  position: absolute;
  font-weight: bold;
  right: -2px;
  top: 0;
  width: 50px;
  height: 100%;
  color: rgb(236, 108, 3);
  text-align: center;
  line-height: 65px;
  border-radius: 25px;
}

#check:checked~.search-box .icon {
  background: rgb(236, 108, 3);
  color: white;
  border-radius: 0 25px 25px 0;
  width: 60px;
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



@media (max-width: 952px) {

  nav ul li a {
    font-size: 16px;

  }
}
</style>