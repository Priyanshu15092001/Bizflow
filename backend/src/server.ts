import app from './app.js';
import { env } from './config/env.js';
import { prisma } from './config/prisma.js';

async function start() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log('Database: connected');
  } catch (error) {
    console.error(
      'Database: connection failed -',
      error instanceof Error ? error.message : error
    );
    process.exit(1);
  }

  const server = app.listen(env.PORT, () => {
    console.log(`Server: running on ${env.BASE_URL} (${env.NODE_ENV})`);
  });

  const shutdown = (signal: string) => {
    console.log(`${signal} received, shutting down...`);
    server.close(async () => {
      await prisma.$disconnect();
      console.log('Database: disconnected');
      process.exit(0);
    });
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

start();
