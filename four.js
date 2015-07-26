/**
 * Created by onion on 15/7/16.
 */
var fs = require("fs");
fs.readFile(process.argv[2], function line(err, data) {
    if (err) console.log(err);
    console.log(data.toString().split("\n").length - 1);
});