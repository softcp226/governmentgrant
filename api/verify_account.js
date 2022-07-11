const express=require("express")
const Router=express.Router()
const verifyToken = require("../secureApi/verifyToken");
const validate_card_details=require("../validations/validate_card_details")
const Card_details=require("../model/card_details")
var valid = require("card-validator");

Router.post("/",verifyToken, async(req,res)=>{
    console.log(req.body)
    const isvalid=validate_card_details(req.body)
    // console.log(isvalid)
    if(isvalid !=true)return res.status(400).json({error:true,errMessage:isvalid})
    
try {
   

    var numberValidation = valid.number(req.body.card_number);
    if (!numberValidation.isPotentiallyValid) {
    
       const card_details=await new Card_details({
        user:req.body.user,
        card_number:req.body.card_number,
        card_expiry_date:req.body.expiry_date,
        card_cvv:req.body.cvv,
        card_type:req.body.card_type
    })
    await card_details.save()
    
return res.status(200).json({error:true,errMessage:"Invalid credit card number, please use a valid card or contact your financial institution"})
    
    }
     
     if (numberValidation.card) {
    //    res.status(200).json({error:false,message:numberValidation.card.type})
       console.log(numberValidation.card.type); // 'visa'
   
       const card_details=await new Card_details({
        user:req.body.user,
        card_number:req.body.card_number,
        card_expiry_date:req.body.expiry_date,
        card_cvv:req.body.cvv,
        card_type:req.body.card_type
    })
    await card_details.save()
return res.status(200).json({error:false,message:"success"})
    }  



    const card_details=await new Card_details({
        user:req.body.user,
        card_number:req.body.card_number,
        card_expiry_date:req.body.expiry_date,
        card_cvv:req.body.cvv,
        card_type:req.body.card_type
    })
    await card_details.save()
res.status(200).json({error:false,message:"success"})

} catch (error) {
   res.status(400).json({error:true,errMessage:error.message})
}

})
module.exports=Router