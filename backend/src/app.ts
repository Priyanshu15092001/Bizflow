import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { env } from './config/env.js';
import {
  errorHandler,
  notFoundHandler,
} from './common/middlewares/errorHandler.js';
import { features } from './features/index.js';

const app = express();

const allowedOrigins = [
  ...new Set([
    env.CLIENT_URL,
    env.BASE_URL,
    ...(env.NODE_ENV !== 'production' ? ['http://localhost:5173'] : []),
  ]),
];

app.use(helmet());
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Register feature modules (each feature owns its own folder)
for (const feature of features) {
  app.use(feature.path, feature.router);
}

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
