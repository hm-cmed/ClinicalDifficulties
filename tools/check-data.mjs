// 文献データの点検スクリプト（任意）
// 使い方: リポジトリのフォルダで  node tools/check-data.mjs
//         node tools/check-data.mjs --list   … 要確認の文献を一覧表示
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const text = require('../assets/js/appendix-h.js');
const T = require('../assets/js/taxonomy.js');
const { build } = require('../assets/js/model.js');

const m = build(text, T);
const lines = text.split(/\r?\n/).filter((l) => l.trim() && !l.trim().startsWith('#')).length;
const count = (f) => m.refs.filter(f).length;

console.log(`領域: ${m.domains.length}  文献行: ${lines}  重複統合後の文献: ${m.refs.length}`);
console.log(`DOIあり: ${count((r) => r.cite.doi)}  PMIDのみ: ${count((r) => !r.cite.doi && r.cite.pmid)}  識別子なし: ${count((r) => r.flags.includes('noId'))}`);
console.log(`タイトル抽出失敗: ${count((r) => r.flags.includes('noTitle'))}  著者表記要確認: ${count((r) => r.flags.includes('authorCheck') || r.flags.includes('noAuthor'))}  同一タイトルの別書誌: ${count((r) => r.flags.includes('sameTitle'))}`);
console.log('\n領域別（課題・障壁の節 / 枠組みを含む全体）');
for (const d of m.domains) {
  const all = m.refs.filter((r) => r.domains.includes(d.id)).length;
  const ch = m.refs.filter((r) => r.challengeDomains.includes(d.id)).length;
  console.log(`  ${String(d.id).padStart(2)} ${d.name.ja.padEnd(16, '　')} ${String(ch).padStart(3)} / ${all}`);
}
console.log('\n職種別');
for (const p of m.professions) console.log(`  ${p.name.ja.padEnd(10, '　')} ${count((r) => r.profs.includes(p.id))}`);
console.log('\n課題カテゴリ別');
for (const c of m.categories) console.log(`  ${c.name.ja.padEnd(18, '　')} ${count((r) => r.cats.includes(c.id))}`);
console.log(`  （カテゴリなし） ${count((r) => !r.cats.length)}`);

if (process.argv.includes('--list')) {
  const show = (label, f) => {
    const xs = m.refs.filter(f);
    console.log(`\n■ ${label}（${xs.length}件）`);
    xs.forEach((r) => console.log(`  [D${r.domains.join(',')}] ${r.cite.raw.slice(0, 150)}`));
  };
  show('著者表記の確認が必要', (r) => r.flags.includes('authorCheck') || r.flags.includes('noAuthor'));
  show('同一タイトルで著者・年が異なる書誌', (r) => r.flags.includes('sameTitle'));
  show('タイトルを抽出できなかった', (r) => r.flags.includes('noTitle'));
  show('カテゴリが付かなかった', (r) => !r.cats.length);
}
