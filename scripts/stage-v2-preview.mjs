/**
 * Stage the approved ELIS v2 preview under /preview-2-0/ without overwriting
 * the production homepage or unrelated assets.
 *
 * Usage: node scripts/stage-v2-preview.mjs <preview-build-dist> <production-dist>
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { strict as assert } from 'node:assert';

const [sourceDir, productionDir] = process.argv.slice(2);
assert(sourceDir && productionDir, 'Expected preview-build and production-build paths');

const siteBase = 'https://electoralintegrity.org';
const prefix = '/preview-2-0';
const target = join(productionDir, 'preview-2-0');
const originalHome = await readFile(join(productionDir, 'index.html'));

function transform(html) {
  let output = html;
  for (const lang of ['en', 'pt']) {
    output = output.replaceAll(`${siteBase}/${lang}/`, `${siteBase}${prefix}/${lang}/`);
    output = output.replaceAll(`href="/${lang}/"`, `href="${prefix}/${lang}/"`);
  }
  output = output.replaceAll('href="/privacy/"', `href="${prefix}/privacy/"`);
  output = output.replace(/<head(\s[^>]*)?>/i, match => `${match}\n<meta name="robots" content="noindex, nofollow, noarchive">`);
  output = output.replace(/<body(\s[^>]*)?>/i, match =>
    `${match}\n<div role="note" style="background:#fff1c9;color:#15273e;text-align:center;padding:12px 16px;font:600 14px/1.5 system-ui,sans-serif;position:relative;z-index:50">ELIS Website 2.0 — preview / pré-visualização · <a style="color:#174765;text-decoration:underline" href="/">Return to the current site / Voltar ao site atual</a></div>`
  );
  return output;
}

for (const lang of ['en', 'pt']) {
  const outputDir = join(target, lang);
  await mkdir(outputDir, { recursive: true });
  const html = await readFile(join(sourceDir, lang, 'index.html'), 'utf8');
  assert(html.includes(`lang="${lang === 'en' ? 'en-GB' : 'pt-BR'}"`), `Unexpected ${lang} page`);
  const result = transform(html);
  assert(result.includes(`href="${prefix}/${lang}/"`), `Missing localized links ${lang}`);
  assert(result.includes('noindex, nofollow'), 'Missing noindex');
  await writeFile(join(outputDir, 'index.html'), result, 'utf8');
}

const privacyDir = join(target, 'privacy');
await mkdir(privacyDir, { recursive: true });
const privacy = await readFile(join(sourceDir, 'privacy', 'index.html'), 'utf8');
await writeFile(join(privacyDir, 'index.html'), transform(privacy), 'utf8');

const redirect = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<meta http-equiv="refresh" content="0;url=/preview-2-0/en/">
<title>ELIS Website 2.0 Preview</title>
<link rel="canonical" href="${siteBase}${prefix}/en/"></head>
<body><p><a href="/preview-2-0/en/">View ELIS Website 2.0 Preview / Visualizar ELIS 2.0</a></p>
<p><a href="/preview-2-0/pt/">Português</a></p></body></html>`;
await mkdir(target, { recursive: true });
await writeFile(join(target, 'index.html'), redirect, 'utf8');

const homeAfter = await readFile(join(productionDir, 'index.html'));
assert(originalHome.equals(homeAfter), 'Production homepage was modified');
console.log('Staged ELIS v2 preview (EN/PT/privacy) without altering production homepage.');
