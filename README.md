# Chrome Extension with Vite + React + Tailwind CSS + shadcn/ui

A modern Chrome extension built with Vite, React, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Vite** - Fast build tool and development server
- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Chrome Extension Manifest V3** - Latest extension API
- **Hot Reload** - Fast development with Vite
- **Modern UI** - Beautiful design with shadcn/ui components

## 📁 Project Structure

```
├── src/
│   ├── components/ui/     # shadcn/ui components
│   ├── lib/              # Utility functions
│   ├── popup/            # Extension popup (React app)
│   ├── content/          # Content scripts
│   ├── background/       # Background service worker
│   └── styles/           # Global styles
├── build/                 # Built extension files
├── manifest.json         # Extension manifest
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

### 3. Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `build` folder from this project
5. The extension will appear in your extensions list