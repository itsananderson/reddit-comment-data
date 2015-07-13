echo month,comment_count
for f in ./out/*
do
    filename=$(basename $f)
    month=${filename/\.json/}
    month=${month/RC_/}
    echo $month,`node comment-count.js $f $1`
done
