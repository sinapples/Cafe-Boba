<template>
  <div>
    <v-card>
      <v-card-title>
        Summer Side Project
      </v-card-title>
      <v-card-subtitle
        >Interested in a live guided class on web app?</v-card-subtitle
      >
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" label="Name" dense></v-text-field>
          <v-text-field
            v-model="discord"
            label="Discord Username"
            :rules="nameRules"
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
            persistent-hint
            hint="Create your own by typing"
            color="primary"
            chips
            label="What are you interested in?"
            multiple
          ></v-combobox>
          <v-radio-group v-model="experienceType">
            <v-row no-gutters>
              <v-col>
                <v-radio label="Student" value="student"></v-radio>
              </v-col>
              <v-col>
                <v-radio label="Working" value="work"></v-radio>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
          </v-radio-group>
        </v-form>
      </v-card-text>
      <v-card-actions
        ><v-spacer /><v-btn
          block
          :loading="loading"
          :disabled="!valid"
          color="primary"
          @click="submit()"
          >I'm Interested</v-btn
        ></v-card-actions
      >
    </v-card>

    <v-card>
      {{ formContent }}
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SummerFormDB from '@/firebase/SummerFormDB'

export default {
  data() {
    return {
      experienceType: 1,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      loading: false,
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
  computed: {
    ...mapState('app', ['appTitle']),

    formContent() {
      return {
        name: this.name,
        discord: this.discord,
        drink: this.drink,
        interest: this.selectedInterest,
        experienceType: this.experienceType
      }
    }
  },
  methods: {
    async submit() {
      console.log(this.formContent)
      const db = new SummerFormDB()
      this.loading = true
      await db.create(this.formContent)
      this.loading = false
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
