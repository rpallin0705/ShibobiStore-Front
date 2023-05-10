<template>
  <!-- <MainHeader></MainHeader>
  <MainSlider></MainSlider>
  <MainStore></MainStore> 
  HomePage></HomePage>
  
  <StorePage></StorePage>-->
  <MainHeader></MainHeader>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
/*import MainSlider from './components/MainSlider.vue';
import MainStore from "./components/MainStore.vue";*/
//import HomePage from "./components/HomePage.vue";
//import StorePage from './components/StorePage.vue';
//import SearchItem from './components/SearchItem.vue';
export default {
  name: "app",
  components: {
    /*MainHeader,
    MainSlider,
    MainStore
    HomePage
    StorePage,*/
    MainHeader
    
},
};
</script>

<style> @import './assets/main.css';
</style>
