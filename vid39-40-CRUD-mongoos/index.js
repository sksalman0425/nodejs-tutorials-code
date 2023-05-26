const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
//below we define schema of collection
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    available: Boolean

});

const saveInDB = async () => {
    //below model connect with collection with our defined schema
    const Product = mongoose.model('products2', productSchema);
    let data = new Product({
        name: "max 101",
        price: 220,
        brand: 'maxx',
        available: "false",
    });
    const result = await data.save();
    console.log(result);
}
// saveInDB()
const updateInDB =async  () => {
    const Product = mongoose.model('products2', productSchema);
    let data =await  Product.updateOne(
        { name: "max 101" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}
//  updateInDB();

const deleteInDB = async ()=>{
    const Product = mongoose.model('products2', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}
// deleteInDB();

const findInDB = async ()=>{
    const Product = mongoose.model('products2', productSchema);
    let data = await Product.find({name:'max pro 6'})
    console.log(data);
}

// findInDB();
