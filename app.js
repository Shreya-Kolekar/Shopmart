const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>First Page</title></body>');
        res.write('<body><h1>On First Page</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    } 
    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log('chunk is ', chunk);
        });
        req.on('end', () => {
            console.log("buffer is ", Buffer);
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsed body is', parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            
        });

        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }
});

server.listen(3000);