<template>
    <footer class="footer">
        <section class="footer__container">
            <section class="footer__main">
                <h2 class="footer__list-title">Opening Times:</h2>
                <ul class="footer__list">
                    <li>Monday – Friday (8am – 7pm)</li>
                    <li>Saturday (8am – 5pm)</li>
                    <li>Sunday (12pm - 5pm)</li>
                </ul>
            </section>
            <section class="footer__bottom">
                <img :src="require('../assets/images/logo-light.svg')" class="footer__logo"/>
                <section class="footer__contact-details">
                    <a href="tel:01518831122" class="footer__contact-link">
                        <img src="../assets/images/icons/phone-light.svg" class="footer__contact-link-image"/> 
                        <img src="../assets/images/icons/gb.svg" class="footer__contact-link-image"/>
                        0151 883 1122
                    </a>
                    <a href="mailto:info@biostoreexample.co.uk" class="footer__contact-link">info@biostoreexample.co.uk</a>
                </section>
            </section>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
    @import '../assets/global-elements';

    .footer {
        background: #363636;
        color: #fff;
        padding: 1rem 0;
        

        &__container {
            @extend .container;
        }

        &__list {
            list-style: none;
            padding: 0;
            margin: 0;
            color: lightgrey;
            line-height: 200%;
            font-size: 0.8em;
        }

        &__main, &__bottom {
            padding: 1rem 0;
        }

        &__main {
            padding: 2rem 0;
        }

        &__bottom {
            border-top: 1px solid #fff;
            display: grid;
            grid-template-columns: 6fr 4fr;
            font-size: 0.8em;
        }

        &__logo {
            width: 100%;
            height: auto;
            padding: 0rem 2rem;
            max-width: 150px;
        }

        &__contact-details {
            display: inline-flex;
            align-items: center;
            justify-content: space-around;

            font-weight: 600;
            letter-spacing: -0.025em;
            width: 100%;
        }

        &__contact-link {
            @extend .link-reset;
            width: max-content;
            height: max-content;
            margin: 0 1em;

            &-image {
                height: 0.6em;
                margin-right: 0.5em;
            }
        }
    }

    @media screen and (max-width: 750px) {
        .footer {
            padding-bottom: 12rem;
            font-size: 1rem;

            &__bottom {
                display: none;
            }
        }
    }
</style>