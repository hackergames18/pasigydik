<template>
  <div class="appointment-item">
    <!-- <div class="container"> -->
    <div class="row">
      <div class="col-md-4 my-auto">
        <div class="year-month-day">

          {{startTime.getFullYear()}}/{{ startTime.getMonth() + 1}}/{{startTime.getDate()}}
        </div>
        <div class="hour-min">
          {{startTime.getHours()}}:{{startTime.getMinutes()}}
        </div>
      </div>
      <div class="col-md-4 my-auto">
        {{durationMins}} min
      </div>
      <div class="col-md-4 my-auto">
        <div class="details-cancel">
          <button>Details</button>
          <button>Cancel</button>
        </div>
        <div class="join-call">
          <button @click="joinCall">Join Call</button>
        </div>
      </div>
    </div>

  </div>
  <!-- </div> -->
</template>

<script>
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default {
  methods: {
    joinCall() {
      this.$router.push({ path: "/consult", props: { roomId: this.roomId } });
    },
  },
  // name: "AppointmentItem",
  props: {
    id: {
      type: Number,
      default: getRandomInt(1337420360),
    },
    roomId: {
      type: String,
      default: "hackergames2018",
    },
    patientId: {
      type: Number,
      default: 0,
    },
    doctorId: {
      type: Number,
      default: 1,
    },
    startTime: {
      // type: Date,
      default: new Date(),
    },
    durationMins: {
      // type: Date,
      default: new Date(),
    },
    details: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped lang="scss">
$blue: #2191fb;
.appointment-item {
  background-color: #fff !important;
  margin-top: 0.2em;
  font-size: 1.2em;
  padding: 1em 0;

  .details-cancel button {
    background-color: transparent;
    color: $blue;
    border: none;
    padding: 0 0.8em;
  }
  .join-call button {
    background-color: $blue;
    color: #fff;
    border: none;
    margin-top: 0.2em;
    padding: 0.1em 2em;
    font-weight: 550;
  }
}
</style>