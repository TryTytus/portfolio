<template>
  <div class="header">
    <vs-navbar class="nav" v-model="active">
      <template #left>
        <a class="mob" href="#home" :active="(nav = '0')">
          <div class="circle"></div>
          <div style="width: 8px"></div>
          <h2>Adam Tytoń</h2>
        </a>
      </template>
    
      <a class="hide" href="#home" :active="(nav = '0')">
        <template>
          <div class="circle"></div>
          <div style="width: 8px"></div>
          <h2>Adam Tytoń</h2>
        </template>
      </a>
      <a href="#home" class="hide"
        ><vs-navbar-item :active="(nav = '0')" class="home"
          ><span>Home</span></vs-navbar-item
        ></a
      >
      <a href="#info" class="hide"
        ><vs-navbar-item :active="(nav = '1')" class="informacje"
          ><span>Informacje</span></vs-navbar-item
        ></a
      >
      <a href="#historia" class="hide">
        <vs-navbar-item :active="(nav = '2')" class="historia"
          ><span>Historia</span></vs-navbar-item
        >
      </a>
      <a href="#technologie" class="hide">
        <vs-navbar-item :active="(nav = '3')" class="techn"
          ><span>Technologie</span></vs-navbar-item
        >
      </a>
      <a href="#kontakt" class="hide">
        <vs-navbar-item :active="(nav = '4')" class="kontakt"
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
        <vs-sidebar-item id="home">
          <template #icon>
            <i class='bx bx-home'></i>
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
            <i class='bx bx-grid-alt'></i>
          </template>
          Market Overview
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <i class='bx bxs-music'></i>
          </template>
          Music
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-group'></i>
              </template>
              Social media
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="Instagram">
            <template #icon>
              <i class='bx bxl-instagram'></i>
            </template>
            Instagram
          </vs-sidebar-item>
          <vs-sidebar-item id="twitter">
            <template #icon>
              <i class='bx bxl-twitter' ></i>
            </template>
            Twitter
          </vs-sidebar-item>
          <vs-sidebar-item id="Facebook">
            <template #icon>
              <i class='bx bxl-facebook' ></i>
            </template>
            Facebook
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <i class='bx bx-code-alt' ></i>
              </template>
              Coding
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="github">
            <template #icon>
              <i class='bx bxl-github' ></i>
            </template>
            Github
          </vs-sidebar-item>
          <vs-sidebar-item id="codepen">
            <template #icon>
              <i class='bx bxl-codepen'></i>
            </template>
            Codepen
          </vs-sidebar-item>
          <vs-sidebar-item id="discord">
            <template #icon>
              <i class='bx bxl-discord'></i>
            </template>
            Discord
          </vs-sidebar-item>
          <vs-sidebar-item id="Javascript">
            <template #icon>
              <i class='bx bxl-javascript' ></i>
            </template>
            Javascript
          </vs-sidebar-item>
          <vs-sidebar-item id="git">
            <template #icon>
              <i class='bx bxl-git' ></i>
            </template>
            Git
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item id="donate">
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
          Donate
        </vs-sidebar-item>
        <vs-sidebar-item id="drink">
          <template #icon>
            <i class='bx bx-drink'></i>
          </template>
          Drink
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
          <template #icon>
            <i class='bx bxs-shopping-bags'></i>
          </template>
          Shopping
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <i class='bx bx-chat' ></i>
          </template>
          Chat
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>

            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>

              <template #badge>
                28
              </template>
            </vs-avatar>
          </vs-row>
        </template>
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
    active: "0",
    activeSidebar: false
  }),
};
</script>

<style lang="scss">
.header {
  a {
    display: flex;
    align-items: center;
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