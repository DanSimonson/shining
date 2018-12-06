<template>
  <div class="about">
    <Header></Header>
    <section class="section-about">
      <div class="center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
          We are a family owned business
        </h2>
      </div>

      <div class="row">
        <div class="col-1-of-2">
          <h3 class="heading-tertiary">You're going to fall in love with your landscape</h3>
          <p class="paragraph">
            Shining Nature Landscape & Garden will work with you to develop a design that’s right for your property.
          </p>

          <h3 class="heading-tertiary">Create a landscape you can be proud of for years</h3>
          <p class="paragraph">
            Shining Nature & Landscapes specializes in designing and building water features, paved areas, gardens and
            more.
          </p>

          <a href="#" class="btn-text">Learn more &rarr;</a>
        </div>
        <div class="col-1-of-2">
          <div class="composition">

            <img srcset="img/nat-1.jpg 300w, img/nat-1-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 1" class="composition__photo composition__photo--p1" src="img/nat-1-large.jpg">

            <img srcset="img/nat-2.jpg 300w, img/nat-2-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 2" class="composition__photo composition__photo--p2" src="img/nat-2-large.jpg">

            <img srcset="img/nat-3.jpg 300w, img/nat-3-large.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 3" class="composition__photo composition__photo--p3" src="img/nat-3-large.jpg">

            <!--
                  <img src="img/nat-1-large.jpg" alt="Photo 1" class="composition__photo composition__photo--p1">
                  <img src="img/nat-2-large.jpg" alt="Photo 2" class="composition__photo composition__photo--p2">
                  <img src="img/nat-3-large.jpg" alt="Photo 3" class="composition__photo composition__photo--p3">
                  -->
          </div>
        </div>
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
    background-color: $Grey;
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
    font-size: 1.6rem;

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  h3 {
    margin-bottom: 1.5rem;
  }
</style>