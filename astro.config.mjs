import { defineConfig } from 'astro/config';

// TODO(kcnex): set this to the real production origin before launch.
// It drives canonical URLs, sitemap, and Open Graph tags.
export default defineConfig({
  site: 'https://kcnex.com',
  output: 'static',
  trailingSlash: 'ignore',
});
