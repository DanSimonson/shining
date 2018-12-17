<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<Homepage></Homepage>-->
    <Header></Header>

    <div class="hero">
      <transition appear name='appear'>
        <p>Things are <span>awesome</span> here at</p>
      </transition>
      <h1>Shining Nature Landscape And Garden</h1>
      <transition appear name='appearTwo'>
        <p>We <strong>Design</strong> and <strong>Develop Awesome</strong> Landscapes</p>
      </transition>
    </div>


    <div class="sales-points">
      <div class="sales-point">
        <h2 v-scroll-reveal.reset>Gardening</h2>
        <p v-scroll-reveal.reset="{delay:500}">We are passionate about gardens and will use thoughtful
          finishing touches to create the perfect addition to your home or business.</p>
      </div>
      <div class="sales-point">
        <h2 v-scroll-reveal.reset>Paving</h2>
        <p v-scroll-reveal.reset="{delay:500}">We offer great paving solutions for driveways, patios, garden paths and
          courtyards. We can supply all types
          of landscape paving jobs.</p>
      </div>
      <div class="sales-point">
        <h2 v-scroll-reveal.reset>Water Features</h2>
        <p v-scroll-reveal.reset="{delay:500}">Realizing one size doesn't fit all, We take the time to listen,
          tailoring our water features to meet your
          needs and expectations.</p>
      </div>
    </div>

    <div class="cta">
      <div class="cta-text">
        <h2>Hire us to do your <span>Landcaping</span></h2>
        <p>We are a family owned business with years of experience that can provide all your landscaping needs.</p>
        <!-- <a href="#" class="btn" @click="contactMe">Contact Us</a>-->
        <router-link to="/contact" class="btn btn-orange" tag="button">Contact Us</router-link>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
      //HelloWorld
      //Homepage
    },
    data() {
      return {

      }
    },
    methods: {
      contactMe() {
        this.$router.go('/contact');
        /*this.$router.push({
          name: 'contact'
        })*/
      }
    }
  }
</script>
<style scoped lang='scss'>
  @import "../../public/styles.scss";
  /* variables
  //@import url('https://fonts.googleapis.com/css?family=Poppins:300,600');
  //@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy');
  /*variables*/
  $Light-green: #7ed56f;
  $Medium-green: #55c57a;
  $Dark-green: #28b485;
  $Black: #212121;
  $black: #444;
  $White: #FAFAFA;
  $white: #FFF;
  $green: #0F9;
  $Orange: #ff9900;

  Styles * {
    box-sizing: border-box;
    margin-top: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: $black;
    font-size: 1.1rem;
  }

  h1 {
    font-size: 1rem;
    /*color: $green;*/
    text-transform: uppercase;
    letter-spacing: 15px;
    outline: 3px solid $white;
    padding: 5px;
    /*outline-offset: .5em;*/
    /*display: inline-block;*/
    /*background:
        linear-gradient(rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.2));*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 3px 0 3px 0 //margin: 0.25em 0 0.5em;

      span {
      font-weight: 300;
    }
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.5em;
    color: #c3bab9;
    text-shadow:
      -1px -1px 0 #615655,
      1px -1px 0 #615655,
      -1px 1px 0 #615655,
      1px 1px 0 #615655;
  }

  p {
    span {
      color: $green;
    }
  }

  /*.btn {
    display: inline-block;
    padding: .7em 1.7em;
    background: $green;
    color: $black;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      background: darken($green, 10%);
    }
  }*/
  .btn {
    text-transform: uppercase;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100%;
    outline: none;
    transition: all .2s;
    position: relative;
    margin-top: 10px;
  }

  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    padding: 15px 40px;
    display: inline-block;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  }

  .btn-orange {
    background-color: $Orange;
    color: $Black;
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }

  .btn-orange::after {
    background-color: $Orange
  }

  .btn:hover::after {
    transform: scale(1.5);
  }

  .hero {
    background-color: #999;
    background-image: url("../assets/img/hero.jpg");
    background-blend-mode: multiply;
    background-size: cover;
    height: 100vh;
    padding: 1em;
    color: $White;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      /*mix-blend-mode: multiply;*/
      color: $Dark-green;
    }
  }

  .sales-points {
    padding: 12vh 0;
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  div.sales-point p {
    mix-blend-mode: darken;
  }

  .appear-enter {
    opacity: 0;
  }

  .appear-enter-active {
    transition: opacity 1s;
    animation: slideUp 1.5s ease-out;
    transition-delay: .3s;


  }

  .appear-leave {}

  .appear-leave-active {
    opacity: 0;
    transition: opacity 1s;
    animation: slideDown 1.5s ease-out;

  }

  .appearTwo-enter {
    transform: translateX(400px);
    opacity: 0;

  }

  .appearTwo-enter-active {
    transition: all 1.3s ease;
    transition-delay: .5s;
  }

  .appearTwo-leave {}

  .appearTwo-leave-active {
    transform: translateX(200px);
    opacity: 0;
    transition: all 1.8s ease;
  }

  @keyframes slideUp {
    from {
      transform: translateY(50px)
    }

    to {
      transform: translateY(0)
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(0)
    }

    to {
      transform: translateY(50px)
    }
  }

  @keyframes slideUpTwo {
    from {
      transform: translateY(400px)
    }

    to {
      transform: translateY(0)
    }
  }

  @keyframes slideDownTwo {
    from {
      transform: translateY(0)
    }

    to {
      transform: translateY(400px)
    }
  }

  @media (min-width: 40rem) {
    .sales-points {
      flex-direction: row;
    }
  }

  .sales-point {
    flex-basis: 30%;
  }

  .cta {
    /*background-image: url(//unsplash.it/600/400);*/
    background-color: #666;
    background-image: linear-gradient(rgba(26, 188, 156, 0.7), rgba(231, 76, 69, 0.7)), url("../assets/img/calltoaction2.jpg");
    background-size: cover;
    padding: 10vh 0;
    color: $white;
    display: flex;
    justify-content: flex-end;
  }

  .cta-text {
    flex-basis: 100%;
    padding: 0 2em;

    @media (min-width: 40rem) {
      flex-basis: 50%;
    }
  }
</style>