const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} - Method:${req.method} - IP:${req.socket.localAddress}\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        res.end('req done. log created');
    });
});

myServer.listen(8080, () => {
    console.log(`server running`);
});
