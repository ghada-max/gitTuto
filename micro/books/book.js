const mongoose = require("mongoose");
mongoose.model("book",{
     //title,author,numberPges, publisher
      title:{
        type: String,
        require: true
      },
      author: {
         type: String,
         require: true

      },
      NumberP: {
        type: Number,
        require: false

     },
     publisher: {
        type: String,
        require: false
     }
});