console.log('Server ready!');
var mongoose = require('mongoose');

mongoose.connect('mongodb://angel:angel@192.168.99.100:27017/tfg').then(
  () => { console.log('Database connected!') },
  err => { console.log(`Error al conectar: ${err}`) }
);

var clientsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  lat: Number,
  lon: Number,
  address: String,
  open: Number,
  close: Number,
  truckId: Number,
  served: Boolean,
  serving: Boolean,
  closed: Boolean,
  order: Number
})
var Client = mongoose.model('Client', clientsSchema);

var trucksSchema = new mongoose.Schema({
  id: Number,
  startTime: Date,
  endTime: Date,
  distance: Number,
  clientsServed: Number,
  lastLat: Number,
  lastLon: Number,
  startLat: Number,
  startLon: Number
})
var Truck = mongoose.model('Truck', trucksSchema);

var servicesSchema = new mongoose.Schema({
  clientId: Number,
  truckId: Number,
  start: Date,
  end: Date,
  serviceTime: Number
})
var Service = mongoose.model('Service', servicesSchema);


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const server = require('http').createServer();
const io = require('socket.io')(server);
server.listen(8181, () => {
  console.log('Server Online!');
});

io.on('connection', (client) => {

  console.log('client connected');

  client.on('move', (data) => {
    client.broadcast.emit('move', data);
  });

  client.on('served', (data) => {
    client.broadcast.emit('served', data);
  });

  client.on('disconnecting', (data) => {
    console.log('Client disconnected');
  });
});

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

var locations = [];
var trucks = [];

var error = [{ error: 'error' }];
var exito = [{ exito: 'success' }];

var express = require('express')
  , bodyParser = require('body-parser');

var app = express();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.post('/locations', function (request, response) {
  locations.push(request.body);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(exito));
  response.end();
});

app.get('/locations', function (request, response) {

  var aux = locations;
  var truckId = request.query.truckId;

  if (truckId != undefined) {
    aux = [];
    for (var i = 0; i < locations.length; i++) {
      if (locations[i].truckId == truckId) {
        aux.push(locations[i])
      }
    }
  }
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(aux));
  response.end();
})

////////////////////////////////////////////////////////////////////////////

app.get('/clients', function (request, response) {
  Client.find(request.query).sort('order').exec(
    (err, data) => {
      if (err) throw err;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(data));
      response.end();
    })
})

app.put('/clients', (request, response) => {
  Client.findOneAndUpdate({ id: request.body.id },
    {
      address: request.body.address,
      close: request.body.close,
      closed: request.body.closed,
      lat: request.body.lat,
      lon: request.body.lon,
      name: request.body.name,
      open: request.body.open,
      served: request.body.served,
      serving: request.body.serving,
      truckId: request.body.truckId,
      order: request.body.order
    },
    { upsert: true }, (err, doc) => {
      if (err) throw err;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(request.body));
      response.end();
    })
});

/////////////////////////////////////////////////////////////////////////////////////////////

app.get('/services', function (request, response) {
  Service.find(request.query).exec(
    (err, data) => {
      if (err) throw err;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(data));
      response.end();
    })
})

app.post('/services', (request, response) => {
  Service.create(request.body, (err, data) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify(request.body));
    response.end();
  });
})

/////////////////////////////////////////////////////////////////////////////////////////////

app.get('/trucks', function (request, response) {
  Truck.find(request.query).exec(
    (err, data) => {
      if (err) throw err;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(data));
      response.end();
    })
})

app.put('/trucks', (request, response) => {
  Truck.findOneAndUpdate({ id: request.body.id },
    {
      startTime: request.body.startTime,
      endTime: request.body.endTime,
      distance: request.body.distance,
      clientsServed: request.body.clientsServed,
      lastLat: request.body.lastLat,
      lastLon: request.body.lastLon,
      startLat: request.body.startLat,
      startLon: request.body.startLon
    },
    { upsert: true }, (err, doc) => {
      if (err) throw err;
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(request.body));
      response.end();
    });
})

app.listen(3001);




