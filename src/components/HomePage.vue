<template>
    <MainHeader></MainHeader> 
    <MainSlider></MainSlider>
    <MainStore></MainStore>
</template>
<script>
import MainHeader from './MainHeader.vue';
import MainSlider from './MainSlider.vue';
import MainStore from './MainStore.vue';

export default{
    name: 'HomePage',
    components:{
        MainHeader,
        MainSlider,
        MainStore,
    
    }
}
</script>