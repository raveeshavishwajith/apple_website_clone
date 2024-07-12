import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "digital-dreamers-al",
    project: "javascript-react"
  })],
  base: "/vite-react-deploy/",

  build: {
    sourcemap: true
  }
})