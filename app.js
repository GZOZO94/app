/*var http=require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end("Hello node server!");
});

server.listen(4242);*/
var express=require('express'),
	app=express();
var port = process.env.PORT || 3000;
	
app.get("/", function(request,response){
	response.sendfile("index.html");
});

var server = app.listen(port, function () {
    console.log('node server is just fine! and running on port - ' + port);
});