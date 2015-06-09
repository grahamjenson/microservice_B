var http = require('http');
 
http.createServer(function (req, res) {
  res.end('World');
}).listen(8082);
