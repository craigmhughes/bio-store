<template>
  <Page pageName="team">
    <h1 slot="content" class="page__title">Meet the Team</h1>
    <ContentSection slot="content">
      <section slot="body" class="content-slide__body">
            <section class="content-slide__body-content">
                <p>
                    Meet the Bio-Store team! A group with very mixed backgrounds 
                    coming together with the common cause of wanting the Earth to be a 
                    healthier, greener space for all humans, animals and plants to thrive together.
                </p>
            </section>
        </section>
    </ContentSection>

    <section slot="content" class="team-list">

        <Team__member name="Jennifer Robertson" title="Founder of Bio-Store" education="MSc in Conservation Management"
            :profile="require('../assets/images/team/jennifer-robertson.jpeg')"/>

        <Team__member name="Harry Robertson" title="Production Manager" education="BA in Business"
        :profile="require('../assets/images/team/harry-robertson.jpeg')"/>

        <Team__member name="Josh Manningham" title="Store Team Management" education="BA in Retail Management"
        :profile="require('../assets/images/team/josh-manningham.jpeg')"/>


        <Team__member name="Alex Carter" title="Lead Developer" education="BSc in Ethical Product Development"
            :profile="require('../assets/images/team/alex-carter.jpeg')"/>

        <Team__member name="Jessica Brotherton" title="Head of Finance" education="BA in Banking"
        :profile="require('../assets/images/team/jessica-brotherton.jpeg')"/>

        <Team__member name="Laura Lago" title="Head of Distribution"
        :profile="require('../assets/images/team/laura-lago.jpeg')"/>

    </section>
  </Page>
</template>

<script>
import Page from './components/Page';
import ContentSection from './components/ContentSection';
import Team__member from './components/Team__member';

export default {
  name: "Team",
  components: {
    ContentSection,
    Page,
    Team__member
  }
}
</script>

<style scoped lang="scss">
    @import '../assets/global-elements';

    .team-list {
        @extend .container;
        max-width: 900px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 850px) {
      .team-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (max-width: 550px) {
      .team-list {
        grid-template-columns: repeat(1, 1fr);
      }
    }
</style>