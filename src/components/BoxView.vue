<template>
  <div class="boxview">
    <div class="portfolio">
      <img :src="image.img" v-for="(image, index) in images" :key="image.id" @click="show(index)">
    </div>

    <div class="modal-screen" v-if="visible">
      <div class="screen-content">
        <div class="wrapper">
          <img :src="myImg">
          <a @click="hide">
            <i class="fas fa-window-close fa-2x"></i>
          </a>
          <a class="prev" @click="prev()">
            <i class="fas fa-chevron-left fa-2x"></i>
          </a>
          <!--&#10094;-->
          <a class="next" @click="next()">
            <i class="fas fa-chevron-right fa-2x"></i>
          </a>
          <!--&#10095;-->
        </div>
      </div>
    </div>

    <!--<div class="screen" v-if='visible'>
            <span class="close cursor" @click="hide">&times;</span>
            <div class="modal-content">
                <a class="prev" @click='prev()'>&#10094;</a>
                <a class="next" @click='next()'>&#10095;</a>
                <img :src="myImg">
            </div>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "boxview",
  props: ["images"],
  data() {
    return {
      index: 0,
      visible: false,
      display: false,
      myImg: ""
    };
  },
  methods: {
    show(index) {
      this.visible = true;
      this.index = index;
      this.myImg = this.images[index].img;
    },
    hide() {
      this.visible = false;
      this.index = 0;
    },
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
        this.myImg = this.images[this.index].img;
      }
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
        this.myImg = this.images[this.index].img;
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.prev();
            break;
          case "ArrowDown":
          case "ArrowUp":
          case " ":
            e.preventDefault();
            break;
          case "Escape":
            this.hide();
            break;
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../public/styles.scss";

/* Portfolio */
.portfolio {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin-bottom: 1rem;
}

.portfolio img {
  width: 100%;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  object-fit: cover;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
}

.header {
  text-align: center;
  padding: 32px;
  background: $Orange;
  z-index: 1;
}
/*new modal*/
.screen-content {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: $White;
  border: 1px solid #aaa;
  width: 35%;

  /*padding:30px;*/
  border-radius: 5px;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);

  /*transition smoothly
  transition: all 1000 ease-out;*/

  .wrapper {
    position: relative;
    text-align: center;
    i:hover,
    i:active {
      cursor: pointer;
    }
  }
  p {
    margin-top: 0;
  }
  img {
    width: 100%;
  }
}
.screen-content a.prev {
  position: absolute;
  left: 0;
  top: 50%;
  color: $Orange;
  margin-left: 5px;
}
.screen-content a.next {
  position: absolute;
  right: 0;
  top: 50%;
  color: $Orange;
  margin-right: 5px;
}
.screen-content a.prev:hover,
.screen-content a.prev:active,
.screen-content a.next:hover,
.screen-content a.next:active {
  cursor: pointer;
  color: $Light-green;
}

.modal-screen::before {
  content: "";
  position: fixed;
  /*display:none;*/
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
/*--------------end new modal stuff-------------------------------*/

@media (max-width: 1200px) {
  .screen-content {
    width: 45%;
  }
}

@media (max-width: 1000px) {
  .screen-content {
    width: 48%;
  }
}
@media (max-width: 900px) {
  .screen-content {
    width: 50%;
  }
}
@media (max-width: 900px) {
  .screen-content {
    width: 50%;
  }
}
@media (max-width: 700px) {
  .screen-content {
    width: 60%;
  }
}
@media (max-width: 500px) {
  .screen-content {
    width: 70%;
  }
}
</style>