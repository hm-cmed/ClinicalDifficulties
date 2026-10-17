/*
 * 分類の定義（職種・課題カテゴリ・15領域の説明）— 日本語／English／한국어／中文
 * ── 職種タグと課題カテゴリは、文献タイトル（＋付録Hの小見出し）へのキーワード照合で自動付与します。
 *    規則を変えたいときは、各項目の pattern（正規表現）を編集してください。
 *    名称は name / short / note の { ja, en, ko, zh } を編集します。
 */
(function (root) {
  'use strict';

  // ─────────────────────────────────────────────
  // 職種（行）
  // ─────────────────────────────────────────────
  var professions = [
    { id: 'phys',
      name: { ja: '医師', en: 'Physicians', ko: '의사', zh: '医生' },
      pattern: /physician|\bdoctors?\b|doctor-patient|doctor's|\bgps?'?\b|general practitioner|family physician|resident|surgeon|medical practitioner|psychiatrist|medical team|anesthesiologist|anaesthetist/i },
    { id: 'nurse',
      name: { ja: '看護職', en: 'Nurses & midwives', ko: '간호직', zh: '护理人员' },
      note: { ja: '看護師・助産師・NPを含む', en: 'Includes nurses, midwives and nurse practitioners', ko: '간호사·조산사·전문간호사 포함', zh: '包括护士、助产士和执业护士' },
      pattern: /\bnurs(?:e|es)\b|nurses'|nurse's|nursing(?! homes?)|midwi|\brns'?\b/i },
    { id: 'pharm',
      name: { ja: '薬剤師', en: 'Pharmacists', ko: '약사', zh: '药师' },
      pattern: /pharmacist|pharmacy|pharmacies|pharmaceutical care/i },
    { id: 'allied',
      name: { ja: 'リハ・医療技術職', en: 'Allied health', ko: '재활·보건의료기술직', zh: '康复与医技人员' },
      note: { ja: 'PT・OT・ST・臨床検査など', en: 'Physio-, occupational and speech therapy, laboratory, etc.', ko: '물리치료·작업치료·언어치료·임상병리 등', zh: '物理治疗、作业治疗、言语治疗、检验等' },
      pattern: /physiotherap|physical therap|occupational therap|speech-language|allied health|rehabilitation|laborator|radiograph|dietit|technician|genetic counsel/i },
    { id: 'ems',
      name: { ja: '救急隊・病院前救護', en: 'Paramedics / EMS', ko: '구급대원·병원 전 단계', zh: '急救人员（院前）' },
      pattern: /paramedic|ambulance|pre-?hospital|emergency medical services|emergency medical personnel/i },
    { id: 'psych',
      name: { ja: '心理・精神保健職', en: 'Mental health professionals', ko: '심리·정신건강 전문가', zh: '心理与精神卫生人员' },
      pattern: /psychotherap|psychologists?\b|mental health (?:therapist|team|nurs|professional|care|healthcare)|mental healthcare|telemental|telepsychiatr|counsell?or|psychiatric interview/i },
    { id: 'sw',
      name: { ja: 'ソーシャルワーカー', en: 'Social workers', ko: '사회복지사', zh: '社会工作者' },
      pattern: /social work/i },
    { id: 'chw',
      name: { ja: '地域保健・公衆衛生職', en: 'Community & public health workers', ko: '지역·공중보건 인력', zh: '社区与公共卫生人员' },
      pattern: /community health worker|public health (?:professional|workforce|nurs|practitioner)|field epidemiolog|epidemiology workforce/i },
    { id: 'student',
      name: { ja: '学生・研修医・新人', en: 'Students & trainees', ko: '학생·수련의·신규 인력', zh: '学生、住院医师与新人' },
      pattern: /student|resident|trainee|junior doctor|postgraduate|newly (?:qualified|graduated)|novice|undergraduate|clerkship|graduate medical education|early-career/i },
    { id: 'edu',
      name: { ja: '教育者・指導者', en: 'Educators & preceptors', ko: '교육자·지도자', zh: '教育者与带教老师' },
      pattern: /educator|preceptor|faculty|clinical instructor|clinical teachers?|mentor|supervisor|supervising|program directors?|residency directors|coach/i },
    { id: 'leader',
      name: { ja: '管理者・リーダー', en: 'Managers & leaders', ko: '관리자·리더', zh: '管理者与领导者' },
      pattern: /leader|manager|administrator|governance/i },
    { id: 'multi',
      name: { ja: '多職種・職種横断', en: 'Interprofessional / general', ko: '다직종·직종 공통', zh: '多专业／跨专业通用' },
      note: {
        ja: '「医療者」「多職種チーム」など職種を限定しない文献。職種が判定できない文献もここに入ります',
        en: 'References not limited to one profession (e.g., “healthcare professionals”, “multidisciplinary teams”); references whose profession cannot be identified are also placed here',
        ko: '‘보건의료인’, ‘다학제팀’ 등 직종을 특정하지 않은 문헌. 직종을 판별할 수 없는 문헌도 여기에 포함됩니다',
        zh: '未限定职种的文献（如“医务人员”“多学科团队”）。无法判定职种的文献也归入此类'
      },
      pattern: /health ?care professionals?|health professionals?|health ?care workers?|health workers?|health ?care (?:service )?providers?|healthcare staff|clinicians?|interprofessional|multidisciplinary|multi-professional|interdisciplinary|\bstaff\b|primary (?:health ?care|care) professionals?|care providers?|(?<!general |nurse |medical )practitioners|health personnel|hospital workers|frontline/i },
    { id: 'patient', reference: true,
      name: { ja: '患者・家族の視点', en: 'Patients & caregivers', ko: '환자·가족의 관점', zh: '患者与家属视角' },
      note: {
        ja: '職種ではありませんが、付録Hに「患者・介護者の視点」の節があるため参考として表示します',
        en: 'Not a profession, but shown for reference because Appendix H has a “Patient & Caregiver Perspectives” section',
        ko: '직종은 아니지만 부록 H에 ‘환자·돌봄 제공자의 관점’ 절이 있어 참고로 표시합니다',
        zh: '并非职种，但因附录H设有“患者与照护者视角”一节，故作为参考列出'
      },
      pattern: /patients?'? (?:perspectives?|experiences?|views?|perceptions?|expectations)|perspectives of patients|caregiver|patients and famil|famil(?:y|ies) (?:caregiver|member)|patient and public|lived experience|users'? experiences|young people's experiences|patient representatives|patient engagement|tripartite/i }
  ];

  // ─────────────────────────────────────────────
  // 課題カテゴリ（職種横断で繰り返し現れる困難）
  // ─────────────────────────────────────────────
  var categories = [
    { id: 'workload',
      name: { ja: '業務負荷・人員不足・バーンアウト', en: 'Workload, staffing shortages & burnout', ko: '업무 부담·인력 부족·번아웃', zh: '工作负荷、人手不足与职业倦怠' },
      short: { ja: '業務負荷・燃え尽き', en: 'Workload & burnout', ko: '업무 부담·번아웃', zh: '工作负荷与倦怠' },
      pattern: /burn ?out|workload|understaff|shortage|overtime|\bstress|fatigue|exhaust|well-?being|mental health challenges|intent to leave|absenteeism|no time|not enough time|occupational injur|workforce/i },
    { id: 'comm',
      name: { ja: 'コミュニケーション・情報共有', en: 'Communication & information sharing', ko: '커뮤니케이션·정보 공유', zh: '沟通与信息共享' },
      short: { ja: 'コミュニケーション', en: 'Communication', ko: '커뮤니케이션', zh: '沟通' },
      pattern: /communicat|bad news|conversation|handover|hand-off|information|interpersonal|relational|dialogue|disclos|empath|prognosis/i },
    { id: 'hierarchy',
      name: { ja: 'ヒエラルキー・不適切行動・対立', en: 'Hierarchy, unprofessional behavior & conflict', ko: '위계·부적절한 행동·갈등', zh: '等级制度、不当行为与冲突' },
      short: { ja: 'ヒエラルキー・対立', en: 'Hierarchy & conflict', ko: '위계·갈등', zh: '等级与冲突' },
      pattern: /hierarch|disruptive|incivility|unprofessional|bad behavio|conflict|mistreatment|role model|silence|difficult people|difficult conversations|lapses?\b|empowerment|professionalism|professional attitude|professional behavio/i },
    { id: 'leadership',
      name: { ja: 'リーダーシップ・変革・職業的アイデンティティ', en: 'Leadership, change & professional identity', ko: '리더십·변화·직업적 정체성', zh: '领导力、变革与职业认同' },
      short: { ja: 'リーダーシップ・変革', en: 'Leadership & change', ko: '리더십·변화', zh: '领导力与变革' },
      pattern: /leader|change management|leading change|change process|transformation|governance|physician engagement|identity/i },
    { id: 'ethics',
      name: { ja: '倫理的ジレンマ・道徳的苦悩', en: 'Ethical dilemmas & moral distress', ko: '윤리적 딜레마·도덕적 고뇌', zh: '伦理困境与道德困扰' },
      short: { ja: '倫理・道徳的苦悩', en: 'Ethics & moral distress', ko: '윤리·도덕적 고뇌', zh: '伦理与道德困扰' },
      pattern: /moral|ethic|dilemma|dignity|spiritual|values|integrity|refusal|defensive medicine|flee|fight or flight/i },
    { id: 'decision',
      name: { ja: '臨床推論・意思決定の難しさ', en: 'Clinical reasoning & decision-making', ko: '임상 추론·의사결정의 어려움', zh: '临床推理与决策困难' },
      short: { ja: '推論・意思決定', en: 'Reasoning & decisions', ko: '추론·의사결정', zh: '推理与决策' },
      pattern: /decision|reasoning|diagnos|uncertain|judg(?:e)?ment|prioriti|critical thinking|problem-solving|ambiguity|triage|hypothesis/i },
    { id: 'collab',
      name: { ja: '多職種連携・役割の不明確さ', en: 'Interprofessional collaboration & unclear roles', ko: '직종 간 협력·역할의 불명확성', zh: '跨专业合作与角色不清' },
      short: { ja: '連携・役割', en: 'Collaboration & roles', ko: '협력·역할', zh: '合作与角色' },
      pattern: /interprofessional|collaborat|teamwork|\bteams?\b|\broles?\b|integration|multidisciplinary|interdisciplinary|multi-professional|coordination|boundary/i },
    { id: 'training',
      name: { ja: '知識・スキル・研修の不足', en: 'Gaps in knowledge, skills & training', ko: '지식·기술·교육훈련의 부족', zh: '知识、技能与培训不足' },
      short: { ja: '知識・研修の不足', en: 'Knowledge & training', ko: '지식·훈련 부족', zh: '知识与培训不足' },
      pattern: /training|competenc|skill|knowledge|preparedness|readiness|literacy|continuing professional|\bcpd\b|continuing medical|continuing education|onboarding|upskilling/i },
    { id: 'teaching',
      name: { ja: '臨床教育・指導・学習環境', en: 'Clinical teaching, supervision & learning environment', ko: '임상교육·지도·학습환경', zh: '临床教学、带教与学习环境' },
      short: { ja: '教育・指導', en: 'Teaching & supervision', ko: '교육·지도', zh: '教学与带教' },
      pattern: /teach|mentor|preceptor|clinical education|medical education|nursing education|educator|supervis|role model|learning environment|clerkship|placement|curricul|pedagogy|lifelong learning|reflective|transformative learning|students?'? (?:experience|perspective|perception|participation)/i },
    { id: 'assessment',
      name: { ja: '評価・フィードバック・自己評価', en: 'Assessment, feedback & self-assessment', ko: '평가·피드백·자기평가', zh: '评估、反馈与自我评估' },
      short: { ja: '評価・フィードバック', en: 'Assessment & feedback', ko: '평가·피드백', zh: '评估与反馈' },
      pattern: /assessment|assessing|feedback|portfolio|failure to fail|360-degree|work-based|workplace-based|mini-evaluation/i },
    { id: 'implementation',
      name: { ja: 'エビデンス・ガイドライン・研究の実装', en: 'Implementing evidence, guidelines & research', ko: '근거·지침·연구의 실행', zh: '证据、指南与研究的落地' },
      short: { ja: 'エビデンス実装・研究', en: 'Evidence & research use', ko: '근거 실행·연구', zh: '证据落地与研究' },
      pattern: /evidence|guideline|implement|research|knowledge-to-action|uptake|recommendation|standardi[sz]/i },
    { id: 'resources',
      name: { ja: '時間・資源・組織支援・制度', en: 'Time, resources, organizational support & policy', ko: '시간·자원·조직 지원·제도', zh: '时间、资源、组织支持与制度' },
      short: { ja: '資源・組織・制度', en: 'Resources & systems', ko: '자원·조직·제도', zh: '资源、组织与制度' },
      pattern: /resource|organi[sz]ational|organi[sz]ation\b|(?<!decision )support|\bfund(?:s|ed|ing)?\b|grant application|payment|reimburs|access|polic|sustainab|financ|cost|infrastructure|systems? factors|street-level|bureaucra/i },
    { id: 'care',
      name: { ja: '症状管理・終末期ケアの実践', en: 'Symptom management & end-of-life care', ko: '증상 관리·임종기 돌봄의 실천', zh: '症状管理与临终照护实践' },
      short: { ja: '症状管理・終末期', en: 'Symptoms & end of life', ko: '증상 관리·임종기', zh: '症状与临终照护' },
      pattern: /symptom|\bpain\b|delirium|palliative|end-of-life|end of life|hospice|advance care planning|life-sustaining|dying|deprescrib|polypharmacy|multimorbidity/i },
    { id: 'prevention',
      name: { ja: '予防・健康増進・公衆衛生活動', en: 'Prevention, health promotion & public health', ko: '예방·건강증진·공중보건 활동', zh: '预防、健康促进与公共卫生' },
      short: { ja: '予防・健康増進', en: 'Prevention & promotion', ko: '예방·건강증진', zh: '预防与健康促进' },
      pattern: /health promotion|prevention|screening|behaviou?r change|immuni[sz]ation|vaccin|social needs|public health|one health|tuberculosis|cardiometabolic|food banks|outreach/i },
    { id: 'safety',
      name: { ja: '患者安全・医療事故・報告', en: 'Patient safety, errors & incident reporting', ko: '환자안전·의료사고·보고', zh: '患者安全、医疗差错与报告' },
      short: { ja: '患者安全・事故', en: 'Safety & errors', ko: '환자안전·사고', zh: '患者安全与差错' },
      pattern: /safety|error|incident|near.?miss|second.?victim|\bharm|adverse|checklist|failure-to-rescue|failure mode|risk manag|quality improvement|quality of care/i },
    { id: 'digital',
      name: { ja: 'デジタル・電子カルテ・AI', en: 'Digital tools, EHRs & AI', ko: '디지털·전자의무기록·AI', zh: '数字化、电子病历与AI' },
      short: { ja: 'デジタル・AI', en: 'Digital & AI', ko: '디지털·AI', zh: '数字化与AI' },
      pattern: /electronic|\behrs?\b|digital|informatic|tele(?:health|medicine|mental|psychiatr)|artificial intelligence|\bai\b|chatgpt|technolog|virtual|online|internet|social media|computable|decision support|web-based|database/i },
    { id: 'culture',
      name: { ja: '文化・言語・社会的要因', en: 'Culture, language & social factors', ko: '문화·언어·사회적 요인', zh: '文化、语言与社会因素' },
      short: { ja: '文化・言語・格差', en: 'Culture & equity', ko: '문화·언어·격차', zh: '文化、语言与差距' },
      pattern: /cultural|culturally|language|linguistic|immigrant|migrant|minorit|ethnic|racial|lgbtq|social determinants|disparit|inequit|equity|diversity|diverse|refugee|interpret|underserved|marginali[sz]ed|vulnerable|rural|low- and middle-income|low-income|native american|spanish|arabic|asian americans|hmong/i },
    { id: 'crisis',
      name: { ja: '災害・救急・パンデミック', en: 'Disasters, emergencies & pandemics', ko: '재난·응급·팬데믹', zh: '灾害、急救与大流行' },
      short: { ja: '災害・パンデミック', en: 'Disasters & pandemics', ko: '재난·팬데믹', zh: '灾害与大流行' },
      pattern: /disaster|emergenc|pandemic|covid|mass casualt|crisis|crises|humanitarian|flood|earthquake|mpox|epidemic|pre-?hospital|ambulance|infodemic|misinformation|acute care/i },
    { id: 'patientcentered',
      name: { ja: '患者中心性・患者／家族の参画', en: 'Patient-centeredness & family involvement', ko: '환자 중심성·환자/가족 참여', zh: '以患者为中心与患者/家属参与' },
      short: { ja: '患者中心性', en: 'Patient-centeredness', ko: '환자 중심성', zh: '以患者为中心' },
      pattern: /patient-cent|person-cent|patient engagement|shared decision|patients and famil|famil(?:y|ies) (?:caregiver|member)|caregiver|patient goals|patients' |lived experience|patient and public|goal-setting|patient expectations|patient perceptions|patient satisfaction|patient experiences?|supported decision/i }
  ];

  // ─────────────────────────────────────────────
  // 15領域の説明（付録Hの小見出しと付録Fに基づく）
  // ─────────────────────────────────────────────
  var domainNotes = {
    1: {
      ja: '意思決定の食い違い、診断エラー、情報管理と多職種間の調整、急性期・災害環境での判断、患者中心性と道徳的苦悩など、臨床推論を現場で実践する際の困難。',
      en: 'Difficulties in applying clinical reasoning in practice: discrepancies in decision-making, diagnostic error, information management and interprofessional coordination, judgment in acute-care and disaster settings, and patient-centeredness and moral distress.',
      ko: '의사결정의 불일치, 진단 오류, 정보관리와 직종 간 조정, 급성기·재난 환경에서의 판단, 환자 중심성과 도덕적 고뇌 등 임상 추론을 현장에서 실천할 때의 어려움.',
      zh: '在临床一线运用临床推理时面临的困难，包括决策分歧、诊断错误、信息管理与跨专业协调、急性期与灾害环境中的判断，以及以患者为中心与道德困扰等。' },
    2: {
      ja: 'エビデンスやガイドラインを日常診療に取り入れる際の障壁。時間・知識・組織支援の不足などを、医師・看護職・薬剤師・リハ職それぞれの立場から報告。',
      en: 'Barriers to bringing evidence and guidelines into everyday practice—such as lack of time, knowledge and organizational support—reported from the perspectives of physicians, nurses, pharmacists and allied health professionals.',
      ko: '근거와 진료지침을 일상 진료에 도입할 때의 장벽. 시간·지식·조직 지원의 부족 등을 의사·간호직·약사·재활직 각각의 입장에서 보고.',
      zh: '将证据与指南引入日常诊疗的障碍。从医生、护理人员、药师及康复/医技人员各自的角度，报告了时间、知识与组织支持不足等问题。' },
    3: {
      ja: '悪い知らせの伝え方、患者・家族や多職種との対話、救急・多言語環境での伝達の難しさ。医師・看護職・薬剤師・精神保健職ごとに整理。',
      en: 'Difficulties in breaking bad news, in dialogue with patients, families and other professions, and in communicating in emergency and multilingual settings—organized for physicians, nurses, pharmacists and mental health professionals.',
      ko: '나쁜 소식 전하기, 환자·가족 및 다른 직종과의 대화, 응급·다언어 환경에서의 전달의 어려움. 의사·간호직·약사·정신건강 전문가별로 정리.',
      zh: '告知坏消息、与患者、家属及其他职种对话，以及在急诊和多语言环境中沟通的困难。按医生、护理人员、药师和精神卫生专业人员分别整理。' },
    4: {
      ja: '専門職文化の違い、役割理解の不足、手術室などでのコミュニケーションの失敗、プライマリ・ケアや地方での連携の障壁。',
      en: 'Differences in professional cultures, poor understanding of roles, communication failures in settings such as the operating room, and barriers to collaboration in primary care and rural areas.',
      ko: '전문직 문화의 차이, 역할 이해 부족, 수술실 등에서의 의사소통 실패, 일차의료와 지방에서의 협력 장벽.',
      zh: '职业文化差异、对角色理解不足、手术室等场景中的沟通失败，以及初级保健和农村地区的合作障碍。' },
    5: {
      ja: '職場の不適切・破壊的行動（disruptive behavior）や無礼（incivility）、患者の尊厳、教育現場でのプロフェッショナリズムの逸脱、バーンアウトと制度上の課題。',
      en: 'Disruptive behavior and incivility in the workplace, patient dignity, professionalism lapses in education and training, and burnout and systemic challenges.',
      ko: '직장 내 부적절·파괴적 행동(disruptive behavior)과 무례(incivility), 환자의 존엄, 교육 현장에서의 프로페셔널리즘 일탈, 번아웃과 제도상의 과제.',
      zh: '工作场所的破坏性行为（disruptive behavior）与无礼行为（incivility）、患者尊严、教育中的职业素养失范，以及职业倦怠与制度性问题。' },
    6: {
      ja: '変革の推進、組織の沈黙、チーム内の対立と難しい会話、ヒエラルキー、医師リーダーのアイデンティティの葛藤、看護・薬剤部門のリーダーシップ課題。',
      en: 'Driving change, organizational silence, team conflict and difficult conversations, hierarchy, identity tensions among physician leaders, and leadership challenges in nursing and pharmacy.',
      ko: '변화 추진, 조직의 침묵, 팀 내 갈등과 어려운 대화, 위계, 의사 리더의 정체성 갈등, 간호·약제 부문의 리더십 과제.',
      zh: '推动变革、组织沉默、团队冲突与艰难对话、等级制度、医生领导者的身份冲突，以及护理和药学部门的领导力问题。' },
    7: {
      ja: 'バーンアウトとセカンドビクティム、道徳的苦悩と倫理的風土、インシデント報告の障壁、質改善の実装の難しさ。',
      en: 'Burnout and second victims, moral distress and ethical climate, barriers to incident reporting, and the difficulty of implementing quality improvement.',
      ko: '번아웃과 이차 피해자, 도덕적 고뇌와 윤리적 풍토, 사건 보고의 장벽, 질 향상 실행의 어려움.',
      zh: '职业倦怠与第二受害者、道德困扰与伦理氛围、不良事件报告的障碍，以及质量改进实施的困难。' },
    8: {
      ja: '一般診療・看護での予防や行動変容支援の障壁、地域保健ワーカーの業務負荷、パンデミック下のストレスと誤情報（インフォデミック）。',
      en: 'Barriers to prevention and behavior-change support in general practice and nursing, the workload of community health workers, and pandemic stress and misinformation (infodemics).',
      ko: '일반진료·간호에서의 예방과 행동변화 지원의 장벽, 지역사회 보건요원의 업무 부담, 팬데믹 상황의 스트레스와 잘못된 정보(인포데믹).',
      zh: '全科诊疗和护理中开展预防与行为改变支持的障碍、社区卫生工作者的工作负荷，以及大流行期间的压力与错误信息（信息疫情）。' },
    9: {
      ja: '言語の壁と通訳、移民・マイノリティなど配慮を要する集団へのケア、健康の社会的決定要因、職種ごとの文化的対応力の育成。',
      en: 'Language barriers and interpreting, caring for populations that need particular consideration such as migrants and minorities, social determinants of health, and building cultural competence in each profession.',
      ko: '언어 장벽과 통역, 이민자·소수자 등 배려가 필요한 집단에 대한 돌봄, 건강의 사회적 결정요인, 직종별 문화적 역량의 육성.',
      zh: '语言障碍与口译、对移民和少数群体等需特别关照人群的照护、健康的社会决定因素，以及各职种文化胜任力的培养。' },
    10: {
      ja: '臨床指導者の動機づけと時間、否定的なロールモデル、「failure to fail」、職場基盤型評価とフィードバックの難しさ。',
      en: 'Clinical teachers’ motivation and time, negative role models, “failure to fail”, and the difficulty of workplace-based assessment and feedback.',
      ko: '임상 지도자의 동기와 시간, 부정적 롤모델, ‘failure to fail’, 직장 기반 평가와 피드백의 어려움.',
      zh: '临床带教老师的动机与时间、负面榜样、“failure to fail”（不愿判定不合格），以及基于工作场所的评估与反馈的困难。' },
    11: {
      ja: '時間・資金・支援体制の不足、論文執筆や研究費申請の困難、医師・看護職・リハ／薬剤／SW、学生それぞれの研究参加の障壁。',
      en: 'Lack of time, funding and support, difficulties in writing papers and grant applications, and barriers to research participation for physicians, nurses, allied health/pharmacy/social work and students.',
      ko: '시간·자금·지원 체계의 부족, 논문 작성과 연구비 신청의 어려움, 의사·간호직·재활/약제/사회복지·학생 각각의 연구 참여 장벽.',
      zh: '时间、经费与支持体系不足，论文写作与科研基金申请的困难，以及医生、护理人员、康复/药学/社工和学生各自参与研究的障碍。' },
    12: {
      ja: '電子カルテの使い勝手と記録負担・バーンアウト、遠隔医療導入の障壁、AIの受容・信頼・バイアス。',
      en: 'EHR usability, documentation burden and burnout, barriers to adopting telehealth, and acceptance of, trust in and bias in AI.',
      ko: '전자의무기록의 사용성과 기록 부담·번아웃, 원격의료 도입의 장벽, AI의 수용·신뢰·편향.',
      zh: '电子病历的可用性、文书负担与职业倦怠，远程医疗推广的障碍，以及AI的接受度、信任与偏见。' },
    13: {
      ja: '災害への備えと訓練の不足、心理的負担、倫理的ジレンマ、医師・救急隊・看護職・薬剤師・リハ職それぞれの役割と課題。',
      en: 'Insufficient disaster preparedness and training, psychological burden, ethical dilemmas, and the roles and challenges of physicians, paramedics, nurses, pharmacists and allied health professionals.',
      ko: '재난 대비와 훈련의 부족, 심리적 부담, 윤리적 딜레마, 의사·구급대원·간호직·약사·재활직 각각의 역할과 과제.',
      zh: '灾害准备与培训不足、心理负担、伦理困境，以及医生、急救人员、护理人员、药师和康复/医技人员各自的角色与挑战。' },
    14: {
      ja: '予後や終末期の話し合い、道徳的苦悩とバーンアウト、スピリチュアルケア、SW・心理職・薬剤師・リハ職の関与の課題。',
      en: 'Conversations about prognosis and the end of life, moral distress and burnout, spiritual care, and challenges in involving social workers, psychologists, pharmacists and allied health professionals.',
      ko: '예후와 임종기에 관한 대화, 도덕적 고뇌와 번아웃, 영적 돌봄, 사회복지사·심리사·약사·재활직의 참여에 관한 과제.',
      zh: '关于预后与临终的沟通、道德困扰与职业倦怠、灵性关怀，以及社工、心理师、药师和康复/医技人员参与方面的挑战。' },
    15: {
      ja: '継続教育（CPD）への参加障壁、自己評価の限界、フィードバックとポートフォリオの運用、AI・シミュレーションなど新技術の活用。',
      en: 'Barriers to continuing professional development (CPD), the limits of self-assessment, the use of feedback and portfolios, and the use of new technologies such as AI and simulation.',
      ko: '지속적 전문성 개발(CPD) 참여의 장벽, 자기평가의 한계, 피드백과 포트폴리오의 운용, AI·시뮬레이션 등 신기술의 활용.',
      zh: '参与继续职业发展（CPD）的障碍、自我评估的局限、反馈与学习档案的运用，以及AI、模拟等新技术的应用。' }
  };

  // マップの列見出し用の短い名称
  var domainShort = {
    1: { ja: '臨床推論', en: 'Clinical reasoning', ko: '임상 추론', zh: '临床推理' },
    2: { ja: 'EBP', en: 'EBP', ko: 'EBP', zh: '循证实践' },
    3: { ja: 'コミュニケーション', en: 'Communication', ko: '커뮤니케이션', zh: '沟通' },
    4: { ja: '多職種連携', en: 'IPC', ko: '전문직 간 협력', zh: '跨专业合作' },
    5: { ja: 'プロフェッショナリズム', en: 'Professionalism', ko: '프로페셔널리즘', zh: '职业素养' },
    6: { ja: 'リーダーシップ', en: 'Leadership', ko: '리더십', zh: '领导力' },
    7: { ja: '患者安全・質改善', en: 'Safety & QI', ko: '환자안전·질 향상', zh: '患者安全·质量改进' },
    8: { ja: '健康増進・公衆衛生', en: 'Health promotion', ko: '건강증진·공중보건', zh: '健康促进·公共卫生' },
    9: { ja: '文化的感受性', en: 'Cultural sensitivity', ko: '문화적 감수성', zh: '文化敏感性' },
    10: { ja: '教育・指導', en: 'Education', ko: '교육·멘토링', zh: '教学·导师指导' },
    11: { ja: '研究・学術', en: 'Research', ko: '연구·학술', zh: '研究·学术' },
    12: { ja: 'デジタルヘルス', en: 'Digital health', ko: '디지털 헬스', zh: '数字健康' },
    13: { ja: '救急・災害', en: 'Emergency & disaster', ko: '응급·재난', zh: '急救·灾害' },
    14: { ja: '緩和・終末期ケア', en: 'Palliative care', ko: '완화·임종기 돌봄', zh: '姑息·临终关怀' },
    15: { ja: '自己評価・生涯学習', en: 'Lifelong learning', ko: '자기평가·평생학습', zh: '自我评估·终身学习' }
  };

  var taxonomy = { professions: professions, categories: categories, domainNotes: domainNotes, domainShort: domainShort };
  if (typeof module !== 'undefined' && module.exports) module.exports = taxonomy;
  else root.TAXONOMY = taxonomy;
})(typeof window !== 'undefined' ? window : globalThis);
