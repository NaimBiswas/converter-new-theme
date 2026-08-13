import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
mkdirSync(publicDir, { recursive: true });

const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));
const sizes = [
  ['favicon-16x16.png', 16],
  ['favicon-32x32.png', 32],
  ['favicon-48x48.png', 48],
  ['apple-touch-icon.png', 180],
  ['favicon-192x192.png', 192],
  ['favicon-512x512.png', 512],
];

for (const [name, size] of sizes) {
  await sharp(faviconSvg, { density: 300 }).resize(size, size).png().toFile(join(publicDir, name));
  console.log('created', name);
}

await sharp(readFileSync(join(publicDir, 'og-image.svg'))).png().toFile(join(publicDir, 'og-image.png'));
console.log('created og-image.png');

const manifest = {
  name: 'Data Converter',
  short_name: 'Data Converter',
  description: 'Seamless file and data conversion for documents, images, spreadsheets, and code.',
  start_url: '/',
  display: 'standalone',
  background_color: '#0b0e14',
  theme_color: '#0058be',
  icons: [
    { src: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    { src: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
};
writeFileSync(join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
console.log('created site.webmanifest');
