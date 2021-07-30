<template>
  <div class="tech">
<h1>Technologie</h1>
<div class="line"></div>
    <tcard> 
    </tcard>
  </div>
</template>

<script>
import tcard from "./tcard.vue";

export default {
  components: { tcard },
name: 'Tech',
}
</script>
<style lang="scss">
.tech{
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   h1 {
      text-align: center;
      font-size: 5rem;
      letter-spacing: 0.1rem;
    }
     .line {
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
}
</style>
