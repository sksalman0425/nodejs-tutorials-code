const express = require('express');
const multer = require('multer');

const app = express();
// here first is multer and then multer function
// cb is callback. you can give any name other than cb
//upload function acts as middleware 
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads') //name of folder where file will uploaded
        },
        filename: function (req, file, cb) {
            //below code add date in file name and with extension jpg
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single('file_name');


//single indicate that you are uploading single file
//file_name indicate that function's which parameter you are uploading file and this parameter name we have to given in postman tool while file uploading

app.post("/upload", upload, (req, resp) => {
    resp.send("file upload")
});

app.listen(5000);