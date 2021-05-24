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
          Summer Survey
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
            <p>
              Cafe Boba is a Discord Community made for friends to hangout while
              working on our project and goals.
            </p>
            We can chill here and keep each other company while we are working
            or playing. The idea is this like a cafe, library, or quiet room. We
            can keep each other motivated and accountable for working on our
            projects. Use the goals channel to post your goals for the month
            andupdates to share our progress. We will have optional weekly
            meetups to keep each other on track of our goals.
          </v-responsive>

          <div></div>
        </div>
      </v-container>
    </v-sheet>

    <v-parallax
      height="600"
      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80"
    >
      <div class="page-wrapper">
        <Scroll msg="Scroll" />
      </div>
    </v-parallax>
    <v-sheet id="summer-form" color="primary">
      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="720"
      >
        <div class="my-8">
          <h3 class="display-2 font-weight-bold mb-3 text-center">
            Summer Projects
          </h3>
          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8 text-center text-center"
            max-width="720"
          >
            <p>
              Learn something new this summer!
            </p>
            <p>
              Get motivated and work on a project. We can motivated and keep
              each other accountable for working on a personal project,
              interview prep or anything else!
            </p>
            <p>
              Don't know what to work on or want to learn something new? <br />
              We can help! We are will ofter classes on how to create web apps
              or learning new languages
            </p>
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
          href="https://discord.gg/T34tWJq9"
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

  @import url(https://fonts.googleapis.com/css?family=Cabin);

  $colorBg: #222a30;
  $colorOutline: #ffffff;
  $colorOutlineFade: #4e5559;

  $widthMouse: 52px;
  $heightMouse: 88px;
  $borderMouse: 6px;

  $posMouse: 8px;
  $posText: 2px;

  $sizeTrackball: 10px;
  $posTrackball: 20px;
  $shrinkTrackball: 0.4;

  $animDuration: 5s;

  @mixin bgGradient {
    background: $colorOutlineFade
      linear-gradient(
        transparent 0%,
        transparent 50%,
        $colorOutline 50%,
        $colorOutline 100%
      );
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: $colorBg;
  }

  p {
    margin-top: 50px;
    font-family: 'Cabin', sans-serif;
    letter-spacing: 12px;
    text-indent: 12px;
    color: $colorOutline;
    animation: colorText $animDuration ease-out infinite,
      nudgeText $animDuration ease-out infinite;
  }

  .mouse {
    @include bgGradient;
    position: relative;
    width: $widthMouse;
    height: $heightMouse;
    border-radius: 100px;
    background-size: 100% 200%;
    animation: colorSlide $animDuration linear infinite,
      nudgeMouse $animDuration ease-out infinite;
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
    &:before {
      width: $widthMouse - $borderMouse;
      height: $heightMouse - $borderMouse;
      background-color: $colorBg;
      border-radius: 100px;
    }
    &:after {
      background-color: $colorOutline;
      width: $sizeTrackball;
      height: $sizeTrackball;
      border-radius: 100%;
      animation: trackBallSlide $animDuration linear infinite;
    }
  }

  @keyframes colorSlide {
    0% {
      background-position: 0% 100%;
    }
    20% {
      background-position: 0% 0%;
    }
    21% {
      background-color: $colorOutlineFade;
    }
    29.99% {
      background-color: $colorOutline;
      background-position: 0% 0%;
    }
    30% {
      background-color: $colorOutlineFade;
      background-position: 0% 100%;
    }
    50% {
      background-position: 0% 0%;
    }
    51% {
      background-color: $colorOutlineFade;
    }
    59% {
      background-color: $colorOutline;
      background-position: 0% 0%;
    }
    60% {
      background-color: $colorOutlineFade;
      background-position: 0% 100%;
    }
    80% {
      background-position: 0% 0%;
    }
    81% {
      background-color: $colorOutlineFade;
    }
    90%,
    100% {
      background-color: $colorOutline;
    }
  }

  @keyframes trackBallSlide {
    0% {
      opacity: 1;
      transform: scale(1) translateY(-$posTrackball);
    }
    6% {
      opacity: 1;
      transform: scale(0.9) translateY($posTrackball/4);
    }
    14% {
      opacity: 0;
      transform: scale($shrinkTrackball) translateY($posTrackball * 2);
    }
    15%,
    19% {
      opacity: 0;
      transform: scale($shrinkTrackball) translateY(-$posTrackball);
    }
    28%,
    29.99% {
      opacity: 1;
      transform: scale(1) translateY(-$posTrackball);
    }
    30% {
      opacity: 1;
      transform: scale(1) translateY(-$posTrackball);
    }
    36% {
      opacity: 1;
      transform: scale(0.9) translateY($posTrackball/4);
    }
    44% {
      opacity: 0;
      transform: scale($shrinkTrackball) translateY($posTrackball * 2);
    }
    45%,
    49% {
      opacity: 0;
      transform: scale($shrinkTrackball) translateY(-$posTrackball);
    }
    58%,
    59.99% {
      opacity: 1;
      transform: scale(1) translateY(-$posTrackball);
    }
    60% {
      opacity: 1;
      transform: scale(1) translateY(-$posTrackball);
    }
    66% {
      opacity: 1;
      transform: scale(0.9) translateY($posTrackball/4);
    }
    74% {
      opacity: 0;
      transform: scale($shrinkTrackball) translateY($posTrackball * 2);
    }
    75%,
    79% {
      opacity: 0;
      transform: scale($shrinkTrackball) translateY(-$posTrackball);
    }
    88%,
    100% {
      opacity: 1;
      transform: scale(1) translateY(-$posTrackball);
    }
  }

  @keyframes nudgeMouse {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY($posMouse);
    }
    30% {
      transform: translateY(0);
    }
    50% {
      transform: translateY($posMouse);
    }
    60% {
      transform: translateY(0);
    }
    80% {
      transform: translateY($posMouse);
    }
    90% {
      transform: translateY(0);
    }
  }

  @keyframes nudgeText {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY($posText);
    }
    30% {
      transform: translateY(0);
    }
    50% {
      transform: translateY($posText);
    }
    60% {
      transform: translateY(0);
    }
    80% {
      transform: translateY($posText);
    }
    90% {
      transform: translateY(0);
    }
  }

  @keyframes colorText {
    21% {
      color: $colorOutlineFade;
    }
    30% {
      color: $colorOutline;
    }
    51% {
      color: $colorOutlineFade;
    }
    60% {
      color: $colorOutline;
    }
    81% {
      color: $colorOutlineFade;
    }
    90% {
      color: $colorOutline;
    }
  }
}
</style>
