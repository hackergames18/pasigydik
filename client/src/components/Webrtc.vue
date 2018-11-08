<template>
  <div id="consult" class="consult">
    <!-- TODO - auto generate room ID with server -->
    <!-- <input id="room-id-input" type="text" v-model="roomId" placeholder="Room ID"> -->

    <!-- <button id="start-call" @click="openAndJoinRoom">
      <img src="../assets/start_call.svg" alt="Call" class="start-call-svg">
    </button> -->
    <button id="end-call" @click="closeConnection">
      <img src="../assets/end_call.svg" alt="End Call" class="end-call-svg">
    </button>
    <hr>

<!-- VIDEO ATEINA ČIA: -->
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
  const mediaElement = event.mediaElement
  mediaElement.classList.add('video-element')
  console.log()
  document.getElementById("live-consult").appendChild(event.mediaElement);
};

export default {
  // props: {
  //   id: {
  //     type: String,
  //     required: true
  //   }
  // },
  created() {
    this.openAndJoinRoom()
  },
  beforeDestroy() {
    console.log('beforeDestroyed')
    this.closeConnection()

  },
  data() {
    return {
      roomId: "",
    };
  },
  methods: {
    openAndJoinRoom() {
      // console.log("event.userid", event.userid);
      connection.checkPresence(this.$route.params.id, function(isRoomExist, roomid) {
        if (isRoomExist === true) {
          connection.join(roomid);
        } else {
          connection.open(roomid);
        }
      });

      // connection.open(predefinedRoomId);
      // connection.join(predefinedRoomId);
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
hr {
  margin: 1em;
}
// #FIXME - neveikia
div#live-consult {
  position: relative;

  &:first-child{
    width: 400px;
    position: absolute;
  }
  .video-element {
    position: absolute;
    width: 200px;
  }

}



// #room-id-input,
// #start-call,
// #end-call {
//   padding: 0.5em;
// }
.start-call-svg,
.end-call-svg {
  width: 80px;
  height: auto;
  color: #00ff00 !important;
}

#start-call,
#end-call {
  border: none;
  background: transparent;
}
</style>
