import { fileURLToPath, URL } from "node:url";
// eslint-disable-next-line no-undef, no-unused-vars
const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: path.resolve(__dirname, "./dist/"),
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
