<template>
    <div class="juegos-fav" v-for="favGame in favGames" :key="favGame.id">
        <RouterLink :to="{ name: 'game', params: { nombre: favGame.game.nombre } }" class="port">
            <img :src="favGame.game.image">
        </RouterLink>
        <RouterLink :to="{ name: 'game', params: { nombre: favGame.game.nombre } }" class="h2">{{ favGame.game.nombre }}
        </RouterLink>
        <h1>{{ favGame.game.precio - favGame.game.precio * favGame.game.descuento / 100 + "$" }}</h1>
        <div class="iconos">
            <span title="Comprar" class="material-symbols-outlined">shopping_bag</span>
            <a title="Eliminar de favoritos" class="material-symbols-outlined"
                @click="deleteFavGames(favGame.game.id)">delete</a>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Global from '../global';
import { mapState } from 'vuex';
import swal from 'sweetalert';

export default {
    name: 'FavGame',
    data() {
        return {
            favGames: [],
            userData: {
                user: null,
                game: null
            },
            usuario:{
                user: null
            }
        }
    },
    computed: {
        ...mapState("auth", ["iD"]),
    },
    methods: {
        getFavGames() {
            this.usuario.user = this.iD;
            axios.post(Global.url + 'fav-games/get', this.usuario)
                .then(res => {
                    this.favGames = res.data;
                })
        },
        deleteFavGames(gId) {
            this.userData.game = gId;
            this.userData.user = this.iD;
            console.log(this.userData);
            axios.post(Global.url + 'fav-games/delete', this.userData)
                .then(() => {
                    this.getFavGames();
                    swal("Juego eliminado", 'Juego borrado de tu lista de favoritos', "success");
                });


        }
    },
    mounted() {
        this.getFavGames()
    }
}

</script>

<style scoped>
.juegos-fav {
    height: 200px;
    display: flex;
    padding-left: 50px;
    gap: 100px;
    align-items: center;
    box-sizing: border-box;
    color: white;
}

.juegos-fav:nth-child(even) {
    background-color: grey;
}

.juegos-fav:nth-child(odd) {
    background-color: rgb(155, 155, 155);
}

.port {
    height: 60%;
    width: 20%;
    transition: 0.4s all;
}

.port img {
    height: 100%;
    width: 100%;
    border-radius: 30px;
}

.port:hover {
    transform: scale(1.1);

}

.h2 {
    color: white;
    font-size: 25px;
    transition: 0.4s all;
}

.h2:hover {
    transform: scale(1.1);
}

.iconos {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    gap: 10px;
    height: 50%;
    width: 20%;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: 50px;

}


.iconos span {
    text-align: center;
    line-height: 70px;
    width: 100%;
    height: 70%;
    font-size: 50px;
    color: white;
    background-color: rgb(253, 130, 15);
    border-radius: 30px;
    transition: 0.3s all;
    cursor: pointer;
}

.iconos a {
    text-align: center;
    line-height: 70px;
    width: 100%;
    height: 70%;
    font-size: 50px;
    color: white;
    background-color: red;
    border-radius: 30px;
    transition: 0.3s all;
    cursor: pointer;


}

.iconos a:hover {
    transform: scale(1.05);
}

.iconos span:hover {
    transform: scale(1.05);
}
</style>