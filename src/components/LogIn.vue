<template>
    <div v-if="logged == null">
        <MainHeader></MainHeader>
        <section>
            <div v-if="!recuperarContraseña" class="form-box">
                <div class="form-vale">
                    <form @submit.prevent="login()">
                        <h2>Log in</h2>
                        <div class="inputbox">
                            <span class="material-symbols-rounded">person</span>
                            <input type="text" required v-model="userData.username">
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <span class="material-symbols-rounded">lock</span>
                            <input type="password" required v-model="userData.password">
                            <label for="">Password</label>
                        </div>
                        <div class="forget">
                            <label for=""><a @click="recuperarContraseña = 1" href="#">Forget Password</a></label>

                        </div>
                        <button>Log in</button>
                        <div class="register">
                            <p>Not registered?<RouterLink to="/sign-up">Join our army</RouterLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            <div v-else-if="recuperarContraseña" class="form-box">
                <div class="form-vale">
                    <form @submit.prevent="passwdReset()">
                        <h2>Reset</h2>
                        <div class="inputbox">
                            <span class="material-symbols-rounded">person</span>
                            <input type="text" required v-model="reset">
                            <label for="">Email</label>
                        </div>
                        <div class="forget">
                            <label for=""><a @click="recuperarContraseña = null" href="#">Log in</a></label>

                        </div>
                        <button>Send Email</button>

                    </form>
                </div>
            </div>


        </section>
    </div>
    <ErrorPage v-else></ErrorPage>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';
import Global from '@/global';
import swal from 'sweetalert';
import MainHeader from './MainHeader.vue';
import ErrorPage from './ErrorPage.vue';

export default {
    name: "LogIn",
    data() {
        return {
            userData: {
                username: "",
                password: ""
            },
            token: null,
            reset: null,
            recuperarContraseña: null,
            logged: null,

        };
    },
    computed: {
        ...mapState("auth", ["loggedIn", "userName", "iD"]),
    },

    mounted() {
        if (this.$route.params.token) {
            this.token = this.$route.params.token;
            this.verification();
        }
        this.logged = localStorage.getItem('sesionIniciada');
        if (this.logged != null) {
            this.$router.push('/store');
        }

    },
    methods: {
        ...mapMutations("auth", ["setLoggedIn", "setUser", "logout", "setUseriD", "setUserEmail", "setSysMaster"]),
        login() {

            // Lógica de inicio de sesión
            axios.post(Global.url + "users/login", this.userData)
                .then(res => {
                    swal("Sesión iniciada", "Las credenciales eran correctas", "success");
                    this.setLoggedIn(true);
                    this.setUser(res.data.username);
                    this.setUseriD(res.data.id);
                    this.setUserEmail(res.data.email);
                    this.setSysMaster(res.data.sysadmin);
                    console.log(localStorage.getItem('master'));
                    if (res.data.sysadmin) {
                        this.$router.push('/shinobi-administration');

                    } else {
                        this.$router.push('/store');
                    }
                }).catch(error => {
                    swal("Sesión fallida", error.response.data, "error");
                });
            //Después de verificar las credenciales del usuario
        },

        verification() {
            axios.post(Global.url + "users/verification/" + this.token)
                .then(() => {
                    swal("Usuario verificado", "Ya puedes inciar sesión", "success");

                });
        },

        passwdReset() {
            axios.post(Global.url + "users/passwd/" + this.reset)
                .then(() => {
                    swal("Email enviado", 'Correo enviado a ' + this.reset, "success");

                }).catch(error => {
                    swal("Email no encontrado", error.response.data, "error");
                });
        }
    },
    components: { MainHeader, ErrorPage }
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0';

section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background: url('../assets/background_login.png');
    background-size: cover;
    background-position: center;
}



.form-box {
    position: relative;
    top: -50px;
    width: 400px;
    height: 450px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
}






h2 {
    font-size: 2em;
    color: white;
    text-align: center;
}

.inputbox {
    position: relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid white;
}

.inputbox label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: white;
    font-size: 1em;
    pointer-events: none;
    transition: .5s;
}

input:focus~label,
input:valid~label {
    top: -5px;
}

.inputbox input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35px 0 5px;
    color: white;
}

.inputbox span {
    position: absolute;
    right: 8px;
    color: white;
    font-size: 1.2em;
    top: 20px;
}

.forget {
    margin: -15px 0 15px;
    font-size: .9em;
    color: white;
    justify-content: center;
    display: flex;
}

.forget label input {
    margin-right: 3px;
}

.forget label a {
    color: white;
    text-decoration: none;
}

.forget label a:hover {
    text-decoration: underline;
}

button {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
}

.register {
    font-size: .9em;
    color: white;
    text-align: center;
    margin: 25px 0 10px;
}

.register p a {
    text-decoration: none;
    color: white;
    font-weight: 600;
}

.register p a:hover {
    text-decoration: underline;
}
</style>