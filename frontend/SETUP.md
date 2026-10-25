# BizFlow Frontend Setup

## Prerequisites

- Node.js 22.18 or newer
- The BizFlow backend running locally (default: `http://localhost:5000`), or access to a deployed backend

## 1. Install dependencies

```bash
cd frontend
npm install
```

## 2. Create your local proxy config

`proxy.config.ts` decides which backend the dev server forwards `/api` requests to. It is gitignored, so create your own copy from the sample:

```bash
cp proxy.config.example.ts proxy.config.ts
```

Open `proxy.config.ts` and keep exactly **one** `PROXY_TARGET` line uncommented:

```ts
// Local backend
export const PROXY_TARGET = "http://localhost:5000";

// Staging backend
// export const PROXY_TARGET = "https://staging-api.your-domain.com";

// Production backend
// export const PROXY_TARGET = "https://api.your-domain.com";
```

To switch backends, comment the active line, uncomment another, and save. Vite restarts the dev server automatically.

## 3. Start the dev server

```bash
npm run dev
```

The app runs at `http://localhost:5173`.

## 4. Verify the setup

With the backend running, open:

```
http://localhost:5173/api/health
```

You should see JSON with `"database": "connected"`.

## 5. Production build

The production API address is fixed in `.env.production`:

```
VITE_API_URL=https://api.your-domain.com/api
```

Set it to your real API address, then build:

```bash
npm run build
```

The output is written to `dist/`. To preview the build locally:

```bash
npm run preview
```
