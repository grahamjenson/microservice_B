var http = require('http');
 
http.createServer(function (req, res) {
  res.end('Alice');
}).listen(8082);
