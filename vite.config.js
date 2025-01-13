import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' for root deployment or '/subdirectory/' if deployed in a subfolder
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
