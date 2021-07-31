<template>
<div>
    <Header></Header>
    <Home></Home>
    <Info></Info>
    <His></His>
    <Tech></Tech>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Info from "./components/Info.vue";
import Tech from "./components/Tech.vue";
import His from "./components/His.vue"


export default {

  name: "App",
  components: {
    Header,
    Home,
    Info,
    His,
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
 .circle{
      height: 2vh;
      width: 2vh;
      border-radius: 1000px;
      background: linear-gradient(0deg, rgba(44,96,253,1) 0%, rgba(5,173,215,1) 100%);
    }

.border{
      position: relative;
    $border: 6px;
    border-radius: 25px;

    background-clip: padding-box; /* !importanté */
    border: solid $border transparent; /* !importanté */
    box-sizing: border-box;
box-shadow: 3px 3px 17px 10px rgba(5, 173, 215, 0.22);
border-radius: 60px;

    &:before {
      
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin: -$border; /* !importanté */
      border-radius: inherit; /* !importanté */
      background: linear-gradient(2deg, rgba(44, 96, 253,0.7) 0%, rgba(5,173,215,1) 100%);
    }
}
</style>
