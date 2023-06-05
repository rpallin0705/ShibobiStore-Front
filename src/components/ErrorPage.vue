<template>
<div class="error">
    <img src="@/assets/error.jpg" alt="">
    <p>Lo sentimos, estamos teniendo problemas técnicos...</p>
</div>
</template>
<script>
    export default {
        name: 'ErrorPage',
    }

</script>

<style>
.error{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: rgb(26, 25, 25);
}

.error img{
    
    width: 600px;
    height: 600px;
}

.error p{
    z-index: 1000;
    color: white;
    font-size: 32px;
}
</style>