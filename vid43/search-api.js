const express = require('express');
require("./config");
const Product = require('./product');
const app = express();

app.use(express.json());
//remember :key is always with colon. you can take any name like item or key but with colon
//here we are sending key or the word which we have search through params
app.get("/search/:key",async (req,resp)=>{
    let data = await Product.find(
        {
            //$or indicate that it will be apply on multiple field
            "$or":[
                {name:{$regex:req.params.key}},
                {brand:{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);

})





app.listen(5000)