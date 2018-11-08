<template>
  <div>

    <div class="d-flex flex-row justify-content-center">
      <div class="form-group">
        <label for="doctorName">Full name</label>
        <input type="text" v-model="fullName" class="form-control" id="doctorName" placeholder="name@example.com">
      </div>
    </div>

    <div class="d-flex flex-row justify-content-center">
      <div class="form-group  justify-content-start ">
        <label for="birthday">Date of birth</label>
        <datepicker id="birthday" v-model="birthday"></datepicker>
      </div>
    </div>

    <div class="d-flex flex-row justify-content-center">
      <div class="form-group">
        <label for="doctorsProfession">Example select</label>
        <select class="form-control" id="doctorsProfession" v-model="profession">
          <option>Traumatologist</option>
          <option>Urologist</option>
          <option>Psychologist</option>
          <option>Ginecologist</option>
          <option></option>
        </select>
      </div>
    </div>

    <div class="d-flex flex-row justify-content-center">
      <a class="btn btn-primary cta" @click="finishOnboarding">Finish</a>
    </div>

  </div>
</template>

<script>
  export default {
    methods: {
      finishOnboarding() {

      }
    },
  }
</script>

<style scoped>

</style>
