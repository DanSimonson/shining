<template>
    <div class="footer">
        <div class="copyright">
            <p>&copy 2018 - Shining Nature Landscape</p>
            <a href="https://www.facebook.com/shiningnatureaustralia/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-square fa-lg">
                    Facebook</i></a>
            <h4>made with <i class="fas fa-heart fa-sm"></i> <a href="https://mariposaweb.net" target="_blank">
                    @mariposaweb.net</a></h4>
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
        color: $Black;

        a {
            margin-right: 10px;
            color: #8b9dc3
        }

        a:hover,
        a:active {
            color: #3B5998
        }

        h4 {
            font-size: 1rem;

            a {
                text-decoration: none;
                color: $Black;
                transition: all .3s
            }

            a:hover,
            a:active {
                color: #3B5998;
            }
        }

        .fas.fa-heart {
            color: red;
        }

        i.fab.fa-facebook-square {
            color: #3b5998;
            cursor: pointer;
            transition: all .3s;
        }

        i.fab.fa-facebook-square:hover {
            color: #8b9dc3;

        }

        p {
            font-size: 1rem;
            /*margin-left: 10px;*/
        }
    }





    /* h4 {
        font-size: 1rem;
    }


    /*.fab.fa-facebook-square {
        color: blue;
        cursor: pointer;
    }
    .fab.fa-facebook-square {
        color: blue;
        cursor: pointer;
    }*/

    @media(max-width:700px) {
        /*.copyright {
            flex-direction: column;
        }*/
    }
</style>