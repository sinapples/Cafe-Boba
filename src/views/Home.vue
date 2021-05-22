<template>
  <div class="page-wrapper">
    <h1 class="home-page-title">{{ appTitle }}</h1>

    <v-card>
      <v-card-title>
        Summer Side Project
      </v-card-title>
      <v-card-subtitle
        >Interested in a live guided class on web app?</v-card-subtitle
      >
      <v-card-text>
        <v-text-field v-model="name" label="Name" dense outlined></v-text-field>
        <v-text-field
          v-model="name"
          label="Discord Username"
          dense
          outlined
          placeholder="sinap#3816"
        ></v-text-field>
        <v-text-field
          v-model="name"
          label="Favorite Drink"
          dense
          outlined
          placeholder="Thai Iced Tea"
        ></v-text-field>
      </v-card-text>
      <v-card-actions
        ><v-spacer /><v-btn block color="primary"
          >I'm Interested</v-btn
        ></v-card-actions
      >
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  data() {
    return {
      name: '',
      discord: '',
      experience: '',
      drink: '',
      displayMyName: false
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    margin-bottom: 3rem;
  }

  .home-page-title {
    text-align: center;
  }

  .documentation-link {
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #5d6788;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    box-sizing: border-box;
    text-decoration: none;
    width: fit-content;
    font-weight: 500;
  }
}
</style>
