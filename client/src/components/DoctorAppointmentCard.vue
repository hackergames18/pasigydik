<template>
  <div>
    <div class="doctor-instance">
      <div class="row">
        <div class="col-2"><img src="../assets/doctor-picture.png" alt=""></div>
        <div class="col-2">
          <span class="font-weight-bold name">
            <span class="d-flex flex-fill">Tomas </span>
            <span class="d-flex flex-fill">Baladoju </span>
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
          <div class="row timeline">
            <div class="col align-self-center daystamp">10/27</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
            <div class="col align-self-center">10:45</div>
          </div>
        </div>
        <div class="col-12"></div>
        <div class="col-12"></div>
        <div class="col-12"></div>
      </div>
      <!-- <div class="d-flex flex-row">
        <div class="picture-container align-items-start flex-column">
          <img src="../assets/doctor-picture.png" alt="">
        </div>
        <div class="flex-column">
          <span class="font-weight-bold name align-self-center">
            <span class="d-flex flex-fill">Tomas </span>
            <span class="d-flex flex-fill">Baladoju </span>
            <span class="d-flex flex-fill text-primary">€{{doctor.price}} p/h</span>
          </span>
        </div>
        <div class="flex-column description">
            <div class="font-weight-normal d-flex flex-fill"><span class="font-weight-bold text-primary">Experience</span>: {{doctor.experience}}</div>
            <div class="font-weight-normal d-flex flex-fill"><span class="font-weight-bold text-primary">Description</span>: {{doctor.description}}</div>
        </div>
      </div> -->
      <!-- <div class="d-flex">
        schedule
      </div> -->

      <!-- {{ doctor }} -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      doctor: {
        type: Object,
        default: {}
      },
    },
  }
</script>

<style lang="scss" scoped>
  .timeline {
    background-color: #bfbfbf;
    color: #fff;
    div {
      // padding: 10px;
    }
    .daystamp {
      font-size: 24px;
      font-weight: 700;
    }
  }
  .timeline >div:not(.daystamp):hover {
    background-color: #2191fb;
    height:100%;
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
</style>
