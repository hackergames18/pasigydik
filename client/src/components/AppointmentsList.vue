<template>
  <div>
    <h4>
      Appointments list
    </h4>
    <p>{{selectedCategory}}</p>
    <p>{{filteredDoctors}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    props: {
      selectedCategory: {
        type: String,
        default: ''
      },
    },
    computed: {
      ...mapGetters({doctors: 'getDoctors'}),
      filteredDoctors() {
        return this.doctors.filter(doctor => doctor.category === this.selectedCategory)
      }
    },
  }
</script>

<style scoped>

</style>
