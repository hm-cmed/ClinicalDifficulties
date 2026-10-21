/*
 * 医療現場の課題マップ — 画面描画（日本語／English／한국어／中文）
 */
(function () {
  'use strict';

  var I = window.I18N;
  var M = window.CCM.build(window.APPENDIX_H_TEXT, window.TAXONOMY);
  var PROF = new Map(M.professions.map(function (p) { return [p.id, p]; }));
  var CAT = new Map(M.categories.map(function (c) { return [c.id, c]; }));
  var DOM = new Map(M.domains.map(function (d) { return [d.id, d]; }));
  var REF = M.refs;
  var SPECIFIC = M.professions.filter(function (p) { return p.id !== 'multi' && p.id !== 'patient'; });

  // ─── 言語 ───────────────────────────────────
  var LANG = window.__CCM_LANG || 'ja';
  function info(code) { return I.langs.filter(function (l) { return l.code === code; })[0] || I.langs[0]; }
  function str(key) {
    var s = I.strings[LANG];
    if (s && s[key] != null) return s[key];
    return I.strings.en[key] != null ? I.strings.en[key] : I.strings.ja[key];
  }
  function fill(tpl, p) {
    return String(tpl).replace(/\{(\w+)\}/g, function (m, k) { return p && p[k] != null ? p[k] : m; });
  }
  function t(key, p) { return fill(str(key), p); }
  function plural(key, n) { var v = str(key); if (v && typeof v === 'object') v = Number(n) === 1 ? v.one : v.other; return fill(v, { n: fmt(n) }); }
  function cnt(n) { return plural('count', n); }
  function cntS(n) { return plural('countShort', n); }
  function fmt(x) { return Number(x).toLocaleString(info(LANG).locale); }
  // テンプレートの {key} にノードを差し込む
  function tn(key, p) {
    return String(str(key)).split(/(\{\w+\})/).filter(function (s) { return s !== ''; }).map(function (part) {
      var m = part.match(/^\{(\w+)\}$/);
      return m && p[m[1]] != null ? p[m[1]] : part;
    });
  }
  function L(obj) { return obj ? (obj[LANG] || obj.en || obj.ja || '') : ''; }
  function pName(p) { return L(p.name); }
  function cName(c) { return L(c.name); }
  function cShort(c) { return L(c.short); }
  function dName(d) { return L(d.name); }
  function dShort(d) { return L(d.short); }
  function sName(s) { return L(s.name); }
  function joinNodes(items, sep) { var out = []; items.forEach(function (x, i) { if (i) out.push(sep); out.push(x); }); return out; }

  // ─── 状態（ブラウザに保存） ──────────────────────
  var state = { cols: 'domain', scale: 'count', fw: false };
  try { Object.assign(state, JSON.parse(localStorage.getItem('ccm-state') || '{}')); } catch (e) {}
  function saveState() { try { localStorage.setItem('ccm-state', JSON.stringify(state)); } catch (e) {} }

  // ─── DOMヘルパー（データは必ず textContent で挿入） ─────
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'class') el.className = v;
      else if (k === 'text') el.textContent = v;
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
      else if (k === 'style') el.setAttribute('style', v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) c.forEach(function (x) { append(el, x); });
    else el.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
  }
  function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }
  function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }

  // ─── 抽出 ───────────────────────────────────
  function select(o) {
    var fw = !!o.fw;
    return REF.filter(function (r) {
      if (o.p && r.profs.indexOf(o.p) < 0) return false;
      if (o.c && r.cats.indexOf(o.c) < 0) return false;
      if (o.d != null) return (fw ? r.domains : r.challengeDomains).indexOf(o.d) >= 0;
      return fw || !r.frameworkOnly;
    });
  }
  function countBy(list, key, ids) {
    var m = {}; ids.forEach(function (id) { m[id] = 0; });
    list.forEach(function (r) { r[key].forEach(function (x) { if (x in m) m[x]++; }); });
    return ids.map(function (id) { return { id: id, n: m[id] }; });
  }
  function topCats(list, k) {
    return countBy(list, 'cats', M.categories.map(function (c) { return c.id; }))
      .filter(function (x) { return x.n > 0; }).sort(function (a, b) { return b.n - a.n; }).slice(0, k || 3);
  }
  function domCounts(list, fw) {
    return M.domains.map(function (d) {
      return { id: d.id, n: list.filter(function (r) { return (fw ? r.domains : r.challengeDomains).indexOf(d.id) >= 0; }).length };
    });
  }
  function byYear(a, b) { return (b.cite.year || 0) - (a.cite.year || 0) || (a.cite.title || '').localeCompare(b.cite.title || ''); }

  // ─── ルーティング ─────────────────────────────
  function route() {
    var raw = location.hash.replace(/^#\/?/, '');
    var i = raw.indexOf('?');
    var path = i >= 0 ? raw.slice(0, i) : raw;
    var q = new URLSearchParams(i >= 0 ? raw.slice(i + 1) : '');
    var parts = path.split('/').filter(Boolean);
    return { view: parts[0] || 'map', arg: parts[1], q: q };
  }
  function go(hash) { if (location.hash === hash) render(); else location.hash = hash; }
  function qs(obj) {
    var p = new URLSearchParams();
    Object.keys(obj).forEach(function (k) { if (obj[k] != null && obj[k] !== '' && obj[k] !== false) p.set(k, obj[k]); });
    var s = p.toString(); return s ? '?' + s : '';
  }

  var main = document.getElementById('main');
  function render() {
    hideTip();
    var r = route();
    document.querySelectorAll('#tabs a').forEach(function (a) {
      if (a.dataset.view === r.view) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    clear(main);
    if (r.view === 'prof') renderProf(r);
    else if (r.view === 'domain') renderDomain(r);
    else if (r.view === 'refs') renderRefs(r);
    else if (r.view === 'about') renderAbout();
    else renderMap();
  }

  // ─── ヘッダー・フッター・タブ ────────────────────
  var themeCur = document.documentElement.getAttribute('data-theme') || 'auto';
  function renderChrome() {
    var li = info(LANG);
    document.documentElement.lang = li.html;
    document.title = t('docTitle');
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', t('metaDesc'));
    document.querySelector('.skip').textContent = t('skip');
    document.getElementById('eyebrow').textContent = t('eyebrow');
    document.getElementById('titleMain').textContent = t('title');
    document.getElementById('subtitle').textContent = t('subtitle');
    document.getElementById('lead').textContent = t('lead');
    var s = clear(document.getElementById('stats'));
    [[fmt(REF.length), t('statRefs')], [M.domains.length, t('statDomains')], [SPECIFIC.length, t('statProfs')],
     [M.categories.length, t('statCats')], [fmt(REF.filter(function (r) { return r.cite.doi; }).length), t('statDoi')]]
      .forEach(function (x) { s.appendChild(h('div', { class: 'stat' }, h('b', { text: String(x[0]) }), h('span', { text: x[1] }))); });
    var tabs = document.getElementById('tabs');
    tabs.setAttribute('aria-label', t('tabsAria'));
    var tabKey = { map: 'tabMap', prof: 'tabProf', domain: 'tabDomain', refs: 'tabRefs', about: 'tabAbout' };
    tabs.querySelectorAll('a').forEach(function (a) { a.textContent = t(tabKey[a.dataset.view]); });
    var tb = document.getElementById('themeBtn');
    tb.textContent = t({ auto: 'themeAuto', light: 'themeLight', dark: 'themeDark' }[themeCur]);
    tb.setAttribute('aria-label', t('themeAria'));
    var ls = clear(document.getElementById('langSwitch'));
    ls.setAttribute('aria-label', t('langAria'));
    I.langs.forEach(function (l) {
      ls.appendChild(h('button', { type: 'button', lang: l.html, 'aria-pressed': String(l.code === LANG), text: l.label,
        onclick: function () { if (l.code !== LANG) setLang(l.code); } }));
    });
    document.getElementById('drawerClose').setAttribute('aria-label', t('close'));
    var fs = clear(document.getElementById('footSrc'));
    append(fs, [t('footSrcPre'), h('i', { text: 'Designing AI-Driven Medical Education' }), t('footSrcPost')]);
    document.getElementById('footNote').textContent = t('footNote');
  }
  function loadFont(code) {
    if (!I.fonts[code] || document.querySelector('link[data-font="' + code + '"]')) return;
    document.head.appendChild(h('link', { rel: 'stylesheet', 'data-font': code, href: 'https://fonts.googleapis.com/css2?' + I.fonts[code] + '&display=swap' }));
  }
  function setLang(code) {
    LANG = code;
    try { localStorage.setItem('ccm-lang', code); } catch (e) {}
    try {
      var sp = new URLSearchParams(location.search); sp.set('lang', code);
      history.replaceState(null, '', location.pathname + '?' + sp.toString() + location.hash);
    } catch (e) {}
    loadFont(code);
    closeDrawer();
    renderChrome();
    render();
  }

  // ─── ツールチップ ─────────────────────────────
  var tip = document.getElementById('tooltip');
  function showTip(target, nodes) {
    clear(tip); append(tip, nodes);
    tip.classList.add('on');
    var b = target.getBoundingClientRect();
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var x = Math.min(window.innerWidth - tw - 8, Math.max(8, b.left + b.width / 2 - tw / 2));
    var y = b.top - th - 8; if (y < 8) y = b.bottom + 8;
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }
  function hideTip() { tip.classList.remove('on'); }

  // ─── ドロワー ────────────────────────────────
  var drawer = document.getElementById('drawer'), backdrop = document.getElementById('backdrop'), lastFocus = null;
  function openDrawer(eyebrow, title, sub, body) {
    lastFocus = document.activeElement;
    document.getElementById('drawerEyebrow').textContent = eyebrow || '';
    document.getElementById('drawerTitle').textContent = title;
    append(clear(document.getElementById('drawerSub')), sub);
    append(clear(document.getElementById('drawerBody')), body);
    document.getElementById('drawerBody').scrollTop = 0;
    drawer.classList.add('on'); backdrop.classList.add('on'); drawer.setAttribute('aria-hidden', 'false');
    document.getElementById('drawerClose').focus();
  }
  function closeDrawer() {
    if (!drawer.classList.contains('on')) return;
    drawer.classList.remove('on'); backdrop.classList.remove('on'); drawer.setAttribute('aria-hidden', 'true');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  document.getElementById('drawerClose').addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeDrawer(); hideTip(); } });
  drawer.addEventListener('click', function (e) { var a = e.target.closest('a[href^="#/"]'); if (a) closeDrawer(); });

  // ─── 部品 ───────────────────────────────────
  var FLAG_KEY = { authorCheck: 'flagAuthorCheck', noAuthor: 'flagNoAuthor', sameTitle: 'flagSameTitle', noTitle: 'flagNoTitle' };
  function flagLabel(f) { return FLAG_KEY[f] ? t(FLAG_KEY[f]) : null; }
  function sectionLabel(o) {
    var d = DOM.get(o.d); if (!d) return '';
    var s = d.sections[o.sec];
    var path = [];
    if (s && s.level === 3) {
      for (var i = o.sec - 1; i >= 0; i--) if (d.sections[i].level === 2) { path.push(sName(d.sections[i])); break; }
    }
    if (s) path.push(sName(s));
    return t('domainQ', { id: d.id, name: dName(d) }) + (path.length ? t('pathSep') + path.join(t('pathSep')) : '');
  }
  function shortAuthors(c) {
    var a = c.authors || '';
    if (!a) return t('unknownAuthor');
    if (a.length > 64) {
      var parts = a.split(', ');
      a = (parts[1] && /^(?:[A-Z][a-z]?\.\s?)+$|^[A-Z]{1,3}$/.test(parts[1].replace(/\s+$/, '')) && parts[0].indexOf(' ') < 0 ? parts[0] + ', ' + parts[1] : parts[0]) + t('etAl');
    }
    return a;
  }
  function copyText(text, btn) {
    function done() { var o = btn.textContent; btn.textContent = t('copied'); setTimeout(function () { btn.textContent = o; }, 1400); }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
    function fallback() {
      var ta = h('textarea', { style: 'position:fixed;left:-9999px' }); ta.value = text; document.body.appendChild(ta);
      ta.select(); try { document.execCommand('copy'); done(); } catch (e) {} document.body.removeChild(ta);
    }
  }
  function refCard(r) {
    var c = r.cite;
    var link = c.doi ? 'https://doi.org/' + c.doi : (c.pmid ? 'https://pubmed.ncbi.nlm.nih.gov/' + c.pmid + '/' : null);
    var titleText = c.title || c.raw;
    var searchQ = encodeURIComponent(c.title || c.raw.slice(0, 160));
    var tags = h('div', { class: 'ref-tags' },
      r.domains.map(function (d) { return h('a', { class: 'tag dom', href: '#/domain/' + d, title: dName(DOM.get(d)), text: t('domainN', { id: d }) }); }),
      r.profs.map(function (p) { return h('a', { class: 'tag', href: '#/prof/' + p, text: pName(PROF.get(p)) }); }),
      r.cats.map(function (k) { return h('a', { class: 'tag', href: '#/refs' + qs({ c: k }), text: '#' + cShort(CAT.get(k)) }); }),
      r.flags.filter(flagLabel).map(function (f) {
        return h('span', { class: 'tag warn', title: f === 'sameTitle' ? t('flagTipSame') : t('flagTipOther'), text: '⚠ ' + flagLabel(f) });
      })
    );
    var copyBtn = h('button', { class: 'linkbtn', type: 'button', text: t('copy') });
    copyBtn.addEventListener('click', function () { copyText(c.raw, copyBtn); });
    return h('li', { class: 'ref' },
      h('p', { class: 'ref-title', lang: 'en' }, link ? h('a', { href: link, target: '_blank', rel: 'noopener', text: titleText }) : titleText),
      h('p', { class: 'ref-meta' }, h('span', { lang: 'en', text: shortAuthors(c) }), c.year ? t('year', { y: c.year }) : ''),
      tags,
      h('div', { class: 'ref-actions' },
        c.doi ? h('a', { href: 'https://doi.org/' + c.doi, target: '_blank', rel: 'noopener', text: 'DOI: ' + c.doi }) : null,
        !c.doi && c.pmid ? h('a', { href: link, target: '_blank', rel: 'noopener', text: 'PubMed: ' + c.pmid }) : null,
        !c.doi ? h('a', { href: 'https://pubmed.ncbi.nlm.nih.gov/?term=' + searchQ, target: '_blank', rel: 'noopener', text: t('searchPubmed') }) : null,
        !c.doi ? h('a', { href: 'https://scholar.google.com/scholar?q=' + searchQ, target: '_blank', rel: 'noopener', text: t('searchScholar') }) : null,
        copyBtn),
      h('details', null, h('summary', { text: t('details') }),
        h('p', null, r.occ.map(function (o) { return sectionLabel(o) + (o.core ? t('coreSuffix') : ''); }).join('\n'), h('br'), h('br'), h('span', { lang: 'en', text: c.raw })))
    );
  }
  function refList(list, pageSize) {
    pageSize = pageSize || 40;
    var wrap = h('div');
    var ul = h('ul', { class: 'reflist' });
    var shown = 0;
    var more = h('button', { class: 'btn more', type: 'button' });
    function page() {
      list.slice(shown, shown + pageSize).forEach(function (r) { ul.appendChild(refCard(r)); });
      shown = Math.min(list.length, shown + pageSize);
      more.textContent = t('more', { n: fmt(list.length - shown) });
      more.style.display = shown < list.length ? '' : 'none';
    }
    more.addEventListener('click', page);
    if (!list.length) wrap.appendChild(h('p', { class: 'note', text: t('empty') }));
    page();
    wrap.appendChild(ul); wrap.appendChild(more);
    return wrap;
  }
  function bars(items, opts) {
    var max = Math.max.apply(null, items.map(function (x) { return x.n; }).concat([1]));
    return h('ul', { class: 'bars' }, items.map(function (x) {
      var li = h('li', { class: (opts.onPick ? 'clickable' : '') + (opts.active === x.id ? ' active' : ''), tabindex: opts.onPick ? '0' : null, role: opts.onPick ? 'button' : null },
        h('span', { class: 'bl', text: x.label }),
        h('span', { class: 'bt' }, h('span', { class: 'bf', style: 'width:' + (x.n / max * 100).toFixed(1) + '%' })),
        h('span', { class: 'bv', text: fmt(x.n) }));
      if (opts.onPick) {
        li.addEventListener('click', function () { opts.onPick(x.id); });
        li.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); opts.onPick(x.id); } });
      }
      return li;
    }));
  }
  function seg(label, options, value, onChange) {
    return h('span', { class: 'seg-wrap' }, h('span', { class: 'ctl-label', text: label }),
      h('span', { class: 'seg', role: 'group', 'aria-label': label }, options.map(function (o) {
        return h('button', { type: 'button', 'aria-pressed': String(o[0] === value), text: o[1], onclick: function () { onChange(o[0]); } });
      })));
  }
  function fwToggle(onChange) {
    var cb = h('input', { type: 'checkbox' }); cb.checked = state.fw;
    cb.addEventListener('change', function () { state.fw = cb.checked; saveState(); onChange(); });
    return h('label', { class: 'check', title: t('fwTitle') }, cb, t('fwLabel'));
  }
  function nameWithCount(label, n) { return label + t('paren', { s: fmt(n) }); }

  // ═════════════════════════════════════════════
  //  1) 課題マップ
  // ═════════════════════════════════════════════
  function renderMap() {
    var cards = h('div', { class: 'cards' }, M.professions.map(function (p) {
      var list = select({ p: p.id, fw: state.fw });
      var top = topCats(list, 3);
      var maxN = top.length ? top[0].n : 1;
      return h('a', { class: 'pcard', href: '#/prof/' + p.id },
        h('div', { class: 'pcard-top' }, h('span', { class: 'pcard-name', text: pName(p) }), h('span', { class: 'pcard-n', text: cntS(list.length) })),
        h('ul', { class: 'mini' }, top.map(function (x) {
          return h('li', null,
            h('span', { class: 'lbl' }, cShort(CAT.get(x.id)), h('span', { class: 'track' }), h('span', { class: 'fill', style: 'width:' + (x.n / maxN * 100).toFixed(0) + '%' })),
            h('span', { class: 'v', text: t('miniV', { n: fmt(x.n), p: pct(x.n, list.length) }) }));
        })));
    }));

    main.appendChild(h('section', { class: 'section' },
      h('div', { class: 'section-head' },
        h('div', null, h('h2', { text: t('cardsTitle') }), h('p', { text: t('cardsLead') }))),
      cards));

    var heatHost = h('div');
    var controls = h('div', { class: 'controls' });
    var heatTitle = h('h2');
    function redraw() {
      heatTitle.textContent = t(state.cols === 'cat' ? 'heatTitleCat' : 'heatTitleDom');
      clear(controls);
      append(controls, [
        seg(t('colsLabel'), [['domain', t('colsDomain')], ['cat', t('colsCat')]], state.cols, function (v) { state.cols = v; saveState(); redraw(); }),
        seg(t('scaleLabel'), [['count', t('scaleCount')], ['share', t('scaleShare')]], state.scale, function (v) { state.scale = v; saveState(); redraw(); }),
        fwToggle(function () { render(); })
      ]);
      clear(heatHost).appendChild(heatmap());
    }
    main.appendChild(h('section', { class: 'section', id: 'heat' },
      h('div', { class: 'section-head' }, h('div', null, heatTitle, h('p', { text: t('heatLead') }))),
      controls, heatHost));
    redraw();
  }

  function heatmap() {
    var isCat = state.cols === 'cat';
    var cols = isCat ? M.categories.map(function (c) { return { id: c.id, label: cShort(c), full: cName(c) }; })
                     : M.domains.map(function (d) { return { id: d.id, label: dShort(d), num: d.id, full: t('domainC', { id: d.id, name: dName(d) }) }; });
    var rows = M.professions.map(function (p) {
      var all = select({ p: p.id, fw: state.fw });
      var cells = cols.map(function (c) {
        var list = isCat ? all.filter(function (r) { return r.cats.indexOf(c.id) >= 0; })
                         : all.filter(function (r) { return (state.fw ? r.domains : r.challengeDomains).indexOf(c.id) >= 0; });
        return { col: c, count: list.length, share: all.length ? list.length / all.length : 0 };
      });
      return { p: p, total: all.length, cells: cells };
    });
    var share = state.scale === 'share';
    var max = 0;
    rows.forEach(function (row) {
      if (!share && (row.p.id === 'multi' || row.p.id === 'patient')) return;
      row.cells.forEach(function (c) { max = Math.max(max, share ? c.share : c.count); });
    });
    function bin(v) { return v <= 0 ? -1 : Math.min(6, Math.floor(Math.sqrt(Math.min(1, v / max)) * 7)); }

    var thead = h('thead', null, h('tr', null,
      h('th', { class: 'row', scope: 'col' }, h('span', { class: 'visually-hidden', text: t('profHidden') })),
      cols.map(function (c) {
        var href = isCat ? '#/refs' + qs({ c: c.id, fw: state.fw ? 1 : null }) : '#/domain/' + c.id;
        return h('th', { class: 'col', scope: 'col' }, h('button', { type: 'button', title: c.full, onclick: function () { go(href); } },
          c.num ? h('span', { class: 'num', text: c.num + ' ' }) : null, c.label));
      }),
      h('th', { class: 'total', scope: 'col', text: t('totalCol') })));

    var tbody = h('tbody');
    rows.forEach(function (row) {
      var pn = pName(row.p);
      if (row.p.id === 'multi') tbody.appendChild(h('tr', { class: 'divider' }, h('th', { colspan: String(cols.length + 2) }, h('span', { text: t('divider') }))));
      var tr = h('tr', null, h('th', { class: 'row', scope: 'row' },
        h('button', { type: 'button', onclick: function () { go('#/prof/' + row.p.id); } }, pn,
          LANG !== 'en' ? h('span', { class: 'en', lang: 'en', text: row.p.name.en }) : null)));
      row.cells.forEach(function (c) {
        var v = share ? c.share : c.count;
        var b = bin(v);
        var p100 = Math.round(c.share * 100);
        var label = c.count === 0 ? '' : (share ? String(p100) : String(c.count));
        var btn = h('button', {
          type: 'button', class: (b < 0 ? 'zero' : 'h' + b),
          'aria-label': t('cellAria', { prof: pn, col: c.col.full, n: fmt(c.count), p: p100 }),
          text: label || '·'
        });
        if (c.count > 0) {
          btn.addEventListener('click', function () { openCell(row.p, c.col, isCat); });
          var tipNodes = function () {
            return [h('div', null, h('strong', { text: cnt(c.count) })), h('div', { text: t('tipShare', { prof: pn, p: p100 }) }),
              h('div', { text: pn + ' × ' + c.col.full }), h('div', { style: 'opacity:.7', text: t('tipClick') })];
          };
          btn.addEventListener('pointerenter', function () { showTip(btn, tipNodes()); });
          btn.addEventListener('focus', function () { showTip(btn, tipNodes()); });
          btn.addEventListener('pointerleave', hideTip);
          btn.addEventListener('blur', hideTip);
        } else btn.setAttribute('tabindex', '-1');
        tr.appendChild(h('td', { class: 'cell' }, btn));
      });
      tr.appendChild(h('td', { class: 'total', text: fmt(row.total) }));
      tbody.appendChild(tr);
    });

    var legend = h('div', { class: 'legend' },
      h('span', { text: t('legendFew') }), h('span', { class: 'ramp', 'aria-hidden': 'true' }, [0, 1, 2, 3, 4, 5, 6].map(function (i) { return h('i', { style: 'background:var(--h' + i + ')' }); })), h('span', { text: t('legendMany') }),
      h('span', { text: share ? t(isCat ? 'legendShareCat' : 'legendShareDom') : t('legendCount', { max: fmt(max) }) }));
    return h('div', null, h('div', { class: 'heat-wrap' }, h('table', { class: 'heat' }, h('caption', { class: 'visually-hidden', text: t('heatCaption') }), thead, tbody)), legend);
  }

  function openCell(p, col, isCat) {
    var base = select({ p: p.id, fw: state.fw });
    var list = (isCat ? base.filter(function (r) { return r.cats.indexOf(col.id) >= 0; })
                      : base.filter(function (r) { return (state.fw ? r.domains : r.challengeDomains).indexOf(col.id) >= 0; })).sort(byYear);
    var breakdown;
    if (isCat) {
      breakdown = domCounts(list, state.fw).filter(function (x) { return x.n; }).sort(function (a, b) { return b.n - a.n; })
        .map(function (x) { return h('a', { class: 'chip', href: '#/domain/' + x.id }, t('domainN', { id: x.id }) + ' ' + dName(DOM.get(x.id)), h('b', { text: String(x.n) })); });
    } else {
      breakdown = topCats(list, 8).map(function (x) {
        return h('a', { class: 'chip', href: '#/refs' + qs({ p: p.id, d: col.id, c: x.id, fw: state.fw ? 1 : null }) }, cShort(CAT.get(x.id)), h('b', { text: String(x.n) }));
      });
    }
    var more = '#/refs' + qs({ p: p.id, d: isCat ? null : col.id, c: isCat ? col.id : null, fw: state.fw ? 1 : null });
    openDrawer(t(isCat ? 'dEyebrowCat' : 'dEyebrowDom'), pName(p) + ' × ' + col.full,
      [h('span', { class: 'sub-count', text: cnt(list.length) }), h('a', { href: more, text: t('dMore') })],
      [h('h3', { text: t(isCat ? 'dH3Cat' : 'dH3Dom') }), h('div', { class: 'chips', style: 'margin-bottom:18px' }, breakdown),
        !isCat && DOM.get(col.id) ? h('p', { class: 'note', style: 'margin:0 0 16px', text: t('domOverview') + L(M.domainNotes[col.id]) }) : null,
        h('h3', { text: t('refsNewest') }), refList(list, 30)]);
  }

  // ═════════════════════════════════════════════
  //  2) 職種から見る
  // ═════════════════════════════════════════════
  function renderProf(r) {
    var p = PROF.get(r.arg) || PROF.get('nurse');
    var fcat = r.q.get('c'), fdom = r.q.get('d') ? parseInt(r.q.get('d'), 10) : null;
    var all = select({ p: p.id, fw: state.fw });
    var pn = pName(p);

    main.appendChild(h('nav', { class: 'picker', 'aria-label': t('profPickerAria') }, M.professions.map(function (x) {
      return h('a', { class: 'chip' + (x.id === p.id ? ' on' : ''), href: '#/prof/' + x.id, 'aria-current': x.id === p.id ? 'page' : null },
        pName(x), h('b', { text: String(select({ p: x.id, fw: state.fw }).length) }));
    })));

    var tc = topCats(all, 3), dc = domCounts(all, state.fw).filter(function (x) { return x.n; }).sort(function (a, b) { return b.n - a.n; }).slice(0, 3);
    var summary = h('p', { class: 'summary' },
      tn('sum1', { prof: pn, n: h('b', { text: cnt(all.length) }), total: fmt(select({ fw: state.fw }).length) }), ' ',
      tc.length ? tn('sum2', { list: joinNodes(tc.map(function (x) { return [h('b', { text: cName(CAT.get(x.id)) }), t('sumItem', { n: fmt(x.n) })]; }), t('sep')) }) : null, ' ',
      dc.length ? tn('sum3', { list: dc.map(function (d) { return t('quote', { s: dName(DOM.get(d.id)) }); }).join(t('sumDomSep')) }) : null);

    var named = [];
    M.domains.forEach(function (d) { d.sections.forEach(function (s, i) { if (s.p.concat(s.f).indexOf(p.id) >= 0) named.push({ d: d, s: s, i: i }); }); });
    var namedBox = h('div', { class: 'panel panel-pad' },
      h('h3', { text: t('namedTitle', { prof: pn }) }),
      named.length ? h('ul', { class: 'outline' }, named.map(function (x) {
        return h('li', null, h('button', { type: 'button', onclick: function () { go('#/domain/' + x.d.id + qs({ s: x.i })); } },
          h('span', null, h('span', { class: 'dn', text: t('domainN', { id: x.d.id }) }), sName(x.s),
            h('span', { class: 'en', text: dName(x.d) + (LANG !== 'en' ? t('pathSep') + x.s.en : '') })),
          h('span', { class: 'cnt', text: cntS(x.s.refIds.length) })));
      })) : h('p', { class: 'note', text: t('namedNone') }));

    var subline = [LANG !== 'en' ? p.name.en : null, p.note ? L(p.note) : null].filter(Boolean).join('　｜　');
    main.appendChild(h('section', { class: 'hero' },
      h('div', null, h('p', { class: 'eyebrow', text: t('tabProf') }), h('h2', { text: pn }),
        subline ? h('p', { class: 'en', text: subline }) : null, summary,
        h('div', { class: 'controls', style: 'margin-top:14px' }, fwToggle(render))),
      namedBox));

    function pick(kind, id) {
      var cur = kind === 'c' ? fcat : (fdom != null ? String(fdom) : null);
      var next = cur === String(id) ? null : id;
      go('#/prof/' + p.id + qs(kind === 'c' ? { c: next } : { d: next }));
    }
    main.appendChild(h('section', { class: 'grid-2' },
      h('div', { class: 'panel panel-pad' }, h('h3', { text: t('barsCatTitle') }), h('p', { class: 'note', style: 'margin:-4px 0 12px', text: t('barsToggleNote') }),
        bars(countBy(all, 'cats', M.categories.map(function (c) { return c.id; })).filter(function (x) { return x.n; }).sort(function (a, b) { return b.n - a.n; })
          .map(function (x) { return { id: x.id, n: x.n, label: cName(CAT.get(x.id)) }; }), { onPick: function (id) { pick('c', id); }, active: fcat })),
      h('div', { class: 'panel panel-pad' }, h('h3', { text: t('barsDomTitle') }), h('p', { class: 'note', style: 'margin:-4px 0 12px', text: t('barsNote') }),
        bars(domCounts(all, state.fw).map(function (x) { return { id: x.id, n: x.n, label: x.id + '. ' + dName(DOM.get(x.id)) }; }), { onPick: function (id) { pick('d', id); }, active: fdom }))));

    var list = all.filter(function (r) {
      return (!fcat || r.cats.indexOf(fcat) >= 0) && (fdom == null || (state.fw ? r.domains : r.challengeDomains).indexOf(fdom) >= 0);
    }).sort(byYear);
    var filt = [fcat && CAT.get(fcat) ? cName(CAT.get(fcat)) : null, fdom != null && DOM.get(fdom) ? t('domainQ', { id: fdom, name: dName(DOM.get(fdom)) }) : null].filter(Boolean);
    main.appendChild(h('section', { class: 'section' },
      h('div', { class: 'list-head' }, h('h3', { text: t('refsHead', { c: cnt(list.length) }) + (filt.length ? t('paren', { s: filt.join(' × ') }) : '') }),
        filt.length ? h('a', { class: 'btn', href: '#/prof/' + p.id, text: t('clearFilter') }) : null),
      refList(list)));
  }

  // ═════════════════════════════════════════════
  //  3) 領域から見る
  // ═════════════════════════════════════════════
  function renderDomain(r) {
    var d = DOM.get(parseInt(r.arg, 10)) || M.domains[0];
    var fsec = r.q.get('s') != null ? parseInt(r.q.get('s'), 10) : null;
    var fprof = r.q.get('p');
    main.appendChild(h('nav', { class: 'picker', 'aria-label': t('domPickerAria') }, M.domains.map(function (x) {
      return h('a', { class: 'chip' + (x.id === d.id ? ' on' : ''), href: '#/domain/' + x.id, 'aria-current': x.id === d.id ? 'page' : null, text: x.id + '. ' + dName(x) });
    })));

    var inDom = REF.filter(function (x) { return x.domains.indexOf(d.id) >= 0; });
    var challenge = inDom.filter(function (x) { return x.challengeDomains.indexOf(d.id) >= 0; });
    var tc = topCats(challenge, 3);
    var pc = countBy(challenge, 'profs', SPECIFIC.map(function (p) { return p.id; })).filter(function (x) { return x.n; }).sort(function (a, b) { return b.n - a.n; }).slice(0, 3);

    var outline = h('ul', { class: 'outline' }, d.sections.map(function (s, i) {
      return h('li', { class: s.level === 3 ? 'lvl3' : '' }, h('button', {
        type: 'button', class: fsec === i ? 'active' : '',
        onclick: function () { go('#/domain/' + d.id + qs({ s: fsec === i ? null : i })); }
      }, h('span', null, sName(s), s.core ? h('span', { class: 'badge-core', text: t('coreBadge') }) : null,
          LANG !== 'en' ? h('span', { class: 'en', lang: 'en', text: s.en }) : null),
         h('span', { class: 'cnt', text: s.refIds.length ? cntS(s.refIds.length) : '' })));
    }));

    main.appendChild(h('section', { class: 'hero' },
      h('div', null, h('p', { class: 'eyebrow', text: t('domEyebrow', { id: d.id }) }), h('h2', { text: dName(d) }),
        LANG !== 'en' ? h('p', { class: 'en', lang: 'en', text: d.en }) : null,
        h('p', { class: 'summary', text: L(M.domainNotes[d.id]) }),
        h('p', { class: 'note', style: 'margin-top:12px' },
          t('domStats', { n: fmt(inDom.length), m: fmt(challenge.length) }),
          pc.length ? t('domTopProfs', { list: pc.map(function (x) { return nameWithCount(pName(PROF.get(x.id)), x.n); }).join(t('sep')) }) : null,
          tc.length ? t('domTopCats', { list: tc.map(function (x) { return nameWithCount(cShort(CAT.get(x.id)), x.n); }).join(t('sep')) }) : null)),
      h('div', { class: 'panel panel-pad' }, h('h3', { text: t('outlineTitle') }), outline)));

    main.appendChild(h('section', { class: 'grid-2' },
      h('div', { class: 'panel panel-pad' }, h('h3', { text: t('domProfTitle') }), h('p', { class: 'note', style: 'margin:-4px 0 12px', text: t('barsNote') }),
        bars(countBy(challenge, 'profs', M.professions.map(function (p) { return p.id; })).map(function (x) { return { id: x.id, n: x.n, label: pName(PROF.get(x.id)) }; }),
          { onPick: function (id) { go('#/domain/' + d.id + qs({ s: fsec, p: fprof === id ? null : id })); }, active: fprof })),
      h('div', { class: 'panel panel-pad' }, h('h3', { text: t('domCatTitle') }),
        bars(countBy(challenge, 'cats', M.categories.map(function (c) { return c.id; })).filter(function (x) { return x.n; }).sort(function (a, b) { return b.n - a.n; })
          .map(function (x) { return { id: x.id, n: x.n, label: cName(CAT.get(x.id)) }; }),
          { onPick: function (id) { go('#/refs' + qs({ d: d.id, c: id, fw: 1 })); } }),
        h('p', { class: 'note', style: 'margin:10px 0 0', text: t('domCatNote') }))));

    var sec = h('section', { class: 'section' });
    var filtLabel = [fsec != null && d.sections[fsec] ? sName(d.sections[fsec]) : null, fprof && PROF.get(fprof) ? pName(PROF.get(fprof)) : null].filter(Boolean);
    sec.appendChild(h('div', { class: 'list-head' }, h('h3', { text: t('refsWord') + (filtLabel.length ? t('paren', { s: filtLabel.join(' × ') }) : t('bySection')) }),
      filtLabel.length ? h('a', { class: 'btn', href: '#/domain/' + d.id, text: t('clearFilter') }) : null));
    if (fsec == null && !fprof) {
      d.sections.forEach(function (s) {
        if (!s.refIds.length) { sec.appendChild(h('h3', { style: 'margin:22px 0 4px', text: sName(s) })); return; }
        sec.appendChild(h('h3', { style: 'margin:22px 0 10px' }, sName(s), s.core ? h('span', { class: 'badge-core', text: t('coreBadge') }) : null,
          h('span', { class: 'muted', style: 'font-weight:400;font-size:12px;margin-left:8px', text: (LANG !== 'en' ? s.en + ' · ' : '') + cnt(s.refIds.length) })));
        sec.appendChild(refList(s.refIds.map(function (id) { return REF[id]; }), 10));
      });
    } else {
      var ids = fsec != null && d.sections[fsec] ? d.sections[fsec].refIds.map(function (id) { return REF[id]; }) : inDom;
      if (fsec != null && d.sections[fsec] && d.sections[fsec].level === 2) {
        var acc = [];
        for (var i = fsec; i < d.sections.length; i++) { if (i > fsec && d.sections[i].level === 2) break; acc = acc.concat(d.sections[i].refIds); }
        ids = Array.from(new Set(acc)).map(function (id) { return REF[id]; });
      }
      var list = ids.filter(function (x) { return !fprof || x.profs.indexOf(fprof) >= 0; }).sort(byYear);
      sec.appendChild(h('p', { class: 'note', text: cnt(list.length) }));
      sec.appendChild(refList(list));
    }
    main.appendChild(sec);
  }

  // ═════════════════════════════════════════════
  //  4) 文献を探す
  // ═════════════════════════════════════════════
  function renderRefs(r) {
    var q = r.q;
    var f = {
      q: q.get('q') || '', d: q.get('d') || '', p: q.get('p') || '', c: q.get('c') || '',
      flag: q.get('flag') || '', sort: q.get('sort') || 'year', fw: q.get('fw') === '1' || (!q.has('fw') && state.fw), doi: q.get('doi') === '1'
    };
    function opt(v, label, cur) { var o = h('option', { value: v, text: label }); if (String(cur) === String(v)) o.selected = true; return o; }
    var qIn = h('input', { type: 'search', placeholder: t('kwPh'), value: f.q, 'aria-label': t('kwLabel') });
    var dSel = h('select', null, opt('', t('allDomains'), f.d), M.domains.map(function (d) { return opt(d.id, d.id + '. ' + dName(d), f.d); }));
    var pSel = h('select', null, opt('', t('allProfs'), f.p), M.professions.map(function (p) { return opt(p.id, pName(p), f.p); }));
    var cSel = h('select', null, opt('', t('allCats'), f.c), M.categories.map(function (c) { return opt(c.id, cName(c), f.c); }));
    var flagSel = h('select', null, opt('', t('flagAll'), f.flag), opt('check', t('flagCheck'), f.flag), opt('noid', t('flagNoid'), f.flag));
    var sortSel = h('select', null, opt('year', t('sortNew'), f.sort), opt('old', t('sortOld'), f.sort), opt('author', t('sortAuthor'), f.sort));
    var fwCb = h('input', { type: 'checkbox' }); fwCb.checked = f.fw;
    var doiCb = h('input', { type: 'checkbox' }); doiCb.checked = f.doi;

    var host = h('div');
    var countEl = h('h3');
    var current = [];
    function apply(push) {
      f = { q: qIn.value.trim(), d: dSel.value, p: pSel.value, c: cSel.value, flag: flagSel.value, sort: sortSel.value, fw: fwCb.checked, doi: doiCb.checked };
      var hash = '#/refs' + qs({ q: f.q, d: f.d, p: f.p, c: f.c, flag: f.flag, sort: f.sort === 'year' ? null : f.sort, fw: f.fw ? 1 : 0, doi: f.doi ? 1 : null });
      if (push) history.replaceState(null, '', hash);
      var words = f.q.toLowerCase().split(/\s+/).filter(Boolean);
      current = REF.filter(function (x) {
        if (f.p && x.profs.indexOf(f.p) < 0) return false;
        if (f.c && x.cats.indexOf(f.c) < 0) return false;
        if (f.d) { if ((f.fw ? x.domains : x.challengeDomains).indexOf(parseInt(f.d, 10)) < 0) return false; }
        else if (!f.fw && x.frameworkOnly) return false;
        if (f.doi && !x.cite.doi) return false;
        if (f.flag === 'check' && !x.flags.some(flagLabel)) return false;
        if (f.flag === 'noid' && x.flags.indexOf('noId') < 0) return false;
        if (words.length) { var s = x.cite.raw.toLowerCase(); if (!words.every(function (w) { return s.indexOf(w) >= 0; })) return false; }
        return true;
      });
      current.sort(f.sort === 'old' ? function (a, b) { return -byYear(a, b); } : f.sort === 'author' ? function (a, b) { return (a.cite.authors || '').localeCompare(b.cite.authors || ''); } : byYear);
      countEl.textContent = cnt(current.length);
      clear(host).appendChild(refList(current, 50));
    }
    var timer;
    qIn.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(function () { apply(true); }, 180); });
    [dSel, pSel, cSel, flagSel, sortSel, fwCb, doiCb].forEach(function (el) { el.addEventListener('change', function () { apply(true); }); });

    var csvBtn = h('button', { class: 'btn', type: 'button', text: t('csv') });
    csvBtn.addEventListener('click', function () { downloadCSV(current); });

    main.appendChild(h('section', { class: 'section' },
      h('div', { class: 'section-head' }, h('div', null, h('h2', { text: t('tabRefs') }), h('p', { text: t('refsLead') }))),
      h('div', { class: 'filters' },
        h('label', null, t('kwLabel'), qIn), h('label', null, t('fDomain'), dSel), h('label', null, t('fProf'), pSel), h('label', null, t('fCat'), cSel)),
      h('div', { class: 'filters-2' },
        h('label', { class: 'check' }, fwCb, t('fwLabel')),
        h('label', { class: 'check' }, doiCb, t('doiOnly')),
        h('label', { class: 'check' }, t('bibLabel'), flagSel),
        h('label', { class: 'check' }, t('sortLabel'), sortSel),
        h('a', { class: 'btn', href: '#/refs', text: t('clearAll') }), csvBtn),
      h('div', { class: 'list-head' }, countEl), host));
    apply(false);
  }

  function downloadCSV(list) {
    var head = str('csvHead');
    // Excel で数式として実行されないよう、= + - @ で始まる値には先頭に ' を付ける
    function esc(v) { v = v == null ? '' : String(v); if (/^[=+\-@\t\r]/.test(v)) v = "'" + v; return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }
    var rows = list.map(function (r, i) {
      return [i + 1, r.cite.year || '', r.cite.authors, r.cite.title || '', r.cite.doi || '', r.cite.pmid || '',
        r.domains.map(function (d) { return d + '. ' + dName(DOM.get(d)); }).join(' / '),
        r.profs.map(function (p) { return pName(PROF.get(p)); }).join(' / '),
        r.cats.map(function (c) { return cName(CAT.get(c)); }).join(' / '),
        r.flags.filter(flagLabel).map(flagLabel).join(' / '),
        r.occ.map(sectionLabel).join(' / '), r.cite.raw].map(esc).join(',');
    });
    var blob = new Blob(['﻿' + head.join(',') + '\r\n' + rows.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    var a = h('a', { href: URL.createObjectURL(blob), download: 'clinical-challenges-references-' + LANG + '.csv' });
    document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  // ═════════════════════════════════════════════
  //  5) このアプリについて
  // ═════════════════════════════════════════════
  function renderAbout() {
    var A = I.about[LANG] || I.about.en;
    var c = function (f) { return REF.filter(f).length; };
    var nCheck = c(function (r) { return r.flags.indexOf('authorCheck') >= 0 || r.flags.indexOf('noAuthor') >= 0; });
    var nSame = c(function (r) { return r.flags.indexOf('sameTitle') >= 0; });
    var nNoId = c(function (r) { return r.flags.indexOf('noId') >= 0; });
    var lines = window.APPENDIX_H_TEXT.split(/\r?\n/).filter(function (l) { return l.trim() && l.trim()[0] !== '#'; }).length;
    function codeParts(arr) { return arr.map(function (x) { return /^assets\//.test(x) ? h('code', { text: x }) : x; }); }
    main.appendChild(h('article', { class: 'prose' },
      h('h2', { text: A.title }),
      h('p', { text: A.intro }),
      h('h2', { text: A.srcTitle }),
      h('p', { text: A.srcText }),
      h('ul', null,
        h('li', null, h('b', { text: 'Appendix F' }), ' ', A.appF),
        h('li', null, h('b', { text: 'Appendix H' }), ' ', fill(A.appH, { lines: fmt(lines), n: fmt(REF.length) }))),
      h('h2', { text: A.methodTitle }),
      h('p', { text: A.methodLead }),
      h('ol', null, A.steps.map(function (s) { return h('li', { text: s }); })),
      h('table', null, h('thead', null, h('tr', null, A.tableHead.map(function (x) { return h('th', { text: x }); }))),
        h('tbody', null, M.domains.map(function (d) {
          return h('tr', null, h('td', { text: String(d.id) }),
            h('td', null, h('a', { href: '#/domain/' + d.id, text: dName(d) }), LANG !== 'en' ? h('span', { class: 'muted', lang: 'en', text: '　' + d.en }) : null),
            h('td', { text: String(REF.filter(function (r) { return r.domains.indexOf(d.id) >= 0; }).length) }));
        }))),
      h('h2', { text: A.classTitle }),
      h('table', null, h('tbody', null, A.classRows.map(function (row) {
        return h('tr', null, h('th', { text: row[0] }), h('td', { text: fill(row[1], { ncat: M.categories.length }) }));
      }))),
      h('p', { class: 'callout', text: A.callout }),
      h('p', null, codeParts(A.rules)),
      h('h2', { text: A.flagTitle }),
      h('p', { text: A.flagLead }),
      h('ul', null, [nCheck, nSame, nNoId].map(function (n, i) { return h('li', { text: fill(A.flagItems[i], { n: fmt(n) }) }); })),
      h('h2', { text: A.updateTitle }),
      h('p', null, codeParts(A.update)),
      h('h2', { text: A.citeTitle }),
      h('p', { lang: 'en', text: 'Mihara H. Designing AI-Driven Medical Education. Cambridge Scholars Publishing (in preparation), Appendix F and Appendix H.' })
    ));
  }

  // ─── テーマ切り替え ───────────────────────────
  document.getElementById('themeBtn').addEventListener('click', function () {
    var order = ['auto', 'light', 'dark'];
    themeCur = order[(order.indexOf(themeCur) + 1) % order.length];
    if (themeCur === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', themeCur);
    try { if (themeCur === 'auto') localStorage.removeItem('ccm-theme'); else localStorage.setItem('ccm-theme', themeCur); } catch (e) {}
    this.textContent = t({ auto: 'themeAuto', light: 'themeLight', dark: 'themeDark' }[themeCur]);
  });

  var lastPage = route().view + '/' + (route().arg || '');
  window.addEventListener('hashchange', function () {
    closeDrawer(); render();
    var page = route().view + '/' + (route().arg || '');
    if (page !== lastPage) window.scrollTo(0, 0);
    lastPage = page;
  });
  window.addEventListener('scroll', hideTip, { passive: true });
  loadFont(LANG);
  renderChrome();
  render();
})();
