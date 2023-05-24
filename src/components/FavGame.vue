<template>
    <div class="juegos-fav">
        <div class="port">
            <img src="../assets/btf4.jpg">
        </div>
        <h2>Battlefield 4</h2>
        <h1>60E</h1>
        <div class="iconos">
            <span title="Comprar" class="material-symbols-outlined">shopping_bag</span>
            <a title="Eliminar de favoritos" class="material-symbols-outlined">delete</a>
        </div>
    </div>
</template>
<script>


export default {
    name: 'FavGame',
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
}

.port img {
    height: 100%;
    width: 100%;
    border-radius: 30px;
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