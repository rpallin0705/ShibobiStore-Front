import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './components/HomePage.vue'
//import StorePage from './components/StorePage.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import GamePage from './components/GamePage.vue'
import ProductContainer from './components/ProductContainer.vue'

import axios from "axios";


//Rutas
const routes =[
    {path: '/', component: HomePage},
    {path: '/home', component: HomePage},
    {path: '/store', component: ProductContainer},
    {path: '/log-in', component: LogIn},
    {path: '/sign-up', component: SignUp},
    {path: '/game', component: GamePage},


]

//Crear objeto rutas

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const url = 'http://localhost:3000/games';

export let juegos = [];
axios.get(url)
  .then(function (response) {
    // La respuesta exitosa se encuentra en response.data
    juegos = response.data;
    console.log(juegos[0].nombre);

  })
  .catch(function (error) {
    // En caso de error, se puede acceder al mensaje de error a través de error.message
    console.error(error.message);
  });




//instancia de Vue
const app = createApp(App)

/*
import { juegos } from './global_games'
app.config.globalProperties.$juegos = juegos; 
alert(juegos)
*/

app.use(router)

.mount('#app')


