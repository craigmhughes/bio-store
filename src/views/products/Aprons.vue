<template>
  <Page pageName="products-aprons">
    <h1 slot="content" class="page__title">Biodegradable Aprons</h1>
    <ContentSection slot="content" class="product--right">
        <img :src="require('../../assets/images/products/apron.webp')" slot="body"/>
        <section slot="body" class="product__body">
          <p class="btn-primary">New Polycare Biodegradable single use aprons</p>
          <p>
            As part of our commitment to the environment and sustainability, 
            we have introduced the new Polycare range of biodegradable aprons. 
            Biodegradable aprons ensure speedier breakdown when discarded into landfill, 
            where the majority of disposable polythene aprons are currently sent following use.
          </p>
        </section>
    </ContentSection>

    <ContentSection :emph="false" slot="content">
        <h2 slot="title" class="content-slide__title--two-split">Key Features</h2>

        <section slot="body" class="content-slide__body--l">
            <section class="content-slide__body-content">
                <p>
                    Polycare biodegradable aprons are adjustable to fit all shapes and builds. 
                    Supplied on rolls for easy dispensing. Polycare biodegradable aprons are 
                    for use in all departments and medical specialisations including nursing, 
                    midwifery, infection control, domestic, paediatric and theatre.
                </p>
                <ul>
                  <li>less polythene pollution of seas and seashores improves wildlife 
                    environments and ecosystems.</li>
                  <li>reduces the need for incineration, currently a major challenge in the UK 
                    due to limited number of sites that can recycle the large tonnage of plastic used.</li>
                </ul>
            </section>
        </section>
    </ContentSection>

    <article class="alert" slot="content">
        <section class="alert__container">
            <h2 class="alert__title">NOTE:</h2>
            <p>
              White only is available as of May 2018. Limited quantities of other colours, based on
              colour coding and waste segregation requirements, are planned to follow later in 2018. Please
              contact us for availability.
            </p>
        </section>
    </article>

    <ContentSection :emph="false" slot="content">
        <h2 slot="title" class="content-slide__title--two-split">Duty of Care</h2>

        <section slot="body" class="content-slide__body--l">
            <section class="content-slide__body-content">
                <p>
                    Important steps have been taken to reduce the amount of virgin polythene and significantly
                    increase the amount of recycled material across our complete range of healthcare disposables.
                </p>
                <ul>
                  <li>Standard quantity = 5 rolls of 200 aprons in biodegradable sleeves</li>
                  <li>CE Certified</li>
                  <li>Boxed in cardboard outers which can be recycled</li>
                  <li>18 – 36 months to commence break down once sent to landfill</li>
                </ul>
            </section>
            <section class="content-slide__body-content">
                <p>
                    China was the largest importer of the UK’s plastic waste, taking millions of tonnes 
                    of plastic a year. Since October 2017 China has ended all imports of UK plastic 
                    waste leaving the UK with a serious problem to process and recycle plastic. 
                    Currently the only option in many areas is landfill.
                    <br/><br/>
                    The UK Government is investing in new recycling projects but is a long way from 
                    being able to manage the quantity of plastic waste currently produced. 2042 is the 
                    current date for achieving the UK targets. GV Health, as a main approved supplier 
                    to the NHS is working with all partners to ensure the most sustainable way forward 
                    in terms of product and disposal NOW.
                </p>
            </section>
        </section>
    </ContentSection>
  </Page>
</template>

<script>
import Page from '../components/Page';
import ContentSection from '../components/ContentSection';

export default {
  name: "Aprons",
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

    .alert {
      background: #e3e3e3;
      padding: 2rem 0;

      &__container {
        @extend .container;
        max-width: 1080px;
      }
    }

    .product{
      &--right{
        text-align: right;
      }

      &__body {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
    }
</style>
