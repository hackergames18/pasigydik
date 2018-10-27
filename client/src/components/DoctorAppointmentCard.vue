<template>
  <div>
    <div class="doctor-instance">
      <div class="row">
        <div class="col-4">
          <img src="../assets/doctor-picture.png" alt="">
        </div>
        <div class="col-8 d-flex">
          <ul class="info-list float-left">
            <li>Price: {{doctor.price}}</li>
            <li>Experience: {{doctor.experience}}</li>
            <li>Description: {{doctor.description}}</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          schedule
        </div>
      </div>

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

<style scoped>
  .doctor-instance {
    padding: 30px;
    background-color: #fff;
    width: 700px;
    /* border: 1px gray solid 0.7; */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 10px;
  }
  .info-list {
    font-weight: 400;
  }
</style>
