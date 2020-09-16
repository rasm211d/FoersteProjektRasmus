const http = require('http');
const fs = require('fs');
const path = require('path');
const hostname = 'localhost';
const port = '3000';
const utf8 = require('utf8');

const server = http.createServer(function(req, res){
    let root = path.resolve('./wwwroot');
    if (req.method !== "GET") {
        res.statusCode = 405;
        res.end();
    } else if (req.url === "/") {
        res.writeHead(302, {Location: "/index.html"});
        res.end();
    } else {
        if (fs.existsSync(path.join(root, req.url))) {
            res.statusCode = 200;
            res.write(fs.readFileSync(path.join(root, req.url)));
            res.end();
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
}) 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});