<template>
  <RouterLink :to="{ name: 'game', params: { nombre: juegos.nombre } }" class="product" v-for="juegos in juegos"
    :key="juegos.id">
    <img class="portada" :src="juegos.image">
    <div class="info">
      <h2 class="product-title">{{ juegos.nombre }}
        <img v-if="juegos.plataforma == 'PC'" src="../assets/pc.png">
        <img v-if="juegos.plataforma == 'Nintendo Switch'" src="../assets/nintendo.png">
        <img v-if="juegos.plataforma == 'PlayStation'" src="../assets/ps.png">
        <img v-if="juegos.plataforma == 'Xbox'" src="../assets/xbox.png">
      </h2>
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



<style scoped>
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

.product-title img {
  width: 30px;
}

.product .portada {
  border-radius: 10px;
  width: 100%;
}

.info {
  padding: 15px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-sizing: border-box;

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

@media only screen and (max-width: 767px) {
  .product {
    width: 400px;
    height: 200px;
    margin-left: 20px;
    font-size: 1em;
  }

  h2 {
    font-size: 1.3em;
  }
}
</style>