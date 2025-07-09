import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Jaspern Admin API',
      version: '1.0.0',
      description: 'Admin backend API for Jaspern company',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./routes/*.js'], // files containing annotations
};

const specs = swaggerJsdoc(options);

export const swaggerUi = swaggerUiExpress;
export { specs };
