<template >
    <section>
        <MainHeader class="header-profile"></MainHeader>

        <div class="perfil">
            <article>
                <div class="select">
                    <button :style="{ backgroundColor: favGame ? 'rgb(226, 93, 3)' : 'initial' }" @click="favGameButton">Juegos
                        Favoritos</button>
                    <button :style="{ backgroundColor: myGame ? 'rgb(226, 93, 3)' : 'initial' }"
                        @click="myGameButton">MisJuegos</button>
                </div>
                <FavGame v-if="favGame == 1"></FavGame>
                <MyGame v-if="myGame == 1"></MyGame>

            </article>

            <aside>
                <div class="user-info">
                    <img src="../assets/user1.png">
                    <button>Cambiar</button>

                    <p>Username: {{ userName }}</p>
                    <p>Correo: {{ email }}</p>

                    <button @click="log_out" class="logout">Cerrar Sesión</button>
                </div>
            </aside>
        </div>
    </section>
</template>

<script>
import MainHeader from './MainHeader.vue';
import FavGame from './FavGame.vue';
import MyGame from './MyGame.vue';
import swal from 'sweetalert';
import { mapMutations, mapState } from 'vuex';
export default {
    name: "ProfilePage",
    components: { MainHeader, FavGame, MyGame },
    data() {
        return {
            favGame: 1,
            myGame: 0,


        }
    },
    computed: {
        ...mapState("auth", ["loggedIn", "userName", "iD", 'email']),
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

        favGameButton() {
            this.favGame = 1;
            this.myGame = 0;
        },
        myGameButton() {
            this.favGame = 0;
            this.myGame = 1;
        },

    },
    mounted() {
        if (!this.loggedIn) {
            this.$router.push('/login');
        }

    }
}

</script>

<style scoped>
.header-profile {
    position: relative;
    background-color: black;
}

.select {
    height: 60px;
    display: flex;
    justify-content: center;
}

.select button {
    width: 50%;
    background-color: rgb(30, 30, 30);
    color: white;
    font-size: 30px;
}

.active {
    background-color: rgb(226, 93, 3);
}


section {
    height: 100vh;
    width: 100%;
    overflow-y: hidden;

}

.perfil {
    height: 100%;
    width: 100%;
    display: flex;
    overflow-y: hidden;
}

.perfil article {
    width: 70%;
    height: 100vh;
    background-color: rgb(36, 35, 35);
    overflow: scroll;


}


.perfil aside {
    width: 30%;
    box-sizing: border-box;
    padding-top: 50px;
    background-color: rgb(46, 46, 44);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

aside img {
    width: 200px;
    border-radius: 100%;
}

.user-info {
    width: 60%;
    height: 70%;
    background-color: rgb(226, 93, 3);
    border-radius: 60px;
    font-size: 25px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.user-info button {

    border: none;
}

.user-info .logout {
    width: 30%;
    height: 50px;
    border-radius: 20px;
    margin-top: auto;
    margin-bottom: 50px;
    background-color: red;
    color: white;
    font-size: 20px;
    transition: 0.2s all;
}

.user-info .logout:hover {
    transform: scale(1.1);
}
</style>