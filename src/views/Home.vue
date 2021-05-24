<template>
  <!-- <h1 class="home-page-title">{{ appTitle }}</h1> -->
  <div>
    <v-parallax
      src="https://images.unsplash.com/photo-1571126770037-2945244eea9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
    >
      <div class="page-wrapper">
        <v-card color="taro" rounded="xl">
          <v-card-title>
            <h1>
              Cafe Boba
            </h1>
          </v-card-title>
        </v-card>
        <br />
        <v-icon color="black" fab>mdi-chevron-double-down</v-icon>
      </div>
    </v-parallax>
    <v-sheet color="matcha">
      <v-container class="text-center  ">
        <div class="my-8">
          <h2 class="display-2 font-weight-bold mb-3">
            A place to work, socialize, and learn
          </h2>

          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-center infoMsg"
            max-width="720"
          >
            Cafe Boba is a Discord Community made for friends to hangout while
            working on our project and goals. We can chill here and keep each
            other company while we are working or playing. The idea is this like
            a cafe, library, or quiet room. We can keep each other motivated and
            accountable for working on our projects. Use the goals channel to
            post your goals for the month andupdates to share our progress. We
            will have optional weekly meetups to keep each other on track of our
            goals.
          </v-responsive>

          <div></div>

          <v-btn color="grey" href="#/login" outlined large>
            <span class="grey--text text--darken-1 font-weight-bold">
              Get Started
            </span>
          </v-btn>
        </div>
      </v-container>
    </v-sheet>
    <v-sheet color="primary">
      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        <div class="my-8">
          <h3 class="display-2 font-weight-bold mb-3">
            Introducing Summer Projects
          </h3>
          <summerForm />
        </div>
      </v-responsive>
    </v-sheet>
    <v-parallax
      src="https://images.unsplash.com/photo-1544890023-22d480ec4862?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80"
    >
      <div class="page-wrapper">
        <v-btn class="noCap" rounded href="https://discord.gg/T34tWJq9">
          Click Here to Join!</v-btn
        >
      </div>
    </v-parallax>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SummerForm from '@/components/SummerForm'

export default {
  components: { SummerForm },
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
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      discord: '',
      experience: '',
      drink: '',
      valid: false,
      displayMyName: false,
      interest: [
        'Vue',
        'React',
        'Angular',
        'Voice',
        'AI/ML',
        'Rust',
        'LeetCode',
        'Interview Prep',
        'Career Advice'
      ],
      selectedInterest: []
    }
  },
  computed: mapState('app', ['appTitle'])
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';
.page-wrapper {
  .infoMsg {
    text-align: 'justify';
    color: 'red';
  }
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
