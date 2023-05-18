<template>
    <nav>
        <input type="checkbox" id="checknav">
        <label for="checknav" class="checkbtn">


            <span class="material-symbols-outlined">
                menu
            </span>
        </label>
        <ul>
            <li><RouterLink to="/" active-class="active">Home</RouterLink></li>
            <li><RouterLink to="/store" active-class="active">Shop</RouterLink></li>
            <li><RouterLink to="log-in" active-class="active">Login</RouterLink></li>
            <li><RouterLink to="/sign-up" active-class="active">SignUp</RouterLink></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
nav {
    max-height: 100%;
    max-width: 100%;
    text-align: center;

}

nav ul {
    height: 100px;
    float: right;
    position: relative;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

}

nav ul li {
    display: inline-block;
    line-height: 80px;
    margin: 0 5px;
}

nav ul li a {
    color: white;
    font-size: 20px;
    padding: 7px;
    border-radius: 20px;
    text-transform: uppercase;
}

a.active,
a:hover {
    background-color: rgb(255, 115, 0);
    transition: .5s;
}

.checkbtn {
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 40px;
    cursor: pointer;
    display: none;
}

#checknav {
    display: none;
}


@media (max-width: 952px) {


    nav ul li a {
        font-size: 16px;

    }
}

@media(max-width: 850px) {
    .checkbtn {
        display: block;
    }

    ul {
        position: fixed;
        width: 100%;
        height: 70%;
        background: rgba(163, 163, 163, 0.295);
        top: 80px;
        left: 100%;
        text-align: center;
        transition: all .5s;

    }

    nav ul li {
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }

    nav ul li a {
        font-size: 20px;
    }

    a:hover,
    a.active {
        background: none;
        color: rgb(255, 238, 0);
    }

    #checknav:checked~ul {
        left: 0;
    }
}
</style>