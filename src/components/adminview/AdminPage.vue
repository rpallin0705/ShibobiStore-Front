<template>
    <div v-if="master != null" class="pagina">
        <aside>
            <img class="logo" src="@/assets/swal_icon.png">
            <div class="section"><span class="material-symbols-outlined">person</span>Users</div>
            <div class="section"><span class="material-symbols-outlined">store</span>Games</div>
            <div class="section logout"><span class="material-symbols-outlined">logout</span>Logout</div>
        </aside>
        <section>

            <div class="contenido">
                <UsersAdmin :usuarios="users"></UsersAdmin>
            </div>
        </section>
    </div>
    <ErrorPage v-else></ErrorPage>
</template>

<script>
import axios from 'axios';
import UsersAdmin from './UsersAdmin.vue';
import Global from '@/global';
import ErrorPage from '../ErrorPage.vue';
import CustomIcon from '@/assets/swal_icon.png';
import swal from 'sweetalert';

export default {
    name: "AdminPage",
    components: { UsersAdmin, ErrorPage },
    data() {
        return {
            users: [],
            master: null
        }
    },
    methods: {
        getUsers() {
            axios.get(Global.url + 'users')
                .then(response => {
                    this.users = response.data;
                    console.log(this.users)
                }).catch(error => {
                    console.log(error.response.data);
                })
        }
    },
    mounted() {
        if (this.sysmaster) {
            swal(
                'Bienvenido Administrador',
                '',
                CustomIcon
            )
        }
        this.getUsers();
        this.master = localStorage.getItem('master');
    },
    computed: {
    },

}

</script>

<style scoped>
.pagina {
    background: rgba(0, 0, 0, 0.843);

}


.contenido {
    position: relative;
    left: 22vh;
    width: calc(100% - 22vh);
    height: 100vh;
    display: flex;
    flex-direction: column;


}



aside {
    position: absolute;
    width: 10vh;
    height: 100vh;
    background: rgb(255, 85, 0);
    display: flex;
    border-radius: 0 20px 20px 0;
    flex-direction: column;
    overflow: hidden;
    transition: .4s all;
    z-index: 1000;
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
    gap: 65px;
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
    background: rgb(255, 150, 63);
}
</style>