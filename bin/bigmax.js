
var net = require('net');

net.createServer(function(socket) {
  socket.on('data', function(data) {
    console.log('data from client', data.length, data.toString());
  })
  socket.on('end', function() {
  })

}).listen(8000);
