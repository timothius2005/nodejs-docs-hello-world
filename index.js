const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Root Index.js file");
});

console.log('another line of text.')

const port = process.env.PORT || 1338;
server.listen(port);