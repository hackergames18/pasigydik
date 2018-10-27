<template>
  <div class="">
    <input type="text" v-model="roomId" placeholder="Room name">
    <vue-webrtc ref="webrtc"
                :roomId="roomId"
                width="100%"
                cameraHeight="300"
                socketURL="https://rtcmulticonnection.herokuapp.com:443/"
                roomId="roomId"/>
    <button class="btn btn-primary" @click="joinRoom">Join room</button>
    <button class="btn btn-primary" @click="leaveRoom">Leave room</button>
    <button class="btn btn-primary" @click="captureImage">Capture image</button>
    <div class="" v-if="img">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        roomId: '',
        img: null
      }
    },
    methods: {
      joinRoom () {
        this.$refs.webrtc.join();
      },
      captureImage() {
        this.img = this.$refs.webrtc.capture();
      },
      leaveRoom() {
        this.$refs.webrtc.leave();
      },
    },
    mounted() {
      // this.$refs.webrtc.join();
   }
  }
</script>

<style scoped lang="scss">

</style>
