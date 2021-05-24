<template>
  <div>
    <v-card>
      <v-card-title>
        Summer of Side Projects
      </v-card-title>
      <v-card-subtitle
        >Interested in a live guided class on web app?</v-card-subtitle
      >
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="name"
            label="Name"
            :rules="[v => !!v || 'Name is required']"
            dense
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="discord"
            label="Discord Username"
            placeholder="sinap#3816"
          ></v-text-field>
          <v-text-field
            v-model="drink"
            label="Favorite Drink"
            placeholder="Thai Iced Tea"
          ></v-text-field>
          <v-combobox
            v-model="selectedInterest"
            :items="interest"
            :rules="[v => !!v || 'Select some interest']"
            persistent-hint
            hint="Create your own by typing"
            color="primary"
            chips
            label="What are you interested in?"
            multiple
          ></v-combobox>

          <!-- <v-checkbox
            v-model="isStudent"
            label="Are you a student or learning how to code"
            color="matcha"
            value="matcha"
          ></v-checkbox> -->
          <v-radio-group
            v-model="experienceType"
            row
            label="Experience level"
            :error="name !== '' && !!!experienceType"
          >
            <v-radio label="New to Code" value="new"></v-radio>

            <v-radio label="Student" value="student"></v-radio>

            <v-radio label="New Grad" value="newGrad"></v-radio>

            <v-radio label="Profesional" value="profesional"></v-radio>
          </v-radio-group>
        </v-form>
      </v-card-text>
      <v-card-subtitle v-if="error" class="text-center"
        >Error sumbiting form. Please reload and try again
      </v-card-subtitle>
      <v-card-actions
        ><v-spacer /><v-btn
          v-if="!sent"
          block
          :loading="loading"
          :disabled="!valid"
          color="matcha"
          @click="submit()"
          >I'm Interested
        </v-btn>
        <v-btn v-if="sent" block :color="submitColor" @click="count++">
          Response Sumbitted
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- <v-card>
      {{ formContent }}
    </v-card> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SummerFormDB from '@/firebase/SummerFormDB'

export default {
  data() {
    return {
      sent: false,
      error: false,
      isStudent: false,
      // submitColor: "primary",
      count: 0,
      experienceType: '',
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      loading: false,
      discord: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],

      experience: '',
      drink: '',
      valid: false,
      displayMyName: false,
      interest: [
        'Career Advice',
        'Interview Prep',
        'Voice Apps',
        'Web Apps',
        'Vue',
        'React',
        'Angular',
        'AI/ML',
        'Rust',
        'LeetCode'
      ],
      selectedInterest: []
    }
  },
  computed: {
    ...mapState('app', ['appTitle']),
    submitColor() {
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
    },

    formContent() {
      return {
        name: this.name,
        discord: this.discord,
        drink: this.drink,
        interest: this.selectedInterest,
        experienceType: this.experienceType,
        isStudent: this.isStudent
      }
    }
  },
  methods: {
    async submit() {
      console.log(this.formContent)
      const db = new SummerFormDB()

      try {
        this.loading = true
        this.error = false
        await db.create(this.formContent)
        this.loading = false
        this.sent = true
      } catch (err) {
        console.log('Error')
        console.log(err)
        this.loading = false
        this.error = true
      }
    }
  }
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
