<template>
    <section>
        <div class="foto-slider">
            <img src="../assets/btf4.jpg">
        </div>
        <div class="items">
            <img class="item" src="../assets/btf4.jpg">
            <div class="product-info">
                <h3>Battlefield 4<span class="material-symbols-outlined">
                        favorite
                    </span></h3>
                <div class="sub-info">
                    <h2>En stock</h2>
                </div>
                <div class="precios">
                    <p><span class="old-price">60$</span><span class="discount">30%</span><span class="new-price">40$</span>
                    </p>
                </div>
                <div class="shopping">-
                    <a class="cart"><span class="material-symbols-outlined">shopping_cart</span></a>
                    <a href="·" class="buy-now">Comprar ahora</a>
                </div>
            </div>

        </div>
        <div class="desc">
            <p>piumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpiumpium</p>
        </div>
    </section>
</template>
<script lang="js">


export default {
    name: "GamePage",

}
</script>
<style scoped>
section {
    width: 100%;
    height: 100vh;
    background: rgb(58, 53, 53);
}

.foto-slider {
    width: 100%;
    height: 50vh;
    display: flex;
}

.foto-slider img {
    flex-shrink: 0;
    min-width: 100%;
    max-height: 100%;
}

.items {
    width: 100%;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    top: -120px;

}

.item {
    max-width: 30%;
    height: 300px;
    padding: 0;
    margin: 0 35px;
    border-radius: 20px;

}

.product-info {
    width: 30%;
    max-width: 40%;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.281);
    border-radius: 25px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    padding: 10px;

}

.product-info h3 {
    font-size: 35px;
    color: white;

}

.product-info h3 span {
    font-size: 35px;
    color: white;
    margin-left: 40px;

}



.sub-info {
    width: 60%;
    display: inline-block;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.281);
    padding: 30px;
    color: white;
}

.precios {
    margin-top: 30px;
    color: white;

}

.precios span {
    padding: 10px;
}

.old-price {
    text-decoration: line-through;
    font-size: 30px;


}

.discount {
    color: orange;
    font-size: 30px;

}

.new-price {
    font-size: 50px;
}

.shopping {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;

}

.buy-now {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    background: rgb(165, 90, 4);
    border-radius: 20px;
    font-size: 30px;
    color: white;
    transition: 0.4s all;

}

.cart {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
    background: rgb(165, 90, 4);
    margin-right: 15px;
    border-radius: 20px;
    transition: 0.4s all;
}

.cart span {
    font-size: 50px;
    color: white;
}

.cart:hover,
.buy-now:hover {
    transform: scale(1.1);
}

.desc{
    width: 100%;
    word-wrap: break-word;
    color: white;
    font-size: 20px;
}
</style>