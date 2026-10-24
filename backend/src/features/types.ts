import type { Router } from 'express';

export interface FeatureModule {
  path: string;
  router: Router;
}
