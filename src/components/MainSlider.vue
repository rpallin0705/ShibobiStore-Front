<template>
  <section class="slider">
    <div class="content">
      <div class="bienvenida">
        <h1>Bienvenido/a a Shinobi Store </h1>
        <h3 v-if="loggedIn != false"> {{ userName }}, te echabamos de menos</h3>
      </div>
      <div class="btn">
        <img src="../assets/logo.png" alt="" class="logo">
        <RouterLink to="store"><button>IR A LA TIENDA</button></RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'MainSlider',
  computed: {
    ...mapState('auth', ['loggedIn', 'userName']),
  },
  mounted() {
    console.log(this.loggedIn);
  }
};


</script>
<style scoped>
.slider {
  height: 100vh;
  background: url('../assets/shop_back.png') no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

}

.content {
  position: relative;
  top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.bienvenida {
  top: 30%;
  text-align: center;
  color: white;
  font-size: 50px;
}

/*boton*/
.btn {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
  top: -50px;
}


.btn button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #E0E0E0;
  color: #444444;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease-in-out;
  animation: bounce 1.3s infinite;
  cursor: pointer;


}

@keyframes bounce {
  0% {
    transform: scale(0.9)
  }

  70% {
    transform: scale(1)
  }

  100% {
    transform: scale(0.9)
  }
}

.btn button:hover {
  background-color: #ff9100;
  box-shadow: 0px 5px 10px rgba(255, 165, 0, 0.5);
  color: #ffffff;
}

.logo {
  width: 500px;
  height: 500px;
}
</style>