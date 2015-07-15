var fs = require("fs");
var path = require("path");
var EventEmitter = require("events").EventEmitter;

var accum = '';

function parseFile(filePath) {
    var emitter = new EventEmitter();

    var stream = fs.createReadStream(filePath, {encoding: 'utf8'});

    stream.on("data", function(data) {
        accum += data;
        if (accum.indexOf("\n")) {
            dataParts = accum.split("\n");
            accum = dataParts[dataParts.length-1];

            var objects = [];
            for (var i = 0; i < dataParts.length-1; i++) {
                objects.push(JSON.parse(dataParts[i]));
            }

            emitter.emit("data", objects);
        }
    });

    stream.on("end", function() {
        emitter.emit("end");
    });

    return emitter;
}

module.exports = parseFile;
