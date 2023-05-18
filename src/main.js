import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './components/HomePage.vue'
import StorePage from './components/StorePage.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import GamePage from './components/GamePage.vue'

//Rutas
const routes =[
    {path: '/', component: HomePage},
    {path: '/home', component: HomePage},
    {path: '/store', component: StorePage},
    {path: '/log-in', component: LogIn},
    {path: '/sign-up', component: SignUp},
    {path: '/game', component: GamePage},


]

//Crear objeto rutas

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//instancia de Vue
const app = createApp(App)

app.use(router)

.mount('#app')
