const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')

app.use(express.static(publicPath));

app.listen(4501);
//note: .html is compulsary
// localhost:4501  => for index.html page
// localhost:4501/about.html
// localhost:4501/help.html