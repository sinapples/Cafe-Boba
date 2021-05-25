<template>
  <div>
    <v-card>
      <v-card-title>
        Summer of Side Projects
      </v-card-title>
      <v-card-subtitle
        >Interested in live guided classes on how to make web
        apps?</v-card-subtitle
      >
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="name"
            class="required"
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
            v-model="availablity"
            :items="availablityList"
            :rules="[v => v.length > 0 || 'Select some availablities']"
            persistent-hint
            color="primary"
            chips
            label="What day are you usually available?"
            multiple
          ></v-combobox>
          <v-combobox
            v-model="availablityTime"
            :items="availablityTimeList"
            :rules="[v => v.length > 0 || 'Select some availabilities']"
            persistent-hint
            color="primary"
            chips
            label="What time are you usually available?"
            multiple
          ></v-combobox>
          <v-combobox
            v-model="selectedInterest"
            :items="interest"
            :rules="[v => v.length > 0 || 'Select some interest']"
            persistent-hint
            hint="Create your own by typing"
            color="primary"
            chips
            label="What topics are you interested in?"
            multiple
          ></v-combobox>

          <v-combobox
            v-model="selectedInterestSummer"
            :items="interestSummer"
            :rules="[v => v.length > 0 || 'Select an option']"
            persistent-hint
            color="primary"
            chips
            label="Interested in wokring on summer porject?"
            multiple
          ></v-combobox>

          <v-radio-group
            v-model="experienceType"
            row
            label="Experience level"
            color="matcha"
            :rules="[v => v !== '' || 'Select experance level']"
          >
            <!-- :error="name !== '' && !!!experienceType" -->
            <v-radio label="New to Code/No experience" value="new"></v-radio>

            <v-radio label="Student" value="student"></v-radio>

            <v-radio
              label="New Grad/Professional"
              value="newProfessional"
            ></v-radio>

            <v-radio label="Professional" value="professional"></v-radio>
          </v-radio-group>
          <v-checkbox
            v-if="experienceType === 'professional'"
            v-model="isTA"
            label="Are you interested in leading a project or helping out"
            color="matcha"
            value="interested"
          ></v-checkbox>
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
          >I'm Interested!
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
      isTA: false,
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
        'Git',
        'Vue',
        'React',
        'Angular',
        'AI/ML',
        'Rust',
        'LeetCode',
        'K-Pop',
        'Games'
      ],
      selectedInterest: [],
      interestSummer: [
        'Yes',
        'I have a project in mind',
        "Interested but don't know what to make",
        "Interested but don't know how to code it",
        'Interested in learning new technologies',
        'Interested in helping out/answering questions',
        'Interested and want to teach/talk about something',
        'Not interested '
      ],
      selectedInterestSummer: [],
      availablity: [],
      availablityList: [
        'Monday Evenings',
        'Tuesday Evenings',
        'Wednesday Evenings',
        'Thursday Evenings',
        'Friday Evenings',
        'Saturday Evenings',
        'Sunday Evenings',
        'Saturday Afternoon',
        'Sunday Afternoon',
        'Anytime with notice',
        'None'
      ],
      availablityTime: [],
      availablityTimeList: [
        '6 PM',
        '7 PM',
        '8 PM',
        '9 PM',
        '10 PM',
        '11 PM',

        'Anytime with notice',
        'None'
      ]
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
        email: this.email,
        discord: this.discord,
        drink: this.drink,
        interest: this.selectedInterest,
        experienceType: this.experienceType,
        isTA: this.isTA,
        availablity: this.availablity,
        availablityTime: this.availablityTime,
        selectedInterestSummer: this.selectedInterestSummer
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
.required label::after {
  content: '*';
  color: red;
}
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
