# The Creative World

A storytelling and learning website for The Creative World, built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS.

## Local development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

## GitHub Pages deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch, or run **Deploy to GitHub Pages** manually from the Actions tab.

The workflow builds the Vite app, uploads `dist`, and adds a `404.html` fallback so direct visits to routes like `/gallery`, `/workshop`, and `/events` work on GitHub Pages.
