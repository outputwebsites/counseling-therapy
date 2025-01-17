import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://counseling-therapy.org",
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
    tailwind({
      applyBaseStyles: false,
    })
  ],
});