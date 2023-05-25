const express=require('express');
const app=express();// making express() executable and taking it into app variable

// here we sending resp to get request hence we are using only resp variable
app.get("", (req, resp) => {
    
    resp.send("Welcome to home page");
});

app.get("/about", (req, resp) => {
    resp.send("Welcome, This is a About Page");
});

app.get("/help", (req, resp) => {
    resp.send("Welcome, This is a Help Page");
});


app.listen(4500);// check output page at 4500 port