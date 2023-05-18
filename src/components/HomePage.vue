<template>
    <MainSlider></MainSlider>
    <MainStore></MainStore>
</template>
<script>
import MainSlider from './MainSlider.vue';
import MainStore from './MainStore.vue';

export default{
    name: 'HomePage',
    components:{
        MainSlider,
        MainStore,
    }
}
</script>