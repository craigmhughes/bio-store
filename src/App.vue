<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navigation from './views/components/Navigation.vue';
import Footer from './views/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
  @import './assets/variables';
  @import './assets/global-elements.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #222;
    overflow-x: hidden;
    min-height: 100vh;

    & > div {
      min-height: calc(100vh - 520px);
    }
  }

  body {
      margin: 0;
      font-size: 18px;
  }

  // Quick apply styles to all headings.
  $headings: h1 h2 h3 h4 h5 h6;

  @each $heading in $headings{
      #{$heading} {
          letter-spacing: -0.05em;
      }
  }

  // Keep body content smaller than nav
  main .container {
      max-width: 1080px;
  }
</style>