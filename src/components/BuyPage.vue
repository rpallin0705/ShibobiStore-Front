<template>
    <MainHeader class="header-buy"></MainHeader>
    <div class="section" :style="backgroundStyle">
        <img class="portada" :src="juego.image">
        <h1>{{ juego.nombre }} </h1>
        <img src="../assets/pc.png">
        <h2>{{ juego.precio -
            juego.precio * juego.descuento / 100 }}$</h2>
    </div>
    <div class="pago">
        <div class="formulario">
            <form id="credit-card" @submit.prevent="addTarjeta()">
                <div class="number-container">
                    <label for="numero-tarjeta">Número de tarjeta:</label>
                    <input type="text" id="numero-tarjeta" name="numero-tarjeta" maxlength="19"
                        placeholder="1234-5678-9101-1121" required
                        onkeypress="return (event.charCode >= 48 && event.charCode <= 57) || event.charCode === 45"
                        pattern="\d{4}-\d{4}-\d{4}-\d{4}" v-model="tarjeta.numero">
                </div>
                <div class="name-container">
                    <label for="numero-tarjeta">Nombre:</label>
                    <input type="text" id="name-text" name="name-text" maxlength="30" placeholder="JUAN PALOMO" required
                        onkeypress="return(event.charCode > 64 && event.charCode < 91 )|| (event.charCode >96 && event.charCode <123) || event.key == ' '"
                        v-model="tarjeta.nombre">
                </div>
                <div class="infos-container">
                    <div class="expiration-container">
                        <label for="numero-tarjeta">Fecha exp.</label>
                        <input type="text" id="valid-thru-text" name="valid-thru-text" maxlength="5" placeholder="MM/YY"
                            required pattern="(0[1-9]|1[0-2])\/\d{2}" v-model="tarjeta.fecha">
                    </div>
                    <div class="cvv-container">
                        <label for="numero-tarjeta">CVV</label>
                        <input type="text" id="cvv-text" name="cvv-text" maxlength="3" placeholder="123" required
                            onkeypress="return event.charCode >= 48 &&
                        event.charCode <=57" pattern="\d{3}" v-model="tarjeta.cvv">
                    </div>
                </div>

                <input type="submit" value="ADD" id="add">
            </form>
        </div>
        <div class="select-card">
            <form class="cards">
                <div class="card">
                    <input type="radio" name="row1" value="option1">
                    <p>Tarjeta terminada en...</p>
                    <p>...XXXX</p>
                </div>
            </form>
            <input type="submit" value="Realizar Pago">
        </div>
    </div>
</template>
<script>
import MainHeader from './MainHeader.vue';
import axios from 'axios';
import Global from '@/global';

export default {
    name: "BuyPage",
    components: { MainHeader },
    data() {
        return {
            juego: [],
            tarjeta: {
                numero: null,
                nombre: null,
                fecha: null,
                cvv: null,
            }

        }
    },
    mounted() {
        this.getPrecio();
    },
    methods: {
        getPrecio() {

            const nombre = this.$route.params.nombres;
            axios.post(Global.url + "games/" + nombre)
                .then(response => {
                    // La respuesta del servidor
                    this.juego = response.data;
                });
        },
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${this.juego.image_port})`,
            };
        },
    },



}
</script>

<style scoped>
.header-buy {
    position: relative;
    background-color: black;
}

.section {
    position: relative;
    width: 100%;
    height: calc(40vh);
    background-size: cover;
    display: flex;
    align-items: center;
    text-align: center;
    gap: 20px;
    color: white;
}

.section .portada {
    width: 30%;
    height: 60%;
    object-fit: fill;
    border-radius: 30px;
}

img {
    width: 30px;
    border-radius: 30px;
}

.pago {
    height: calc(100vh - 100px - 40vh);
    background-color: rgb(29, 29, 29);
    display: flex;
    align-items: center;
}

.formulario {
    width: 40%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    display: flex;
    justify-content: center;
    align-items: center;
}

#credit-card {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 1.1rem;
    color: white;
    text-transform: uppercase;
}

.number-container,
.name-container {
    display: flex;
    flex-direction: column;
}

.expiration-container,
.cvv-container {
    width: 50%;
    display: flex;
    flex-direction: column;
}

input {
    background: rgb(80, 80, 80);
    border: 0;
    border-radius: 5px;
    padding: 10px;
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    outline: 0;
    width: 90%;
}


input[type="text"]:focus {
    border: 1px solid #95B8D1
}

input#valid-thru-text,
input#cvv-text {
    width: 80%;
}

input[type="submit"] {
    width: 95%;
    background-color: rgb(255, 115, 0);
    cursor: pointer;
    transition: 0.4s all
}

input[type="submit"]:hover {

    transform: scale(1.1);

}

.infos-container {
    display: flex
}

.select-card {
    width: 60%;
    height: 100%;
    padding-top: 60px;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}

.select-card input {
    width: 50%;
    margin-top: 7px;
    height: 40px;
    background-color: rgb(255, 123, 0);
}

.cards {
    width: 70%;
    height: 70%;
    overflow-y: scroll;
    background-color: rgb(49, 49, 49);
    border-radius: 20px;

}

.card {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
    margin-top: 4px;
}

.card p {
    margin: 0
}

.card input[type="radio"] {
    width: 50px;
    height: 20px;
}
</style>