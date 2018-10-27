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

    <button id="btn-open-and-join" @click="openAndJoinRoom">Open and join room</button>
    <button id="close-connection" @click="closeConnection">Close Connection</button>
    <hr>

  </div>
</template>


<script>
var predefinedRoomId = "hackergames2018";

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
    closeConnection() {
      // disconnect with all users
      connection.getAllParticipants().forEach(function(pid) {
        connection.disconnectWith(pid);
      });

      // stop all local cameras
      connection.attachStreams.forEach(function(localStream) {
        localStream.stop();
      });

      // close socket.io connection
      connection.closeSocket();
    },
  },
};
</script>

<style scoped lang="scss">
</style>
