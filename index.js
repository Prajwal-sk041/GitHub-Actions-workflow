const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>🚀 Auto-Deployment Works! (Updated)</h1>');
});

server.listen(80, () => {
  console.log('Server running on port 80');
});
