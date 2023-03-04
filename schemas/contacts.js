const Joi = require("joi")

const contactsSchema =  Joi.object({
  name: Joi.string().required().messages({"any.required": "missing require name field"}),
  email: Joi.string().email().required().messages({"any.required": "missing require email field"}),
  phone: Joi.string().required().messages({"any.required": "missing require phone field"}),
});

module.exports = contactsSchema;