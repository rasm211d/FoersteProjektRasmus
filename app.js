const http = require('http');
var fs = require('fs');
var path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
    const root = path.resolve('./wwwroot');
    let requestPath = req.url;
    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.end();
    } else if (requestPath === '/') {
        res.writeHead(302, {
            Location: 'index.html'
            //add other headers here...
        });
        res.end();
    } else {
        if (fs.existsSync(path.join(root, requestPath))) {
            res.statusCode = 200;
            res.write(fs.readFileSync(path.join(root, requestPath)));
            res.end();
        } else {
            res.statusCode = 404;
            res.end();
        }
    }
        
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});