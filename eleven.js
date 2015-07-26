/**
 * Created by onion on 15/7/16.
 */
var http = require('http');
var port = process.argv[2];
var location = process.argv[3];
var server = http.createServer(function (req, res) {
    var fs = require('fs');
    res.writeHead(200, { 'content-type': 'text/plain' })
    var src = fs.createReadStream(location);
    src.pipe(res);
});
server.listen(Number(port));
