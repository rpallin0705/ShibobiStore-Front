<template>
    <div class="my-games" v-for="myGame in myGames" :key="myGame.id">
        <div class="port">
            <img :src="myGame.game.image">
        </div>
        <h2>{{ myGame.game.nombre }}</h2>
        <h1>{{ myGame.game.precio - myGame.game.precio * myGame.game.descuento / 100 + "$" }}</h1>

        <p title="Eliminar de favoritos">{{ myGame.codigo }}</p>

    </div>
</template>
<script>
import { mapState } from 'vuex';
import axios from 'axios';
import Global from '../global';

export default {
    name: 'MyGame',
    computed: {
        ...mapState("auth", ["iD"]),
    },
    data() {
        return {
            myGames: [],
            usuario: {
                user: null
            }
        }
    },
    methods: {
        getMyGames() {
            this.usuario.user = this.iD;
            axios.post(Global.url + 'mygames/get', this.usuario)
                .then(res => {
                    console.log(res.data);
                    this.myGames = res.data;
                })
        },
    },
    mounted(){
        this.getMyGames();
    }
}

</script>

<style scoped>
.my-games {
    height: 200px;
    display: flex;
    padding-left: 50px;
    gap: 100px;
    align-items: center;
    text-align: center;
    box-sizing: border-box;
    color: white;
}

.my-games:nth-child(even) {
    background-color: grey;
}

.my-games:nth-child(odd) {
    background-color: rgb(155, 155, 155);
}

.port {
    height: 60%;
    width: 20%;
}

.port img {
    height: 100%;
    width: 100%;
    border-radius: 30px;
}


.my-games p {
    font-size: 30px;
    margin-left: auto;
    margin-right: 30px;


}


.iconos a:hover {
    transform: scale(1.05);
}

.iconos span:hover {
    transform: scale(1.05);
}
</style>