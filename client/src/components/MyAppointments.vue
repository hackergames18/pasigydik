<template>
  <div class="my-appointments">
    <h1>Appointment overview</h1>
    <div class="scheduled-elapsed-selection">
      <button id="scheduled" class="current" type="">
        Scheduled
      </button>
      <button id="elapsed">
        Elapsed
      </button>
    </div>

    <div class="sorting">
      <AppointmentItem
      v-for="app in appointments"
      v-bind:key="app.id"
      v-bind:roomId="app.roomId"
      v-bind:patientId="app.patientId"
      v-bind:doctorId="app.doctorId"
      v-bind:startTimeMins="app.startTimeMins"
      v-bind:durationMins="app.durationMins"
      v-bind:details="app.details"
      ></AppointmentItem>
    </div>

  </div>
</template>

<script>
import AppointmentItem from "./AppointmentItem";

export default {
  data() {
    return {
      appointments: [
        {
          id: 1,
          roomId: "randomRoomIdSameAsDoctors",
          patientId: 123,
          doctorId: 456,
          starTimeMins: Math.floor(new Date().getTime() / 1000 / 60),
          durationMins: 20,
          details: {},
        },
        {
          id: 2,
          roomId: "randomRoomIdSameAsDoctorsV2",
          patientId: 234,
          doctorId: 567,
          starTimeMins: Math.floor(new Date().getTime() / 1000 / 60) + 5,
          durationMins: 20,
          details: {},
        },
        {
          id: 3,
          roomId: "randomRoomIdSameAsDoctorsV3",
          patientId: 159,
          doctorId: 753,
          starTimeMins: Math.floor(new Date().getTime() / 1000 / 60) + 10,
          durationMins: 20,
          details: {},
        },
      ],
    };
  },
  components: { AppointmentItem },
};
</script>

<style scoped lang="scss">
.my-appointments {
  margin-top: 2em;

  .scheduled-elapsed-selection {
    button {
      background-color: transparent;
      border: none;
      font-size: 1.4em;
      font-weight: 100;
      padding: 0 1em;
    }
    .current {
      border-bottom: 5px solid #2191fb;
    }
  }
}
</style>