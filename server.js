var http = require('http');

var srv = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.write("Hello world!");
  res.end();
});

srv.listen(8080);
