<template>
  <Page pageName="products">
    <h1 slot="content" class="page__title">Products</h1>
    <ContentSection slot="content">
      <section slot="body" class="content-slide__body">
            <section class="content-slide__body-content">
                <nav class="content-slide__body-list--nav">
                    <router-link to="/products/aprons">Biodegradable Aprons</router-link>
                    <router-link to="/products/gloves">Biodegradable Gloves</router-link>
                    <router-link to="/products/bags">Biodegradable Bags</router-link>
                    <router-link to="/products/straws">Biodegradable Straws</router-link>
                </nav>
            </section>
        </section>

    </ContentSection>
  </Page>
</template>

<script>
import Page from './components/Page';
import ContentSection from './components/ContentSection';

export default {
  name: "Products",
  components: {
    ContentSection,
    Page
  }
}
</script>

<style scoped lang="scss">
    @import '../assets/global-elements';

    .content-slide__body-list--nav {
        @extend .container;
        display: flex;
        overflow: auto;

        & > a {
            @extend .btn-secondary;
            margin: 1rem;
        }
    }
</style>
