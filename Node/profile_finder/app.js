const Router = require('./router');
const http = require('http');

const PORT = 3000;


// Create a new http server
const server = http.createServer((req, res) => {
	Router.css(req, res);
	Router.home(req, res);
	Router.user(req, res);
});

// server listening on port 3000
server.listen(PORT);