<template>
    <div class="pagina" v-if="juego">
        <MainHeader></MainHeader>

        <div class="foto-slider">
            <img :src="juego.image_port">
        </div>
        <div class="items">
            <img class="item" :src="juego.image">
            <div class="product-info">
                <div class="info">
                    <h3>{{ juego.nombre }} </h3>
                    <img v-if="juego.plataforma == 'PC'" src="../assets/pc.png">
                    <img v-if="juego.plataforma == 'Nintendo Switch'" src="../assets/nintendo.png">
                    <img v-if="juego.plataforma == 'PlayStation'" src="../assets/ps.png">
                    <img v-if="juego.plataforma == 'Xbox'" src="../assets/xbox.png">
                </div>
                <div class="sub-info">
                    <h2 v-if="juego.n_stock >= 10">En stock</h2>
                    <h2 v-if="juego.n_stock < 10 && juego.n_stock != 0">Pocas unidades en stock</h2>
                    <h2 v-if="juego.n_stock == 0">Sin stock</h2>
                </div>
                <div class="precios">
                    <span class="old-price">{{ juego.precio }}$</span>
                    <span class="discount">{{ juego.descuento }}%</span>
                    <span class="new-price">{{ juego.precio -
                        juego.precio * juego.descuento / 100 }}$</span>
                </div>
                <div class="shopping">
                    <a @click="addFavGames" class="cart"><span class="material-symbols-outlined">favorite</span></a>
                    <a @click="compra" class="buy-now">
                        Comprar ahora</a>
                </div>
            </div>

        </div>
        <div class="desc">
            <p>{{ juego.descripcion }}
            </p>
        </div>

    </div>

    <ErrorPage v-else></ErrorPage>
</template>

<script lang="js">
import axios from 'axios';
import Global from '@/global';
import MainHeader from './MainHeader.vue';
import { mapState } from 'vuex';
import swal from 'sweetalert';
import ErrorPage from './ErrorPage.vue';

export default {
    name: "GamePage",
    data() {
        return {
            juego: null,
            userData: {
                user: null,
                game: null
            },
        };
    },
    computed: {
        ...mapState("auth", ["iD"]),
    },
    mounted() {
        this.getJuego();
    },
    methods: {
        getJuego() {
            const nombre = this.$route.params.nombre;
            axios.post(Global.url + "games/" + nombre)
                .then(response => {
                    // La respuesta del servidor
                    this.juego = response.data;
                }).catch(() => {
                    this.juego = null;
                });
        },
        addFavGames() {
            if (!localStorage.getItem('id')) {
                this.$router.push('/login');
            } else {
                this.userData.game = this.juego.id;
                this.userData.user = this.iD;
                axios.post(Global.url + 'fav-games', this.userData)
                    .then(() => {
                        swal("Juego añadido", this.juego.nombre + 'Añadido de tu lista de favoritos', "success");
                    }).catch(error => {
                        swal("El juego ya está en tu lista", error.response.data, "error");
                    });
            }

        },
        compra() {
            if (!localStorage.getItem('id')) {
                this.$router.push('/login');
            } else {
                this.$router.push({ name: 'buy', params: { nombres: this.juego.nombre } });
            }
        }
    },
    components: { MainHeader, ErrorPage }
}
</script>

<style scoped>
.pagina {
    width: 100%;
    height: 100vh;
    background: rgb(58, 53, 53);
    overflow: hidden;
}

.foto-slider {
    position: absolute;
    width: 100%;
    height: 50%;
}

.foto-slider img {
    width: 100%;
    height: 100%;
}

.items {
    position: relative;
    top: 30%;
    display: flex;
    justify-content: center;
    gap: 10%;

}

.items img {
    width: 30%;
    border-radius: 30px;
}


.product-info {
    width: 30%;
    border-radius: 30px;
    display: flex;
    gap: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.418);
    color: white;
    font-size: 16px;
}

.info {
    display: flex;
    background-color: rgba(0, 0, 0, 0.622);
    border-radius: 30px;
    text-align: center;
    align-items: center;
    gap: 10px;
    font-size: 2em;
}

.info img {
    width: 50px;
}


.sub-info {
    width: 70%;
    height: 30%;
    background: rgba(0, 0, 0, 0.582);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

}

.precios {
    display: flex;
    text-align: center;
    align-items: center;
    gap: 70px;
}

.shopping {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;

}

.buy-now {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    background: rgb(165, 90, 4);
    border-radius: 20px;
    font-size: 30px;
    color: white;
    transition: 0.4s all;

}

.cart {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
    background: rgb(165, 90, 4);
    margin-right: 15px;
    border-radius: 20px;
    transition: 0.4s all;
}

.cart span {
    font-size: 50px;
    color: white;
}

.cart:hover,
.buy-now:hover {
    transform: scale(1.1);
}


.desc {
    justify-content: center;
    text-align: center;
    color: wheat;
    font-size: 34px;
    position: relative;
    margin-top: 400px;
}
</style>

