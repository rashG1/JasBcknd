import logger  from '../utils/logger.js';

// Validation middleware factory
export const validate = (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.body, {
        abortEarly: false,
        allowUnknown: false,
        stripUnknown: true
      });

      if (error) {
        const errorMessages = error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        }));

        logger.warn('Validation failed:', errorMessages);

        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errorMessages
        });
      }

      // Replace req.body with validated and sanitized data
      req.body = value;
      next();
    } catch (err) {
      logger.error('Validation middleware error:', err);
      return res.status(500).json({
        success: false,
        message: 'Internal server error during validation'
      });
    }
  };
};

// Query parameter validation middleware factory
export const validateQuery = (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.query, {
        abortEarly: false,
        allowUnknown: false,
        stripUnknown: true
      });

      if (error) {
        const errorMessages = error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        }));

        logger.warn('Query validation failed:', errorMessages);

        return res.status(400).json({
          success: false,
          message: 'Query validation failed',
          errors: errorMessages
        });
      }

      req.query = value;
      next();
    } catch (err) {
      logger.error('Query validation middleware error:', err);
      return res.status(500).json({
        success: false,
        message: 'Internal server error during query validation'
      });
    }
  };
};

// Params validation middleware factory
export const validateParams = (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.params, {
        abortEarly: false,
        allowUnknown: false,
        stripUnknown: true
      });

      if (error) {
        const errorMessages = error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        }));

        logger.warn('Params validation failed:', errorMessages);

        return res.status(400).json({
          success: false,
          message: 'Parameters validation failed',
          errors: errorMessages
        });
      }

      req.params = value;
      next();
    } catch (err) {
      logger.error('Params validation middleware error:', err);
      return res.status(500).json({
        success: false,
        message: 'Internal server error during params validation'
      });
    }
  };
};
