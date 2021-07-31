<template>
  <div class="techh">
<h1>Technologie</h1>
<div class="linee"></div>
<div id="area">
<div class="mainn">
 <div class="flex">
    <div class="circle"></div>
<h2 class="tit">
  Bardzo dobrze znane
</h2>
 </div>
<div class="gridd">
  <tcard title="HTML5" icon="devicon-html5-plain"></tcard>
    <tcard title="CSS3" icon="devicon-css3-plain"></tcard>
    <tcard title="Javascript" icon="devicon-javascript-plain"></tcard>
    <tcard title="Wordpress" icon="devicon-wordpress-plain"></tcard>
    <tcard title="Linux" icon="devicon-linux-plain"></tcard>
    <tcard title="C++" icon="devicon-cplusplus-line"></tcard>
     <tcard title="Flutter" icon="devicon-flutter-plain"></tcard>
    <tcard title="Bash" icon="devicon-bash-plain"></tcard>
    <tcard title="Dart" icon="devicon-dart-plain"></tcard>
</div>
</div>
<div class="mainn">
 <div class="flex">
    <div class="circle"></div>
<h2 class="tit">
  Dobrze znane
</h2>
 </div>
<div class="gridd">
   <tcard title="Vue.js" icon="devicon-vuejs-plain"> </tcard>
    
    <tcard title="React.js" icon="devicon-react-original"></tcard>
    <tcard title="Bootstrap" icon="devicon-bootstrap-plain"></tcard>
    <tcard title="Figma" icon="devicon-figma-plain"></tcard>
     <tcard title="Firebase" icon="devicon-firebase-plain"></tcard>
     <tcard title="Firebase" class="none" style="visible: none;" icon="devicon-firebase-plain"></tcard>
</div>
</div>
<div class="mainn">
 <div class="flex">
    <div class="circle"></div>
<h2 class="tit">
  Podstawowe umiejętności
</h2>
 </div>
</div>

    <div class="gridd">
   
    
    <tcard title="npm" icon="devicon-npm-original-wordmark"></tcard>
    
    <tcard title="Git" icon="devicon-git-plain"></tcard>
    <tcard title="Postgresql" icon="devicon-postgresql-plain"></tcard>
   
   
    

    <tcard title="Github" icon="devicon-github-original"></tcard>
    <tcard title="Python" icon="devicon-python-plain"></tcard>
    <tcard title="Babel" icon="devicon-babel-plain"></tcard>
    <tcard title="SCSS" icon="devicon-sass-original"></tcard>
    </div>

</div>

  </div>
</template>

<script>
import tcard from "./tcard.vue";

export default {
  components: { tcard },
name: 'Tech',
}
</script>
<style lang="scss">div
.techh{
  height: 180vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .tit{
    text-align: start;
    font-size: 2.2rem;
  
}
#area{
  max-width: 80vw;
  display: flex !important;
  align-items: center !important;
  justify-items: start !important;
  justify-self: start !important;
  flex-direction: column !important;
  
}
  .none{
    visibility: hidden;
  }
   h1 {
      text-align: center;
      font-size: 5rem;
      letter-spacing: 0.1rem;
    }
    
     .linee {
      width: 5vw;
      height: 10px;
      background: linear-gradient(
        162deg,
        rgba(44, 96, 253, 1) 0%,
        rgba(5, 173, 215, 1) 100%
      );
      margin: 1vh auto 5vh auto;
      border-radius: 25px;
    }
    .gridd{
      width: min-content;
      display: grid;
      grid-template-columns: repeat(6,1fr);
      
    }
    .mainn{
      width: 67vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .circle{
        width: 1.5vh;
        height: 1.5vh;
        margin: 0 1vw;
      }
    }
    .flex{
      display: flex;
    }
}
</style>
