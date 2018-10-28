<template>
  <div class="container">
    <div class="test-data">
    id: {{id}}
    patientId: {{patientId}}
    doctorId: {{doctorId}}
    startTimeMins: {{startTimeMins}}
    </div>
  </div>
</template>

<script>
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default {
  // name: "AppointmentItem",
  props: {
    id: {
      type: Number,
      default: getRandomInt(1337420360),
    },
    patientId: {
      type: Number,
      default: 0,
    },
    doctorId: {
      type: Number,
      default: 1,
    },
    startTimeMins: {
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
  data: function() {
    return {
      id: this.id,
      patientId: this.patientId,
      doctorId: this.doctorId,
      startTimeMins: this.startTimeMins,
      durationMins: this.durationMins,
      details: this.details,
    };
  },
};
</script>

<style scoped>
</style>