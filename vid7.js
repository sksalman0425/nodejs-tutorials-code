const http = require('http');

http.createServer((req,resp) =>
{
resp.write("<h1>Code Step by step using nodemon which save time  of coder</h1>");
resp.end();
}
).listen(4500);


// function serverFun(req,resp){
//     resp.write("<h1>Code Step by step using function</h1>");
//    resp.end();

// }
// run code at terminal and check output at below address
//http://localhost:4500/