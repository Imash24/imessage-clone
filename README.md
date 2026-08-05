# Messages Simulator

A local-only React application that recreates the visual experience of an iPhone Messages conversation. It does not connect to Apple Messages and cannot send or receive SMS.

## Development

```bash
npm install
npm run dev
```

Open the local address printed by Vite (normally `http://localhost:5173`).

## Scripts

- `npm run dev` — start the development server
- `npm run build` — type-check and create a production build
- `npm run lint` — run linting
- `npm run preview` — preview the production build

## Data boundary

The initial conversation data is in `src/data/seed`. The app uses a repository interface, with a browser `localStorage` implementation today, so a future SQLite repository can replace it without changing the UI.
