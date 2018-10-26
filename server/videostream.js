const Peer = require("simple-peer");
const peer = Peer();

peer.on("signal", function(data) {
  document.getElementById("yourId").value = JSON.stringify(data)
})