import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/oauth/google': {
        target: 'https://accounts.google.com',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/oauth\/google/, ''),
      },
    },
  },
});
