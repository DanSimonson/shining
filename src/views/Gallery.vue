<template>
    <div class="gallery">
        <Header></Header>

        <div class="header">
            <!--<h1>Responsive Image Grid</h1> -->
            <p>With our friendly price your options are boundless.</p>
        </div>

        <boxview :images="images" />

        <Footer></Footer>
    </div>
</template>
<script>
    //import Lightbox from "../components/Lightbox.vue"
    import one from "../assets/img/new/one.jpg";
    import two from "../assets/img/new/two.jpg";
    import three from "../assets/img/new/three.jpg";
    import four from "../assets/img/new/four.jpg";
    import five from "../assets/img/new/five.jpg";
    import six from "../assets/img/new/six.jpg";
    import seven from "../assets/img/new/seven.jpg";
    import eight from "../assets/img/new/eight.jpg";
    import nine from "../assets/img/new/nine.jpg";
    import ten from "../assets/img/new/ten.jpg";
    import eleven from "../assets/img/new/eleven.jpg";
    import twelve from "../assets/img/new/twelve.jpg";
    import thirteen from "../assets/img/new/thirteen.jpg";
    import fourteen from "../assets/img/new/fourteen.jpg";
    import fifteen from "../assets/img/new/fifteen.jpg";
    import sixteen from "../assets/img/new/sixteen.jpg";
    import seventeen from "../assets/img/new/seventeen.jpg";
    export default {
        name: 'gallery',
        data() {

            return {
                images: [{
                        img: two,
                        id: 0
                    }, {
                        img: three,
                        id: 1
                    }, {
                        img: four,
                        id: 2
                    }, {
                        img: five,
                        id: 3
                    }, {
                        img: six,
                        id: 4
                    }, {
                        img: seven,
                        id: 5
                    }, {
                        img: eight,
                        id: 6
                    }, {
                        img: nine,
                        id: 7
                    }, {
                        img: sixteen,
                        id: 8
                    }, {
                        img: eleven,
                        id: 9
                    }, {
                        img: twelve,
                        id: 10
                    }, {
                        img: seventeen,
                        id: 11
                    }
                    /*{
                      img: fourteen,
                      id: 13
                    },
                    {
                      img: fifteen,
                      id: 14
                    },
                    {
                      img: sixteen,
                      id: 15
                    }*/
                ],
                //index: 0,
                //visible: false,
                //myImg: ''
            };
        },
        methods: {
            show(index) {
                //console.log('here');
                this.visible = true;
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
                }
            },
            next() {
                if (this.hasNext()) {
                    this.index += 1;
                }
            },
            onKeydown(e) {
                if (this.visible) {
                    switch (e.key) {
                        case 'ArrowRight':
                            this.next();
                            break;
                        case 'ArrowLeft':
                            this.prev();
                            break;
                        case 'ArrowDown':
                        case 'ArrowUp':
                        case ' ':
                            e.preventDefault();
                            break;
                        case 'Escape':
                            this.hide();
                            break;
                    }
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "../../public/styles.scss";

    .header {
        text-align: center;
        padding: 32px;
        background: $Orange;
    }
</style>