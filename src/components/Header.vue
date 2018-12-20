<template>
  <div>
    <div class="header">
      <div class="firstItem">
        <p>ShiningNatureLandscaping</p>
      </div>
      <div class="secondItem">
        <!--
          <h4 v-for="item in menuItems" @click="bindMe(item)" v-bind:class="{'active':(item === current)}"></h4>
          <h4 v-for="item in menuItems" @click="bindMe(item)" v-bind:class="{'active':(item === current)}">{{item}}</h4>
        -->

        <li class="links">
          <router-link to="/" tag="a" exact><strong>Home </strong>
          </router-link>
        </li>
        <li class="links">
          <router-link to="/about" tag="a" exact><strong>About </strong>
          </router-link>
        </li>
        <li class="links">
          <router-link to="/portfolio" tag="a" exact><strong>Portfolio </strong>
          </router-link>
        </li>
        <li class="links">
          <router-link to="/gallery" tag="a" exact><strong>Gallery </strong>
          </router-link>
        </li>
        <li class="links">
          <router-link to="/contact" tag="a" exact><strong>Contact </strong>
          </router-link>
        </li>
        <!--
          </router-link>
           <router-link to='/about' tag='a'>
              <li class="links">About</li>
          </router-link>
          <router-link to='/portfolio' tag='a'>
              <li class="links">Portfolio</li>
          </router-link>
          <router-link to='/contact/' tag='a'>
              <li class="links">Contact</li>
          </router-link>
        -->
      </div>
    </div>
    <div class="hamburger" v-on:click="displayMe = !displayMe">
      <span class="burger" @click="toggleMe">
        <i class="fas fa-bars fa-2x"></i></span>
      <span class="seeClose closeIcon" @click="toggleMe"><i class="fas fa-times fa-2x"></i></span>
      <!-- <a href="#" class="btn-close"><i class="fas fa-times"></i></a> -->
    </div>
    <transition name="slide-fade">
      <div v-if="displayMe" class="drawer">
        <li class="nav-links">
          <router-link to="/" tag="a" exact><strong>Home </strong>
          </router-link>
        </li>
        <li class="nav-links">
          <router-link to="/about" tag="a" exact><strong>About </strong>
          </router-link>
        </li>
        <li class="nav-links">
          <router-link to="/portfolio" tag="a" exact><strong>Portfolio </strong>
          </router-link>
        </li>
        <li class="nav-links">
          <router-link to="/gallery" tag="a" exact><strong>Gallery </strong>
          </router-link>
        </li>

        <li class="nav-links">
          <router-link to="/contact" tag="a" exact><strong>Contact </strong>
          </router-link>
        </li>
      </div>
    </transition>

    <!--
      <section class="main">
      </section>
    -->
  </div>
</template>
<script>
  //import image from '../assets/taneli-lahtinen-752773-unsplash.jpg';
  export default {
    name: "Header",
    data() {
      return {
        current: "",
        //menuItems: ['Home', 'About', 'Portfolio', 'Contact'],
        displayMe: false
      };
    },
    methods: {
      toggleMe() {
        let close = document.querySelector(".closeIcon"); // Using a class instead, see note below.
        close.classList.toggle("seeClose");
        let burger = document.querySelector(".burger");
        burger.classList.toggle("seeBurger");
      },
    }
  };
</script>
<style scoped lang="scss">
  @import "../../public/styles.scss";

  /*@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');
    //variables
    $Light-green: #7ed56f;
    $Medium-green: #55c57a;
    $Dark-green: #28b485;
    $Black: #212121;
    $White: #FAFAFA;
    $Grey: #E0E0E0;
    $Orange: #ff9900;*/
  .main {
    height: 140vh;
    background-color: $Light-green;
  }

  .header {
    /*border: 5px solid black;*/
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    flex-direction: column;
    background: $Orange;
  }

  .seeBurger {
    display: none;
  }

  .seeClose {
    display: none;
  }

  /* force the main div to hide until actived by media query*/
  .header div {
    display: none;
  }

  .fas .fa-bars {
    top: 50%;
    right: 50%;
    color: black;
    display: block;
  }

  .drawer {
    display: none;
  }

  .firstItem {
    /*border: 5px solid olivedrab;*/
    align-self: flex-start;
    font-family: "Luckiest Guy", cursive;
    margin-bottom: 20px;
  }

  .secondItem {
    /*border: 5px solid orange;*/
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 1.2em;

    li.links {
      list-style-type: none;
    }

    a {
      text-decoration: none;
      color: $Black;
      transition: all .2s;
    }

    a:hover {
      cursor: pointer;
      border-bottom: 2px solid $Dark-green;
      border-top: 2px solid $Dark-green;
    }
  }

  a.router-link-active {
    border-top: 2px solid $Dark-green;
    border-bottom: 2px solid $Dark-green;
  }

  /*li.router-link-active a {
        color: #f66;
    }*/
  /*.active {
        border-top: 2px solid orange;
        border-bottom: 2px solid orange;
    }*/
  .closeIcon {
    /*z-index: 4;
        top: 0;
        left: 25px;
        position: fixed;*/
    color: $White;
  }

  .hamburger {
    z-index: 22;
    top: 15px;
    left: 25px;
    position: fixed;
    color: black;
  }

  .slide-fade-enter-active {
    transition: all 0.6s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter,
  .slide-fade-leave-to

  /* .slide-fade-leave-active below version 2.1.8 */
    {
    transform: translateX(10px);
    opacity: 0;
  }

  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }

    .drawer {
      display: none;
    }

    .header div {
      display: flex;
    }

  }

  @media (max-width: 768px) {
    .hamburger {}

    .drawer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /*background: rgba(90, 90, 90, 0.9);*/
      background: $Orange;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 21;
    }

    .nav-links {
      text-decoration: none;
      list-style: none;
      margin: 0 auto 50px auto;
    }

    .nav-links a {
      color: $White;
    }

    a.router-link-active {}
  }

  @media (max-width: 767px) {
    .header {
      background: transparent;
    }
  }
</style>