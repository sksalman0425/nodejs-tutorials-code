const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.use(express.static(publicPath));

app.listen(4500);
//note: .html is compulsary
// localhost:4500  => for index.html page
// localhost:4500/about.html
// localhost:4500/help.html