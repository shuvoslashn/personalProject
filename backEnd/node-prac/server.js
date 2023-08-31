const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} - Url:${req.url} - Method:${req.method} - IP:${req.socket.localAddress}\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end('Homepage');
                break;
            case '/about':
                res.end('I am Shuvo');
                break;
            default:
                res.end('404 Not Found');
        }
    });
});

myServer.listen(8080, () => {
    console.log(`server running`);
});
