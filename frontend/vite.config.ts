import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { PROXY_TARGET } from "./proxy.config.ts";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      "/api": {
        target: PROXY_TARGET,
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
