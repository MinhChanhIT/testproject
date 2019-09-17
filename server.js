var mosca = require('mosca');

// var ascoltatore = {
//   //using ascoltatore
//   type: 'mongo',
//   url: 'mongodb://localhost:27017/mqtt2',
//   pubsubCollection: 'ascoltatori',
//   mongo: {}
// };

var settings = {
  port: process.env.PORT
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

server.on('clientDisconnected', function(client) {
    console.log('client disconnected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published1', packet.payload);
});

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running',process.env.PORT);
}