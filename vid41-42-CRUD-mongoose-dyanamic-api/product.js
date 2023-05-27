const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    available:Boolean
});

module.exports= mongoose.model("products2",productSchema);
//this file contains code for schema and model