const SITE_URL = 'https://metadataconverter.com';

interface PageMeta {
  title: string;
  description: string;
  path?: string;
}

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'Data Converter - Free Online File & Data Conversion',
    description:
      'Free, browser-based file converter. Convert CSV, JSON, XML, YAML, Excel, images, and PDF in your browser - 100% private, no uploads.',
  },
  '/tools': {
    title: 'Converter Tools - 30+ Free File & Data Converters',
    description:
      'Browse 30+ free conversion tools: CSV, JSON, XML, YAML, Excel, images, PDF, and developer utilities. All conversions run locally in your browser.',
    path: 'tools',
  },
  '/api': {
    title: 'Developer API - Convert Files Programmatically',
    description:
      'Integrate file and data conversions into your own apps with the Data Converter REST API. cURL, Node.js, Python, PHP, and Go examples included.',
    path: 'api',
  },
  '/pricing': {
    title: 'Pricing - Free & Pro Plans | Data Converter',
    description:
      'Simple pricing for file conversion. Free browser-based conversions plus Pro plans for larger files, batch processing, and REST API quotas.',
    path: 'pricing',
  },
  '/docs': {
    title: 'Docs & Security - Privacy, Formats & FAQ | Data Converter',
    description:
      'Learn how Data Converter protects your files with local client-side processing, which formats are supported, and answers to common questions.',
    path: 'docs',
  },
  '/help': {
    title: 'Help Center - FAQs & Troubleshooting | Data Converter',
    description:
      'Find answers about file conversions, supported formats, security, batch processing, and API integration in the Data Converter Help Center.',
    path: 'help',
  },
  '/contact': {
    title: 'Contact Us | Data Converter',
    description:
      'Get in touch with the Data Converter team for support, custom integrations, partnerships, or feedback.',
    path: 'contact',
  },
  '/privacy': {
    title: 'Privacy Policy | Data Converter',
    description:
      'Data Converter processes files entirely in your browser. We do not upload, store, or analyze your documents. Read our full privacy policy.',
    path: 'privacy',
  },
  '/terms': {
    title: 'Terms of Service | Data Converter',
    description:
      'The Terms of Service for using Data Converter, including acceptable use, file ownership, and limitation of liability.',
    path: 'terms',
  },
};

function upsertMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

export function applyPageMeta(meta: PageMeta) {
  const url = meta.path ? `${SITE_URL}/${meta.path}` : `${SITE_URL}/`;

  document.title = meta.title;
  upsertMeta('name', 'description', meta.description);
  upsertMeta('property', 'og:title', meta.title);
  upsertMeta('property', 'og:description', meta.description);
  upsertMeta('property', 'og:url', url);
  upsertMeta('name', 'twitter:title', meta.title);
  upsertMeta('name', 'twitter:description', meta.description);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
}
