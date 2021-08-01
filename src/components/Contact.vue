<template>
<div id="kontakt" class="con">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#263763" fill-opacity="1" d="M0,64L40,90.7C80,117,160,171,240,176C320,181,400,139,480,154.7C560,171,640,245,720,272C800,299,880,277,960,240C1040,203,1120,149,1200,133.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
</svg>
<div class="cont_main">
<div class="con_content">
<h1>
    Kontakt
</h1>
<h2>
  email:      adamtyton1@gmail.com <br>
  <br>
  numer telefonu:   518257053
</h2>
</div>
</div>
</div>
</template>

<script>
export default {
    name: 'Contact'

}
</script>

<style lang="scss">

.con svg{
    position: relative;
    transform: translateY(2vh);
    z-index: -1;
}

.cont_main{ 
    height: 30vh;
    background-color: #263763;
    z-index: -1;

    h1{
    font-size: 3rem;
    z-index: 5;
    color: #FFF;
    margin-bottom: 10vh;
    }
    h2{
    color: #FFF;        
    }
}
.con_content{
    
    margin: 0 auto;
    width: 80vw;
}

</style>