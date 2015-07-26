/**
 * Created by onion on 15/7/16.
 */
module.exports = function (dir, ext, callback) {
    var fs = require("fs");
    var path = require("path");
    fs.readdir(dir, function line(err, data) {
        if (err) return callback(err);
        data = data.filter(function(file) {
            return path.extname(file) === "." + ext;
        });
        //var out = [];
        //data.forEach(function(file) {
        //    if (path.extname(file) === "." + ext) {
        //        out.push(file);
        //    }
        //});
        return callback(null, data);
    })
};