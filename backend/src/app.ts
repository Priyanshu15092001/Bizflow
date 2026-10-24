import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { env } from './config/env.js';
import healthRoutes from './routes/health.routes.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: [env.CLIENT_URL, env.BASE_URL] }));
app.use(express.json());

app.use('/api/health', healthRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
