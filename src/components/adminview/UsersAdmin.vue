<template>
    <div class="usuarios" v-for="usuarios in usuarios" :key="usuarios.id">
        <div class="usuario">
            <img src="@/assets/user1.png">
            <div class="info">
                <h2>{{ usuarios.username }}</h2>
            </div>
            <div class="info">
                <h2>{{ usuarios.email }}</h2>
            </div>
        </div>
        <form class="formulario" @submit.prevent="">

            <div class="inputbox">
                <span class="material-symbols-rounded">person</span>
                <input type="text" :placeholder="usuarios.username">
            </div>
            <div class="inputbox">
                <span class="material-symbols-rounded">email</span>
                <input type="text" :placeholder="usuarios.email">
            </div>

            <button>Cambiar</button>

        </form>
    </div>
</template>

<script>
export default {
    name: 'UsersAdmin',
    props: ['usuarios'],
}

</script>

<style scoped>
.formulario {
    display: flex;
}

.usuarios {
    height: 80px;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    background: rgb(59, 58, 58);
    gap: 50px;
    color: wheat;
    overflow: hidden;
    transition: .4s all;
}

.usuario {
    display: flex;
    align-items: center;
    border-radius: 50px;

    gap: 50px;
    color: wheat;

}

.formulario {
    margin-left: 150px;
    display: flex;
    gap: 60px;
    align-items: center;
    text-align: center;
}

.formulario button {
    width: 100px;
    height: 50px;
    border-radius: 30px;
    background: orange;
    border: none;
    transition: .4s all;

}

.formulario button:hover {
    transform: scale(1.1);

}


.inputbox {
    display: flex;
    height: 50px;
    align-items: center;
    text-align: center;
}

.inputbox input {
    width: 300px;
    height: 50px;
    border-radius: 30px;
    text-align: center;
    font-size: 15px;
}

.material-symbols-rounded {
    font-size: 50px;
}

.usuarios:hover {
    height: 200px;
}

.info {
    width: 30%;
}



.usuarios:first-child {
    margin-top: 30px;
}

.usuarios:nth-child(odd) {
    background-color: rgb(94, 89, 89);
}

.usuarios img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
}
</style>