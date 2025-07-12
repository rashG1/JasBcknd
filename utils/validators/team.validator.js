import Joi from 'joi';

export const teamMemberSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  position: Joi.string().min(2).max(100).required(),
  departments: Joi.array().items(Joi.string()).min(1).required(),
  bio: Joi.string().max(1000).required(),
  image: Joi.string().uri().allow(''),
  skills: Joi.array().items(Joi.string()).required(),
  linkedin: Joi.string().uri().allow(''),
  email: Joi.string().email().required(),
  experience: Joi.string().max(50).required(),
  icon: Joi.string().allow(''), // You can customize validation based on your icon usage
});
