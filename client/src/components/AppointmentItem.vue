<template>
  <div class="appointment-item">
    <div class="row">
      <div class="col-md-4 my-auto">
        <div class="year-month-day">

          {{ appointmentDate }}
        </div>
        <div class="hour-min">
          {{ appointmentHour }}:{{ appointmentMinutes }}
        </div>
      </div>
      <div class="col-md-4 my-auto">
        {{durationMins}} min
      </div>
      <div class="col-md-4 my-auto">
        <div class="details">
          <a @click="toggleDetails">Details</a>
          <a @click="cancelAppointment">Cancel</a>
        </div>
        <div class="join-call">
          <a class="active" v-if="soonBegins" @click="joinCall">Join Call</a>
          <a v-else>You can join the call in 2 hours</a>
        </div>
      </div>
      <div class="col" v-show="showDetail">
        <div class="details">
        {{ details }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default {
  props: {
    id: {
      type: String,
    },
    patientId: {
      // type: Number,
    },
    doctorId: {
      // type: Number,
    },
    startTime: {
      default: new Date().getTime()
    },
    durationMins: {
      type: Number,
      default: 20,
    },
    details: {
      type: String,
      default: 'Default details string',
    },
  },
  data() {
    return {
      showDetail: false
    }
  },
  computed: {
    appointmentHour() {
      return new Date(this.startTime).getHours()
    },
    appointmentMinutes() {
      return new Date(this.startTime).getMinutes()
    },
    appointmentDate() {
      return new Date(this.startTime).toDateString()
    },
    soonBegins() {
      const minutesBefore = new Date(this.startTime - 600000).getTime()
      const now = new Date().getTime()
      return now >= minutesBefore
    }
  },
  methods: {
    joinCall() {
      this.$router.push({ path: `/consult/${this.id}` })
    },
    toggleDetails() {
      this.showDetail = !this.showDetail
    },
    cancelAppointment() {

    }
  },
  // name: "AppointmentItem",
};
</script>

<style scoped lang="scss">
$blue: #2191fb;
.appointment-item {
  background-color: #fff !important;
  margin-top: 0.2em;
  font-size: 1.2em;
  padding: 1em 0;

  .details a {
    background-color: transparent;
    color: $blue;
    padding: 0 0.8em;
    cursor: pointer;
  }
  .join-call a.active {
    background-color: $blue;
    color: #fff;
    border: none;
    margin-top: 0.2em;
    padding: 0.1em 2em;
    font-weight: 550;
    cursor: pointer;
  }

  .details {
    margin-top: 20px;
    margin-left: 20px;
    font-weight: 400;
  }
}
</style>
