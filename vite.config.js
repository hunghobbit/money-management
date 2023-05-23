import { defineConfig } from 'vite'
import rollupConfig from './rollup.config'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vitejs.dev/config/  

export default defineConfig({
  plugins: [vue()],
  
  build: {
    rollupOptions: rollupConfig
  }
})
