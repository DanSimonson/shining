<template>
    <div class="about">
        <Header></Header>
        <div class="container">
            <h1 class="brand"><span>Leave</span> Us A Message</h1>
            <div class="wrapper animated bounceInLeft">
                <div class="company-info">
                    <h3>Shining Nature Landcape & Garden</h3>
                    <ul>
                        <transition name='appear'>
                            <li><i class="fa fa-road"></i> Perth Australia</li>
                        </transition>
                        <li><i class="fa fa-phone"></i> 0416384960/0431641437</li>
                        <li><i class="fa fa-envelope"></i> ramaljimmy@yahoo.com/ sunshineve91@hotmail.com</li>
                        <li><a href="https://www.facebook.com/shiningnatureaustralia/" target="_blank" aria-label="Facebook"><i
                                    class="fab fa-facebook-square fa-lg">
                                    Facebook</i></a></li>
                    </ul>

                </div>
                <div class="contact">
                    <!--<h3>Email Us</h3> -->
                    <form action="https://formspree.io/ramaljimmy@yahoo.com" method="POST">
                        <!--v-on:submit.prevent="onSubmit" /// may prevent default form refresh page action later-->
                        <p>
                            <label>First Name</label>
                            <input type="text" name="firstname">
                        </p>
                        <p>
                            <label>Last Name</label>
                            <input type="text" name="lastname">
                        </p>
                        <p>
                            <label>Email Address</label>
                            <input type="email" name="email">
                        </p>
                        <p>
                            <label>Phone Number</label>
                            <input type="text" name="phone">
                        </p>
                        <p class="full">
                            <label>Message</label>
                            <textarea name="message" rows="5"></textarea>
                        </p>
                        <p class="full last-p">
                            <button type="submit" class="btn btn-orange">Contact Us</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<style scoped lang='scss'>
    @import "../../public/styles.scss";

    .about {
        background: $Dark-green;
        color: #485e74;
        line-height: 1.6;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 1em;
    }

    .container {
        max-width: 1170px;
        margin-left: auto;
        margin-right: auto;
        padding: 1em;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    .brand {
        text-align: center;
    }

    .brand span {
        color: #fff;
    }

    .wrapper {
        box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
    }

    .wrapper>* {
        padding: 1em;
    }

    .company-info {
        /*background: #c9e6ff;*/
        background: $Light-green;
    }

    .company-info h3,
    .company-info ul {
        text-align: center;
        margin: 0 0 1rem 0;
    }

    .contact {
        background: #f9feff;
    }

    /* FORM STYLES */
    .contact form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    .contact form label {
        display: block;
    }

    .contact form p {
        margin: 0;
    }

    .contact form .full {
        grid-column: 1 / 3;
    }

    /*.contact form button,*/
    .contact form input,
    .contact form textarea {
        width: 100%;
        padding: 1em;
        border: 1px solid #c9e6ff;
    }

    .last-p {
        text-align: center;
    }

    .btn {
        text-transform: uppercase;
        padding: 15px 40px;
        display: inline-block;
        border-radius: 100%;
        outline: none;
        transition: all .2s;
        position: relative;
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

    .appear-enter {
        opacity: 0;
    }

    .appear-enter-active {
        transition: opacity 1s;
        animation: slideUp 1s ease-out;
    }

    .appear-leave {}

    .appear-leave-active {
        opacity: 0;
        transition: opacity 1s;
        animation: slideDown 1s ease-out;
    }

    @keyframes slideUp {
        from {
            transform: translateY(20px)
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
            transform: translateY(20px)
        }
    }


    /*.contact form button {
        background: #c9e6ff;
        border: 0;
        text-transform: uppercase;
    }

    .contact form button:hover,
    .contact form button:focus {
        background: #92bde7;
        color: #fff;
        outline: 0;
        transition: background-color 2s ease-out;
    }

    */


    /* LARGE SCREENS */
    @media(min-width:700px) {
        .wrapper {
            display: grid;
            grid-template-columns: 1fr 2fr;
        }

        .wrapper>* {
            padding: 2em;
        }

        .company-info h3,
        .company-info ul,
        .brand {
            text-align: left;
        }
    }

    @media(max-width:700px) {

        .contact form button,
        .contact form input,
        .contact form textarea {
            width: 80%;
            padding: 1em;
            /*border: 1px solid #c9e6ff;*/
        }

        /*.contact form {
            display: flex;
            flex-direction: column;
        }*/

    }

    @media(max-width:700px) {

        .contact form {
            display: flex;
            flex-direction: column;
        }
    }
</style>