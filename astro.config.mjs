// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
        "@styles": new URL("./src/styles", import.meta.url).pathname,
        "@components": new URL("./src/components", import.meta.url).pathname,
        "@pages": new URL("./src/pages", import.meta.url).pathname,
      },
    },
  },
});
