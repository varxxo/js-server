const http = require("http");

const myserver = http.createServer((req , res) => {
    // console.log(req.headers);
    console.log("new req rec.");
    res.end("hello from Server");
});

myserver.listen(8000, ()=> console.log("Server Started!"));

