<template>
    <article :class="bgImg ? 'content-slide--img' : emph == true ? 'content-slide--emph' : 'content-slide'" :style="bgImg ? `background-image: url('${bgImg}');` : ''">
        <section class="content-slide__container">
            <slot name="title"></slot>
            <slot name="body"></slot>
            <slot name="contentButton"></slot>
        </section>
    </article>
</template>

<script>

export default {
  name: 'ContentSection',
  props: {
      emph: Boolean,
      bgImg: String
  }
}
</script>

<style lang="scss">
    @import '../assets/global-elements.scss';

    .content-slide--emph, .content-slide--img {
        @extend .content-slide;
        
    }    

    .content-slide {
        font-size: 1rem;
        padding: 2em 1em;
        margin: 0;
        text-align: center;

        &--emph {
            background: $brand_color;
        }

        &--img {
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: block;
                background-color: rgba(0, 0, 0, 0.7);
                z-index: 0;
            }

            & > * {
                position: relative;
                z-index: 1;
            }
        }

        &--emph, &--img {
            color: #fff;
        }

        &__container {
            @extend .container;
            max-width: 1080px;
        }

        &__body {
            color: inherit;

            &-list {
                list-style: none;
                padding: 0;
                margin: 0;
                margin-bottom: 4rem;

                &-item {
                    line-height: 100%;
                    margin: 2rem;
                }
            }

            &--two-split {
                text-align: left;
                display: flex;
                flex-direction: column;

                & .content-slide__body-content {
                    width: 80%;
                    text-align: left;
                    min-width: 250px;
                    max-width: 600px;
                    margin-bottom: 1rem;
                }

                & > .content-slide__body-content--last {
                    @extend .content-slide__body-content;
                    text-align: right;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    align-self: flex-end;
                }
            }
        }

        &__body--two-split {
            @extend .content-slide__body;
        }

        &__title {
            font-size: 2em;

            &--two-split {
                text-align: left;
            }
        }

        &__button {
            @extend .btn-secondary;

            font-size: 0.8em;
            margin: 0 auto;

            &--emph {
                color: #fff;
                border-color: #fff;
            }

            &--two-split {
                margin: 0;
            }
        }

        &__button--two-split, &__button--emph {
            @extend .content-slide__button;
        }
    }
</style>
