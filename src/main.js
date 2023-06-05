import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import GamePage from './components/GamePage.vue'
import StorePage from './components/StorePage.vue'
import ProfilePage from './components/ProfilePage.vue'
import store from './userHandler'
import BuyPage from './components/BuyPage.vue'
import ResetPage from './components/ResetPage.vue'
import AdminPage from './components/adminview/AdminPage.vue'
import ErrorPage from './components/ErrorPage.vue'
//Rutas
const routes = [
  { path: '/', component: StorePage },
  { path: '/:catchAll(.*)', name: 'Error404', component: ErrorPage },
  { path: '/store', component: StorePage },
  { path: '/login', component: LogIn },
  { path: '/reset/:token', name: 'reset', component: ResetPage },
  { path: '/login/:token', name: 'login', component: LogIn },
  { path: '/sign-up', component: SignUp },
  { path: '/profile', component: ProfilePage },
  { path: '/shinobi-administration', component: AdminPage },
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







