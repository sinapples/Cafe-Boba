<template>
  <!-- <h1 class="home-page-title">{{ appTitle }}</h1> -->
  <div>
    <v-parallax
      height="700"
      src="https://images.unsplash.com/photo-1521342475957-8db764a86913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
    >
      <div class="page-wrapper">
        <v-card color="taro" rounded="xl">
          <v-card-title>
            <h1>
              Café Boba
            </h1>
          </v-card-title>
        </v-card>
        <br />
        <v-btn
          class="noCap"
          color="berry"
          rounded
          @click="$vuetify.goTo('#summer-form')"
        >
          Now Hiring for Pockets
          <v-icon class="ml-2">mdi-file-document-edit-outline</v-icon>
        </v-btn>
      </div>
    </v-parallax>

    <!-- About this Community -->
    <v-sheet color="matcha">
      <v-container class="text-center  ">
        <div class="my-8">
          <h2 class="display-2 font-weight-bold mb-3 text-center">
            A place to work, socialize, and learn
          </h2>

          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-center text-justify"
            max-width="720"
          >
            <div class="px-4">
              <p>
                Cafe Boba is a Discord Community made for friends to hang out
                while working on our projects and goals.
              </p>
              <p>
                We can chill here and keep each other company while we are
                working or playing. The idea behind this is like a cafe or
                library. We can keep each other motivated and accountable for
                working on our projects. Share your goals with the group and
                post updates on your progress. We have weekly meetups to keep
                each other on track of our goals.
              </p>
            </div>
          </v-responsive>

          <div></div>
        </div>
      </v-container>
    </v-sheet>
    <!-- Photo 2 -->
    <v-parallax
      height="600"
      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80"
    >
      <div class="page-wrapper">
        <Scroll msg="Scroll" />
      </div>
    </v-parallax>

    <!-- Events -->
    <v-sheet color="thai  ">
      <v-container class="text-center  ">
        <div class="my-8">
          <h2 class="display-2 font-weight-bold mb-3 text-center">
            Tech Talks and Projects
          </h2>

          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-center text-justify"
            max-width="720"
          >
            <div class="px-4">
              <h4 class="  mb-4 text-center">
                Join us for bimonthly tech talks on a variety of topics!
              </h4>

              <h5>
                Learn new technologies:
              </h5>
              <p class="subtitle-1 pl-4">
                ● Developing voice apps for Google Assistant and Alexa <br />
                ● Introduction to Django <br />
                ● What is Service Now and how to get started <br />
              </p>
              <h5>
                Career Chats:
              </h5>
              <p class="subtitle-1 pl-4">
                ● Interview Prep and Resume Review <br />
                ● Mock inteviews and LeetCode Practice<br />
                ● How to get your first job in tech <br />
                ● Career advice <br />
                ● Computer Science Master Degrees<br />
              </p>
            </div>
          </v-responsive>

          <div></div>
        </div>
      </v-container>
    </v-sheet>

    <!-- Projects -->
    <v-sheet color="taro">
      <v-container class="text-center  ">
        <div class="my-8">
          <h2 class="display-2 font-weight-bold mb-3 text-center">
            Projects
          </h2>

          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-center text-justify"
            max-width="720"
          >
            <div class="px-4">
              <h4 class="text-center  mb-3 ">
                Work and collaborate on projects! <br />
              </h4>

              <h5>Here are some project people are working on: <br /></h5>

              <p class="subtitle-1  pl-4">
                ● Cafe Boba (This website)<br />
                ● Learn Japanese video builder <br />
                ● Online marketplace for virtual events <br />
                ● Text editor using Rust<br />
                ● Using machine learning to predict stock prices<br />
              </p>
              <h5>Not sure what to build? <br /></h5>
              <p class="body-1 mb-0">
                We have guided live sessions
              </p>

              <div class="subtitle-1 pl-4">
                ● Create a website to view prices of cypto using an API<br />
                ● Build a voice app to track your sleep or water intake<br />
                ● Make a portfolio website<br />
                <br />
              </div>
            </div>
          </v-responsive>

          <div></div>
        </div>
      </v-container>
    </v-sheet>
    <!-- Summer form -->
    <v-sheet color="primary">
      <v-responsive class="mx-auto title font-weight-light  " max-width="720">
        <div class="my-8">
          <h3 class="display-2 font-weight-bold mb-3 text-center">
            Summer Projects
          </h3>
          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-center text-justify"
            max-width="720"
          >
            <div class="px-4">
              <p>
                Learn something new this summer!
              </p>
              <p>
                Get motivated and work on a project. We can motivate and keep
                each other accountable for working on personal projects,
                interview prep or anything else!
              </p>
              <p>
                Don't know what to work on or want to learn something new?
                <br />
                We can help! We have workshops on how to create web apps or
                learning new languages.
              </p>
            </div>
            <div id="summer-form"></div>
          </v-responsive>
          <summerForm />
        </div>
      </v-responsive>
    </v-sheet>
    <v-parallax
      height="800"
      src="https://images.unsplash.com/photo-1525803377221-4f6ccdaa5133?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2106&q=80"
    >
      <div class="page-wrapper">
        <v-btn
          class="noCap"
          color="taro"
          rounded
          href="https://discord.gg/Ww3TvWEnMD"
        >
          <h1><v-icon class="mr-2">mdi-discord</v-icon> Join the Discord!</h1>
        </v-btn>
      </div>
    </v-parallax>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SummerForm from '@/components/SummerForm'
import Scroll from '@/components/Scroll'

export default {
  components: { SummerForm, Scroll },
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `Fill out the Summer Survey please!`,
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
.noCap {
  text-transform: none;
}
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
