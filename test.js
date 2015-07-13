var fs = require("fs");
var path = require("path");

var file = process.argv[2];

if (!file) {
    console.log("Provide a file");
    process.exit();
}

var accum = '';
var count = 1;
var commentParts;
var comment;

var subreddits = {};

function recordSubreddit(subreddit) {
    if (!subreddits[subreddit]) {
        subreddits[subreddit] = 0;
    }

    subreddits[subreddit]++;
}

var stream = fs.createReadStream(file, {encoding: 'utf8'});

stream.on("data", function(data) {
    accum += data;
    if (accum.indexOf("\n")) {
        commentParts = accum.split("\n");
        accum = commentParts[commentParts.length-1];
        for (var i = 0; i < commentParts.length-1; i++) {
            count++;
            comment = JSON.parse(commentParts[i]);
            recordSubreddit(comment.subreddit);
        }
    }
});

stream.on("end", function() {
    console.log(JSON.stringify(subreddits, null, 2));
});
