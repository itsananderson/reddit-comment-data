# reddit-comment-data
Tools and info created when analyzing the Reddit comment data

If you have suggestions or ideas, open an issue or send a pull request!

Instructions
---

### Generating Initial Dataset

1. git clone https://github.com/itsananderson/reddit-comment-data.git
1. Acquire the data from: https://www.reddit.com/r/datasets/comments/3bxlg7/i_have_every_publicly_available_reddit_comment/
1. Uncompress the data into the `reddit-comment-data` folder (I used 7zip)
1. Run `./generate.sh` which will run all the files through `test.js` and pipe them into the `out/` folder

You can modify test.js (sorry for the ambiguous name) to calculate something more useful than comment counts

### Generating a histogram

Once you've generated comment counts, you can generate subreddit histograms in CSV format:

`./histogram.sh AskReddit.com > csv/askreddit.csv`

### Viewing Visualizations

The visualization code is really gnarly right now. It was my first time using D3, and it was 1am.

`viz.html` contains the code for the visualization. You'll need to spin up a web server so it can make ajax calls for the CSV files. Here's one I wrote/use: https://www.npmjs.com/package/web-server-cli
