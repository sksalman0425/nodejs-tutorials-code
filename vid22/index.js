const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath));
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});
//for giving url different name than webpage name
// app.get('/abc',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// });

// app.get('/xyz',(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// });
//"*" indicate that if url is not present in above url then fo to following url.
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/pagenotfound.html`)
});

app.listen(4500);