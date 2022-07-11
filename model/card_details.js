const connectDB = require("./dbConnector");
const mongoose = require("mongoose");
connectDB("connected to Card request database");
require("./user");

const card_detail_Schema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      card_number:{
        type:Number,
        required:true,
        min:0
      } ,
      card_expiry_date:{
 type:String,
 required:true
      },
      card_cvv:{

        type:Number,
        required:true,
        min:0  
      },
      card_type:{
        type:String,
        required:true
             },
})


const card_details=mongoose.model("card_detail",card_detail_Schema)
module.exports=card_details