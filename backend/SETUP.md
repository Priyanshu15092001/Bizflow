# BizFlow Backend Setup

## Prerequisites

- Node.js 22.18 or newer
- PostgreSQL (local install, or a hosted database such as Neon)

## 1. Install dependencies

```bash
cd backend
npm install
```

## 2. Create the database

With a local PostgreSQL:

```bash
createdb bizflow
```

If `createdb` is not available, open `psql` and run:

```sql
CREATE DATABASE bizflow;
```

If you use a hosted database, create one there and copy its connection string.

## 3. Configure environment variables

Create your `.env` file from the example (`.env` is gitignored):

```bash
cp .env.example .env
```

Then fill in the values:

```
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/bizflow
CLIENT_URL=http://localhost:5173
BASE_URL=http://localhost:5000
```

| Variable       | Purpose                                                                 |
| -------------- | ----------------------------------------------------------------------- |
| `NODE_ENV`     | `development`, `production`, or `test`                                  |
| `PORT`         | Port the server listens on                                              |
| `DATABASE_URL` | PostgreSQL connection string                                            |
| `CLIENT_URL`   | Frontend origin allowed by CORS (include `https://`, no trailing slash) |
| `BASE_URL`     | This backend's own public address                                       |

The server validates these at startup and exits with a clear message if any are missing or invalid.

Test the connection string before moving on:

```bash
psql "postgresql://YOUR_USER:YOUR_PASSWORD@localhost:5432/bizflow" -c "SELECT 1;"
```

## 4. Generate the Prisma client

The generated client in `src/generated` is gitignored, so generate it after cloning and whenever `prisma/schema.prisma` changes:

```bash
npx prisma generate
```

## 5. Start the dev server

```bash
npm run dev
```

On a successful start you should see:

```
Database: connected
Server: running on http://localhost:5000 (development)
```

If the database is unreachable, the server prints `Database: connection failed` and exits.

## 6. Verify the setup

```bash
curl http://localhost:5000/api/health
```

You should get JSON with `"status": "ok"` and `"database": "connected"`.

## 7. Production build

```bash
npx prisma generate
npm run build
npm start
```

Set these environment variables on the production host instead of using a `.env` file:

```
NODE_ENV=production
PORT=5000
DATABASE_URL=<production connection string>
CLIENT_URL=https://app.your-domain.com
BASE_URL=https://api.your-domain.com
```
