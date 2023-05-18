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
.material-symbols-outlined {
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
    max-width: 400px;


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

.search-box .icon {
    background: white;
    position: absolute;
    font-weight:bold;
    right: -2px;
    top: 0;
    width: 50px;
    height: 100%;
    color: rgb(236, 108, 3);
    text-align: center;
    line-height: 65px;
    border-radius: 25px;
}

#check:checked~.search-box .icon {
    background: rgb(236, 108, 3);
    color: white;
    border-radius: 0 25px 25px 0;
    width: 60px;
}
</style>
