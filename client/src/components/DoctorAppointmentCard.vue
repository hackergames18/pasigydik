<template>
  <div>
    <div class="doctor-instance d-flex con">

      {{ doctor }}
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
    background-color: #fff;
    width: 500px;
    border: 1px gray solid ;
    border-radius: 3px;
  }
</style>
