/**
 * Created by onion on 15/7/16.
 */
//var net = require('net');
//var server = net.createServer(function(socket) {
//    var strftime = require('strftime');
//    socket.end(strftime('YYYY-MM-DD hh:mm'));
//});
//server.listen(Number(process.argv[2]));

//var net = require('net')
//
//function zeroFill(i) {
//    return (i < 10 ? '0' : '') + i
//}
//
//function now () {
//    var d = new Date()
//    return d.getFullYear() + '-'
//        + zeroFill(d.getMonth() + 1) + '-'
//        + zeroFill(d.getDate()) + ' '
//        + zeroFill(d.getHours()) + ':'
//        + zeroFill(d.getMinutes())
//}
//
//var server = net.createServer(function (socket) {
//    socket.end(now() + '\n')
//})
//
//server.listen(Number(process.argv[2]))
var strftime = require('strftime') // not required in browsers
console.log(strftime('%B %d, %Y %H:%M:%S')) // => April 28, 2011 18:21:08
console.log(strftime('%F %T', new Date(1307472705067))) // => 2011-06-07 18:51:45
