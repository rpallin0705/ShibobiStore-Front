<template>
    <div class="box">
        <input type="checkbox" id="check">
        <div class="search-box">
            <input type="text" placeholder="Type here...">
            <label for="check" class="icon">
                <span class="material-symbols-outlined">
                    search
                </span>
            </label>
        </div>
    </div>
</template>
<script lang="js">
export default {
    name: 'SearchItem'
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");

.material-symbols-outlined {
    color: white;
    position: absolute;
    font-weight: 900;
    right: -2px;
    top: 0;
    width: 50px;
    height: 100%;
    background: rgb(236, 108, 3);
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48
}

#check {
    display: none;
}

.box {
    max-width: 400px;
    width: 100%;
}

.box .search-box {
    position: relative;
    height: 50px;
    max-width: 50px;

    margin-left: auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 25px;
    transition: all 0.3s ease;
}

#check:checked~.search-box {
    max-width: 300px;

}

.search-box input {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    background: white;
    outline: none;
    border: none;
    padding-left: 20px;
    font-size: 18px;
}
</style>
