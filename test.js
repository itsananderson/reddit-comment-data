var fs = require("fs");
var path = require("path");
var parse = require("./parse");

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

var parser = parse(file);

parser.on("data", function(comments) {
    comments.forEach(function(comment) {
        if (comment.subreddit === "lipstick.com") {
            console.log(comment);
        }
        recordSubreddit(comment.subreddit);
    });
});

parser.on("end", function() {
    console.log(JSON.stringify(subreddits, null, 2));
});
