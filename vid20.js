const express = require('express');
const app = express();

app.get("", (req, resp) => {
    resp.send(`
    <h1>Welcome to Home page</h1>
    <a href="/about">Go to About page</a>
    `);
});
// for below code send http://localhost:4500/about/?name=salman in url
app.get("/about", (req, resp) => {
    resp.send(`
    <input type="text" placeholder="user name" value="${req.query.name}"   />
    <button>Click</button>
    <a href="/">Go to Home page</a>
    `);
});

app.get("/help", (req, resp) => {
    resp.send([
        {
            name:'Peter',
            email:'peter@test.com'
        },
        {
            name:'Bruce',
            email:'bruce@test.com'
        }
    ]);
});


app.listen(4500);
