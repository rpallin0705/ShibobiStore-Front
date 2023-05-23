<template>
  <RouterLink :to="{ name: 'game', params: { nombre: juegos.nombre } }" class="product"
    v-for="juegos in juegos" :key="juegos.id">
    <img :src="juegos.image">
    <div class="info">
      <h2 class="product-title">{{ juegos.nombre }}</h2>
      <p><span class="old-price">{{ juegos.precio + "$" }}</span>
        <span class="discount">{{ juegos.descuento + "%" }}</span><span class="new-price">
          {{ juegos.precio - juegos.precio * juegos.descuento / 100 + "$" }}</span>
      </p>
    </div>
  </RouterLink>
</template>

<script>

export default {
  name: 'ProductContainer',
  props: ['juegos']

}

</script>



<style >
.product {
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  color: white;
  margin-right: 40px;
  border-radius: 10px;
  transition: 0.3s all;
  margin-bottom: 200px;

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
  font-size: 1.8em;
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