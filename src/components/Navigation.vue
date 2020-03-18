<template>
    <header class="navigation">
        <section class="navigation-top">
            <section class="navigation-top__container">
                <a href="tel:01518831122" class="navigation-top__link">
                    <img src="../assets/images/icons/phone.svg" class="navigation-top__link-image"/> 
                    <img src="../assets/images/icons/gb.svg" class="navigation-top__link-image"/>
                    0151 883 1122
                </a>
                <a href="mailto:01518831122" class="navigation-top__link">info@biostoreexample.co.uk</a>
            </section>
        </section>
        <section class="navigation__container--last">
            <img src="../assets/images/logo-colour.svg" class="navigation__image"/>
            <section class="navigation__nav-container">
                <nav class="navigation__nav">
                    <a href="/" class="navigation__nav-link--active">Home</a>
                    <a href="/" class="navigation__nav-link">About us</a>
                    <a href="/" class="navigation__nav-link">Products</a>
                    <a href="/" class="navigation__nav-link">Contact us</a>
                </nav>
            </section>
            <section class="navigation__menu-container">
                <section class="navigation__contact-details">
                    <a href="tel:01518831122" class="navigation__contact-link">
                        <img src="../assets/images/icons/phone.svg" class="navigation__contact-link-image"/> 
                        <img src="../assets/images/icons/gb.svg" class="navigation__contact-link-image"/>
                        0151 883 1122
                    </a>
                    <a href="mailto:info@biostoreexample.co.uk" class="navigation__contact-link">info@biostoreexample.co.uk</a>
                </section>
                <!-- <button class="navigation__menu-btn"><img src="../assets/images/icons/menu.svg" class="navigation__menu-btn-image"/></button> -->
            </section>    
        </section>
    </header>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped lang="scss">
    @import '../assets/global-elements.scss';

    .navigation-top {
        background-color: #f4f4f4;
        padding: 0.6em 0;

        &__container {
            justify-content: center;
        }

        &__link {
            @extend .link-reset;

            &-image {
                height: 0.6em;
                padding: 0.1em;
            }
        }
    }

    .navigation {
        background: #fff;
        font-size: 0.9em;
        width: 100%;

        &__container {
            @extend .container;
            padding-top: 2em;
            display: grid;
            grid-template-columns: 1.5fr 5.5fr 3fr;
            text-align: left;
            margin-bottom: 2em;

            &--last {
                display: flex;
            }
        }

        &__container--last {
            @extend .navigation__container;
        }

        &__image {
            width: calc(100% - 8em);
            min-width: 100px;
            max-width: 200px;
            height: auto;
            display: flex;
            justify-self: flex-end;
        }

        &__nav-container {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0em 2em;
        }

        &__nav {
            width: 80%;
            display: inline-flex;
            justify-content: space-around;
            align-items: center;

            &:hover > &-link--active::after {
                width: 0;
            }

            &-link {
                @extend .link-reset;
                padding: 1em 1em;
                font-weight: 800;
                letter-spacing: -0.025em;
                position: relative;

                &:hover::after{
                    width: 1em;
                }

                &::after {
                    content: "\A";
                    white-space: pre;
                    width: 0;
                    height: 2px;
                    top: 2.75em;
                    left: 1em;
                    position: absolute;
                    background: black;

                    transition: 0.2s ease-out;
                }

                &--active::after, &--active:hover::after {
                    width: 1em;
                }
            }

            &-link--active {
                @extend .navigation__nav-link;
            }
        }

        &__menu-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &__contact-details, &-top__container {
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

        &__menu-btn {
            @extend .btn !optional;
            align-content: center;
            justify-content: center;
            align-self: center;

            display: none;

            &-image {
                height: 2.5em;
            }
        }
    }

    @media screen and (min-width: 1250px) {
        .navigation-top {
            display: none;
        }

        .navigation {
            &__nav {
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 1250px) {
        .navigation {
            border-top: 1px solid #e3e3e3;

            &__container {
                display: grid;
                grid-template-columns: 2fr 8fr;
                padding-bottom: 2em;
            }

            &__contact-details {
                display: none;
            }

            &__nav {
                width: 80%;

                &-link::after {
                    left: 1em;
                }
            }
        }
    }

    @media screen and (max-width: 780px) {
        .navigation-top {
            &__container {
                justify-content: space-between;
                width: 90%;
                margin: 0 auto;
                font-size: 0.8em;
            }
        }

        .navigation {
            position: fixed;
            bottom: 0;
            display: flex;
            flex-direction: column-reverse;
            font-size: 0.9em;

            &__container {
                width: 90%;
                grid-template-columns: 3fr 7fr;
                border-bottom: 1px solid #e3e3e3;
                margin: 0 auto;
                padding: 1em 0;
                
                &--last {
                    overflow-x: scroll;
                }
            }

            &__contact-details {
                display: none;
            }

            &__image {
                align-self: center;
            }

            &__menu-btn {
                display: flex;                
                padding: 1em;
            }

            &__menu-container {
                display: none;
                width: 0;
            }

            &__image {
                padding: 0;
                display: flex;
                justify-self: flex-start;
            }

            &__nav-container {
                margin-left: 2em;
                margin-right: 0em;
                padding-right: 0;
            }

            &__nav {

                &-link {
                    border-radius: 1.25em;
                    border: 2px solid #222;
                    color: #222;
                    font-size: 0.8em;
                    margin: 0 0.5em;
                    width: max-content;
                    white-space: nowrap;
                    padding: 1em 2em;

                    &--active {
                        background: $brand_color;
                        border: 2px solid $brand_color;
                        color: #fff;
                    }

                    &::after {
                        display: none;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 380px) {
        .navigation-top__container {
            flex-direction: column;
        }

        .navigation-top__link {
            padding: 0.25em 0;
        }
    }
</style>