const Joi = require('joi');

module.exports.searchQuerySchema = Joi.object({
  id: Joi.string().alphanum().required()
})