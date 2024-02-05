const mongoose=require("mongoose")
mongoose.model("order",{

    customerID:{  
      type: mongoose.SchemaTypes.ObjectId,
      require: true
    },
    bookID:
    {
      type: mongoose.SchemaTypes.ObjectId,
      require: true
    },
    gotdate :{ 
        type: Date,
        require: true},

    deliveryDate:{ 
        type:Date,
        require:true
}})