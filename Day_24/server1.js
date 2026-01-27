// Node js Started

var http = require("http")

http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"text/plain"})     // For Plain Text
    res.writeHead(200,{"Content-Type":"text/html"})         // For HTML
    res.write("<h1>Hello World</h1> <br />");
    res.write("<h2>Welcome to the node js</h2>")
    res.write("<h2>Mann</h2>")
    res.write("<h2>Heli</h2>")
    res.end("Bye");
}).listen(3000)

console.log("Server started on http://127.0.0.1:3000")