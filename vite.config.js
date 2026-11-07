import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: 5173,
  },

  build: {
    // Target modern browsers — smaller output
    target: 'esnext',

    // Raise warning threshold (1 MB) so it only warns for truly massive chunks
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Split vendor code into logical named chunks
        manualChunks(id) {
          // Three.js gets its own chunk — largest dependency
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }
          // Motion / framer-motion gets its own chunk
          if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          // React ecosystem
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-redux') ||
            id.includes('node_modules/@reduxjs')
          ) {
            return 'vendor-react';
          }
          // All other node_modules
          if (id.includes('node_modules')) {
            return 'vendor-misc';
          }
        },
      },
    },
  },
})
