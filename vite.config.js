import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFile } from 'fs/promises'

// Plugin to copy manifest.json and move index.html to build folder
function copyManifestPlugin() {
  return {
    name: 'copy-manifest',
    writeBundle() {
      // Copy manifest.json
      copyFile('manifest.json', 'build/manifest.json')
        .then(() => console.log('✅ Manifest file copied to build folder'))
        .catch(err => console.error('❌ Error copying manifest:', err))
    }
  }
}

export default defineConfig({
  plugins: [react(), copyManifestPlugin()],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/popup/index.html'),
        content: resolve(__dirname, 'src/content/content.js'),
        background: resolve(__dirname, 'src/background/background.js')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    emptyOutDir: true,
    copyPublicDir: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  publicDir: false
})