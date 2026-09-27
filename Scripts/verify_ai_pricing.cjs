// Offline regression checks; never uses a provider key or sends a model request.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, '../guide.html'), 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(match => match[1]).filter(Boolean);
for (const script of scripts) new vm.Script(script);
const main = scripts.find(script => script.includes('const aiPricingModelsUSD'));
const pricing = main.slice(main.indexOf('const aiPricingModelsUSD'), main.indexOf('const videoStorageFaqEn'));
const context = vm.createContext({ Intl, Date });
vm.runInContext(`${pricing}
this.pricing = { models: aiPricingModelsUSD, en: aiPricingFaqEn, zh: aiPricingFaqZhHant, hans: aiPricingFaqZhHans,
  currencies: aiPricingCurrencyByLanguage, render: aiPricingItemForLanguage, sources: aiPricingSources };
this.setRates = (rates, status) => { aiPricingExchangeState.rates = rates; aiPricingExchangeState.status = status; };`, context);
const { models, en, zh, hans, currencies, render, sources } = context.pricing;
assert.equal(new Set(models.map(row => row.provider)).size, 10);
assert.equal(new Set(models.map(row => row.model)).size, models.length);
assert.ok(models.every(row => row.inputUSD > 0 && row.outputUSD > 0 && en.rateNotes[row.note] && zh.rateNotes[row.note]));
assert.ok(sources.every(([, url]) => url.startsWith('https://')));
context.setRates({ USD: 1, TWD: 32 }, 'ready');
const usd = render(en, 'en');
const twd = render(zh, 'zh-Hant');
const row = (table, model) => table.rows.find(item => item[1] === model);
// 3K input + 1K output: DeepSeek peak $0.30/$1.20 -> $0.0021 -> TWD 0.0672.
assert.equal(row(usd.tables[0], 'deepseek-flash')[4], 'USD\u00a00.0021');
assert.equal(row(twd.tables[0], 'deepseek-flash')[4], 'TWD\u00a00.0672');
// Muse standard $1.25/$4.25 -> $0.008, clearly separate from app integration.
assert.equal(row(usd.tables[0], 'muse-spark-1.3')[4], 'USD\u00a00.008');
assert.match(row(usd.tables[0], 'muse-spark-1.3')[2], /not integrated/);
assert.ok(!row(usd.tables[1], 'muse-spark-1.3'));
// Text-only models must not imply that image workflows can be called.
assert.equal(row(usd.tables[1], 'deepseek-v4-pro')[3], '—');
assert.equal(row(usd.tables[1], 'deepseek-v4-pro')[4], '—');
assert.ok(usd.tables[1].rows.every(item => item[6] === '—')); // exported workout report
assert.match(row(usd.tables[1], 'kimi-k3')[2], /pending release/);
for (const language of Object.keys(currencies)) {
  const item = render(en, language);
  for (const table of item.tables) assert.ok(table.rows.every(cells => cells.length === table.headers.length));
}
assert.match(hans.priceCaption, /模型单价与文字请求试算/);
context.setRates({}, 'error');
assert.match(render(zh, 'zh-Hant').tables[0].caption, /USD/);
assert.ok(!html.includes('2026-07-19'));
assert.ok(!html.includes('higher standard price from 2026-09-01'));
console.log(`PASS: syntax; ${models.length} models / 10 providers; currency conversion and fallback; pricing arithmetic; support boundaries; 11 currency locales.`);
