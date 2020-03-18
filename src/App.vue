<template>
  <div id="app">
    <Navigation />
    <Home />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    Home
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
