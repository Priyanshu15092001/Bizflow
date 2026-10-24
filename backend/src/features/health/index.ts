import healthRouter from './health.routes.js';
import type { FeatureModule } from '../types.ts';

export const healthFeature: FeatureModule = {
  path: '/api/health',
  router: healthRouter,
};
