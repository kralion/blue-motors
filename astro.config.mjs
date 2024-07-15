import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
 import netlify from '@astrojs/netlify';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  image: {
      domains: ['bluemotorsec.com','azwecdnepstoragewebsiteuploads.azureedge.net', 'img.freepik.com'],
    },
  integrations: [tailwind(), react()],
});