/**
 * Created by onion on 15/7/16.
 */
var http = require("http");
http.get(process.argv[2], callback)


function callback(response) {
    response.setEncoding('utf8')
    response.on("data", console.log)
    response.on('error', console.error)
}