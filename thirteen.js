/**
 * Created by onion on 15/7/16.
 */
//var http = require('http');
//
//var server = http.createServer(function(req, res) {
//    if (req.method != 'GET')
//        return res.end(' send me a get !')
//
//    res.writeHead(200, {'Content-Type':'application/json'})
//    var url = require('url');
//    var obj = url.parse(req.url, true);
//    var time = {
//        hour:'',
//        minute:'',
//        second:''
//    };
//    if (obj.path.indexOf('parsetime') > 0 ) {
//        var date = new Date(obj.query.iso);
//        time.hour = date.getHours();
//        time.minute = date.getMinutes();
//        time.second = date.getSeconds();
//        res.end(JSON.stringify(time));
//    }
//    var unix = {
//        unixtime : ''
//    }
//    if (obj.path.indexOf('unix') > 0) {
//        var date2 = new Date(obj.query.iso);
//        unix.unixtime = date2.getTime();
//        res.end(JSON.stringify(unix))
//    }
//});
//
//server.listen(Number(process.argv[2]));

var http = require('http')
var url = require('url')

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))