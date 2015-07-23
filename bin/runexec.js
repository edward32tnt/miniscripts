
var child_process = require('child_process');

var spawn = child_process.spawn;

var ls = spawn('ls', ['-la', '/Users/edward32tnt'])

ls.stdout.on('data', function(data) {
  console.log('stdout:', data.toString());
})

ls.stderr.on('data', function(err) {
  console.log('stderr:', err.toString());
})

ls.on('close', function(code) {
  console.log('close:', code);
})
