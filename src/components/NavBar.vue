<template>
  <v-app-bar app color="milk">
    <v-toolbar-title>
      <router-link v-if="count % 2 === 1" to="/login">
        <v-icon color="black">mdi-tea</v-icon>
      </router-link>

      <router-link v-else to="/home">
        <v-icon color="black">mdi-tea</v-icon>
      </router-link>

      Cafe Boba
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>

    <v-badge
      v-else
      :content="count"
      :value="count"
      :color="colorCount"
      class="mr-6"
    >
      <v-icon color="black" @click="count++">mdi-chart-bubble</v-icon>
    </v-badge>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase/app'
import { mapGetters, mapState, mapActions } from 'vuex'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'

export default {
  components: { NewContentAvailableToastr },

  data() {
    return {
      count: 0
    }
  },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp']),

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
    },
    ...mapActions('app', [
      'closeAddToHomeScreenModalForApple',
      'serviceWorkerSkipWaiting'
    ])
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
