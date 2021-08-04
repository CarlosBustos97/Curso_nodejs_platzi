const asyncCallback = (cb) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            cb(null, "Hello World");
        } else {
            cb (new Error("Hello error"));
        }
    }, 2000);
};

asyncCallback((err, msg) => {
    if (err) {
        console.error("Error", err);
    } else {
        console.log("Message", msg);
    }
});
