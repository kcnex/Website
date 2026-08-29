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
  tagline: 'From code to customers — software, web, DevOps, and digital marketing.',

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
    contact: 'contact@kcnex.com',
    security: 'security@kcnex.com',
    press: 'press@kcnex.com',
  },

  // Inboxes below are already live on the KinSentry site.
  kinsentryEmail: {
    general: 'hello@kinsentry.com',
    report: 'report@kinsentry.com',
  },
} as const;


/*
 * The four service lines. The home page services grid and any future
 * /services page read from this array. Keep points concrete — capabilities
 * we actually offer, not aspirations.
 */
export interface Service {
  title: string;
  summary: string;
  points: string[];
}

export const services: Service[] = [
  {
    title: 'Software & app development',
    summary:
      'Custom software and mobile apps, from the first spec to release and beyond.',
    points: [
      'Web, desktop, and mobile applications',
      'APIs and third-party integrations',
      'Legacy rebuilds and rescues',
    ],
  },
  {
    title: 'Web design & development',
    summary:
      'Websites and web apps that are fast, accessible, and easy to maintain.',
    points: [
      'Marketing sites and e-commerce',
      'Web applications and dashboards',
      'Performance and accessibility work',
    ],
  },
  {
    title: 'DevOps services',
    summary:
      'Pipelines and infrastructure that make shipping boring — in the good way.',
    points: [
      'CI/CD pipelines and automation',
      'Cloud infrastructure and migrations',
      'Monitoring, backups, and cost control',
    ],
  },
  {
    title: 'Digital marketing',
    summary:
      'Growth for the things we ship — measured, not guessed.',
    points: [
      'SEO and content',
      'Paid campaigns',
      'Analytics and conversion',
    ],
  },
];

export const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/security', label: 'Security' },
  { href: '/contact', label: 'Contact' },
];
