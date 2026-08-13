# harry-john
# Pasargad Panel

Simple Next.js admin panel for interacting with Pasargad Node.

## Quick start

1. Copy `.env.example` to `.env.local` and fill secrets.
2. `npm install`
3. `npm run dev` for local development.
4. Build: `npm run build` then `npm run start`.

## Deployment

This repo includes `Dockerfile`, `railway.json`, and `Procfile` for Railway deployment.
Set secrets in Railway: `PASARGAD_NODE_URL`, `PASARGAD_API_KEY`, `JWT_SECRET`.
