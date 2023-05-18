<template>
  <div class="product">
    <img src="../assets/btf4.jpg" alt="Nombre del juego" class="product-image">
    <div class="info">
      <h2 class="product-title"></h2>
      <p><span class="old-price">60$</span><span class="discount">30%</span><span class="new-price">40$</span></p>
    </div>
  </div>
</template>

<script>
import { juegos } from '../main.js'

export default {
  name: 'ProductContainer',
  mounted() {
    console.log(this.juegos[0].nombre);
  }
}

</script>
<style scoped>
.product {
  width: 40%;
  background: rgba(0, 0, 0, 0.583);
  display: flex;
  flex-direction: column;
  color: white;
  margin: 30px;
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