<template>
    <div v-if="juegos">
        <MainHeader>
            <div class="box">
                <input type="checkbox" id="check">
                <div class="search-box">
                    <input class="input" type="text" placeholder="Type here...">
                    <label for="check" class="icon">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </label>
                </div>
            </div>
        </MainHeader>
        <section class="tienda">
            <div class="productos" id="productos">
                <ProductContainer class="producto" :juegos="juegos"></ProductContainer>
            </div>

        </section>
    </div>

    <ErrorPage v-if="!juegos"></ErrorPage>
</template>


<script>
import Global from '../global';
import axios from "axios";
import ProductContainer from '../components/ProductContainer.vue';
import MainHeader from './MainHeader.vue';
import ErrorPage from './ErrorPage.vue';


export default {
    name: 'StorePage',
    components: {
        ProductContainer,
        MainHeader,
        ErrorPage
    },
    data() {
        return {
            juegos: null,
            url: Global.url
        }
    },
    mounted() {
        this.getJuegos();


    },

    methods: {
        getJuegos() {
            axios.get(this.url + "games")
                .then(res => {
                    this.juegos = res.data;

                })
        },
        isSysmaster() {
            if (localStorage.getItem('master')) {
                this.$router.push('/shinobi-administration');
            }
        }
    }

}


</script>


<style scoped>
.tienda {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/shop_back.png');
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
    background-size: cover;
    background-position: center;
}

.productos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 100px;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100vh;
}

.box {
    max-width: 400px;
    width: 100%;
}

.box .search-box {
    position: relative;
    height: 50px;
    max-width: 50px;
    margin-left: auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    transition: .5s all;
}

#check:checked~.search-box {
    max-width: 5000px;



}



.search-box input {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    background: white;
    outline: none;
    border: none;
    padding-left: 20px;
    font-size: 18px;
    transition: 0.5s all;

}

.search-box .icon {
    background: white;
    position: absolute;
    font-weight: bold;
    right: -2px;
    top: 0;
    width: 50px;
    height: 100%;
    color: rgb(236, 108, 3);
    text-align: center;
    line-height: 65px;
    border-radius: 25px;
    transition: 0.5s all;

}


#check:checked~.search-box .icon {
    background: rgb(236, 108, 3);
    color: white;
    border-radius: 0 25px 25px 0;
    width: 60px;
}

#check {
    display: none;
}


</style>