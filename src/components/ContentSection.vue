<template>
    <article :class="emph == true ? 'content-slide--emph' : 'content-slide'">
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
      emph: Boolean
  }
}
</script>

<style lang="scss">
    @import '../assets/global-elements.scss';

    .content-slide--emph {
        @extend .content-slide;
        
    }    

    .content-slide {
        font-size: 1.5rem;
        padding: 2em 0;
        margin: 0;
        text-align: center;

        &--emph {
            background: $brand_color;
            color: #fff;
        }

        &__container {
            @extend .container;
            max-width: 1080px;
        }

        &__body {
            color: inherit;
        }

        &__body--two-split {
            @extend .content-slide__body;
            text-align: left;
            display: flex;
            flex-direction: column;

            & .content-slide__body-content {
                width: 80%;
                text-align: left;
                min-width: 300px;
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

        &__title {
            font-size: 2em;

            &--two-split {
                text-align: left;
            }
        }

        &__button {
            @extend .btn-secondary;

            font-size: 1.1rem;
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
