# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router architecture, TypeScript, React 19, and Tailwind CSS v4. The project uses the latest Next.js features including the `app/` directory structure.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure

This project uses Next.js App Router (`app/` directory):
- `app/layout.tsx` - Root layout with Geist font configuration and global metadata
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind v4 imports and CSS custom properties

### TypeScript Configuration

- Path alias `@/*` maps to the project root (tsconfig.json:22)
- Strict mode enabled
- JSX mode: `react-jsx` (no need for React imports)

### Styling

The project uses Tailwind CSS v4 with the new `@tailwindcss/postcss` plugin:
- Global styles defined in `app/globals.css` using the new `@theme inline` directive
- CSS custom properties for theming (`--background`, `--foreground`)
- Auto dark mode support via `prefers-color-scheme`
- Geist Sans and Geist Mono fonts loaded via `next/font/google` and exposed as CSS variables

### Fonts

Two Google fonts are configured in `app/layout.tsx`:
- Geist Sans (variable: `--font-geist-sans`)
- Geist Mono (variable: `--font-geist-mono`)

Both use latin subsets and are applied as CSS variables to the body element.

## Key Configuration Files

- `next.config.ts` - Next.js configuration (currently minimal)
- `eslint.config.mjs` - ESLint v9 flat config with Next.js presets
- `postcss.config.mjs` - PostCSS config for Tailwind v4
- `tsconfig.json` - TypeScript compiler options with Next.js optimizations

## Notes

- This is a fresh Next.js installation with minimal customization
- The app uses the new Tailwind CSS v4 setup (not v3), which has different configuration patterns
- ESLint uses the new flat config format (v9+)
- React 19 is configured with the new `react-jsx` transform
