const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')
//first import ejs package
// set() have first arg view engine for using any template engine and 2nd arg is template engine name 
app.set('view engine','ejs');
app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
});
app.get('/profile',(_,resp)=>{
    const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA'
    }
    //here we are sending user information in user variable
   resp.render('profile',{user})
});

app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});

app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/pagenotfound.html`)
});


 

app.listen(4503);