const express=require("express");
const EventEmitter=require("events");
const app=express();
const event=new EventEmitter();
let count=0;
event.on("count api",()=>{
    count++;
    console.log("event called",count);
})

app.get("/",(req,resp)=>{
    resp.send("API called");
    event.emit("count api");//this emit/call event
});
app.post("/create",(req,resp)=>{
    resp.send("API called");
    event.emit("count api");//this emit/call event
});
app.delete("/user",(req,resp)=>{
    resp.send("API called");
    event.emit("count api");//this emit/call event
});
app.put("/update",(req,resp)=>{
    resp.send("API called");
    event.emit("count api");//this emit/call event
});
app.listen(5000);
//above event find no of times api called in our code/project.