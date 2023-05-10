<template>
  <header>

    <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <span class="material-symbols-outlined">
          menu
        </span>
      </label>
      <label class="logo">
        <img src="../assets/logo.png">
        Shinobi Store

      </label>
      <SearchItem></SearchItem>
      <ul>
        <li><a href="a" class="active">Home</a></li>
        <li><a href="a">Shop</a></li>
        <li><a href="a">About</a></li>
        <li><a href="a">Login</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
import SearchItem from './SearchItem.vue';

export default {
  name: "MainHeader",
  components: {
    SearchItem
  }
};


document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 600) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");

* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

header {
  transition: all 0.4s;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.623);


}

header.scrolled {
  background-color: rgba(211, 211, 211, 0.397);

}

nav {
  height: 80px;
  width: 100%;
}


label.logo {
  color: white;
  font-size: 40px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
  align-items: center;

}

.logo img {
  position: relative;
  top: 10px;
  width: 70px;
}

nav ul {
  float: right;
  margin-right: 20px
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

#check {
  display: none;
}

@media (max-width: 952px) {
  label.logo {
    font-size: 30px;
    padding-left: 50px;
  }

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
    height: 100%;
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

  #check:checked~ul {
    left: 0;
  }
}

.box {
  max-width: 400px;
  width: 20%;
  position: relative;
  left: 50%;
}
</style>