/*
 * 画面の文言（日本語／English／한국어／中文）
 * ── {n} などの波括弧は差し込み位置です。文言を直したいときは、この表を編集してください。
 *    count / countShort は件数の書き方です（英語は単数・複数を区別）。
 */
(function (root) {
  'use strict';

  var langs = [
    { code: 'ja', label: '日本語', html: 'ja', locale: 'ja-JP' },
    { code: 'en', label: 'English', html: 'en', locale: 'en-US' },
    { code: 'ko', label: '한국어', html: 'ko', locale: 'ko-KR' },
    { code: 'zh', label: '中文', html: 'zh-Hans', locale: 'zh-CN' }
  ];

  var strings = {
    // ════════════════════════ 日本語 ════════════════════════
    ja: {
      docTitle: '医療現場の課題マップ｜職種 × 15領域でみる文献エビデンス',
      metaDesc: '医師・看護職・薬剤師・リハ職など医療専門職が現場で感じている課題を、15の共通コンピテンシー領域に整理した文献から可視化するWebアプリ。',
      skip: '本文へ移動',
      langAria: '表示言語',
      eyebrow: 'Designing AI-Driven Medical Education ｜ Appendix F・H に基づく文献マップ',
      title: '医療現場の課題マップ',
      subtitle: 'どの職種が、どんな課題を感じているのか ― 15の共通コンピテンシー領域から',
      lead: '医師・看護職・薬剤師・リハビリ職などが臨床現場で直面している課題を、職種横断の15領域に整理した文献から可視化します。マップのマスを選ぶと、その職種・領域の課題を扱った文献（DOIリンク付き）を一覧できます。',
      tabsAria: '表示の切り替え',
      tabMap: '課題マップ', tabProf: '職種から見る', tabDomain: '領域から見る', tabRefs: '文献を探す', tabAbout: 'このアプリについて',
      themeAuto: '表示：自動', themeLight: '表示：ライト', themeDark: '表示：ダーク', themeAria: '表示テーマを切り替え',
      close: '閉じる',
      footSrcPre: '出典：Hiroshi Mihara, ',
      footSrcPost: '（Cambridge Scholars Publishing, 刊行準備中）Appendix F「A Human-in-the-Loop AI Methodology for Identifying Clinical Competencies and Needs」／Appendix H「Domains of Clinical Reasoning and Reference List」',
      footNote: '職種タグと課題カテゴリは文献タイトルと付録Hの小見出しから自動付与したものです。詳しくは「このアプリについて」をご覧ください。',
      statRefs: '件の文献（重複統合後）', statDomains: '領域', statProfs: '職種区分', statCats: '課題カテゴリ', statDoi: '件にDOIリンク',

      count: '{n}件', countShort: '{n} 件',
      domainN: '領域{id}', domainQ: '領域{id}「{name}」', domainC: '領域{id}：{name}',
      quote: '「{s}」', sep: '、', paren: '（{s}）', pathSep: ' › ',
      flagAuthorCheck: '著者表記を要確認', flagNoAuthor: '著者情報なし', flagSameTitle: '同名タイトルの別書誌あり', flagNoTitle: 'タイトル未抽出',
      flagTipSame: '付録H内に同じタイトルで著者・年が異なる書誌があります', flagTipOther: '付録Hの書誌表記に崩れがある可能性があります',
      unknownAuthor: '著者不詳', etAl: ' ほか', year: '（{y}）',
      copy: '書誌をコピー', copied: 'コピーしました',
      searchPubmed: 'PubMedで検索', searchScholar: 'Google Scholarで検索',
      details: '付録Hでの掲載箇所と書誌', coreSuffix: '（枠組み・理論）', coreBadge: '枠組み・理論',
      more: 'さらに表示（残り {n} 件）', empty: '該当する文献はありません。',
      fwLabel: '枠組み・理論の節の文献も含める',
      fwTitle: '付録Hの「Core Competency & Frameworks」など、課題ではなく枠組み・理論を扱う節の文献も数えます',

      cardsTitle: 'ひと目でわかる：職種ごとに多く報告されている課題',
      cardsLead: '各職種の文献で最も多く扱われている課題カテゴリの上位3つ（％はその職種の文献に占める割合）。カードを選ぶと詳しく見られます。',
      miniV: '{n}件・{p}%',
      heatTitleDom: '課題マップ：職種 × 15領域', heatTitleCat: '課題マップ：職種 × 課題カテゴリ',
      heatLead: 'マスの数字は、その職種の課題を扱った文献の件数です。マスを選ぶと文献一覧が開きます。行見出しで職種のページ、列見出しで領域（またはカテゴリ）のページへ移動します。',
      colsLabel: '列', colsDomain: '15の領域', colsCat: '課題カテゴリ',
      scaleLabel: '色の基準', scaleCount: '件数', scaleShare: '職種内の割合',
      profHidden: '職種', totalCol: '文献数', divider: '職種を限定しない文献／参考',
      cellAria: '{prof}、{col}：{n}件（{prof}の文献の{p}％）',
      tipShare: '{prof}の文献の{p}％', tipClick: 'クリックで文献一覧',
      legendFew: '少ない', legendMany: '多い',
      legendShareDom: '色と数字＝その職種の文献のうち、この領域に該当する割合（％）。1件の文献が複数の領域に該当することがあります。',
      legendShareCat: '色と数字＝その職種の文献のうち、このカテゴリに該当する割合（％）。1件の文献が複数のカテゴリに該当することがあります。',
      legendCount: '色＝件数（最大 {max} 件。「多職種・職種横断」の行は件数が多いため最も濃い色で頭打ち）。「·」は0件。',
      heatCaption: '職種別の課題マップ',

      dEyebrowCat: '職種 × 課題カテゴリ', dEyebrowDom: '職種 × 領域',
      dMore: '「文献を探す」で絞り込む →',
      dH3Cat: 'この組み合わせが現れる領域', dH3Dom: 'この組み合わせで多い課題カテゴリ',
      domOverview: '領域の概要：', refsNewest: '文献（新しい順）',

      profPickerAria: '職種の選択',
      sum1: '{prof}に関する文献は {n}（全{total}件中）。',
      sum2: '多く扱われている課題は、{list} です。',
      sum3: '領域別では {list} に多く分布しています。',
      sumItem: '（{n}件）', sumDomSep: '・',
      namedTitle: '付録Hで「{prof}」として整理されている節',
      namedNone: 'この職種専用の小見出しはありません。文献タイトルのキーワードから抽出しています。',
      barsCatTitle: '課題カテゴリ別の件数', barsDomTitle: '領域別の件数',
      barsToggleNote: '選ぶと下の文献を絞り込みます（もう一度選ぶと解除）', barsNote: '選ぶと下の文献を絞り込みます',
      refsHead: '文献 {c}', clearFilter: '絞り込みを解除',

      domPickerAria: '領域の選択', domEyebrow: '領域 {id} / 15',
      domStats: '文献 {n}件（うち課題・障壁の節 {m}件）。',
      domTopProfs: '文献が多い職種：{list}。', domTopCats: '主な課題カテゴリ：{list}。',
      outlineTitle: '付録Hの構成（選ぶと絞り込み）',
      domProfTitle: 'この領域の課題を扱う文献の職種', domCatTitle: '課題カテゴリ',
      domCatNote: 'カテゴリを選ぶと「文献を探す」で開きます。',
      refsWord: '文献', bySection: '（付録Hの節ごと）',

      refsLead: '付録Hの文献を、領域・職種・課題カテゴリで絞り込めます。複数語はスペース区切りで AND 検索します。',
      kwPh: 'タイトル・著者・雑誌名で検索（英語）', kwLabel: 'キーワード',
      fDomain: '領域', fProf: '職種', fCat: '課題カテゴリ',
      allDomains: 'すべての領域', allProfs: 'すべての職種', allCats: 'すべての課題カテゴリ',
      flagAll: '書誌の状態：すべて', flagCheck: '要確認の書誌のみ', flagNoid: 'DOI・PMIDなし',
      sortNew: '新しい順', sortOld: '古い順', sortAuthor: '著者名順',
      doiOnly: 'DOIのある文献のみ', bibLabel: '書誌：', sortLabel: '並び順：',
      clearAll: '条件をクリア', csv: 'CSVで保存（Excel対応）',
      csvHead: ['No', '年', '著者', 'タイトル', 'DOI', 'PMID', '領域', '職種', '課題カテゴリ', '要確認', '付録Hでの掲載箇所', '書誌（付録Hの表記）']
    },

    // ════════════════════════ English ════════════════════════
    en: {
      docTitle: 'Clinical Challenges Map | Evidence by profession × 15 domains',
      metaDesc: 'A web app that visualizes the challenges health professionals face in clinical practice, using references organized into 15 shared competency domains.',
      skip: 'Skip to content',
      langAria: 'Language',
      eyebrow: 'Designing AI-Driven Medical Education | A literature map based on Appendices F and H',
      title: 'Clinical Challenges Map',
      subtitle: 'Which professions face which challenges — across 15 shared competency domains',
      lead: 'Visualizes the challenges that physicians, nurses, pharmacists, rehabilitation and other health professionals face in clinical practice, using references organized into 15 cross-professional domains. Select a cell in the map to list the references (with DOI links) that address that profession and domain.',
      tabsAria: 'Views',
      tabMap: 'Challenge map', tabProf: 'By profession', tabDomain: 'By domain', tabRefs: 'Find references', tabAbout: 'About',
      themeAuto: 'Theme: Auto', themeLight: 'Theme: Light', themeDark: 'Theme: Dark', themeAria: 'Switch color theme',
      close: 'Close',
      footSrcPre: 'Source: Hiroshi Mihara, ',
      footSrcPost: ' (Cambridge Scholars Publishing, in preparation), Appendix F “A Human-in-the-Loop AI Methodology for Identifying Clinical Competencies and Needs” and Appendix H “Domains of Clinical Reasoning and Reference List”.',
      footNote: 'Profession tags and challenge categories are assigned automatically from reference titles and Appendix H subheadings. See “About” for details.',
      statRefs: 'references (deduplicated)', statDomains: 'domains', statProfs: 'profession groups', statCats: 'challenge categories', statDoi: 'with DOI links',

      count: { one: '{n} reference', other: '{n} references' }, countShort: { one: '{n} ref', other: '{n} refs' },
      domainN: 'Domain {id}', domainQ: 'Domain {id} “{name}”', domainC: 'Domain {id}: {name}',
      quote: '“{s}”', sep: ', ', paren: ' ({s})', pathSep: ' › ',
      flagAuthorCheck: 'Check author names', flagNoAuthor: 'No author', flagSameTitle: 'Same title, other entry', flagNoTitle: 'Title not parsed',
      flagTipSame: 'Appendix H contains another entry with the same title but different authors or year', flagTipOther: 'This entry in Appendix H may be garbled',
      unknownAuthor: 'Unknown author', etAl: ' et al.', year: ' ({y})',
      copy: 'Copy citation', copied: 'Copied',
      searchPubmed: 'Search PubMed', searchScholar: 'Search Google Scholar',
      details: 'Location in Appendix H and full citation', coreSuffix: ' (frameworks/theory)', coreBadge: 'Frameworks/theory',
      more: 'Show more ({n} remaining)', empty: 'No matching references.',
      fwLabel: 'Include framework/theory sections',
      fwTitle: 'Also count references from sections on frameworks and theory rather than challenges (e.g., “Core Competency & Frameworks” in Appendix H)',

      cardsTitle: 'At a glance: the challenges most often reported for each profession',
      cardsLead: 'The top three challenge categories in each profession’s references (% = share of that profession’s references). Select a card for details.',
      miniV: '{n} · {p}%',
      heatTitleDom: 'Challenge map: profession × 15 domains', heatTitleCat: 'Challenge map: profession × challenge category',
      heatLead: 'Each number is the count of references addressing that profession’s challenges. Select a cell to open the list of references. Row headings link to profession pages; column headings link to domain (or category) pages.',
      colsLabel: 'Columns', colsDomain: '15 domains', colsCat: 'Challenge categories',
      scaleLabel: 'Color by', scaleCount: 'Count', scaleShare: 'Share within profession',
      profHidden: 'Profession', totalCol: 'Total', divider: 'Not profession-specific / for reference',
      cellAria: '{prof}, {col}: {n} references ({p}% of {prof} references)',
      tipShare: '{p}% of {prof} references', tipClick: 'Click to list references',
      legendFew: 'Fewer', legendMany: 'More',
      legendShareDom: 'Color and number = share (%) of the profession’s references that fall in this domain. A reference may fall in more than one domain.',
      legendShareCat: 'Color and number = share (%) of the profession’s references that fall in this category. A reference may belong to more than one category.',
      legendCount: 'Color = count (max {max}; the “Interprofessional / general” row is capped at the darkest shade because its counts are much larger). “·” = 0.',
      heatCaption: 'Challenge map by profession',

      dEyebrowCat: 'Profession × challenge category', dEyebrowDom: 'Profession × domain',
      dMore: 'Refine in Find references →',
      dH3Cat: 'Domains where this combination appears', dH3Dom: 'Most common challenge categories for this combination',
      domOverview: 'About this domain: ', refsNewest: 'References (newest first)',

      profPickerAria: 'Choose a profession',
      sum1: 'This group appears in {n} (out of {total}).',
      sum2: 'The most frequently addressed challenges are {list}.',
      sum3: 'By domain, they cluster in {list}.',
      sumItem: ' ({n})', sumDomSep: ', ',
      namedTitle: 'Sections of Appendix H devoted to {prof}',
      namedNone: 'Appendix H has no subheading specific to this group; references are identified from title keywords.',
      barsCatTitle: 'References by challenge category', barsDomTitle: 'References by domain',
      barsToggleNote: 'Select to filter the references below (select again to clear)', barsNote: 'Select to filter the references below',
      refsHead: '{c}', clearFilter: 'Clear filter',

      domPickerAria: 'Choose a domain', domEyebrow: 'Domain {id} / 15',
      domStats: '{n} references ({m} in challenge/barrier sections). ',
      domTopProfs: 'Professions with the most references: {list}. ', domTopCats: 'Main challenge categories: {list}.',
      outlineTitle: 'Structure of Appendix H (select to filter)',
      domProfTitle: 'Professions in this domain’s challenge references', domCatTitle: 'Challenge categories',
      domCatNote: 'Select a category to open it in Find references.',
      refsWord: 'References', bySection: ' (by Appendix H section)',

      refsLead: 'Filter the Appendix H references by domain, profession and challenge category. Multiple words separated by spaces are combined with AND.',
      kwPh: 'Search title, author or journal', kwLabel: 'Keywords',
      fDomain: 'Domain', fProf: 'Profession', fCat: 'Challenge category',
      allDomains: 'All domains', allProfs: 'All professions', allCats: 'All challenge categories',
      flagAll: 'All entries', flagCheck: 'Flagged entries only', flagNoid: 'No DOI or PMID',
      sortNew: 'Newest first', sortOld: 'Oldest first', sortAuthor: 'By author',
      doiOnly: 'Only references with a DOI', bibLabel: 'Entries:', sortLabel: 'Sort:',
      clearAll: 'Clear all', csv: 'Save as CSV (Excel)',
      csvHead: ['No', 'Year', 'Authors', 'Title', 'DOI', 'PMID', 'Domains', 'Professions', 'Challenge categories', 'Flags', 'Location in Appendix H', 'Citation (as in Appendix H)']
    },

    // ════════════════════════ 한국어 ════════════════════════
    ko: {
      docTitle: '의료 현장의 과제 맵｜직종 × 15개 영역으로 보는 문헌 근거',
      metaDesc: '보건의료 전문직이 임상 현장에서 느끼는 과제를 15개 공통 역량 영역으로 정리한 문헌을 통해 시각화하는 웹 앱.',
      skip: '본문으로 이동',
      langAria: '표시 언어',
      eyebrow: 'Designing AI-Driven Medical Education ｜ 부록 F·H 기반 문헌 맵',
      title: '의료 현장의 과제 맵',
      subtitle: '어떤 직종이 어떤 과제를 느끼고 있는가 — 15개 공통 역량 영역에서',
      lead: '의사·간호사·약사·재활 인력 등이 임상 현장에서 직면하는 과제를, 직종을 가로지르는 15개 영역으로 정리한 문헌을 통해 시각화합니다. 맵의 칸을 선택하면 해당 직종·영역의 과제를 다룬 문헌(DOI 링크 포함)을 목록으로 볼 수 있습니다.',
      tabsAria: '보기 전환',
      tabMap: '과제 맵', tabProf: '직종별 보기', tabDomain: '영역별 보기', tabRefs: '문헌 찾기', tabAbout: '이 앱에 대하여',
      themeAuto: '테마: 자동', themeLight: '테마: 라이트', themeDark: '테마: 다크', themeAria: '표시 테마 전환',
      close: '닫기',
      footSrcPre: '출처: Hiroshi Mihara, ',
      footSrcPost: '(Cambridge Scholars Publishing, 출간 준비 중) 부록 F “A Human-in-the-Loop AI Methodology for Identifying Clinical Competencies and Needs” / 부록 H “Domains of Clinical Reasoning and Reference List”',
      footNote: '직종 태그와 과제 카테고리는 문헌 제목과 부록 H의 소제목에서 자동으로 부여한 것입니다. 자세한 내용은 ‘이 앱에 대하여’를 참조하십시오.',
      statRefs: '건의 문헌(중복 통합 후)', statDomains: '개 영역', statProfs: '개 직종 구분', statCats: '개 과제 카테고리', statDoi: '건에 DOI 링크',

      count: '{n}건', countShort: '{n}건',
      domainN: '영역 {id}', domainQ: '영역 {id} ‘{name}’', domainC: '영역 {id}: {name}',
      quote: '‘{s}’', sep: ', ', paren: '({s})', pathSep: ' › ',
      flagAuthorCheck: '저자 표기 확인 필요', flagNoAuthor: '저자 정보 없음', flagSameTitle: '같은 제목의 다른 서지 있음', flagNoTitle: '제목 미추출',
      flagTipSame: '부록 H에 제목은 같고 저자·연도가 다른 서지가 있습니다', flagTipOther: '부록 H의 서지 표기가 깨졌을 가능성이 있습니다',
      unknownAuthor: '저자 미상', etAl: ' 외', year: ' ({y})',
      copy: '서지 복사', copied: '복사했습니다',
      searchPubmed: 'PubMed에서 검색', searchScholar: 'Google Scholar에서 검색',
      details: '부록 H 수록 위치와 서지', coreSuffix: ' (프레임워크·이론)', coreBadge: '프레임워크·이론',
      more: '더 보기(남은 {n}건)', empty: '해당하는 문헌이 없습니다.',
      fwLabel: '프레임워크·이론 절의 문헌도 포함',
      fwTitle: '부록 H의 ‘Core Competency & Frameworks’ 등 과제가 아니라 프레임워크·이론을 다루는 절의 문헌도 셉니다',

      cardsTitle: '한눈에 보기: 직종별로 많이 보고된 과제',
      cardsLead: '각 직종의 문헌에서 가장 많이 다뤄진 과제 카테고리 상위 3개(%는 해당 직종 문헌에서 차지하는 비율). 카드를 선택하면 자세히 볼 수 있습니다.',
      miniV: '{n}건·{p}%',
      heatTitleDom: '과제 맵: 직종 × 15개 영역', heatTitleCat: '과제 맵: 직종 × 과제 카테고리',
      heatLead: '칸의 숫자는 해당 직종의 과제를 다룬 문헌 수입니다. 칸을 선택하면 문헌 목록이 열립니다. 행 제목은 직종 페이지로, 열 제목은 영역(또는 카테고리) 페이지로 이동합니다.',
      colsLabel: '열', colsDomain: '15개 영역', colsCat: '과제 카테고리',
      scaleLabel: '색상 기준', scaleCount: '건수', scaleShare: '직종 내 비율',
      profHidden: '직종', totalCol: '문헌 수', divider: '직종을 특정하지 않은 문헌 / 참고',
      cellAria: '{prof}, {col}: {n}건({prof} 문헌의 {p}%)',
      tipShare: '{prof} 문헌의 {p}%', tipClick: '클릭하면 문헌 목록',
      legendFew: '적음', legendMany: '많음',
      legendShareDom: '색과 숫자 = 해당 직종 문헌 중 이 영역에 해당하는 비율(%). 한 문헌이 여러 영역에 해당할 수 있습니다.',
      legendShareCat: '색과 숫자 = 해당 직종 문헌 중 이 카테고리에 해당하는 비율(%). 한 문헌이 여러 카테고리에 해당할 수 있습니다.',
      legendCount: '색 = 건수(최대 {max}건. ‘다직종·직종 공통’ 행은 건수가 많아 가장 진한 색으로 상한 처리). ‘·’는 0건.',
      heatCaption: '직종별 과제 맵',

      dEyebrowCat: '직종 × 과제 카테고리', dEyebrowDom: '직종 × 영역',
      dMore: '‘문헌 찾기’에서 좁히기 →',
      dH3Cat: '이 조합이 나타나는 영역', dH3Dom: '이 조합에서 많은 과제 카테고리',
      domOverview: '영역 개요: ', refsNewest: '문헌(최신순)',

      profPickerAria: '직종 선택',
      sum1: '{prof} 관련 문헌은 {n}입니다(전체 {total}건 중).',
      sum2: '가장 많이 다뤄진 과제는 {list}입니다.',
      sum3: '영역별로는 {list}에 많이 분포합니다.',
      sumItem: '({n}건)', sumDomSep: ', ',
      namedTitle: '부록 H에서 ‘{prof}’ 항목으로 정리된 절',
      namedNone: '이 직종 전용 소제목은 없습니다. 문헌 제목의 키워드로 추출했습니다.',
      barsCatTitle: '과제 카테고리별 건수', barsDomTitle: '영역별 건수',
      barsToggleNote: '선택하면 아래 문헌을 좁힙니다(다시 선택하면 해제)', barsNote: '선택하면 아래 문헌을 좁힙니다',
      refsHead: '문헌 {c}', clearFilter: '필터 해제',

      domPickerAria: '영역 선택', domEyebrow: '영역 {id} / 15',
      domStats: '문헌 {n}건(그중 과제·장벽 절 {m}건). ',
      domTopProfs: '문헌이 많은 직종: {list}. ', domTopCats: '주요 과제 카테고리: {list}.',
      outlineTitle: '부록 H의 구성(선택하면 필터)',
      domProfTitle: '이 영역의 과제를 다룬 문헌의 직종', domCatTitle: '과제 카테고리',
      domCatNote: '카테고리를 선택하면 ‘문헌 찾기’에서 열립니다.',
      refsWord: '문헌', bySection: '(부록 H 절별)',

      refsLead: '부록 H의 문헌을 영역·직종·과제 카테고리로 좁힐 수 있습니다. 여러 단어는 공백으로 구분하여 AND 검색합니다.',
      kwPh: '제목·저자·학술지명으로 검색(영어)', kwLabel: '키워드',
      fDomain: '영역', fProf: '직종', fCat: '과제 카테고리',
      allDomains: '모든 영역', allProfs: '모든 직종', allCats: '모든 과제 카테고리',
      flagAll: '서지 상태: 전체', flagCheck: '확인 필요 서지만', flagNoid: 'DOI·PMID 없음',
      sortNew: '최신순', sortOld: '오래된 순', sortAuthor: '저자명순',
      doiOnly: 'DOI가 있는 문헌만', bibLabel: '서지:', sortLabel: '정렬:',
      clearAll: '조건 초기화', csv: 'CSV로 저장(Excel 지원)',
      csvHead: ['No', '연도', '저자', '제목', 'DOI', 'PMID', '영역', '직종', '과제 카테고리', '확인 필요', '부록 H 수록 위치', '서지(부록 H 표기)']
    },

    // ════════════════════════ 中文（简体） ════════════════════════
    zh: {
      docTitle: '医疗一线问题地图｜按职种 × 15个领域查看文献证据',
      metaDesc: '以按15个共享能力领域整理的文献为依据，可视化医疗专业人员在临床一线所面临问题的网页应用。',
      skip: '跳到正文',
      langAria: '显示语言',
      eyebrow: 'Designing AI-Driven Medical Education ｜ 基于附录F与附录H的文献地图',
      title: '医疗一线问题地图',
      subtitle: '哪些职种面临哪些问题——基于15个共享能力领域',
      lead: '以按15个跨职种领域整理的文献为依据，可视化医生、护士、药师、康复人员等在临床一线面临的问题。点击地图中的方格，即可列出涉及该职种与领域问题的文献（附DOI链接）。',
      tabsAria: '视图切换',
      tabMap: '问题地图', tabProf: '按职种查看', tabDomain: '按领域查看', tabRefs: '查找文献', tabAbout: '关于本应用',
      themeAuto: '主题：自动', themeLight: '主题：浅色', themeDark: '主题：深色', themeAria: '切换显示主题',
      close: '关闭',
      footSrcPre: '来源：Hiroshi Mihara, ',
      footSrcPost: '（Cambridge Scholars Publishing，即将出版）附录F“A Human-in-the-Loop AI Methodology for Identifying Clinical Competencies and Needs”／附录H“Domains of Clinical Reasoning and Reference List”',
      footNote: '职种标签与问题类别根据文献标题及附录H的小标题自动标注。详情请参阅“关于本应用”。',
      statRefs: '篇文献（合并重复后）', statDomains: '个领域', statProfs: '个职种类别', statCats: '个问题类别', statDoi: '篇附DOI链接',

      count: '{n} 篇', countShort: '{n} 篇',
      domainN: '领域{id}', domainQ: '领域{id}“{name}”', domainC: '领域{id}：{name}',
      quote: '“{s}”', sep: '、', paren: '（{s}）', pathSep: ' › ',
      flagAuthorCheck: '需核对作者', flagNoAuthor: '无作者信息', flagSameTitle: '存在同名异录', flagNoTitle: '未能提取标题',
      flagTipSame: '附录H中存在标题相同但作者或年份不同的文献', flagTipOther: '附录H中的书目信息可能有误',
      unknownAuthor: '作者不详', etAl: ' 等', year: '（{y}）',
      copy: '复制书目', copied: '已复制',
      searchPubmed: '在PubMed中检索', searchScholar: '在Google Scholar中检索',
      details: '在附录H中的位置与书目', coreSuffix: '（框架与理论）', coreBadge: '框架与理论',
      more: '显示更多（还有 {n} 篇）', empty: '没有符合条件的文献。',
      fwLabel: '包含框架与理论小节的文献',
      fwTitle: '同时统计附录H中“Core Competency & Frameworks”等论述框架与理论（而非问题）的小节中的文献',

      cardsTitle: '一目了然：各职种最常被报告的问题',
      cardsLead: '各职种文献中最常涉及的前三个问题类别（%为占该职种文献的比例）。点击卡片可查看详情。',
      miniV: '{n}篇·{p}%',
      heatTitleDom: '问题地图：职种 × 15个领域', heatTitleCat: '问题地图：职种 × 问题类别',
      heatLead: '方格中的数字为涉及该职种问题的文献篇数。点击方格即可打开文献列表。点击行标题进入职种页面，点击列标题进入领域（或类别）页面。',
      colsLabel: '列', colsDomain: '15个领域', colsCat: '问题类别',
      scaleLabel: '着色依据', scaleCount: '篇数', scaleShare: '职种内占比',
      profHidden: '职种', totalCol: '文献数', divider: '未限定职种的文献／参考',
      cellAria: '{prof}，{col}：{n} 篇（占{prof}文献的{p}%）',
      tipShare: '占{prof}文献的{p}%', tipClick: '点击查看文献列表',
      legendFew: '少', legendMany: '多',
      legendShareDom: '颜色与数字＝该职种文献中属于此领域的比例（%）。一篇文献可能属于多个领域。',
      legendShareCat: '颜色与数字＝该职种文献中属于此类别的比例（%）。一篇文献可能属于多个类别。',
      legendCount: '颜色＝篇数（最多 {max} 篇。“多专业／跨专业通用”一行篇数较多，统一以最深色显示）。“·”表示0篇。',
      heatCaption: '按职种的问题地图',

      dEyebrowCat: '职种 × 问题类别', dEyebrowDom: '职种 × 领域',
      dMore: '在“查找文献”中筛选 →',
      dH3Cat: '该组合出现的领域', dH3Dom: '该组合中常见的问题类别',
      domOverview: '领域概要：', refsNewest: '文献（由新到旧）',

      profPickerAria: '选择职种',
      sum1: '与{prof}相关的文献共 {n}（全部 {total} 篇）。',
      sum2: '最常涉及的问题是{list}。',
      sum3: '按领域看，主要分布在{list}。',
      sumItem: '（{n}篇）', sumDomSep: '、',
      namedTitle: '附录H中按“{prof}”整理的小节',
      namedNone: '附录H中没有该职种专属的小标题，文献系根据标题关键词提取。',
      barsCatTitle: '按问题类别的篇数', barsDomTitle: '按领域的篇数',
      barsToggleNote: '点击可筛选下方文献（再次点击取消）', barsNote: '点击可筛选下方文献',
      refsHead: '文献 {c}', clearFilter: '清除筛选',

      domPickerAria: '选择领域', domEyebrow: '领域 {id} / 15',
      domStats: '文献 {n} 篇（其中问题与障碍小节 {m} 篇）。',
      domTopProfs: '文献较多的职种：{list}。', domTopCats: '主要问题类别：{list}。',
      outlineTitle: '附录H的结构（点击可筛选）',
      domProfTitle: '涉及本领域问题的文献的职种', domCatTitle: '问题类别',
      domCatNote: '点击类别将在“查找文献”中打开。',
      refsWord: '文献', bySection: '（按附录H小节）',

      refsLead: '可按领域、职种和问题类别筛选附录H中的文献。多个关键词以空格分隔，进行AND检索。',
      kwPh: '按标题、作者或期刊名检索（英文）', kwLabel: '关键词',
      fDomain: '领域', fProf: '职种', fCat: '问题类别',
      allDomains: '全部领域', allProfs: '全部职种', allCats: '全部问题类别',
      flagAll: '书目状态：全部', flagCheck: '仅显示需核对的文献', flagNoid: '无DOI或PMID',
      sortNew: '由新到旧', sortOld: '由旧到新', sortAuthor: '按作者',
      doiOnly: '仅显示有DOI的文献', bibLabel: '书目：', sortLabel: '排序：',
      clearAll: '清除条件', csv: '保存为CSV（支持Excel）',
      csvHead: ['No', '年份', '作者', '标题', 'DOI', 'PMID', '领域', '职种', '问题类别', '需核对', '在附录H中的位置', '书目（附录H原文）']
    }
  };

  // ─────────────────────────────────────────────
  // 「このアプリについて」本文
  // ─────────────────────────────────────────────
  var BOOK = 'Designing AI-Driven Medical Education';
  var TITLE_F = 'A Human-in-the-Loop AI Methodology for Identifying Clinical Competencies and Needs';
  var TITLE_H = 'Domains of Clinical Reasoning and Reference List';
  var about = {
    ja: {
      title: 'このアプリについて',
      intro: '医療・看護・薬剤・リハビリテーションなどの専門職が、臨床現場でどのような課題を感じているのかを、文献に基づいて「職種 × 領域」の形で見渡せるようにしたWebアプリです。多職種連携教育（IPE）の教材づくり、シナリオ作成、研修ニーズの把握などで、根拠となる文献へすばやくたどることを目的としています。',
      srcTitle: 'データの出典',
      srcText: '書籍『' + BOOK + '』（Hiroshi Mihara, Cambridge Scholars Publishing, 刊行準備中）の付録2つに基づきます。',
      appF: '「' + TITLE_F + '」― 15領域を導いた方法と結果',
      appH: '「' + TITLE_H + '」― 15領域ごとの文献リスト（本アプリには {lines} 行を収録し、領域をまたぐ重複を統合して {n} 件として表示）',
      methodTitle: '15領域はどのように導かれたか（付録Fの要約）',
      methodLead: '職種ごとに別々に作られてきたコンピテンシー枠組みと、多職種の協働を前提とする実際の臨床現場との間にはギャップがあります。共有されるコンピテンシーと現場レベルの課題を短期間で網羅的に対応づけるため、生成AIと人間が協働する「Human-in-the-Loop（HITL）」型のエビデンス統合法が開発・検証されました。',
      steps: [
        'PubMedを用いた多段階のシステマティックレビューを実施。大規模言語モデル（ChatGPT-4o/o3、Gemini 2.5 Pro／Deep Research）が検索式の起案、抄録のトリアージ、予備的なデータ抽出を担当（AI支援スクリーニングの感度90%、正確度89%）。',
        '臨床教育者がAIの出力をすべて検証し、採否基準の精緻化と判定の不一致の解消を行って、方法論的な厳密さと文脈上の正確さを担保。',
        '400件を超える論文のレビューから、医師・看護職・関連職種に共通する15の中核コンピテンシー領域を同定し、各領域で職種横断的な現場の困難（ヒエラルキーによるコミュニケーションの断絶、施設間での記録の分断、深刻な人員不足による対話の損なわれ など）を抽出。',
        '抽出した現場課題は構造化プロンプトに変換され、生成AIによる教材用の臨床マイクロビデオ（CineMed-AI、第2章）の制作に用いられた。医療系学生の多職種連携ワークショップでは、AI生成動画と教員主導のデブリーフィングを組み合わせた実施後に、C-JASSIC（臨床学生版）で測定した多職種連携コンピテンシーの自己評価の有意な向上（p<0.01）が認められている。'
      ],
      tableHead: ['#', '領域', '文献数'],
      classTitle: 'このアプリでの分類方法',
      classRows: [
        ['領域・節', '付録Hの見出しをそのまま使用。「Core Competency & Frameworks」など枠組み・理論を扱う節は、既定では課題マップの件数から除外し、切り替えで含められます。韓国語・中国語の見出しは本アプリ用に訳したものです。'],
        ['職種', '文献タイトルへのキーワード照合（例：nurse → 看護職、pharmacist → 薬剤師）と、付録Hの職種別小見出し（例：Nursing Professionals）から付与。どの職種も判定できない文献は「多職種・職種横断」に入ります。1件の文献に複数の職種が付くことがあります。'],
        ['課題カテゴリ', '文献タイトルと、課題を表す小見出し（例：Moral Distress & Ethical Climate）へのキーワード照合で、{ncat}のカテゴリを付与（重複あり）。']
      ],
      callout: '分類はタイトルと見出しに基づく自動付与で、本文の対象者や結果を確認したものではありません。件数は「その組み合わせを扱った文献の数」であり、課題の深刻さや頻度そのものを示す指標ではありません。教育・研究で引用する際は、リンク先の原著をご確認ください。',
      rules: ['分類規則は ', 'assets/js/taxonomy.js', ' のキーワード（正規表現）で定義しており、編集すると即座に反映されます。画面の文言は ', 'assets/js/i18n.js', ' で4言語分を管理しています。'],
      flagTitle: '書誌の「要確認」表示について',
      flagLead: '付録Hの表記を原則そのまま掲載しています（引用符の崩れなど、機械的な読み取りに必要な最小限の整形のみ実施）。表記の点検に役立つよう、次の文献には ⚠ 印を付けています。「文献を探す」の「要確認の書誌のみ」で一覧できます。',
      flagItems: [
        '著者名の表記が崩れている可能性がある書誌：{n}件（例：イニシャルが1文字ずつ区切られている、著者名が判読できない など）',
        '同じタイトルで著者・年が異なる書誌：{n}件（同一論文の重複記載、または書誌情報の取り違えの可能性）',
        'DOI・PMIDのない書誌：{n}件（PubMed／Google Scholarの検索リンクを表示）'
      ],
      updateTitle: 'データの更新',
      update: ['文献の追加・修正は ', 'assets/js/appendix-h.js', ' を編集して保存するだけで反映されます（ビルド作業は不要）。書式はファイル冒頭のコメントを参照してください。'],
      citeTitle: '引用'
    },
    en: {
      title: 'About this app',
      intro: 'This web app lets you survey, by profession and domain, the challenges that physicians, nurses, pharmacists, rehabilitation and other health professionals experience in clinical practice, based on the literature. It is designed to help you quickly trace the supporting evidence when developing interprofessional education (IPE) materials, writing scenarios or identifying training needs.',
      srcTitle: 'Data source',
      srcText: 'Based on two appendices of the book ' + BOOK + ' (Hiroshi Mihara, Cambridge Scholars Publishing, in preparation).',
      appF: '“' + TITLE_F + '” — how the 15 domains were derived, and the results',
      appH: '“' + TITLE_H + '” — reference lists for each of the 15 domains (this app contains {lines} entries; duplicates across domains are merged and shown as {n} references)',
      methodTitle: 'How the 15 domains were derived (summary of Appendix F)',
      methodLead: 'Competency frameworks have typically been developed separately for each profession, whereas real clinical practice depends on interprofessional collaboration. To map shared competencies and field-level challenges quickly and comprehensively, a human-in-the-loop (HITL) evidence-synthesis method combining generative AI with human expertise was developed and validated.',
      steps: [
        'A multiphase systematic review was conducted using PubMed. Large language models (ChatGPT-4o/o3, Gemini 2.5 Pro / Deep Research) drafted search queries, triaged abstracts and extracted preliminary data (AI-assisted screening: 90% sensitivity, 89% accuracy).',
        'Clinical educators validated all AI outputs, refining inclusion criteria and resolving discrepancies to ensure methodological rigor and contextual accuracy.',
        'From a review of more than 400 articles, 15 core competency domains shared across medical, nursing and allied health professions were identified, together with cross-cutting workplace difficulties in each domain (e.g., communication breakdowns due to hierarchy, fragmented documentation across institutions, and compromised dialogue due to severe workforce constraints).',
        'The extracted challenges were translated into structured prompts to produce curriculum-ready clinical micro-videos with generative AI (CineMed-AI, Chapter 2). In an interprofessional workshop for healthcare students, combining these AI-generated videos with faculty-led debriefing was associated with a significant improvement (p < 0.01) in self-assessed interprofessional competence measured by the C-JASSIC (clinical student version).'
      ],
      tableHead: ['#', 'Domain', 'References'],
      classTitle: 'How references are classified',
      classRows: [
        ['Domains & sections', 'The headings of Appendix H are used as they are. Sections on frameworks and theory (e.g., “Core Competency & Frameworks”) are excluded from the counts on the challenge map by default and can be included with a toggle. Japanese, Korean and Chinese headings were translated for this app.'],
        ['Professions', 'Assigned by keyword matching on reference titles (e.g., nurse → Nurses, pharmacist → Pharmacists) and from profession-specific subheadings in Appendix H (e.g., Nursing Professionals). References whose profession cannot be identified are placed under “Interprofessional / general”. A reference may have more than one profession.'],
        ['Challenge categories', 'Assigned by keyword matching on reference titles and on challenge-related subheadings (e.g., Moral Distress & Ethical Climate) into {ncat} categories (a reference may belong to several).']
      ],
      callout: 'Classification is automatic and based on titles and headings; the study populations and findings in the full texts have not been checked. Counts show how many references address each combination—they do not measure how serious or frequent a challenge is. Please consult the original articles before citing them in teaching or research.',
      rules: ['Classification rules are defined as keywords (regular expressions) in ', 'assets/js/taxonomy.js', '; edits take effect immediately. Interface text for all four languages is kept in ', 'assets/js/i18n.js', '.'],
      flagTitle: 'About the ⚠ markers on references',
      flagLead: 'References are shown as they appear in Appendix H (with only the minimum clean-up needed for machine reading, such as fixing broken quotation marks). To help with proofreading, the following references are marked with ⚠. You can list them with “Flagged entries only” on the Find references page.',
      flagItems: [
        'Author names that may be garbled: {n} (e.g., initials separated letter by letter, unreadable author names)',
        'Same title with different authors or year: {n} (possible duplicate entries or mixed-up bibliographic data)',
        'No DOI or PMID: {n} (PubMed / Google Scholar search links are shown instead)'
      ],
      updateTitle: 'Updating the data',
      update: ['To add or correct references, simply edit and save ', 'assets/js/appendix-h.js', ' (no build step needed). See the comment at the top of the file for the format.'],
      citeTitle: 'How to cite'
    },
    ko: {
      title: '이 앱에 대하여',
      intro: '의사·간호사·약사·재활 인력 등 보건의료 전문직이 임상 현장에서 어떤 과제를 느끼고 있는지를, 문헌에 근거하여 ‘직종 × 영역’의 형태로 한눈에 볼 수 있도록 만든 웹 앱입니다. 전문직 간 교육(IPE) 교재 제작, 시나리오 작성, 교육 수요 파악 등에서 근거 문헌을 빠르게 찾아가는 것을 목적으로 합니다.',
      srcTitle: '데이터 출처',
      srcText: '도서 『' + BOOK + '』(Hiroshi Mihara, Cambridge Scholars Publishing, 출간 준비 중)의 부록 두 가지를 바탕으로 합니다.',
      appF: '“' + TITLE_F + '” — 15개 영역을 도출한 방법과 결과',
      appH: '“' + TITLE_H + '” — 15개 영역별 문헌 목록(이 앱에는 {lines}행을 수록하고, 영역 간 중복을 통합하여 {n}건으로 표시)',
      methodTitle: '15개 영역은 어떻게 도출되었나(부록 F 요약)',
      methodLead: '직종별로 따로 만들어져 온 역량 프레임워크와, 다직종 협업을 전제로 하는 실제 임상 현장 사이에는 간극이 있습니다. 공유되는 역량과 현장 수준의 과제를 단기간에 포괄적으로 대응시키기 위해, 생성형 AI와 사람이 협업하는 ‘휴먼 인 더 루프(HITL)’ 방식의 근거 통합법이 개발·검증되었습니다.',
      steps: [
        'PubMed를 이용한 다단계 체계적 문헌고찰을 수행. 대규모 언어 모델(ChatGPT-4o/o3, Gemini 2.5 Pro/Deep Research)이 검색식 초안 작성, 초록 선별, 예비 자료 추출을 담당(AI 지원 선별의 민감도 90%, 정확도 89%).',
        '임상 교육자가 AI의 출력을 모두 검증하고, 선정 기준을 정교화하며 판정 불일치를 해소하여 방법론적 엄밀성과 맥락상의 정확성을 확보.',
        '400편이 넘는 논문을 검토하여 의사·간호직·보건의료 관련 직종에 공통되는 15개 핵심 역량 영역을 규명하고, 각 영역에서 직종을 가로지르는 현장의 어려움(위계로 인한 의사소통 단절, 기관 간 기록의 분절, 심각한 인력 부족으로 인한 대화의 훼손 등)을 추출.',
        '추출된 현장 과제는 구조화된 프롬프트로 변환되어, 생성형 AI를 이용한 교육용 임상 마이크로 비디오(CineMed-AI, 제2장) 제작에 활용됨. 보건의료계열 학생 대상 전문직 간 협력 워크숍에서는 AI 생성 영상과 교수 주도 디브리핑을 결합한 실시 후, C-JASSIC(임상 학생판)으로 측정한 전문직 간 협력 역량 자기평가의 유의한 향상(p<0.01)이 확인됨.'
      ],
      tableHead: ['#', '영역', '문헌 수'],
      classTitle: '이 앱의 분류 방법',
      classRows: [
        ['영역·절', '부록 H의 제목을 그대로 사용. ‘Core Competency & Frameworks’ 등 프레임워크·이론을 다루는 절은 기본적으로 과제 맵의 건수에서 제외하며, 전환하여 포함할 수 있습니다. 한국어·중국어 제목은 이 앱을 위해 번역한 것입니다.'],
        ['직종', '문헌 제목에 대한 키워드 대조(예: nurse → 간호직, pharmacist → 약사)와 부록 H의 직종별 소제목(예: Nursing Professionals)으로 부여. 어느 직종도 판별할 수 없는 문헌은 ‘다직종·직종 공통’에 포함됩니다. 한 문헌에 여러 직종이 부여될 수 있습니다.'],
        ['과제 카테고리', '문헌 제목과 과제를 나타내는 소제목(예: Moral Distress & Ethical Climate)에 대한 키워드 대조로 {ncat}개 카테고리를 부여(중복 가능).']
      ],
      callout: '분류는 제목과 소제목에 근거한 자동 부여이며, 본문의 대상자나 결과를 확인한 것이 아닙니다. 건수는 ‘해당 조합을 다룬 문헌의 수’이며, 과제의 심각성이나 빈도 자체를 나타내는 지표가 아닙니다. 교육·연구에 인용할 때는 링크된 원문을 확인하십시오.',
      rules: ['분류 규칙은 ', 'assets/js/taxonomy.js', '의 키워드(정규표현식)로 정의되어 있으며, 편집하면 즉시 반영됩니다. 화면 문구는 ', 'assets/js/i18n.js', '에서 4개 언어를 관리합니다.'],
      flagTitle: '서지의 ⚠ 표시에 대하여',
      flagLead: '부록 H의 표기를 원칙적으로 그대로 게재하였습니다(따옴표 깨짐 등 기계적 판독에 필요한 최소한의 정리만 실시). 표기 점검에 도움이 되도록 다음 문헌에는 ⚠ 표시를 붙였습니다. ‘문헌 찾기’의 ‘확인 필요 서지만’으로 목록을 볼 수 있습니다.',
      flagItems: [
        '저자명 표기가 깨졌을 가능성이 있는 서지: {n}건(예: 이니셜이 한 글자씩 구분됨, 저자명을 판독할 수 없음 등)',
        '같은 제목에 저자·연도가 다른 서지: {n}건(동일 논문의 중복 기재 또는 서지 정보 혼동 가능성)',
        'DOI·PMID가 없는 서지: {n}건(PubMed/Google Scholar 검색 링크를 표시)'
      ],
      updateTitle: '데이터 업데이트',
      update: ['문헌의 추가·수정은 ', 'assets/js/appendix-h.js', '를 편집하여 저장하기만 하면 반영됩니다(빌드 작업 불필요). 형식은 파일 첫머리의 주석을 참조하십시오.'],
      citeTitle: '인용'
    },
    zh: {
      title: '关于本应用',
      intro: '本网页应用以文献为依据，以“职种 × 领域”的形式，帮助您纵览医生、护士、药师、康复人员等医疗专业人员在临床一线所面临的问题。旨在为制作跨专业教育（IPE）教材、编写情景案例、把握培训需求等工作快速找到相应的文献依据。',
      srcTitle: '数据来源',
      srcText: '基于《' + BOOK + '》（Hiroshi Mihara，Cambridge Scholars Publishing，即将出版）一书的两个附录。',
      appF: '“' + TITLE_F + '”——导出15个领域的方法与结果',
      appH: '“' + TITLE_H + '”——15个领域各自的文献列表（本应用收录 {lines} 条，合并跨领域重复后显示为 {n} 篇）',
      methodTitle: '15个领域是如何导出的（附录F摘要）',
      methodLead: '能力框架通常按职种分别制定，而实际临床工作却以跨专业协作为前提，两者之间存在差距。为在短时间内全面对应共享能力与一线问题，开发并验证了一种生成式AI与人协作的“人在回路（HITL）”证据综合方法。',
      steps: [
        '利用PubMed开展多阶段系统综述。大语言模型（ChatGPT-4o/o3、Gemini 2.5 Pro／Deep Research）负责起草检索式、筛选摘要和初步提取数据（AI辅助筛选的灵敏度90%、准确率89%）。',
        '临床教育者对AI的全部输出进行核验，完善纳入标准并解决判定分歧，以确保方法学的严谨性和语境上的准确性。',
        '通过对400余篇论文的综述，确定了医生、护理人员及相关职种共享的15个核心能力领域，并提取了各领域中跨职种的一线困难（如等级制度导致的沟通中断、机构间记录分散、严重人手不足导致对话受损等）。',
        '提取出的一线问题被转化为结构化提示词，用于借助生成式AI制作教学用临床微视频（CineMed-AI，第2章）。在面向医学相关专业学生的跨专业合作工作坊中，结合AI生成视频与教师主导的复盘后，以C-JASSIC（临床学生版）测得的跨专业合作能力自评有显著提升（p<0.01）。'
      ],
      tableHead: ['#', '领域', '文献数'],
      classTitle: '本应用的分类方法',
      classRows: [
        ['领域与小节', '直接沿用附录H的标题。“Core Competency & Frameworks”等论述框架与理论的小节，默认不计入问题地图的篇数，可通过切换开关纳入。韩文与中文标题为本应用翻译。'],
        ['职种', '根据文献标题的关键词匹配（如 nurse → 护理人员、pharmacist → 药师）以及附录H中按职种设立的小标题（如 Nursing Professionals）进行标注。无法判定职种的文献归入“多专业／跨专业通用”。一篇文献可能对应多个职种。'],
        ['问题类别', '根据文献标题及表示问题的小标题（如 Moral Distress & Ethical Climate）的关键词匹配，标注为 {ncat} 个类别（可重复）。']
      ],
      callout: '分类基于标题和小标题自动标注，并未核对正文中的研究对象或结果。篇数表示“涉及该组合的文献数量”，并非衡量问题严重程度或发生频率的指标。用于教学或研究引用时，请查阅链接的原文。',
      rules: ['分类规则以关键词（正则表达式）定义在 ', 'assets/js/taxonomy.js', ' 中，编辑后立即生效。界面文字的四种语言版本统一在 ', 'assets/js/i18n.js', ' 中管理。'],
      flagTitle: '关于文献的 ⚠ 标记',
      flagLead: '原则上按附录H的原样刊载（仅进行机器读取所需的最低限度整理，如修复错乱的引号）。为便于校对，以下文献标有 ⚠ 标记。可在“查找文献”中选择“仅显示需核对的文献”进行查看。',
      flagItems: [
        '作者姓名可能有误的文献：{n} 篇（如首字母被逐个拆分、作者姓名无法辨认等）',
        '标题相同但作者或年份不同的文献：{n} 篇（可能为同一论文重复收录或书目信息混淆）',
        '无DOI或PMID的文献：{n} 篇（改为显示PubMed／Google Scholar检索链接）'
      ],
      updateTitle: '数据更新',
      update: ['添加或修改文献时，只需编辑并保存 ', 'assets/js/appendix-h.js', ' 即可生效（无需构建）。格式请参阅文件开头的注释。'],
      citeTitle: '引用格式'
    }
  };

  // 言語ごとのWebフォント（Google Fonts）
  var fonts = {
    ja: 'family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@600;700',
    en: 'family=Noto+Sans:wght@400;500;700&family=Noto+Serif:wght@600;700',
    ko: 'family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@600;700',
    zh: 'family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@600;700'
  };

  var i18n = { langs: langs, strings: strings, about: about, fonts: fonts };
  if (typeof module !== 'undefined' && module.exports) module.exports = i18n;
  else root.I18N = i18n;
})(typeof window !== 'undefined' ? window : globalThis);
