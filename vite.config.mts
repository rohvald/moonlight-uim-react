import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  root: './',
  publicDir: 'public',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: '@rohvald/moonlight-uim-react',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'ReactDOM'
        }
      }
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  },
  plugins: [
    react(),
    dts({ rollupTypes: true })
  ],
  assetsInclude: ['/sb-preview/runtime.js']
})
