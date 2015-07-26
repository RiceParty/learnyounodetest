/**
 * Created by onion on 15/7/16.
 */
//var http = require('http');
//var out = [];
//
//for (var i = 2 ; i < process.argv.length; i++) {
//    http.get(process.argv[i], function callback(response) {
//        response.setEncoding('utf8')
//        response.on('data', function(data) {
//            out.push(data)
//        })
//    })
//}
//
//out.forEach(console.log);
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++)
        console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err)

            results[index] = data.toString()
            count++

            if (count == 3)
                printResults()
        }))
    })
}

for (var i = 0; i < 3; i++)
    httpGet(i)

