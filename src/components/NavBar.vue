<template>
  <v-app-bar app class="navbar" color="milk">
    <v-toolbar-title>
      <v-icon color="black">mdi-tea</v-icon> Cafe Boba</v-toolbar-title
    >

    <v-spacer></v-spacer>
    <v-badge :content="count" :value="count" :color="colorCount" class="mr-6">
      <v-icon color="black" @click="count++">mdi-chart-bubble</v-icon>
    </v-badge>
  </v-app-bar>
  <!-- <header class="navbar" :class="{ offline: !networkOnLine }">
    <router-link to="/home">
      <img alt="logo-bento" class="logo" src="@/assets/img/bento-starter.svg" />
      <span class="site-name title-desktop">{{ appTitle }}</span>
      <span class="site-name title-mobile">{{ appShortTitle }}</span>
    </router-link>
    <div class="links">
      <nav class="nav-links">
        <div class="nav-item">
          <router-link to="/products">Products</router-link>
        </div>
        <div v-if="!isUserLoggedIn && networkOnLine" class="nav-item">
          <router-link to="/login">Login</router-link>
        </div>
        <div
          v-if="isUserLoggedIn && networkOnLine"
          class="nav-item logout-item"
          @click="logout"
        >
          <a>Logout</a>
        </div>
        <div v-if="!networkOnLine" class="nav-item offline-label">Offline</div>
      </nav>

      <img
        v-if="isUserLoggedIn && networkOnLine"
        class="user-picture can-hide"
        :src="user.photoURL"
        alt="Avatar"
      />
    </div>
  </header> -->
</template>

<script>
import firebase from 'firebase/app'
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters('authentication', ['isUserLoggedIn']),
    ...mapState('authentication', ['user']),
    ...mapState('app', ['networkOnLine', 'appTitle', 'appShortTitle']),
    colorCount() {
      if (this.count % 4 === 0) {
        return 'matcha'
      }
      if (this.count % 3 === 0) {
        return 'taro'
      }
      if (this.count % 2 === 0) {
        return 'thai'
      }
      return 'berry'
    }
  },
  methods: {
    async logout() {
      await firebase.auth().signOut()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.navbar {
  a {
    display: flex;
    align-items: center;
  }

  .title-desktop {
    display: inline;
  }

  .title-mobile {
    display: none;
  }

  @media (max-width: 500px) {
    padding: 0.7rem 0.7rem;

    .can-hide {
      display: none;
    }

    .title-desktop {
      display: none;
    }

    .title-mobile {
      display: block;
    }
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    position: relative;
  }

  .logo {
    height: 24px;
    padding-right: 8px;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: 1.5rem;
    top: 0.7rem;
    display: flex;

    .nav-links {
      display: flex;
      align-items: center;
      justify-content: center;

      .nav-item {
        position: relative;
        display: inline-block;
        margin-left: 1.5rem;
        line-height: 2.2rem;

        &:first-child {
          margin-left: 0;
        }

        a {
          font-weight: 500;
          font-size: 0.9rem;
          text-decoration: none;
          color: white;
          border-color: #2c3e50;
          line-height: 1.4rem;
          display: inline-block;
          cursor: pointer;
        }

        @mixin activatedLink() {
          margin-bottom: -2px;
        }

        .router-link-active {
          @include activatedLink;
        }

        @media (hover) {
          :hover {
            @include activatedLink;
          }
        }
      }
    }
  }

  &.offline {
    .links .nav-links .nav-item a,
    .site-name {
      color: white;
    }
  }

  .user-picture {
    max-height: 32px;
    margin-left: 1.5rem;
    border-radius: 50%;
  }

  .offline-label {
    padding: 0px 10px;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    margin-left: 1.5rem;
  }
}
</style>
