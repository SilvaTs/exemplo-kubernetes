const http = require('http');

http.createServer((req, res) => {  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World');
  
  res.end();
}).listen(8088, () => {
  console.log('Server is listening on port 8088');
});
