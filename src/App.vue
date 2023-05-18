<template>
  <!-- <MainHeader></MainHeader>
  <MainSlider></MainSlider>
  <MainStore></MainStore> 
  
  
  <StorePage></StorePage>-->
  <MainHeader></MainHeader>
  <HomePage></HomePage>
 <!-- <NavBar></NavBar>
  <SearchItem></SearchItem>-->
</template>

<script>
//import MainHeader from "./components/MainHeader.vue";
//import MainSlider from './components/MainSlider.vue';
//import MainStore from "./components/MainStore.vue";
import HomePage from "./components/HomePage.vue";
//import StorePage from './components/StorePage.vue';
//import SearchItem from './components/SearchItem.vue';
//import SearchItem from './components/SearchItem.vue';
//import NavBar from './components/NavBar.vue';
export default {
  name: "app",
  components: {
    //MainHeader,
    //MainSlider,
    //MainStore,
    HomePage
    //StorePage,
    //MainHeader
    //NavBar,
    //SearchItem,

  },
};
</script>

<style> @import './assets/main.css';
</style>
