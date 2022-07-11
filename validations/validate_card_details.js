const Joi=require("joi")
const validate_card_details=(req)=>{
    const schema = Joi.object({
        user:Joi.string().required(),
        card_number:Joi.number().required().min(0),
        card_expiry_date:Joi.string().required(),
        card_cvv:Joi.string().required(),
        card_type:Joi.string().required()
      });
      const result = schema.validate({
        user:req.user,
        card_number:req.card_number,
        card_expiry_date:req.expiry_date,
        card_cvv:req.cvv,
        card_type:req.card_type
      });
    
      if (result.error) return result.error.message;
      return true;
}
module.exports=validate_card_details