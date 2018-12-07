<template>
  <div class="about">
    <Header></Header>
    <section class="section-about">
      <div class="center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
          We are a family owned business
        </h2>
      </div>

      <div class="about-content">
        <div class="about-grid-1">
          <h3 class="item heading">You're going to fall in love with your landscape</h3>
          <p class="item paragraph">
            Shining Nature Landscape & Garden will work with you to develop a design that’s right for your property.
          </p>
        </div>
        <div class="about-grid-2">
          <!-- <div class="composition">-->
          <!--<img srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 1" class="item composition__photo composition__photo--p1"-->
          <img class='photo asset1' src="../assets/img/jimmy.jpg" alt="photo">
          <img class='photo asset2' src="../assets/img/evelyn.jpg" alt="photo">
          <img class='photo asset3' src="../assets/img/jm3.jpg" alt="photo">

          <!--<img srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 2" class="item composition__photo composition__photo--p2" src="../assets/img/waterfall5.jpg">-->

          <!--<img srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            alt="Photo 3" class="item composition__photo composition__photo--p3" src="../assets/img/waterfall5.jpg">-->

          <!--
                    <img src="img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
                    <img src="img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
                    <img src="img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
                    -->
          <!--</div> -->
        </div>
        <div class="about-grid-3">
          <h3 class="item heading">Create a landscape you can be proud of for years</h3>
          <p class="item paragraph">
            Shining Nature & Landscapes specializes in designing and building water features, paved areas, gardens
            and
            more.
          </p>
        </div>
        <!--<a href="#" class="btn-text">Learn more &rarr;</a> -->


      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style scoped lang='scss'>
  @import "../../public/styles.scss";

  .section-about {
    background-color: $White;
  }

  .heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    background-image: linear-gradient(to right, $Light-green, $Dark-green);
    display: inline-block;
    -webkit-background-clip: text;
    color: transparent;
    transition: all .2s;
    margin-top: 30px;
    margin-bottom: 30px;

    &:hover {
      transform: skewY(2deg) skewX(15deg) scale(1.1);
      text-shadow: .5rem 1rem 2 rem rgba($Black, .2);
    }
  }

  .paragraph {
    font-size: 2rem;

    /*&:not(:last-child) {
      margin-bottom: 3rem;
    }*/
  }

  /*grid for about page*/
  .about-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, minmax(350px, auto));
    grid-row-gap: 10px;
    grid-column-gap: 10px;

    /*border: 5px solid black;
    /*max-width: 114rem;
    background-color: $Light-grey;
    margin: 0 auto;
    margin-bottom: 80px;*/
  }

  .about-grid-1 {
    /*border: 5px solid orange;*/
    grid-column-start: 1;
    grid-column-end: 3;
    align-self: center;
  }

  .about-grid-2 {
    /*border: 5px solid orange;*/
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row: 1/3;
    position: relative;
  }

  .about-grid-3 {
    /*border: 5px solid orange;*/
    grid-column-start: 1;
    grid-column-end: 3;
    align-self: flex-start;
  }

  .item {
    /*border: 5px solid green;*/
  }

  /*images for about page*/
  .photo {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba($Black, .4);
    position: absolute;
    z-index: 10;
    transition: all 2s;
    outline-offset: 2rem;
  }

  .photo:hover {
    outline: 1.5rem solid $Light-green;
    transform: scale(1.05) translateY(-.5rem);
    box-shadow: 0 2.5rem 4rem rgba($Black, .5);
    z-index: 20;
  }

  .asset1 {
    left: 0;
    top: 0
  }

  .asset2 {
    right: 0;
    top: 4rem
  }

  .asset3 {
    left: 10%;
    top: 17rem
  }

  .composition {
    margin-top: 30px;
    /*border: 5px solid red;*/
  }

  img {
    height: 350px;
    width: 200px;
    border-radius: 2px;
  }

  h3 {
    margin-bottom: 1.5rem;
    color: $Medium-green;
    font-size: 2.2em;
  }


  .about-grid-2:hover {
    .photo:not(:hover) {
      transform: scale(.93);
    }
  }
</style>