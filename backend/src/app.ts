import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { env } from './config/env.js';
import { errorHandler, notFoundHandler } from './common/middlewares/errorHandler.js';
import { features } from './features/index.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: [env.CLIENT_URL, env.BASE_URL] }));
app.use(express.json());

// Register feature modules (each feature owns its own folder)
for (const feature of features) {
  app.use(feature.path, feature.router);
}

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
