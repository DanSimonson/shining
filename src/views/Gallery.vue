<template>
    <div class="gallery">
        <Header></Header>
        <div class="header">
            <!--<h1>Responsive Image Grid</h1> -->
            <p>With our friendly price your options are boundless.</p>
        </div>
        <div class="portfolio">
            <img :src="image.img" v-for="image in images" :key="image.id" />
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
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
        data() {
            return {
                images: [
                    /*({
                      img: one,
                      id: "0"
                    },*/
                    {
                        img: two,
                        id: 1
                    },
                    {
                        img: three,
                        id: 2
                    },
                    {
                        img: four,
                        id: 3
                    },
                    {
                        img: five,
                        id: 4
                    },
                    {
                        img: six,
                        id: 5
                    },
                    {
                        img: seven,
                        id: 6
                    },
                    {
                        img: eight,
                        id: 7
                    },
                    {
                        img: nine,
                        id: 8
                    },
                    {
                        img: sixteen,
                        id: 9
                    },
                    {
                        img: eleven,
                        id: 10
                    },
                    {
                        img: twelve,
                        id: 11
                    },
                    {
                        img: seventeen,
                        id: 12
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
                myIndex: 0
            };
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
    }

    .header {
        text-align: center;
        padding: 32px;
        background: $Orange;
    }
</style>