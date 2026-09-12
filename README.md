# Luxe Fashion — React Clone

A pixel-matched clone of the Luxe Fashion storefront, built with React 18 + Vite + Tailwind CSS. All product/hero/category images are cropped directly from your original screenshot so it's the same visuals, and every image in a row (categories, banners, product cards) is forced to the same box size with `object-fit: cover`, so nothing renders bigger/smaller than its neighbors.

## Run it locally in VS Code

1. Install [Node.js 18+](https://nodejs.org) if you don't have it.
2. Open this folder in VS Code.
3. Open a terminal (``Ctrl+` ``) and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional local check of the production build
```

The static output lands in `dist/`.

## Deploy to Vercel for free

**Option A — Vercel CLI (fastest)**
```bash
npm install -g vercel
vercel
```
Follow the prompts (accept the defaults — Vercel auto-detects Vite). Run `vercel --prod` to push it live.

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Click **Deploy** — you'll get a free `*.vercel.app` URL.

## Project structure

```
luxe-fashion/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/            # images cropped from the original screenshot
│   └── components/
│       ├── Announcement.jsx
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Categories.jsx
│       ├── Banners.jsx
│       ├── BestSellers.jsx
│       ├── Features.jsx
│       ├── Testimonials.jsx
│       ├── Newsletter.jsx
│       └── Footer.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Customizing

- **Colors / fonts**: edit `tailwind.config.js` (`cream`, `clay`, `ink` colors and the `serif`/`sans` font stacks).
- **Copy & prices**: each section's text lives directly in its component file under `src/components/`.
- **Images**: swap files in `src/assets/` and update the corresponding `import` in the component — sizes are all controlled by the surrounding container, so any image you drop in will auto-crop to fit.
