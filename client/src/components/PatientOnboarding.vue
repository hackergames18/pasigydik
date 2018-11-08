<template>
  <div>

    <div class="d-flex flex-row justify-content-center">
      <div class="form-group">
        <label for="exampleFormControlInput1">Full name</label>
        <input type="text" v-model="fullName" class="form-control" id="patientName" placeholder="name@example.com">
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <div class="form-group justify-content-start ">
        <label for="exampleFormControlSelect1">Date of birth</label>
        <datepicker v-model="birthday"></datepicker>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center">
      <a class="btn btn-primary cta" @click="finishOnboarding">Finish</a>
    </div>

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      fullName: '',
      birthday: '',
    }
  },
  methods: {
    async finishOnboarding() {
      const user = {}
      user.fullName = this.fullName
      user.birthday = this.birthday
      user.onboardingComplete = true
      // Update the user instance in firestore
      // Wait until user is updated
      await this.$store.dispatch('auth/onboardingComplete', user)
      // Then navigate him to home.
      this.$router.push({path: '/home'})
    }
  },
};
</script>

<style scoped lang="scss">
</style>
