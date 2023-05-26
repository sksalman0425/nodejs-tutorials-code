const dbConnect = require("./mongodb")
const express = require('express');
const mongodb = require('mongodb');//importing mongodb lib to make ObjectId instance in delete api
const app = express();

app.use(express.json()); //it is used middleware i.e. get body from request and convert input data into json form

// GET API CODE
app.get('/', async (res, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});

//POST API CODE
app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)

})
//PUT API CODE
//here we are getting name from query parameter and on that name we change particular row
app.put("/:name", async (req, resp) => {
    const data = await dbConnect();
    let result = data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    resp.send({ status: "updated" })
})

app.delete("/:id", async (req,resp)=>{
    console.log(req.params.id);
    const data = await dbConnect();
    //_id is must have taken on right side (not only id) and then we are making instance of ObjectId
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

app.listen(4510)