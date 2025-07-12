import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import { userRoutes } from './routes/user.routes.js';
import projectRoutes from './routes/project.routes.js';
import companyDetailRoutes from './routes/comapnyDetail.routes.js';

import { errorHandler } from './middlewares/error.middleware.js';
// import { swaggerUi, specs } from './config/swagger.js';
import teamRoutes from './routes/team.routes.js';
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/user', userRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/company', companyDetailRoutes);
app.use('/api/team', teamRoutes);
// Swagger docs
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Error handler
app.use(errorHandler);

export default app;
