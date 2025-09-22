import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite lê este arquivo automaticamente (não preciso mais importar em lugar nenhum)
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // backend le isso, pro front coloco apenas o /api antes da chamada
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // "/api/login" -> "/login"
      },
    },
  },
})
