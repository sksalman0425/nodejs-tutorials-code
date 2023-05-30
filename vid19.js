const express = require('express');
const app = express();

app.get("", (req, resp) => {
    //req variable contain data sent by browser to server
    //resp variable contain data sent by server to browser
    // sent data from browser like http://localhost:4500/?name=salman
    console.log(req.query.name)// data show in nodejs terminal
    resp.send("Welcome,"+req.query.name); // data show on the webpage
});

app.get("/about", (req, resp) => {
    resp.send("Welcome, This is a About Page");
});

app.get("/help", (req, resp) => {
    resp.send("Welcome, This is a Help Page");
});


app.listen(4500);