if (!process.argv[2]) {
    console.log("file path required");
    process.exit();
}

console.log(process.argv.slice(2));

