import { getSiteUrl } from '../lib/site-url.js';

export default function sitemap() {
  return [
    {
      url: getSiteUrl(),
    },
  ];
}
