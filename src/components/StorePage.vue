<template>
    <section class="tienda">
        <div class="productos" id="productos">
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
            <ProductContainer></ProductContainer>
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
import ProductContainer from '../components/ProductContainer.vue';
export default {
    name: 'StorePage',
    components: {
        ProductContainer,
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
    position: fixed;
    padding-top: 100px;
    overflow-y: auto;
    max-height: 100vh;
}
</style>