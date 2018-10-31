#!/usr/bin/nodejs
const fs = require('fs');
const http = require('http');
const port = 8080;

const getShiba = () => {
}

const requestHandler = (request, response) => {
	console.log(request.url);

	if(request.url == '/')
		response.end(fs.readFileSync('index.html', {encoding: 'utf-8'}));
	else if(request.url == '/shiba')
		response.end('https://cdn.shibe.online/shibes/3c605814d42001602ca31d718b663ed000daaba0.jpg');
	else
		response.end(fs.readFileSync(request.url.substr(1)));
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if(err) return console.log('Error:', err);

	console.log('Server is listening on', port);
})
