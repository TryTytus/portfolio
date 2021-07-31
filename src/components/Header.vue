<template>
  <div class="header">
    <vs-navbar class="nav"  v-model="active">
      <template>
        <div class="circle"></div>
        <div style="width: 8px;"></div>
        <h2>Adam Tytoń</h2>
      </template>
      <a href="#home"
        ><vs-navbar-item :active="(nav = '0')" class="home"
          ><span>Home</span></vs-navbar-item
        ></a
      >
      <a href="#info"
        ><vs-navbar-item :active="(nav = '1')" class="informacje"
          ><span>Informacje</span></vs-navbar-item
        ></a
      >
      <vs-navbar-item :active="(nav = '2')" class="historia"
        ><span>Historia</span></vs-navbar-item
      >
      <vs-navbar-item :active="(nav = '3')" class="techn"
        ><span>Technologie</span></vs-navbar-item
      >
      <vs-navbar-item :active="(nav = '4')" class="kontakt"
        ><span>Kontakt</span></vs-navbar-item
      >
    </vs-navbar>
  </div>
</template>

<script>


export default {
  name: "Header",
  data: () => ({
    nav: "0",
  }),
};
</script>

<style lang="scss">
.header {
  .nav {
    position: fixed;
    display: flex;
    background-color: #ffffff;
    height: 55px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.07);
    div {
      h2 {
        width: 150px;
      }
      div {
        span {
          text-align: center;
          margin: 0 10px;
          font-size: 1.1rem;
        }
      }
    }
   
  }
}
</style>