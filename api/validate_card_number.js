const express = require("express");
const Router = express.Router();
const verifyToken = require("../secureApi/verifyToken");
const validate_card_number=require("../validations/validate_card_number")
var valid = require("card-validator");


Router.post("/",verifyToken,(req,res)=>{
const card_number_is_valid=validate_card_number(req.body)
if(card_number_is_valid !=true)return res.status(400).json({error:true,errMessage:card_number_is_valid})

try {

var numberValidation = valid.number(req.body.card_number);
if (!numberValidation.isPotentiallyValid) {
   res.status(400).json({error:true,errMessage:"invalid credit card number"})
 }
 
 if (numberValidation.card) {
   res.status(200).json({error:false,message:numberValidation.card.type})
   console.log(numberValidation.card.type); // 'visa'
 }  
    
} catch (error) {
   res.status(400).json({error:true,errMessage:error.message})
}
})
module.exports=Router