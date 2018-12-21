<template>
    <div class='boxview'>
        <div class="portfolio">
            <img :src="image.img" v-for="(image, index) in images" :key="image.id" @click="show(index)">
            </img>
        </div>

        <div class="screen" v-if='visible'>
            <span class="close cursor" @click="hide">&times;</span>
            <div class="modal-content">
                <a class="prev" @click='prev()'>&#10094;</a>
                <a class="next" @click='next()'>&#10095;</a>
                <img :src="myImg">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'boxview',
        props: ['images'],
        data() {
            return {
                index: 0,
                visible: false,
                display: false,
                myImg: ''
            }
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
            opacity: .9;
        }
    }



    .header {
        text-align: center;
        padding: 32px;
        background: $Orange;
    }

    /* The Modal (background) */
    .screen {
        /*display: none;*/
        position: fixed;
        z-index: 1;
        /*padding-top: 100px;*/
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        height: 400px;
        overflow: hidden;
        background-color: $Orange;

        a.prev {
            color: $White;
        }

        a.next {
            color: $White;
        }
    }

    /* Next & previous buttons */
    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -50px;
        color: white;
        font-weight: bold;
        font-size: 20px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        -webkit-user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover,
    .prev:active,
    .next:active {
        background-color: rgba(0, 0, 0, 0.8);
    }

    @media (max-width: 650px) {
        .screen {
            width: 400px;
        }
    }

    @media (max-width: 450px) {
        .screen {
            width: 300px;
            top: 54%;
        }
    }
</style>