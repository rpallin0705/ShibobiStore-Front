<template>
    <Transition name="fade-in" mode="out-in" appear>
        <div class="error component" v-if="showComponent">
            <img src="@/assets/error.jpg" alt="">
            <p>Lo sentimos, estamos teniendo problemas técnicos...</p>
        </div>
    </Transition>
</template>
<script>
export default {
    name: 'ErrorPage',
    data() {
        return {
            showComponent: false
        };
    },
    mounted() {
        setTimeout(() => {
            this.showComponent = true;
        }, 10000); // Retraso de 10 segundo antes de mostrar el componente
    }
}
</script>

<style scoped>
.error {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgb(26, 25, 25);
    overflow: hidden;

}

.error img {

    width: 600px;
    height: 600px;
}

.error p {
    z-index: 1000;
    color: white;
    font-size: 32px;
}

.fade-in-enter-active,
.fade-in-leave-active {
    transition: opacity 1s ease-in-out;
}

.fade-in-enter,
.fade-in-leave-to {
    opacity: 0;
}
</style>