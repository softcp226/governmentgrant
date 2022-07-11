const Joi = require("joi");

const validate_card_number = (req) => {
  const schema = Joi.object({
    card_number:Joi.number().required().min(0)
  });
  const result = schema.validate({
   card_number:req.card_number
  });

  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_card_number;
