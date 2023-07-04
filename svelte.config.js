import { vitePreprocess } from "@astrojs/svelte";

export default {
  preprocess: vitePreprocess({
    scss: {
      prependData: `@use "../styles/style.scss" as *;`,
    },
  }),
};
