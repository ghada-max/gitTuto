const express = require("express")
const app=express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
app.use(bodyParser.json());

//
mongoose.connect("mongodb+srv://ghadamhenni123:ghadamydb22@customers.cjlwzkc.mongodb.net/")                  

.catch((err) => console.log(err.message));

require("./customer")
const customer = mongoose.model("customer")

//Post
app.post("/customerss",(req,res) => {

   var newCustomer= {
    name:req.body.name,
    age:req.body.age,
    address:req.body.address
}
var cus = new customer(newCustomer)
    cus.save().then (() => {console.log("new customer created")})
    .catch((err) => {
      if(err){
        throw err
      }

    })
    res.send("customer created");
})

app.get("/customers" , (req,res) => {

    customer.find()
    .then((customer) => res.json(customer))
})
app.get("/customers/:id" , (req,res) => {

    customer.findById(req.params.id)
    .then((customer) => res.json(customer))
})


app.listen("5444",(req,res) => {
 console.log("up and running - customer service")

})