# Data Converter

Seamless file and data conversion for documents, images, spreadsheets, and code. Drag, drop, and convert — no uploads to a server, everything runs locally in your browser.

## Features

- **Drag & drop workplace** — drop multiple files at once and convert them in parallel with live progress and estimated time remaining.
- **Light / dark theme** — automatic system preference detection with a manual toggle.
- **Conversion formats:**
  - **Data:** CSV, JSON, XML, YAML
  - **Spreadsheets:** Excel (.xlsx, .xls) ↔ CSV / JSON
  - **Images:** JPG, PNG, WebP, GIF
  - **PDF:** Image ↔ PDF, merge, split, compress
  - **Developer tools:** JSON / XML formatter & validator, CSV viewer, Base64 encoder / decoder
- **Conversion previews** — view converted text content, download results, or copy to clipboard.
- **Pages** — Tools, API docs, Pricing, Docs, Help, Contact, Privacy, and Terms.

## Screenshots

![Data Converter](assets/screenshot.png)

## Tech Stack

- [React 19](https://react.dev) + [Vite](https://vitejs.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) with dark mode
- [React Router](https://reactrouter.com) v7
- [pdf-lib](https://pdf-lib.js.org) for PDF generation
- [SheetJS (xlsx)](https://sheetjs.com) for spreadsheet parsing
- [js-yaml](https://github.com/nodeca/js-yaml) for YAML serialization
- [Recharts](https://recharts.org) for conversion analytics
- [Framer Motion](https://motion.dev) for animations

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+
- A package manager (`npm`, `bun`, or `pnpm`)

### Install

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and optionally set values:

| Variable         | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| `GEMINI_API_KEY` | Gemini AI API key (AI Studio injects this automatically at runtime).        |
| `APP_URL`        | The URL where the app is hosted (used for links, OAuth, and API endpoints). |

### Development

```bash
npm run dev
```

Runs the dev server on [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint / typecheck

```bash
npm run lint
```

## Project Structure

```
src/
├── components/        # UI components (Header, HeroDropzone, ActiveConverter, modals, pages)
├── data/              # Tool definitions & pricing data
├── utils/             # Conversion engine (converter.ts) and helpers
├── types.ts           # Shared TypeScript types
├── App.tsx            # App shell, routing, and conversion state
└── main.tsx           # Entry point
```

## How Conversion Works

`src/utils/converter.ts` inspects each uploaded file's type and extension to recommend target formats, then performs the conversion entirely in-browser:

- Text/data formats use built-in parsers (CSV → JSON/XML/Markdown/HTML, JSON ↔ XML/YAML, etc.).
- Image formats are converted via the Canvas API.
- PDFs are generated with `pdf-lib`.
- Spreadsheets are handled with SheetJS.

## License

Private project.
