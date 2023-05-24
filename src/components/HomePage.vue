<template>
    <MainHeader></MainHeader>
    <MainSlider></MainSlider>
</template>
<script>
import MainHeader from './MainHeader.vue';
import MainSlider from './MainSlider.vue';

export default{
    name: 'HomePage',
    components:{
    MainSlider,
    MainHeader
}
}
</script>