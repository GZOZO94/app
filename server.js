/*var http=require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end("Hello node server!");
});

server.listen(4242);*/
var express=require('express'),
	app=express();
var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org')
var port = process.env.PORT || 3000;
var data = "{\"key\":\"value\"}";
	
app.get("/", function(request,response){
	response.sendfile("index.html");
});

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
});
 
client.on('connect', function () {
  client.subscribe('homerseklet');
  client.subscribe('nedvesseg');
})
 
client.on('message', function (topic, message) {
  console.log(message.toString());
  console.log(topic);
})
var connectionString = "postgres://kldpiqgdkrqypo:be78f021efa0263dd415150760e9d4ea324731c30fde1ff34204c9bb047878cd@ec2-23-21-213-202.compute-1.amazonaws.com:5432:/ddvt14rq2g8n3p"
var pg = require('pg');
pg.connect(connectionString, function(err, client, done) {
   client.query('SELECT * FROM hello', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   })
 });