<template>
  <div>
    <h4 v-if="selectedCategory">
      Appointments list
    </h4>
    <DoctorAppointmentCard class="doctor-appointment-container d-flex justify-content-center" :doctor="doctor" v-for="doctor in filteredDoctors" :key="doctor.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DoctorAppointmentCard from './DoctorAppointmentCard'
  export default {
    components: {DoctorAppointmentCard},
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
.doctor-appointment-container {
  margin-top: 50px;
}
</style>
