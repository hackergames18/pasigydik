<template>
  <div>
    <div class="doctor-instance">
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
    border: 1px gray solid ;
    border-radius: 3px;
  }
</style>
