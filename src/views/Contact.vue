<template>
  <Page pageName="contact">
    <h1 slot="content" class="page__title">Contact Us</h1>
    <ContentSection slot="content">
      <section slot="body" class="content-slide__body">
            <section class="content-slide__body-content">
                <p>
                    We have a wide range of biodegradable solutions. Feel free 
                    to drop into any of our branches, drop us a message 
                    on our contact form or give us a ring!
                </p>
            </section>
        </section>
    </ContentSection>

    <ContentSection slot="content" :emph="true">
      <section slot="body" class="content-slide__body--l">
          <h2>Our Locations</h2>
          <section class="content-slide__body-content--grid">
            <p>
              <strong>Manchester</strong><br/>
              Bio-Store<br/>
              15-17 St Andrew Street<br/>
              M3 5NS
            </p>
            <p>
              <strong>Newcastle</strong><br/>
              Bio-Store<br/>
              35 Grey Street<br/>
              NE11 6JB
            </p>
            <p>
              <strong>Dublin</strong><br/>
              Bio Store<br/>
              O’Connell Street Lower,<br/>
              North City, Ireland<br/>
            </p>
          </section>
        </section>
    </ContentSection>

    <ContentSection slot="content">
      <section slot="body" class="content-slide__body">
          <h2>Send us a message</h2>
          <form class="content-slide__body-content">
            <input type="text" placeholder="Name" class=""/>
            <input type="email" placeholder="E-Mail Address"/>
            <input type="text" placeholder="Subject"/>
            <textarea type="text" placeholder="Message"/>
            <button class="btn">Send Message</button>
          </form>
        </section>
    </ContentSection>
  </Page>
</template>

<script>
import Page from './components/Page';
import ContentSection from './components/ContentSection';

export default {
  name: "Contact",
  components: {
    ContentSection,
    Page
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/global-elements';

  .content-slide__body-content--grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  form {
    input, textarea {
      border-radius: 0.5rem;
      font-size: 1.25rem;
      padding: 1em;
      border: 2px solid grey;
      width: calc(100% - 2em);
      margin: 0.5rem 0;

      &::placeholder {
        font-size: 1rem;
        font-weight: 600;
      }
    }

    & > .btn {
      @extend .btn-primary;
      width: 100%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 750px) {
    .content-slide__body-content--grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>