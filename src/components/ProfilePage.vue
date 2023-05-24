<template>
    <section>
        <MainHeader class="header-profile"></MainHeader>

        <div class="perfil">
            <article>
                <div class="select">
                    <button>Juegos Favoritos</button>
                    <button>Mis Juegos</button>
                </div>
                <FavGame></FavGame>
                <FavGame></FavGame>
                <FavGame></FavGame>
                <FavGame></FavGame>
                <FavGame></FavGame>
                <FavGame></FavGame>
            </article>

            <aside>
                hola
            </aside>
        </div>
    </section>
</template>

<script>
import MainHeader from './MainHeader.vue';
import FavGame from './FavGame.vue';

export default {
    name: "ProfilePage",
    components: { MainHeader, FavGame }
}

</script>

<style scoped>
.header-profile {
    position: relative;
    background-color: black;
}

.select{
    height: 60px;
    display: flex;
    justify-content: space-around;
}

section {
    height: 100vh;
    width: 100%;
    background-color: violet;
    overflow-y: hidden;

}

.perfil {
    height: 100%;
    width: 100%;
    display: flex;
    background-color: blue;
    overflow-y: hidden;
}

.perfil article {
    width: 70%;
    height: 100vh;
    background-color: rgb(36, 35, 35);
    overflow: scroll;


}


.perfil aside {
    width: 30%;
    background-color: aquamarine;
}
</style>