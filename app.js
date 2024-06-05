const http = require('http');

const routes = require('./routes');

// executes function stored in routes for incoming requests
const server = http.createServer(routes);

server.listen(5000);