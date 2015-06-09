var http = require('http');
 
http.createServer(function (req, res) {
  res.end('Bob');
}).listen(8082);
