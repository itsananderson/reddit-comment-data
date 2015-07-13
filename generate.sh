mkdir out > /dev/null 2>&1

for d in 20*
do
    echo $d
    for f in $d/*
    do
        echo "$f" `basename $f`
        node test.js "$f" > "out/$(basename $f).json"
    done
done
