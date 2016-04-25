var http = require('http');
var PORT = 7000;

function handleRequest(request, response) {
	response.end('<h1>You\'re Awesome!</h1>');
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log('server listening on: http://localhost:%s', PORT);
});