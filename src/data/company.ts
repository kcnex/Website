/*
 * Single source of truth for company facts used across the site.
 *
 * IMPORTANT: every field marked TODO is a legally/reputationally load-bearing
 * claim. Fill them with real, verifiable values before launch — do not ship
 * invented ones. Trust signals that turn out to be false do more damage to
 * credibility than having none at all.
 */

export const company = {
  name: 'KCNEX Innovations',
  shortName: 'KCNEX',
  tagline: 'We build software that protects people.',

  // Verified from the existing KinSentry site copy.
  builtIn: 'India',
  serves: ['United States', 'United Kingdom', 'Canada'],

  // TODO(kcnex): confirm the registered legal entity name, exactly as filed.
  legalEntity: 'KCNEX Innovations',

  // TODO(kcnex): the year KCNEX itself was founded (not KinSentry's).
  founded: '20XX',

  // TODO(kcnex): a real, monitored address. Chrome Web Store and payment
  // processors may ask for one. Leave blank rather than inventing it.
  address: '',

  email: {
    // TODO(kcnex): create these on the kcnex domain, or point them at the
    // kinsentry.com inboxes that already exist and are monitored.
    general: 'hello@kcnex.com',
    security: 'security@kcnex.com',
    press: 'press@kcnex.com',
  },

  // Inboxes below are already live on the KinSentry site.
  kinsentryEmail: {
    general: 'hello@kinsentry.com',
    report: 'report@kinsentry.com',
  },
} as const;

export const navLinks = [
  { href: '/#products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/security', label: 'Security' },
  { href: '/contact', label: 'Contact' },
];
