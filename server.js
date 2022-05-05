const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/json'});

    if(request.url == '/produtos') {
        response.end(JSON.stringify({
            message: "Rota de produto"
        }))
    }

    if(request.url == '/usuarios') {
        response.end(JSON.stringify({
            message: "Rota de usuários"
        }))
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});