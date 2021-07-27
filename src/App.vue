<template>
<div>
    <Header></Header>
    <Home></Home>
    <Info></Info>
    <Tech></Tech>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Info from "./components/Info.vue";
import Tech from "./components/Tech.vue";


export default {

  name: "App",
  components: {
    Header,
    Home,
    Info,
    Tech
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: 0;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
