/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isOnVercel = import.meta.env?.VERCEL_ENV === 'production';
const isDevelopment = import.meta.env?.NODE_ENV !== 'production';

const base = isDevelopment || isOnVercel ? '/' : '/memory-game/';

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
});
