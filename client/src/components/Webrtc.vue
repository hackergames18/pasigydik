<template>
  <div class="">
    <input type="text" v-model="roomId" placeholder="Room name">
    <!-- <vue-webrtc ref="webrtc"
                width="100%"
                roomId="roomId"
                cameraHeight="300"
                socketURL="https://rtcmulticonnection.herokuapp.com:443/"
                /> -->
    <!-- <button class="btn btn-primary" @click="joinRoom">Join room</button>
    <button class="btn btn-primary" @click="leaveRoom">Leave room</button>
    <button class="btn btn-primary" @click="captureImage">Capture image</button> -->
    <div class="" v-if="img">
      <img :src="img" alt="">
    </div>


    <button id="btn-open-room">Open Room</button>
    <button id="btn-join-room">Join Room</button>
    <button id="btn-open-and-join" @click="openAndJoinRoom">Open and join room</button>
    <hr>

  </div>
</template>


<script>
// roomId & onclick script:
var predefinedRoomId = "YOUR_Name";

// document.getElementById('btn-open-room').onclick = function () {
//   this.disabled = true;
//   connection.open(predefinedRoomId);
// };

// document.getElementById('btn-join-room').onclick = function () {
//   this.disabled = true;
//   connection.join(predefinedRoomId);
// };

// document.getElementById("btn-open-and-join").onclick = function () {
//   connection.open(predefinedRoomId);
//   connection.join(predefinedRoomId);
// }

// Connection script:

var connection = new RTCMultiConnection();

// this line is VERY_important
connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";

// all below lines are optional; however recommended.

connection.session = {
  audio: true,
  video: true,
};

connection.sdpConstraints.mandatory = {
  OfferToReceiveAudio: true,
  OfferToReceiveVideo: true,
};

connection.onstream = function(event) {
  document.body.appendChild(event.mediaElement);
};

export default {
  methods: {
    openAndJoinRoom() {
      connection.open(predefinedRoomId);
      connection.join(predefinedRoomId);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
