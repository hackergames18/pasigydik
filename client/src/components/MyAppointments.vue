<template>
  <div class="my-appointments">
    <h1>Appointment overview</h1>
    <div class="scheduled-elapsed-selection">
      <a id="scheduled" class="current" type="">
        Scheduled
      </a>
      <a id="elapsed">
        Elapsed
      </a>
    </div>

    <div class="sorting">
      <div class="container">
        <div class="row indicators">
          <div class="col-md-4">Date</div>
          <div class="col-md-4">Duration</div>
          <div class="col-md-4">Actions</div>
        </div>

      <!-- <span v-if="user.type==='patient'">
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
      </span> -->

      <AppointmentItem
      v-for="item in coreAppointments"
      :key="item.id"
      :id="item.id"
      :doctorId="item.doctorId"
      :patientId="item.patientId"
      :begins="item.startsAt"
      :ends="item.endsAt"
      :details="item.details"
      />

      <!-- <span v-else>
      <DoctorAppointmentItem
      v-for="app in appointments"
      v-bind:key="app.id"
      v-bind:roomId="app.roomId"
      v-bind:patientId="app.patientId"
      v-bind:doctorId="app.doctorId"
      v-bind:startTimeMins="app.startTimeMins"
      v-bind:durationMins="app.durationMins"
      v-bind:details="app.details"
      ></DoctorAppointmentItem>
      </span> -->
      </div>
    </div>

  </div>
</template>

<script>
import AppointmentItem from "./AppointmentItem";
import DoctorAppointmentItem from "./DoctorAppointmentItem";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      appointments: [
        {
          id: 1,
          roomId: "randomRoomIdSameAsDoctors",
          patientId: 123,
          doctorId: 456,
          starTimeMins: new Date(),
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
  components: { AppointmentItem, DoctorAppointmentItem },
  computed: {
    ...mapGetters({ user: "getUser", coreAppointments: 'getAppointments'}),
  },
};
</script>

<style scoped lang="scss">
.my-appointments {
  margin-top: 2em;

  .scheduled-elapsed-selection {
    a {
      background-color: transparent;
      border: none;
      font-size: 1.4em;
      font-weight: 100;
      padding: 0 1em;
      cursor: pointer;
    }
    .current {
      border-bottom: 5px solid #2191fb;
    }
  }
  .sorting {
    margin-top: 2em;
    .indicators {
      color: #353b3c;
      font-size: 1.5em;
    }
  }
}
</style>
