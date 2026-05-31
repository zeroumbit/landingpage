import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const svg = readFileSync(resolve(root, 'public', 'ZEROUM.svg'));

const sizes = [16, 32, 48, 64, 128, 256];
const pngBuffers = await Promise.all(
  sizes.map(size =>
    sharp(svg).resize(size, size).png().toBuffer()
  )
);

const ico = await pngToIco(pngBuffers);
writeFileSync(resolve(root, 'public', 'favicon.ico'), ico);
console.log('favicon.ico generated');
