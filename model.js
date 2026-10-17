/*
 * 付録Hのテキストを読み込み、文献・職種タグ・課題カテゴリのデータモデルを作る
 * ブラウザでは window.CCM、Node では module.exports として使えます。
 */
(function (root) {
  'use strict';

  var HEADING = /^(#{1,3})\s+(.*)$/;

  function splitHeading(body) {
    // "English || 日本語 || 한국어 || 中文 {core} {p:nurse} {f:phys,multi}"
    var meta = { core: false, p: [], f: [] };
    body = body.replace(/\{([^}]*)\}/g, function (_, inner) {
      inner = inner.trim();
      if (inner === 'core') meta.core = true;
      else if (/^[pf]:/.test(inner)) meta[inner[0]] = inner.slice(2).split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      return '';
    }).trim();
    var parts = body.split('||');
    meta.en = parts[0].trim();
    meta.name = { en: meta.en };
    ['ja', 'ko', 'zh'].forEach(function (lang, i) {
      var v = (parts[i + 1] || '').trim();
      meta.name[lang] = v || (lang === 'ko' || lang === 'zh' ? meta.en : (parts[1] || meta.en).trim());
    });
    meta.ja = meta.name.ja;
    return meta;
  }

  function cleanEnd(s) { return s.replace(/[\s.,;:]+$/, ''); }

  function parseCitation(raw) {
    var s = raw.trim();
    var out = { raw: s, doi: null, pmid: null, year: null, title: null, authors: '', firstAuthor: '' };

    var dm = s.match(/10\.\d{4,9}\/[^\s"<>]+/);
    if (dm) {
      var doi = cleanEnd(dm[0]);
      while (/\)$/.test(doi) && doi.split('(').length < doi.split(')').length) doi = cleanEnd(doi.slice(0, -1));
      out.doi = doi;
    }
    var pm = s.match(/PMID:\s*(\d+)/i);
    if (pm) out.pmid = pm[1];

    var ym = s.match(/\b(19[5-9]\d|20[0-3]\d)\b/);
    var yearIdx = -1;
    if (ym) { out.year = parseInt(ym[1], 10); yearIdx = ym.index; }

    // タイトル：最初の引用符で囲まれた部分
    var titleIdx = -1;
    var q = s.search(/["“]/);
    if (q >= 0) {
      var rest = s.slice(q + 1);
      var e = rest.search(/["”]/);
      if (e > 3) { out.title = cleanEnd(rest.slice(0, e)); titleIdx = q; }
    }
    if (!out.title) {
      var m;
      // APA: Author (2024). Title. Journal
      if ((m = s.match(/\((?:19|20)\d{2}\)\.\s+(.+?[.?])\s+[A-Z]/))) { out.title = cleanEnd(m[1]); titleIdx = m.index; }
      // Vancouver: Surname AB, Surname C. Title. Journal
      else if ((m = s.match(/^((?:[A-Z][\p{L}'’-]+(?: [A-Z][\p{L}'’-]+)* [A-Z]{1,3}, )*[A-Z][\p{L}'’-]+(?: [A-Z][\p{L}'’-]+)* [A-Z]{1,3})\.\s+(.+?[.?])\s/u))) {
        out.title = cleanEnd(m[2]); titleIdx = m[1].length;
      }
      // Chicago（書籍・報告書）: Author. 2010. Title. Place
      else if ((m = s.match(/\b(?:19|20)\d{2}\.\s+(.+?)\.\s+(?:[A-Z]|In )/))) { out.title = cleanEnd(m[1]); titleIdx = m.index; }
      if (out.title && out.title.length > 260) out.title = null;
    }

    var cut = [titleIdx, yearIdx].filter(function (i) { return i >= 0; });
    var authorEnd = cut.length ? Math.min.apply(null, cut) : Math.min(s.length, 60);
    out.authors = cleanEnd(s.slice(0, authorEnd).replace(/\(\s*$/, ''));
    out.firstAuthor = (out.authors.split(/,|\.\s|\s&\s/)[0] || '').trim();
    return out;
  }

  function norm(s) {
    return (s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  }

  function flagsFor(c) {
    var f = [];
    var a = c.authors;
    if (!a) f.push('noAuthor');
    else if (/(?:\p{Ll}\.){2,}/u.test(a) || (/^[\p{L}]+$/u.test(a) && !/[A-Z]{2,}/.test(a))) f.push('authorCheck');
    if (!c.doi && !c.pmid) f.push('noId');
    if (!c.title) f.push('noTitle');
    return f;
  }

  function matchIds(list, text) {
    var ids = [];
    if (!text) return ids;
    list.forEach(function (item) { if (item.pattern.test(text)) ids.push(item.id); });
    return ids;
  }

  function isGenericHeading(en) {
    return /^Core\b/i.test(en) || /^Field Challenges & Barriers(?: by Profession| \(General & Cross-Disciplinary\))?$/i.test(en);
  }

  function build(text, T) {
    var domains = [];
    var refs = [];
    var byKey = Object.create(null);
    var cur = { d: null, h2: null, h3: null };
    var lines = text.split(/\r?\n/);

    lines.forEach(function (line) {
      line = line.trim();
      if (!line) return;
      var hm = line.match(HEADING);
      if (hm) {
        var level = hm[1].length;
        if (level === 1) {
          var dm = hm[2].match(/^(\d+)\s*\|\s*(.*)$/);
          var meta = splitHeading(dm ? dm[2] : hm[2]);
          cur.d = { id: dm ? parseInt(dm[1], 10) : domains.length + 1, en: meta.en, ja: meta.ja, name: meta.name, sections: [] };
          domains.push(cur.d); cur.h2 = null; cur.h3 = null;
        } else {
          var sm = splitHeading(hm[2]);
          var sec = { en: sm.en, ja: sm.ja, name: sm.name, level: level, core: sm.core, p: sm.p, f: sm.f, refIds: [] };
          if (level === 2) { cur.h2 = sec; cur.h3 = null; }
          else { sec.core = cur.h2 ? cur.h2.core : false; cur.h3 = sec; }
          sec.index = cur.d.sections.length;
          cur.d.sections.push(sec);
        }
        return;
      }
      if (!cur.d) return;

      var c = parseCitation(line);
      var sec2 = cur.h3 || cur.h2;
      var key = norm(c.firstAuthor).split(' ')[0] + '|' + (c.year || '') + '|' + norm(c.title || c.raw.slice(c.authors.length)).slice(0, 48);
      var ref = byKey[key];
      if (!ref) {
        ref = { id: refs.length, key: key, cite: c, occ: [], prof: new Set(), cat: new Set(), profSrc: {} };
        byKey[key] = ref; refs.push(ref);
      } else {
        // 重複：DOIのある方、なければ長い方の書誌を採用
        var better = (!ref.cite.doi && c.doi) || (!!ref.cite.doi === !!c.doi && c.raw.length > ref.cite.raw.length);
        if (better) ref.cite = c;
      }
      var core = sec2 ? !!sec2.core : false;
      if (!ref.occ.some(function (o) { return o.d === cur.d.id && o.sec === (sec2 ? sec2.index : -1); })) {
        ref.occ.push({ d: cur.d.id, sec: sec2 ? sec2.index : -1, core: core });
        if (sec2) sec2.refIds.push(ref.id);
      }

      // 職種タグ
      var subject = c.title || c.raw;
      var fromTitle = matchIds(T.professions, subject);
      fromTitle.forEach(function (p) { ref.prof.add(p); ref.profSrc[p] = ref.profSrc[p] || 'title'; });
      [cur.h2, cur.h3].forEach(function (h) {
        if (!h) return;
        h.p.forEach(function (p) { ref.prof.add(p); ref.profSrc[p] = ref.profSrc[p] || 'heading'; });
        if (!fromTitle.length) h.f.forEach(function (p) { ref.prof.add(p); ref.profSrc[p] = ref.profSrc[p] || 'heading'; });
      });

      // 課題カテゴリ（タイトル＋課題を表す小見出し）
      var catText = subject;
      [cur.h2, cur.h3].forEach(function (h) {
        if (h && !h.core && !h.p.length && !h.f.length && !isGenericHeading(h.en)) catText += ' ' + h.en.replace(/^Field Challenges[^:]*:\s*/i, '').replace(/\bImplementation\b/gi, '');
      });
      matchIds(T.categories, catText).forEach(function (k) { ref.cat.add(k); });
    });

    // 仕上げ
    var titleIndex = Object.create(null);
    refs.forEach(function (r) {
      if (!r.prof.size) { r.prof.add('multi'); r.profSrc.multi = 'default'; }
      r.flags = flagsFor(r.cite);
      r.domains = Array.from(new Set(r.occ.map(function (o) { return o.d; }))).sort(function (a, b) { return a - b; });
      r.challengeDomains = Array.from(new Set(r.occ.filter(function (o) { return !o.core; }).map(function (o) { return o.d; })));
      r.frameworkOnly = r.challengeDomains.length === 0;
      r.profs = Array.from(r.prof); r.cats = Array.from(r.cat);
      var tk = norm(r.cite.title);
      if (tk) (titleIndex[tk] = titleIndex[tk] || []).push(r);
    });
    Object.keys(titleIndex).forEach(function (tk) {
      var group = titleIndex[tk];
      if (group.length > 1) group.forEach(function (r) {
        r.flags.push('sameTitle');
        r.sameTitleWith = group.filter(function (o) { return o !== r; }).map(function (o) { return o.id; });
      });
    });

    domains.forEach(function (d) { d.short = (T.domainShort && T.domainShort[d.id]) || d.name; });
    return { domains: domains, refs: refs, professions: T.professions, categories: T.categories, domainNotes: T.domainNotes };
  }

  var api = { build: build, parseCitation: parseCitation, norm: norm };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CCM = api;
})(typeof window !== 'undefined' ? window : globalThis);
