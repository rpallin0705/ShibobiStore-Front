<template>
    <section>
        <MainHeader class="header-profile"></MainHeader>

        <article>
            <h2>Juegos Favoritos</h2>
            <div class="juegos-fav">
                <div class="port">
                    <img src="../assets/btf4.jpg">
                    <h2>Battlefield 4</h2>
                    <h1>60E</h1>
                </div>

                <div class="iconos">
                    <span class="material-symbols-outlined">shop</span>
                    <span class="material-symbols-outlined">delete</span>
                </div>
            </div>
            <div class="juegos-fav">
                <div class="port">
                    <img src="../assets/btf4.jpg">
                </div>
                <h2>Battlefield 4</h2>
                <h1>60E</h1>
                <div class="iconos">
                    <span class="material-symbols-outlined">shop</span>
                    <span class="material-symbols-outlined">delete</span>
                </div>
            </div>
            <div class="juegos-fav">
                <div class="port">
                    <img src="../assets/btf4.jpg">
                </div>
                <h2>Battlefield 4</h2>
                <h1>60E</h1>
                <div class="iconos">
                    <span class="material-symbols-outlined">shop</span>
                    <span class="material-symbols-outlined">delete</span>
                </div>
            </div>
            <div class="juegos-fav">
                <div class="port">
                    <img src="../assets/btf4.jpg">
                </div>
                <h2>Battlefield 4</h2>
                <h1>60E</h1>
                <div class="iconos">
                    <span class="material-symbols-outlined">shop</span>
                    <span class="material-symbols-outlined">delete</span>
                </div>
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
        "conte conte side";
    background-color: rgb(49, 226, 43);
    height: 100vh;
    grid-template-rows: 100px 1fr;

}

.header-profile {
    grid-area: head;
    position: relative;
    background-color: black;

}

article {
    height: 100%;
    
    grid-area: conte;
    background-color: rgb(255, 0, 0);
    overflow-y: scroll;

}

aside {
    background-color: violet;
    grid-area: side;

}

.juegos-fav {
    height: 30%;
    box-sizing: border-box;
    display: flex;
    align-items: center;



}

.juegos-fav .port {
    height: 70%;
    width: auto;
    display: flex;

}

.port img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50px;
}


.juegos-fav h2,
.juegos-fav h1,
.juegos-fav span {
    color: white;
}
</style>