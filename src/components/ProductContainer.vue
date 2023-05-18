<template>
    <div class="content">
      <img src="../assets/btf4.jpg">
      <h3>Battlefield 4</h3>
      <p>60$</p>
    </div>
  
</template>

<script>
export default {
  name: 'ProductContainer'
}
</script>
<style scoped>
.content {
  width: 30%;
  margin: 20px;
  box-sizing: border-box;
  float: left;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  padding-top: 10px;
  transition: .4s;
  color: #fff;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.829);
  font-size: 20px;

}

.content:hover {

  transform: scale(1.1);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0, 10), 0 3px 6px rgba(0, 0, 0, 23);
}

.content img {
  max-width: 100%;
  border-radius: 30px;
  height: auto;
  text-align: center;
  margin: 0 auto;
  display: block
}

@media(max-width: 1000px) {
  .content {
    width: 45%;
  }
}

@media(max-width: 750px) {
  .content {
    width: 100%;
  }
}
</style>