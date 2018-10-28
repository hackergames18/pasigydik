<template>
  <div>
    <div class="doctor-instance">
      <div class="row">
        <div class="col-2">
          <img src="../assets/faces/2.png" alt="">
          </div>
        <div class="col-2">
          <span class="font-weight-bold name">
            <span class="d-flex flex-fill">{{ doctor.name}} </span>
            <span class="d-flex flex-fill">{{doctor.surname}} </span>
            <span class="d-flex flex-fill text-primary">€{{doctor.price}} p/h</span>
          </span>
        </div>
        <div class="col-8">
           <div class="font-weight-normal d-flex flex-fill"><span class="font-weight-bold">Experience</span>: {{doctor.experience}}</div>
            <div class="font-weight-normal d-flex flex-fill"><span class="font-weight-bold">Description</span>: {{doctor.description}}</div>
        </div>
      </div>
      <div class="row schedule">
        <div class="col-12">
            <div class="row timeline" v-for="(times, day) in visitTimes" :key="day">

              <div class="col daystamp">{{day}}</div>
              <div class="col" v-for="time in times" :key="time.id" @click="selectTime(day, time, $event)">
                {{ time }}
              </div>
            </div>

        </div>
        <!-- <div class="col-12">
          <div class="row timeline">
            <div class="col align-self-center daystamp">10/27</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
          </div>
        </div>
        <div class="col-12">
          <div class="row timeline">
            <div class="col align-self-center daystamp">10/27</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
          </div>
        </div> -->
      </div>
      <div class="row" v-if="timesSelected > 0"><div class="col"><button class="btn-primary cta float-right">CHECKOUT</button></div></div>
    </div>
  </div>
</template>

<script>
// import myImg from '~/assets/faces/1.png'
  export default {
    props: {
      doctor: {
        type: Object,
        default: {}
      },
    },
    data() {
      return {
        timesSelected: 0,
      }
    },
    computed: {
      visitTimes() {
        return this.doctor.times
      },
      imgSrc() {
        // return myImg
      }
    },
    methods: {
      selectTime(day, time, event) {
        if (event.target.classList.contains('selectedTime')) {
          this.timesSelected -= 1
        } else {

          this.timesSelected += 1
        }
        event.target.classList.toggle('selectedTime')
      }
    },
  }
</script>

<style lang="scss" scoped>
  .timeline {
    color: #fff;
    padding: 10px;
    div {
      background-color: #bfbfbf;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .daystamp {
      font-size: 24px;
      font-weight: 700;
    }
    .selectedTime {
      background-color: #2191fb;
    }
  }
  .timeline >div:not(.daystamp):hover {
    background-color: #2191fb;
    padding:10px;
  }


  .schedule {
    margin: 30px 0;
  }
  .doctor-instance {
    padding: 30px;
    background-color: #fff;
    width: 60%;
    /* border: 1px gray solid 0.7; */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 1px;
  }
  .picture-container {
    padding-right: 30px;
    position: relative;
  }
  .name {
    font-size: 20px;
    font-weight: 700;
    /* border-right: 1px solid black; */
  }
  .info-list {
    font-weight: 400;
  }
  .description {
    padding-left: 20px;
  }
  .cta {
    margin: 10px;
    padding: 10px;
    font-weight: bold;
  }
</style>
