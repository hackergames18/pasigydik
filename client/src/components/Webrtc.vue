<template>
  <div id="consult" class="consult">
    <!-- TODO - auto generate room ID with server -->
    <input id="room-id-input" type="text" v-model="roomId" placeholder="Room ID">

    <button id="start-call" @click="openAndJoinRoom">Open and join room (call)</button>
    <button id="end-call" @click="closeConnection">Close Connection (end call)</button>
    <hr>

    <div id="live-consult">

    </div>

    <!-- #TODO - reikia custom placemento pagal tai,
  kas prisijungęs - daktaras arba pacientas -->
    <!-- <div id="live-consult-patient">

  </div>
  <div id="live-consult-doctor">

  </div> -->

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
  // document.body.appendChild(event.mediaElement);
  document.getElementById("live-consult").appendChild(event.mediaElement);
};

export default {
  data() {
    return {
      roomId: ''
    }
  },
  methods: {
    openAndJoinRoom() {
      connection.open(predefinedRoomId);
      connection.join(predefinedRoomId);
      // connection.openOrJoin(predefinedRoomId);
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
#room-id-input,
#start-call,
#end-call {
  padding: 0.5em;
}

#room-id-input {
}

#start-call {
}

#end-call {
}
</style>
