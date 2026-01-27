var http = require("http")
var a = 10
var b = 20 
var c = a + b
var msg = ""

if (c == 30) {
    msg = "Result : Value of c is 30"
}
else {
    msg = "Result : Value of c is not 30"
}

http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Addition</h1> <br />");
    res.write("Value of a : " +a+ "<br />");
    res.write("Value of b : " +b+ "<br />");
    res.write("Value of c : " +c+ "<br />");
    res.end("<h2>"+msg+"</h2>");
}).listen(3000)

console.log("Server started on http://127.0.0.1:3000")
