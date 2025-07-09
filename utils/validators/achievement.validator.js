import Joi from 'joi';

export const achievementSchema = Joi.object({
  title: Joi.string()
    .min(1)
    .max(200)
    .required()
    .messages({
      'string.empty': 'Title is required',
      'string.max': 'Title cannot be longer than 200 characters',
    }),

  description: Joi.string()
    .max(1000)
    .optional(),

  date: Joi.string()
    .optional(),

  link: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': 'Link must be a valid URL',
    }),

  type: Joi.string()
    .valid('Award', 'Milestone', 'Recognition')
    .required()
    .messages({
      'any.only': 'Type must be one of Award, Milestone, Recognition',
      'any.required': 'Type is required',
    }),
});
