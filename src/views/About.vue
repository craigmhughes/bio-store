<template>
  <Page pageName="about">
    <h1 slot="content" class="page__title">About Us</h1>
    <ContentSection slot="content">
      <section slot="body" class="content-slide__body">
            <section class="content-slide__body-content">
                <p>
                    Bio-Store are committed to cutting down on plastic waste and helping our environment. 
                    We are constantly looking for new ways to combat climate change and our design team 
                    are busy creating new products to help you do the same.
                </p>
                <br/>
                <p>
                    Whilst everyone is now aware of the damages of climate change and plastic waste, 
                    many don’t know the alternatives. We’re here to help! Consult with us on how you 
                    and your business can utilize our products to make you truly eco-friendly.
                </p>
            </section>
        </section>
    </ContentSection>

    <ContentSection :emph="false" slot="content">
        <h2 slot="title" class="content-slide__title--two-split">How it works</h2>

        <section slot="body" class="content-slide__body--l">
            <section class="content-slide__body-content">
                <p>
                    Drop into our store to see our products, 
                    drop us a message or give us a ring. Our team are ready to help, 
                    whether you want to purchase some of our products or tell us about you and your 
                    business to get advice on how to become more eco-friendly.
                </p>
            </section>
        </section>
    </ContentSection>

    <ContentSection :emph="true" slot="content">
        <h2 slot="title" class="content-slide__title">Who are we?</h2>
        <button slot="contentButton" class="content-slide__button--emph">Meet the team!</button>
    </ContentSection>
  </Page>
</template>

<script>
import Page from './components/Page';
import ContentSection from './components/ContentSection';

export default {
  name: "About",
  components: {
    ContentSection,
    Page
  }
}
</script>
