<template>
  <div>
    <PatientOnboarding v-if="userType === 'patient'">
    </PatientOnboarding>
    <DoctorOnboarding v-else>
    </DoctorOnboarding>
  </div>
</template>

<script>
import PatientOnboarding from '@/components/PatientOnboarding'
import DoctorOnboarding from '@/components/DoctorOnboarding'
  export default {
    components: { PatientOnboarding, DoctorOnboarding },
    data() {
      return {
        userType: 'patient'
      }
    },

  }
</script>

<style scoped >
</style>
