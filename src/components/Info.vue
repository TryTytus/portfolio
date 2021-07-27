<template>
<div id="info" class="info">
  <div id="card" w="6">
    <h1>
      Tytuł
    </h1>
    <p>
      twednewfjkedfjkcv
    </p>
  </div>
</div>
</template>

<script>
export default {
name: 'Info',
}
</script>

<style lang="scss">

.info{
  display: flex;
  justify-content: center;
  height: 70vh;
  #card{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
    width: 50vw;
    background-color: #fff;
    box-shadow: 0px 20px 5px rgba(0, 0, 0, 0.05);
    border-radius: 100px;
    h1{
      margin: 10% 0;
    }
  }
}



</style>