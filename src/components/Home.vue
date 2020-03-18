<template>
  <main class="home">
    <article class="home-landing">
        <section class="home-landing__content">

            <p class="home-landing__content-slogan">Working with the earth</p>
            <h1 class="home-landing__content-title">Welcome to the Bio-Store</h1>

            <p class="home-landing__content-desc">
                We are committed to providing biodegradable 
                alternatives to the plastics that are damaging our planet.
            </p>
            <button class="home-landing__content-button"><img src="../assets/images/icons/shopping-bag.svg"/>View Products</button>
       
        </section>
        <section class="home-landing__content--last">
            <img src="../assets/images/svg-art/heart-girl.svg" class="home-landing__content-art"/>
        </section>
    </article>

    <article class="alert">
        <section class="alert__container">
            <img src="../assets/images/icons/truck.svg" class="alert__image"/>
            <h2 class="alert__title">Free Delivery on orders over £100 Worldwide</h2>
        </section>
    </article>

    <ContentSection :emph="false">
        <h2 slot="title" class="content-slide__title--two-split">We're based in the North West of England</h2>

        <section slot="body" class="content-slide__body--two-split">
            <section class="content-slide__body-content">
                <p>
                    but deliver worldwide and specialise in those products that are frequently disposed of all too readily.
                </p>
            </section>
            <section class="content-slide__body-content--last">
                <p>
                    So is it biodegradable gloves you need? Maybe aprons? Or are you in catering and require an
                    alternative to those plastic straws that end up everywhere? 
                </p>
                <button class="content-slide__button--two-split">Check out our product page!</button>
            </section>
        </section>
    </ContentSection>

    <ContentSection :emph="true">
        <h2 slot="title" class="content-slide__title">We know breaking habits is hard</h2>
        <section slot="body" class="content-slide__body">
            <section class="content-slide__body-content">
                <p>
                    but we’re here to discuss your options on how to turn your
                    business into an Earth-friendly one.
                </p>
            </section>
        </section>
        <button slot="contentButton" class="content-slide__button--emph">Contact us today!</button>
    </ContentSection>
  </main>
</template>

<script>
import ContentSection from '../components/ContentSection.vue'

export default {
  name: 'Home',
  components: {
    ContentSection
  }
}
</script>

<style lang="scss">
    @import '../assets/global-elements.scss';

    .home-landing {
        @extend .container;
        display: grid;
        grid-template-columns: 6fr 4fr;
        padding: 4em 0;
        font-size: 1rem;


        &__content {
            display: flex;
            align-items: flex-start;
            justify-content: start;
            flex-direction: column;
            text-align: left;

            &--last {
                display: flex;
                align-items: center;
                justify-content: start;
            }

            &-slogan {
                font-size: 1.5em;
            }

            &-title {
                font-size: 5em;
                line-height: 100%;
                margin: 0;
            }

            &-desc {
                font-size: 1.5em;
            }

            &-button {
                @extend .btn-primary;
            }

            &-art {
                width: 80%;
                max-width: 600px;
                vertical-align: middle;
            }
        }
    }

    .alert {
        background: #eeeeee;
        padding: 1em 0;

        &__container {
            @extend .container;
            display: flex;
            justify-content: center;
        }

        &__image {
            margin-right: 2em;
        }

        &__title {
            color: #424242;
            font-weight: 500;
        }
    }

    @media screen and (max-width: 750px) {
        .home {
            padding-bottom: 12rem;
        }

        .home-landing {
            font-size: 0.8rem;
            display: flex;
            flex-direction: column-reverse;

            &__content {

                &-art {
                    max-width: 250px;
                }
            }
        }

        .alert {
            &__title {
                font-size: 1.25rem;
            }

            &__image {
                margin-right: 1em;
            }
        }
    }
</style>
