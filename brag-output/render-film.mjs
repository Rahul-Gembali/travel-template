import puppeteer from 'file:///C:/Users/DELL/.gemini/config/skills/hand-drawn-canvas-animation/scripts/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlFile = path.join(__dirname, 'horizons-launch.html');
const outDir = __dirname;
const framesDir = path.join(outDir, 'frames');
const soundtrackWav = path.join(outDir, 'soundtrack.wav');

mkdirSync(framesDir, { recursive: true });

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
if (!existsSync(chromePath)) {
  throw new Error(`Chrome not found at ${chromePath}`);
}

console.log('Launching headless Chrome...');
const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--allow-file-access-from-files'
  ]
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  const pageErrors = [];
  page.on('pageerror', err => pageErrors.push(String(err)));
  page.on('console', msg => {
    if (msg.type() === 'error') pageErrors.push(msg.text());
  });

  const targetUrl = pathToFileURL(htmlFile).href;
  console.log(`Loading: ${targetUrl}`);
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });

  await page.waitForFunction('window.__ready === true', { timeout: 40000 });

  const meta = await page.evaluate(() => ({
    N: window.__NDRAW,
    fps: window.__fps,
    size: window.__size
  }));

  console.log(`Film metadata: ${meta.N} frames, ${meta.fps} fps, ${meta.size.w}x${meta.size.h}`);

  // 1. Render all frames
  console.log('Rendering frames to PNG...');
  for (let i = 0; i < meta.N; i++) {
    const dataUrl = await page.evaluate((idx) => window.__frame(idx), i);
    const base64Data = dataUrl.split(',')[1];
    const framePath = path.join(framesDir, `${String(i).padStart(4, '0')}.png`);
    writeFileSync(framePath, Buffer.from(base64Data, 'base64'));

    if ((i + 1) % 60 === 0 || i === meta.N - 1) {
      console.log(`Rendered frame ${i + 1}/${meta.N} (${Math.round(((i + 1) / meta.N) * 100)}%)`);
    }
  }

  // 2. Extract best poster frame (frame 470)
  console.log('Extracting poster thumbnail (brag.jpg)...');
  const posterDataUrl = await page.evaluate(() => window.__frame(470));
  const posterBase64 = posterDataUrl.split(',')[1];
  writeFileSync(path.join(outDir, 'brag.jpg'), Buffer.from(posterBase64, 'base64'));

  if (pageErrors.length > 0) {
    console.warn('Browser warnings/errors encountered:', pageErrors.join('\n'));
  }

} finally {
  await browser.close();
}

// 3. Encode video with FFmpeg
console.log('Encoding video with FFmpeg...');
const rawMp4 = path.join(outDir, 'brag-raw.mp4');
const finalMp4 = path.join(outDir, 'brag.mp4');

// Step A: Encode PNG frames to MP4
execFileSync('ffmpeg', [
  '-v', 'error',
  '-y',
  '-framerate', '24',
  '-i', path.join(framesDir, '%04d.png'),
  '-c:v', 'libx264',
  '-pix_fmt', 'yuv420p',
  '-crf', '18',
  rawMp4
], { stdio: 'inherit' });

// Step B: Merge with master soundtrack
execFileSync('ffmpeg', [
  '-v', 'error',
  '-y',
  '-i', rawMp4,
  '-i', soundtrackWav,
  '-map', '0:v:0',
  '-map', '1:a:0',
  '-c:v', 'copy',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-shortest',
  finalMp4
], { stdio: 'inherit' });

// Clean up temporary files
console.log('Cleaning up temporary frames...');
rmSync(framesDir, { recursive: true, force: true });
if (existsSync(rawMp4)) rmSync(rawMp4, { force: true });

console.log(`\n🎉 SUCCESS! Video rendered to: ${finalMp4}`);
console.log(`🖼️  Poster saved to: ${path.join(outDir, 'brag.jpg')}`);
