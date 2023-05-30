const http= require('http');
const data = require('./vid11-data.js');// here we are importing data

http.createServer((req,resp)=>{
// remember here we are responding/sending data to Api request. hence here we are sending data.
// so check this api's response into postman tool using GET request
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(data));
resp.end();
}).listen(4500); 