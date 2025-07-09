import Joi from 'joi';

export const projectSchema = Joi.object({
  title: Joi.string()
    .min(1)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Title is required',
      'string.max': 'Title cannot be longer than 100 characters',
    }),

  description: Joi.string()
    .max(1000)
    .optional(),

  category: Joi.string()
    .max(100)
    .optional(),

  technologies: Joi.array()
    .items(Joi.string().max(50))
    .optional(),

  status: Joi.string()
    .valid('Completed', 'Ongoing', 'Planned')
    .required()
    .messages({
      'any.only': 'Status must be one of Completed, Ongoing, Planned',
      'any.required': 'Status is required',
    }),

  date: Joi.string()
    .optional(),

  team: Joi.string()
    .max(100)
    .optional(),

  image: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': 'Image must be a valid URL',
    }),

  link: Joi.string()
    .uri()
    .optional()
    .messages({
      'string.uri': 'Link must be a valid URL',
    }),
});
