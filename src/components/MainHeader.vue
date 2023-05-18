<template>
  <header>
    <div class="head">
      <img src="../assets/logo_texto.png">
      <SearchItem></SearchItem>
      <NavBar></NavBar>
    </div>
  </header>
</template>


<script>
import SearchItem from './SearchItem.vue';
import NavBar from './NavBar.vue';

export default {
  name: "MainHeader",
  components: {
    SearchItem,
    NavBar
  }
};


document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 600) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");

header {
  transition: all 0.4s;
  position: fixed;
  width: 100%;
  height: 100px;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.623);
  overflow-y: hidden;
}

header .head {
  align-items: center;
  height: 100px;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
}

header img {
  max-width: 250px;
  max-height: 100px;
}
</style>