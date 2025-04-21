import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server: {
      port: 8301,
      strictPort: true,
      allowedHosts: ["f9b6-157-97-134-193.ngrok-free.app", "7bda89734185.apps-tunnel.monday.app"] // ✅ allow ngrok + others
    }
  };
});
