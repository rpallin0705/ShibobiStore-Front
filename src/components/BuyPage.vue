<template>
    <MainHeader class="header-buy"></MainHeader>
    <div class="section">
        <img class="portada"
            src="https://gaming-cdn.com/images/products/6690/616x353/battlefield-2042-pc-juego-origin-cover.jpg?v=1644708475">
        <h1>Battlefield 2042 </h1>
        <img src="../assets/pc.png">
        <h2>60e</h2>
    </div>
    <div class="pago">
        <form>
            <label for="nombre-titular">Nombre del titular:</label>
            <input type="text" id="nombre-titular" name="nombre-titular" required><br><br>

            <label for="numero-tarjeta">Número de tarjeta:</label>
            <input type="text" id="numero-tarjeta" name="numero-tarjeta" required><br><br>

            <label for="fecha-expiracion">Fecha de expiración:</label>
            <input type="text" id="fecha-expiracion" name="fecha-expiracion" required><br><br>

            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required><br><br>

            <input type="submit" value="Enviar">
        </form>
    </div>
</template>
<script>
import MainHeader from './MainHeader.vue';

export default {
    name: "BuyPage",
    components: { MainHeader }
}
</script>

<style scoped>
/* * {
    outline: solid 1px red;
} */

.header-buy {
    position: relative;
    background-color: black;
}

.section {
    position: relative;
    width: 100%;
    height: calc(30vh);
    background: url("https://gaming-cdn.com/img/products/6690/pcover/1400x500/6690.jpg?v=1644708475");
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
    object-fit: cover;
    border-radius: 30px;
}

img {
    width: 30px;
    border-radius: 30px;
}

.pago {
    height: calc(100vh - 100px - 30vh);
    background-color: aqua;
}


</style>