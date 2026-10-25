// Local development only. Production builds never read this file.
//
// Setup: copy this file to `proxy.config.ts` (which is gitignored):
//   cp proxy.config.example.ts proxy.config.ts
//
// Keep exactly ONE line uncommented. Vite restarts itself when you save.

// Local backend
export const PROXY_TARGET = "http://localhost:5000";

// Staging backend
// export const PROXY_TARGET = "https://staging-api.your-domain.com";

// Production backend
// export const PROXY_TARGET = "https://api.your-domain.com";
