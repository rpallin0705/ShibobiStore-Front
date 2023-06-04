<template>
    <div class="usuario" v-for="usuarios in usuarios" :key="usuarios.id">
        <img src="@/assets/user1.png">
        <h2>{{ usuarios.username }}</h2>
        <h2>{{ usuarios.email }}</h2>
    </div>
</template>

<script>
export default {
    name: 'UsersAdmin',
    props: ['usuarios'],
}

</script>

<style >
.usuario {
    display: flex;
    align-items: center;
    border-radius: 50px;
    background:  rgb(59, 58, 58);
    gap: 200px;
    color: wheat;
}

.usuario:hover{
    background: red;

}

.usuario:first-child {
    margin-top: 30px;
}

.usuario:nth-child(odd) {
    background-color: rgb(59, 58, 58);
}

.usuario img {
    width: 80px;
    border-radius: 50px;
}
</style>