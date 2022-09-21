const http = require('http');
const app = require('./app');

// The port on which I will run the server 
const port = 3000;

// Server
const server = http.createServer(app);

server.listen(port);