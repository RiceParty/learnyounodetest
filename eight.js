/**
 * Created by onion on 15/7/16.
 */
//var http = require('http');
//http.get(process.argv[2], callback);
//
//
//function callback(response) {
//    response.setEncoding('utf8');
//    var out = [];
//    response.on('data', function(content) {
//        out.push(content.length);
//        out.push(content);
//    });
//    response.on('end', function(out) {
//        out.forEach(console.log)
//    })
//}
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})