<template>
    <section class="tienda">
        <div class="productos" id="productos">
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>

            <div class="product" v-for="juegos in juegos" :key="juegos.id">
                <img :src="juegos.image">
                <div class="info">
                    <h2 class="product-title">{{ juegos.nombre }}</h2>
                    <p><span class="old-price">{{ juegos.precio + "$" }}</span>
                        <span class="discount">{{ juegos.descuento }}</span><span class="new-price">{{
                            juegos.precio_descuento + "$" }}</span>
                    </p>
                </div>
            </div>
        </div>

    </section>
</template>


<script>
import axios from "axios";
import ProductContainer from '../components/ProductContainer.vue';

export default {
    name: 'StorePage',
    components: {
        ProductContainer,
    },
    data() {
        return {
            juegos: []
        }
    },
    mounted() {
        this.getJuegos();
    },
    methods: {
        getJuegos() {
            axios.get("http://localhost:3000/games")
                .then(res => {
                    this.juegos = res.data;
                })
        }
    }

}


</script>


<style>
.tienda {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/background.png');
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
    max-height: 100vh;
}


/**/

.product {
    width: 30%;
    height: 300px;
    background: rgba(0, 0, 0, 0.583);
    display: flex;
    flex-direction: column;
    color: white;
    margin: 10px;
    border-radius: 10px;
    transition: 0.3s all;

}

.product img {
    border-radius: 10px;
}

.info {
    padding: 15px;
}

p {
    margin-top: 10px;
}

h2 {
    font-size: 1em;
}

.old-price {
    text-decoration: line-through orange;
    font-size: 20px;
}

.discount {
    font-size: 30px;
    color: orange;
}

.new-price {
    font-size: 30px;
    color: orange;
}

p span {
    margin-right: 30%;
}

.product:hover {
    transform: scale(1.1);
}
</style>