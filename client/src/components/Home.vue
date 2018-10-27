<template>
  <div>
    <PatientView v-if="!isPatient">

    </PatientView>
    <DoctorView v-else>

    </DoctorView>
  </div>
</template>

<script>
import DoctorView from './DoctorView'
import PatientView from './PatientView'
import { mapGetters } from 'vuex';
// import { auth } from 'firebase'
// const user = auth().currentUser
// console.log(user.email)
  export default {
    components: {DoctorView, PatientView},
    computed: {
      ...mapGetters({user: 'getUser'}),
      isPatient() {
        return this.user.type === 'patient'
      }
    },
  }
</script>

<style scoped>

</style>
