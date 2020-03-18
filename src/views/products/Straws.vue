<template>
  <Page pageName="products-straws">
    <h1 slot="content" class="page__title">Biodegradable Straws</h1>
    <ContentSection slot="content">
        <img :src="require('../../assets/images/products/Straws.png')" slot="body"/>
        <ul slot="body" class="content-slide__body-list">
            <li>An economical alternative for plastic straws</li>
            <li>Smooth surface ensures strength and dexterity</li>
            <li>Comply with EN455-2</li>
            <li>Minimises contamination</li>
            <li>Industry standard</li>
            <li>Quality management in accordance with ISO 9001 and ISO 13485</li>
            <li>Supplied in boxes of 250</li>
        </ul>
    </ContentSection>
  </Page>
</template>

<script>
import Page from '../components/Page';
import ContentSection from '../components/ContentSection';

export default {
  name: "Straws",
  components: {
    ContentSection,
    Page
  }
}
</script>

<style scoped lang="scss">
    @import '../../assets/global-elements';

    .content-slide__body-list {
        line-height: 200%;
    }
</style>
