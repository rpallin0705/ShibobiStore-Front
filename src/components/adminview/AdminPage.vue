<template>
    <aside>
        <img class="logo" src="@/assets/swal_icon.png">
        <div class="section"><span class="material-symbols-outlined">person</span>Users</div>
        <div class="section"><span class="material-symbols-outlined">store</span>Games</div>
        <div class="section logout"><span class="material-symbols-outlined">logout</span>Logout</div>
    </aside>
</template>

<script>
export default {
    name: 'AdminPage',
}

</script>

<style>
aside {
    position: absolute;
    width: 10vh;
    height: 100vh;
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: .4s all;
}

aside:hover {
    width: 22vh;
}

.logo {
    width: 22vh;
    margin-bottom: 30px;
}

.material-symbols-outlined {
    font-size: 2em;
    margin-left: 25px;
}



.section {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 10px;
    transition: .4s all;
    font-size: 1.3em;
    font-family: 'Poppins';
}

.logout {
    margin-top: auto;
    margin-bottom: 20px;
}


.section:hover {
    background: rgb(228, 218, 218);
}
</style>