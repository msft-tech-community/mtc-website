# Microsoft Tech Community Club Website

A modern React + Vite website for the Microsoft Tech Community Club, featuring events, team, gallery, health check, and more. Styled with Bootstrap 5 and custom Azure-inspired accents.

## Features

-   ⚡ Fast development with [Vite](https://vitejs.dev/)
-   ⚛️ Built using [React](https://react.dev/)
-   🛣️ Routing via [React Router](https://reactrouter.com/)
-   🎨 Styled with [Bootstrap 5](https://getbootstrap.com/) and custom CSS
-   📈 Health check page with live latency
-   📷 Gallery, Team, Events, About, and Contact pages
-   Responsive design

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18+ recommended)
-   [npm](https://www.npmjs.com/)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/      # Reusable UI components
  pages/           # Page components (Home, Events, Team, etc.)
  App.jsx          # Main app component
  main.jsx         # Entry point
  App.css          # Custom styles
  index.css        # Base styles
public/
  favicons/        # Site icons and manifest
  _redirects       # SPA redirects for deployment
```

## Deployment

-   Supports static hosting (Netlify, Vercel, GitHub Pages, Azure Static Web Apps, etc.)
-   SPA redirects via `public/_redirects`
