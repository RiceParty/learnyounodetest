/**
 * Created by onion on 15/7/16.
 */
var path = require("path");
var dir = process.argv[2];
var ext = process.argv[3];
var fs = require("fs");
fs.readdir(dir, function out(err, data) {
    if (err) return console.log(err);
    data.forEach(function(file) {
        if (path.extname(file) === "." + ext) {
            console.log(file);
        }
    })
});