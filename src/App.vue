<template>
  <MainHeader></MainHeader>
  <router-view></router-view>
</template>

<script>
import MainHeader from './components/MainHeader.vue';

export default {
  name: "app",
  components: {
    MainHeader
  },
}

</script>

<style> @import './assets/main.css';
</style>
