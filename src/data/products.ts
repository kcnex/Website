/*
 * The KCNEX product roster.
 *
 * Only ship entries that genuinely exist. An umbrella company with one real
 * product and an honest "more in development" note reads as more credible than
 * one padded with vapourware — reviewers and partners check these links.
 *
 * To add a product, append an entry below; the grid on the home page and the
 * footer both read from this array.
 */

export type ProductStatus = 'live' | 'beta' | 'development';

export interface Product {
  slug: string;
  name: string;
  /** Rendered as the card's one-line summary. */
  summary: string;
  /** Longer paragraph for the product's own section. */
  description: string;
  status: ProductStatus;
  /** Platform / form factor, e.g. "Chrome extension". */
  platform: string;
  /** Public URL, or null while unreleased. */
  url: string | null;
  /** Short, concrete capability bullets. Keep to 3–4. */
  points: string[];
}

export const statusLabel: Record<ProductStatus, string> = {
  live: 'Live',
  beta: 'In beta',
  development: 'In development',
};

export const products: Product[] = [
  {
    slug: 'kinsentry',
    name: 'KinSentry',
    summary:
      'Always-on browser protection that stops tech-support and remote-access scams before they reach an older family member.',
    description:
      'KinSentry blocks known scam pages and remote-access tooling in real time, raises a voice warning loud enough to interrupt a call in progress, and alerts a family member the moment something goes wrong. It is built for the person being targeted, not the person installing it.',
    status: 'live',
    platform: 'Chrome extension',
    url: 'https://kinsentry.com',
    points: [
      'Blocks scam pages and remote-access downloads as they load',
      'Voice warnings that interrupt a scammer already on the phone',
      'Real-time alerts to family via SMS, email, and WhatsApp',
      'Tamper-resistant, so it cannot be talked into being switched off',
    ],
  },

  // Example of a future entry — delete or replace, do not ship as-is:
  // {
  //   slug: 'second-product',
  //   name: 'Product Name',
  //   summary: 'One honest sentence.',
  //   description: 'A paragraph that a sceptical reviewer would find accurate.',
  //   status: 'development',
  //   platform: 'iOS and Android',
  //   url: null,
  //   points: ['Real capability', 'Real capability'],
  // },
];
