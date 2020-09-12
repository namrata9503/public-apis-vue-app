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
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  /* style for font family */
  font-family: "Tenali Ramakrishna", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
