import type { FeatureModule } from './types.ts';
import { healthFeature } from './health/index.js';

export const features: FeatureModule[] = [healthFeature];
