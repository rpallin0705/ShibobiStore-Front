import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
//import StorePage from './components/StorePage.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import GamePage from './components/GamePage.vue'
import StorePage from './components/StorePage.vue'
import ProfilePage from './components/ProfilePage.vue'
import store from './userHandler'
import BuyPage from './components/BuyPage.vue'

//Rutas
const routes = [
  { path: '/', component: HomePage },
  { path: '/home', component: HomePage },
  { path: '/store', component: StorePage },
  { path: '/login', component: LogIn },
  { path: '/login/:token', name: 'login', component: LogIn },
  { path: '/sign-up', component: SignUp },
  { path: '/profile', component: ProfilePage },
  { path: '/game/:nombre', name: 'game', component: GamePage },
  { path: '/buy/:nombres', name: 'buy', component: BuyPage },
]

//Crear objeto rutas

const router = createRouter({
  history: createWebHistory(),
  routes
})


//instancia de Vue
const app = createApp(App)
app.use(store);
app.use(router)
  .mount('#app')







