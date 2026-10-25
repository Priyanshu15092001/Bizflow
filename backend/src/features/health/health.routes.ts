   import { Router } from "express";
   import { checkDatabase } from "./health.service.js";

   const router = Router();

   router.get("/", async (_req, res) => {
     const dbOk = await checkDatabase();

     res.status(dbOk ? 200 : 503).json({
       success: dbOk,
       data: {
         status: dbOk ? "ok" : "degraded",
         database: dbOk ? "connected" : "disconnected",
         uptime: process.uptime(),
       },
     });
   });

   export default router;