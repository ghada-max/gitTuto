const express = require("express")
const app=express()
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const axios=require("axios")
app.use(bodyParser.json())

require("./order")
const order = mongoose.model("order")
mongoose.connect("mongodb+srv://ghadamhenni123:ghadamydb33@orders.nota3gt.mongodb.net/")                  

.catch((err) => console.log(err.message));

app.post("/orders",(req,res)=>{

  var neworder={

    customerID:mongoose.Types.ObjectId(req.body.customerID),
    bookID:new mongoose.Types.ObjectId(req.body.bookID),
    gotdate :req.body.gotdate,
    deliveryDate:req.body.deliveryDate
  }
  
  var ord= new order(neworder)
  ord.save().then(()=>{
    console.log("new order created")
  }).catch((err)=>{if (err){throw err}})
  res.send("order saved")
})

app.get("/",(req,res) => {
    res.send("order service is running")
})
app.get("/orderr" , (req,res) => {

    order.find()
    .then((order) => res.json(order))
})
app.get("/orderrrr/:id",(req,res) => {
    order.findById(req.params.id)
    .then((order) => {
        if(order){axios.get("http://localhost:5444/customers/" + order.customerID)
        .then((response)=>{
            var orderObject={customerName :response.data.name, bookTitle:''}

            axios.get("http://localhost:4541/books/" + order.bookID).then((response)=>{
                orderObject.bookTitle=response.data.title
                res.json(orderObject)

            })
           
        })}
        else{res.send("invalid order")}
})
})
app.listen("5555", ()=>{
    console.log("order service is running")
})