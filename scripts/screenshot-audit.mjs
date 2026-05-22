// Screenshot audit script — uses Playwright with system Chrome
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../reports/screenshots');

const URL = 'http://127.0.0.1:4175';

const viewports = [
  { name: 'mobile-390',   width: 390,  height: 844  },
  { name: 'mobile-430',   width: 430,  height: 932  },
  { name: 'tablet-768',   width: 768,  height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 1000 },
];

const suffix = process.argv[2] === 'final' ? 'final-' : '';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

for (const vp of viewports) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: vp.width, height: vp.height });
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 20000 });
  // Wait for React to hydrate
  await page.waitForTimeout(1200);
  const outPath = path.join(OUT, `${suffix}${vp.name}.png`);
  await page.screenshot({ path: outPath, fullPage: true });
  console.log(`✓ ${outPath}`);
  await page.close();
}

await browser.close();
console.log('Done.');
