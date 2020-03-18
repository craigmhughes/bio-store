<template>
  <Page pageName="products-gloves">
    <h1 slot="content" class="page__title">Biodegradable Gloves</h1>
    <ContentSection slot="content">
        <img :src="require('../../assets/images/products/Gloves.png')" slot="body"/>
        <ul slot="body" class="content-slide__body-list">
            <li>An economical alternative for those with latex allergies</li>
            <li>Beaded cuff and smooth surface ensures strength and dexterity</li>
            <li>Comply with EN455-2</li>
            <li>Powder free material minimises powder contamination and allergic</li>
            <li>Industry standard 240mm cuff length</li>
            <li>Quality management in accordance with ISO 9001 and ISO 13485</li>
            <li>Supplied in dispenser boxes of 100 ambidextrous gloves</li>
        </ul>
    </ContentSection>
  </Page>
</template>

<script>
import Page from '../components/Page';
import ContentSection from '../components/ContentSection';

export default {
  name: "Gloves",
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
