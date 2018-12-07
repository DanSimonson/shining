<template>
    <div class="footer">
        <div class="copyright">
            <p>&copy 2018 - Shining Nature Landscape</p>
            <a href="https://www.facebook.com/shiningnatureaustralia/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-square fa-lg">
                    Facebook</i></a>
            <h4>Made with <i class="fas fa-heart fa-sm"></i> by mariposaweb</h4>
        </div>

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

    .footer {
        /*position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;*/
        background-color: $Orange;


    }

    .copyright {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px;
    }

    p {
        font-size: 1rem;
        /*margin-left: 10px;*/
    }

    a {
        margin-right: 10px;
    }

    h4 {
        font-size: 1rem;
        /*margin-right: 10px;*/
    }

    .fas.fa-heart {
        color: red;
    }

    .fab.fa-facebook-square {
        color: blue
    }

    .fab.fa-facebook-square {
        color: blue;
        cursor: pointer;
    }

    @media(max-width:700px) {
        /*.copyright {
            flex-direction: column;
        }*/
    }
</style>