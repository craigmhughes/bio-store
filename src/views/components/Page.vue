<template>
    <main :class="`page ${pageName}`">
        <slot name="content"></slot>
    </main>
</template>

<script>
export default {
    name: "Page",
    props: {
        pageName: String,
    }
}
</script>

<style scoped lang="scss">
    .page {

        &__title {
            font-size: 4rem;
            margin-bottom: 0;
        }
    }
</style>