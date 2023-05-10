<template>
    <section class="mostFeatured">
        <div class="btn">
            <img src="../assets/logo.png" alt="" class="logo">
            <button>IR A LA TIENDA</button>
        </div>
        <div class="productos">
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
        </div>
    </section>
</template>
<script>
import ProductContainer from './ProductContainer.vue';
export default {
    name: 'MainStore',

    components: {
        ProductContainer
    },
}


</script>
<style>
.mostFeatured {
    width: 100%;
    height: auto;
    background-image: url('../assets/background.png');
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    overflow: scroll;
}

.productos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.btn {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    top: -50px;
}


.btn button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: #E0E0E0;
    color: #444444;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease-in-out;
    animation: bounce 1.3s infinite;
    cursor: pointer;


}

@keyframes bounce {
    0% {
        transform: scale(0.9)
    }

    70% {
        transform: scale(1)
    }

    100% {
        transform: scale(0.9)
    }
}

.btn button:hover {
    background-color: #ff9100;
    box-shadow: 0px 5px 10px rgba(255, 165, 0, 0.5);
    color: #ffffff;
}

.logo {
    width: 500px;
    height: 500px;
}
</style>