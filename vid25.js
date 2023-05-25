const express = require('express');
const app = express();
//in reqFilter variable we have taken middleware
const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}

app.use(reqFilter);// it apply middleware  on entire application pages

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});
app.listen(4505)