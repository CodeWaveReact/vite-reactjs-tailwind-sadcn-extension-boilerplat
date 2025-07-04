import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/popup/index.html"),
        content: resolve(__dirname, "public/content.js"),
        background: resolve(__dirname, "public/background.js"),
      },
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
    emptyOutDir: true,
    copyPublicDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  publicDir: "public",
});
