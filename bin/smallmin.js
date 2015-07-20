
var net = require('net');

var socket = net.Socket();

socket.connect(8000, function () {
  socket.write('abcd')
  socket.end();
})
