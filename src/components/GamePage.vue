<template>
    <MainHeader></MainHeader>
    <section>
        <div class="foto-slider">
            <img :src="juego.image_port">
        </div>
        <div class="items">
            <img class="item" :src="juego.image">
            <div class="product-info">
                <h3>{{ juego.id }}
                    <img v-if="juego.plataforma == 'PC'" src="../assets/pc.png">
                    <img v-if="juego.plataforma == 'Nintendo Switch'" src="../assets/nintendo.png">
                    <img v-if="juego.plataforma == 'PlayStation'" src="../assets/ps.png">
                    <img v-if="juego.plataforma == 'Xbox'" src="../assets/xbox.png">
                </h3>
                <div class="sub-info">
                    <h2 v-if="juego.n_stock >= 10">En stock</h2>
                    <h2 v-if="juego.n_stock < 10 && juego.n_stock != 0">Pocas unidades en stock</h2>
                    <h2 v-if="juego.n_stock == 0">Sin stock</h2>
                </div>
                <div class="precios">
                    <p><span class="old-price">{{ juego.precio }}$</span><span class="discount">{{
                        juego.descuento }}%</span><span class="new-price">{{ juego.precio -
        juego.precio * juego.descuento / 100 }}$</span>
                    </p>
                </div>
                <div class="shopping">-
                    <a @click="addFavGames" class="cart"><span class="material-symbols-outlined">favorite</span></a>
                    <a href="·" class="buy-now">Comprar ahora</a>
                </div>
            </div>

        </div>
        <div class="desc">
            <p>{{ juego.descripcion }}
            </p>
        </div>
    </section>
</template>
<script lang="js">
import axios from 'axios';
import Global from '@/global';
import MainHeader from './MainHeader.vue';
import { mapState } from 'vuex';
import swal from 'sweetalert';

export default {
    name: "GamePage",
    data() {
        return {
            juego: [],
            userData: {
                user: null,
                game: null
            }
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
                });
        },
        addFavGames() {
            this.userData.game = this.juego.id;
            this.userData.user = this.iD;
            console.log(this.userData);
            axios.post(Global.url + 'fav-games', this.userData)
                .then(() => {
                    swal("Juego añadido", this.juego.nombre + 'Añadido de tu lista de favoritos', "success");
                }).catch(error => {
                swal("El juego ya está en tu lista", error.response.data, "error");
            });


        }
    },
    components: { MainHeader }
}
</script>
<style scoped>
section {
    width: 100%;
    height: 100vh;
    background: rgb(58, 53, 53);
}

.foto-slider {
    width: 100%;
    height: 50vh;
    display: flex;
}

.foto-slider img {
    flex-shrink: 0;
    min-width: 100%;
    max-height: 100%;
}

.product-info h3 img {
    width: 30px;

}

.items {
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    top: -120px;

}

.item {
    max-width: 30%;
    height: 300px;
    padding: 0;
    margin: 0 35px;
    border-radius: 20px;

}

.product-info {
    width: 30%;
    max-width: 40%;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.281);
    border-radius: 25px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    padding: 10px;

}

.product-info h3 {
    font-size: 35px;
    color: white;

}

.product-info h3 span {
    font-size: 35px;
    color: white;
    margin-left: 40px;

}



.sub-info {
    width: 60%;
    display: inline-block;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.281);
    padding: 30px;
    color: white;
}

.precios {
    width: 100%;
    margin-top: 30px;
    color: white;
    text-align: center;

}

.precios span {
    padding: 5px;
}

.old-price {
    text-decoration: line-through;
    font-size: 30px;


}

.discount {
    color: orange;
    font-size: 30px;

}

.new-price {
    font-size: 50px;
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
    width: 100%;
    word-wrap: break-word;
    color: white;
    font-size: 2em;
    text-align: center;
}
</style>