<template>
    <MainHeader></MainHeader>
    <section>
        <div class="form-box">
            <div class="form-vale">
                <form @submit.prevent="singup">
                    <h2>Join our army</h2>
                    <div class="inputbox">
                        <span class="material-symbols-rounded">person</span>
                        <input type="text" required v-model="userData.email" pattern="[a-zA-Z0-9._%+-]+@gmail.com$"
                            title="Por favor, ingresa un correo de Gmail válido">
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <span class="material-symbols-rounded">lock</span>
                        <input type="text" required v-model="userData.username">
                        <label for="">Username</label>
                    </div>
                    <div class="inputbox">
                        <span class="material-symbols-rounded">lock</span>
                        <input type="password" required v-model="userData.passwd" pattern="(?=.*[A-Z]).{8,}"
                            title="La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula.">
                        <label for="">Password</label>
                    </div>
                    <button>Sign up</button>
                    <div class="register">
                        <p>Already have an account?<RouterLink to="login">Log in</RouterLink>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
import swal from 'sweetalert';
import Global from '@/global';
import MainHeader from './MainHeader.vue';

export default {
    name: "SignUp",
    data() {
        return {
            userData: {
                username: null,
                email: null,
                passwd: null
            }
        };
    },
    methods: {
        singup() {
            console.log(this.userData)
            axios.post(Global.url + "users/sing-up", this.userData)
                .then(() => {
                    swal("Registro completado", "Se te ha enviado un correo electrónico de verificación", "success");
                    this.$router.push("login");
                }).catch(error => {
                    swal("Error de registro", error.response.data, "error");
                });
        }
    },
    components: { MainHeader }
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