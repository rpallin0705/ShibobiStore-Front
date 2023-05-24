<template>
    <div class="my-games">
        <div class="port">
            <img src="../assets/btf4.jpg">
        </div>
        <h2>Battlefield 4</h2>
        <h1>60E</h1>

        <p title="Eliminar de favoritos">XXXX-XXXX-XXXX</p>

    </div>
</template>
<script>


export default {
    name: 'MyGame',
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


.my-games p{
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