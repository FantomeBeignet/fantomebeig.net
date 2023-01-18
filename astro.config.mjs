import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from "url";

// https://astro.build/config
import svelte from "@astrojs/svelte";
import preprocess from "svelte-preprocess";

// https://astro.build/config
export default defineConfig({
  site: "https://www.fantomebeig.net",
  vite: {
    resolve: {
      alias: {
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@styles/style.scss" as *;`,
        },
      },
    },
  },
  integrations: [svelte({
    preprocess: [
      preprocess({
        scss: {
          prependData: `@use "../styles/style.scss" as *;`,
        },
      }),
    ],
  })],
});
