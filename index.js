const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Woodson & Co. Established 2020");
});

const port = process.env.PORT || 1338;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
