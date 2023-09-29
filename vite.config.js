import { defineConfig } from "vite";
import rollupConfig from "./rollup.config";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],

  build: {
    rollupOptions: rollupConfig,
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@/pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@/components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
      {
        find: "@/layouts",
        replacement: fileURLToPath(new URL("./src/layouts", import.meta.url)),
      },

      {
        find: "@/assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "@configs",
        replacement: fileURLToPath(new URL('./configs', import.meta.url))
      },
      {
        find:"@composables",
        replacement: fileURLToPath(new URL("./composables", import.meta.url))
      }
    ],
  },
});
