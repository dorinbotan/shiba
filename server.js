#!/usr/bin/nodejs
const fs = require('fs');
const http = require('http');
const port = 8080;

const requestHandler = (request, response) => {
	const getShiba = () => {
		http.get('http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true', (resp) => {
			let data = '';

			resp.on('data', (chunk) => {
				data += chunk;
			});

			resp.on('end', () => {
				response.end(JSON.parse(data)[0]);
			});
		}).on('error', (err) => {
			console.log('Error:', err.message);
		});
	}

	console.log(request.url);

	if(request.url == '/')
		response.end(fs.readFileSync('index.html', {encoding: 'utf-8'}));
	else if(request.url == '/shiba')
		response.end(getShiba());
	else
		response.end(fs.readFileSync(request.url.substr(1)));
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if(err) return console.log('Error:', err.message);

	console.log('Server is listening on', port);
});
