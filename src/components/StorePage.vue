<template>
    <MainHeader></MainHeader>
    <section class="tienda">
        <div class="productos" id="productos">
            <ProductContainer :juegos="juegos"></ProductContainer>
        </div>

    </section>
</template>


<script>
import Global from '../global';
import axios from "axios";
import ProductContainer from '../components/ProductContainer.vue';
import MainHeader from './MainHeader.vue';

export default {
    name: 'StorePage',
    components: {
    ProductContainer,
    MainHeader
},
    data() {
        return {
            juegos: [],
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
    overflow-x:hidden;
    max-height: 100vh;
}


/**/
</style>