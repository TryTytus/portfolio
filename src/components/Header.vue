<template>
  <div class="header">
    <vs-navbar notLine class="nav" v-model="active">
      <template #left>
        <a class="mob" href="#home" :active="active == 'homm'">
          <div class="circle"></div>
          <div style="width: 8px"></div>
          <h2>Adam Tytoń</h2>
        </a>
      </template>
    
      <a class="hide" href="#home" :active="active == 'homm'">
        <template>
          <div class="circle"></div>
          <div style="width: 8px"></div>
          <h2>Adam Tytoń</h2>
        </template>
      </a>
      <a href="#home" class="hide"
        ><vs-navbar-item id="homm" :active="active == 'homm'" class="homm"
          ><span>Home</span></vs-navbar-item
        ></a
      >
      <a href="#info" class="hide"
        ><vs-navbar-item :active="active == 'inf'" class="informacje"
          ><span>Informacje</span></vs-navbar-item
        ></a
      >
      <a href="#historia" class="hide">
        <vs-navbar-item :active="active == 'his'" class="historia"
          ><span>Historia</span></vs-navbar-item
        >
      </a>
      <a href="#technologie" class="hide">
        <vs-navbar-item :active="active == 'tech'" class="techn"
          ><span>Technologie</span></vs-navbar-item
        >
      </a>
      <a href="#kontakt" class="hide">
        <vs-navbar-item :active="active == 'kontakt'" class="kontakt"
          ><span>Kontakt</span></vs-navbar-item
        >
      </a>
    <template #right>
        <vs-button class="vis" @click="activeSidebar = !activeSidebar" flat icon>
<menu-icon></menu-icon>
      </vs-button>
</template>    

    </vs-navbar>
    <vs-sidebar
        right
        shadow
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          <!-- ...img logo -->
        </template>
        <vs-sidebar-item>
          <template #icon>
          <vs-icon icon="home" />
          </template>
          <a href="#home" @click="activeSidebar = !activeSidebar">
            Home
          </a>
        </vs-sidebar-item>
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bx-grid-alt'></i>
          </template>
          <a href="#info" @click="activeSidebar = !activeSidebar">
            Informacje
          </a>
        </vs-sidebar-item>
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bxs-music'></i>
          </template>
<a href="#historia" @click="activeSidebar = !activeSidebar">
            Historia
          </a>
        </vs-sidebar-item>
        
       
        <vs-sidebar-item>
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
         <a href="#technologie" @click="activeSidebar = !activeSidebar">
            Technologie
          </a>
        </vs-sidebar-item>
       <vs-sidebar-item>
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
         <a href="#kontakt" @click="activeSidebar = !activeSidebar">
            Kontakt
          </a>
        </vs-sidebar-item>
      </vs-sidebar>
  </div>
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: "Header",
  components: {
    MenuIcon
  },
  data: () => ({
    active: "homm",
    activeSidebar: false
  }),
};
</script>

<style lang="scss">
.header {
  a {
    display: flex;
    align-items: center;
    width: 100%;
  }
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
  .vis, .mob{
    visibility: hidden !important;
  }
  @media screen and (max-width: 1000px) {
    .hide, .vs-navbar__line, .notTransition {
      display: none !important;
      visibility: hidden !important;
    }
    .nav {
      justify-content: space-between !important;
    }
    .vis, .mob{
      visibility: visible !important;
    }
  }
}
</style>