<template>
  <div id="app">
    <router-view></router-view>
    <Menu/>
    <Footer/>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Menu,
    Footer
  }
};
</script>

<style>
@import './shared/css/base.css';
@import './shared/css/typography.css';
@import './shared/css/card.css';


 *,
 *::before,
 *::after {
     box-sizing: inherit;
 }
 
 html {
     box-sizing: border-box;
      /* 1rem= 10px, 10px/16px=62.5% */
     font-size: 62.5%; 
 }
body {
  padding: 0;
  margin: 0;
}
#app {
  /* style for font family */
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.container-fluid {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
