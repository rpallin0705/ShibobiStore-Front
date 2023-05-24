<template>
    <section>
        <MainHeader class="header-profile"></MainHeader>

        <article>
            <h2>Juegos Favoritos</h2>
            <div class="juegos-fav">
                <img src="../assets/btf4.jpg">
                <h1>Battlefield 4</h1>
                <h1>60E</h1>
                <span class="material-symbols-outlined">shop</span>
            </div>
            <div class="juegos-fav">
                <img src="../assets/btf4.jpg">
                <h1>Battlefield 4</h1>
                <h1>60E</h1>
                <span class="material-symbols-outlined">shop</span>
            </div>
            <div class="juegos-fav">
                <img src="../assets/btf4.jpg">
                <h1>Battlefield 4</h1>
                <h1>60E</h1>
                <span class="material-symbols-outlined">shop</span>
            </div>
        </article>

        <aside>
            hola
        </aside>
    </section>
</template>

<script>
import MainHeader from './MainHeader.vue';

export default {
    name: "ProfilePage",
    components: { MainHeader }
}

</script>

<style scoped>
* {

    outline: 2px solid white;
}

section {
    display: grid;
    grid-template-areas:
        "head head head"
        "content content aside";
    background-color: blueviolet;
    height: 100vh;

}

.header-profile {
    grid-area: head;
    position: relative;
    background-color: black;
}

article {
    grid-area: content;
    background-color: rgb(255, 0, 0);
    overflow-y: scroll;
}

aside {
    grid-area: aside;
}

.juegos-fav {
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: center;
}
</style>