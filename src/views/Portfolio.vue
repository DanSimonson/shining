<template>
    <div class="portfolio">
        <Header></Header>
        <main class="main">
            <section class="info1">
                <h2>Enriching lives through Landscaping</h2>
                <p> We offer a friendly price.</p>
                <a href="#" @click="aboutMe" class="info-link"><span class="spin">Learn more...</span></a>
            </section>
            <figure class="figure1">
                <img class="figure-img" src="../assets/img/waterfall5.jpg" alt="landscape">
                <!--src="http://placekitten.com/g/350/200" alt="a kitten" -->
            </figure>
            <figure class="figure2">
                <img class="figure-img" src="../assets/img/cubegarden.jpg" alt="landscape">
            </figure>
            <figure class="figure3">
                <img class="figure-img" src="../assets/img/gravel.jpg" alt="landscape">
            </figure>
            <figure class="figure4">
                <img class="figure-img" src="../assets/img/sidegarden3.jpg" alt="landscape">
            </figure>
            <figure class="figure5">
                <img class="figure-img" src="../assets/img/pottery.jpg" alt="landscape">
            </figure>
            <figure class="figure6">
                <img class="figure-img" src="../assets/img/lawngarden.jpg" alt="landscape">
            </figure>
            <section class="info2">
                <h2>Just Imagine</h2>
                <p>Let us show you the possibilities</p>
                <a href="#" @click="aboutMe" class="info-link"><span class="spin">Learn more... </span></a>
            </section>
            <figure class="figure7">
                <img class="figure-img" src="../assets/img/waterfall6.jpg" alt="landscape">
            </figure>
            <figure class="figure7">
                <img class="figure-img" src="../assets/img/rocks.jpg" alt="landscape">
            </figure>
        </main>
        <aside class="sidebar"></aside>
        <footer class="footer"></footer>
        </body>
    </div>
</template>

<script>
    export default {
        name: 'Portfolio',
        components: {

        },
        data() {
            return {

            }
        },
        methods: {
            aboutMe() {
                this.$router.push({
                    name: 'about'
                })
            }

        }
    }
</script>
<style scoped lang='scss'>
    @import "../../public/styles.scss";
    /*variables
    //$Light-green: #7ed56f;
    $Medium-green: #55c57a;
    //$Dark-green: #28b485;
    //$Black: #212121;
    $White: #FAFAFA;
    $Orange: #ff9900;*/

    /* grid styles ------------------------------------ */
    @media (min-width: 600px) {
        main {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        }

        .info1 {
            grid-column: span 2;
            grid-row: span 2;
        }

        .info2 {
            grid-column: span 2;
        }

        .figure1 {
            grid-column: span 3;
            grid-row: span 2;
        }

        .figure6 {
            grid-column: span 2;
        }

        .figure7 {
            grid-column: span 3;
        }
    }

    /* flex styles -------------------------------------- */
    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    /* generic styles ----------------------------------- */
    body {
        max-width: 1600px;
        margin: 0 auto;
        font-family: 'Raleway', sans-serif;
    }

    header {
        padding: 10px;
    }

    .logo-img {
        margin-right: 10px;
        height: 60px;
        transform: scaleX(-1);
    }

    .logo-text {
        font-family: 'Lobster', cursive;
        font-size: 2.6em;
        color: #c3bab9;
        text-shadow:
            -1px -1px 0 #615655,
            1px -1px 0 #615655,
            -1px 1px 0 #615655,
            1px 1px 0 #615655;
    }

    .figure-img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 0 1.5rem 4rem rgba($Black, .4);

        /*opacity: 0.8;
    background-color: RED;
    background-blend-mode: screen;*/
    }

    img.figure1 {
        background-color: RED;
        background-blend-mode: multiply;
    }

    /*.figure-img:active,
.figure-img:hover {
    opacity: 0.9
}*/

    .info1,
    .info2 {
        padding: 40px;
        color: $Medium-green;
        background-image: linear-gradient(to right, $White, #fdfdfd, rgb(255, 255, 0), $White)
    }

    h2 {
        font-size: 2em;
        margin-bottom: 1em;
    }

    p {
        margin-bottom: 1em;
    }

    /*.info-link {
    text-decoration: none;
    color: #ff9900;
}*/
    span.spin {
        text-decoration: none;
        color: $Orange;
        font-size: 1.8em;

    }

    .spin {
        display: inline-block;
        color: #0D47A1;
        font-size: 16px;
    }

    .spin {
        transition: all 1s ease-in-out;
    }

    .spin:hover {
        -webkit-transform: rotateX(360deg);
        transform: rotateX(360deg);
    }
</style>