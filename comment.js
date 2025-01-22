// Create web server
// 1. Create a web server
// 2. Listen to a port
// 3. Return a response
// 4. Read a file
// 5. Return a file
// 6. Return a 404 response

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./public/index.html', 'UTF-8', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 ERROR: File Not Found');
  }
});

server.listen(3000);
console.log('Server running on port 3000');