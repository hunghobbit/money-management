import { defineConfig } from 'vite'
import rollupConfig from './rollup.config'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/  

export default defineConfig({
  plugins: [vue()],
  
  build: {
    rollupOptions: rollupConfig
  },
  resolve: {
    alias : [
      {
        find: '_',
        replacement: path.resolve(__dirname, "/src")
      },
      {
        find: '__auth',
        replacement: path.resolve(__dirname, '/src/pages')
      }
    ]
  }
})
