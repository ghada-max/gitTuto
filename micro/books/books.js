const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


require("./book")
const book = mongoose.model("book")

mongoose.connect("mongodb+srv://ghadamhenni123:ghadamydb@mydb.zmqt26q.mongodb.net/")

.then((success) => app.listen(3000))
.catch((err) => console.log(err.message));
const app = express();
app.use(bodyParser.json());
//

//

app.post('/book',(req,res) => {
   var newBook = {
    title : req.body.title,
    author: req.body.author,
    NumberP:req.body.NumberP,
    publisher: req.body.publisher

   }

    var boo = new book(newBook)
    boo.save().then (() => {console.log("NewBookCreated")})
    .catch((err) => {
      if(err){
        throw err
      }

    })
    res.send();

})

app.get('/books',(req,res)=>
{book.find()
    .then((book) => {

        console.log(book)
        res.json(book)
    }).catch(err => {
        if(err){
            throw err ;
        }
    })

}
)


app.get("/books/:id",(req,res) => {
    book.findById(req.params.id).then((book) => {
        if(book){res.json(book)}
    })
    
})

app.delete("/books/:id" , (req,res) => {
    book.findOneAndDelete(req.params.id).then(() => {
      res.send("book found and deleted")

    } )
})

























app.listen(4541,()=>
{
    console.log("hellooo! This is our book service");
}
)