/*
 * 付録H（Appendix H: Domains of Clinical Reasoning and Reference List）の文献データ
 * 出典: 三原弘『Designing AI-Driven Medical Education』（Cambridge Scholars Publishing, 刊行準備中）
 *
 * ── 書式 ──────────────────────────────────────────────
 *   # 番号 | 領域名(英) || 日本語 || 한국어 || 中文
 *   ## 小見出し(英) || 日本語 || 한국어 || 中文 {core}      … {core} は「枠組み・理論」の節
 *   ### 小見出し(英) || 日本語 || 한국어 || 中文 {p:nurse} … p: その節の文献すべてに職種タグを付与
 *                                     {f:phys,nurse} … f: タイトルから職種が判定できない文献にだけ付与
 *     （韓国語・中国語を省略すると、その言語では英語の見出しが表示されます）
 *   それ以外の行 = 文献1件（Chicago Author-Date のまま）
 *   職種ID: phys nurse pharm allied ems psych sw chw student edu leader multi patient
 *
 * 文献を追加・修正するときは、このファイルの該当箇所を編集して保存するだけで反映されます。
 * 編集後は `node tools/check-data.mjs` で件数・要確認項目を確認できます（任意）。
 */
(function (root) {
  var text = String.raw`
# 1 | Patient-Centered Clinical Reasoning || 患者中心の臨床推論 || 환자 중심 임상 추론 || 以患者为中心的临床推理

## Core Competency & Theory || 中核コンピテンシーと理論 || 핵심 역량과 이론 || 核心能力与理论 {core}

Bae, J., J. Lee, M. Choi, Y. Jang, et al. 2023. "Development of the clinical reasoning competency scale for nurses." BMC Nursing 22, no. 1: 138. https://doi.org/10.1186/s12912-023-01244-6.
Cruz, E. B., A. Moore, and V. Cross. 2012. "Clinical reasoning and patient-centred care in musculoskeletal physiotherapy in Portugal: a qualitative study." Manual Therapy 17, no. 3: 246–250. https://doi.org/10.1016/j.math.2012.02.007.
Levett-Jones, T., K. Hoffman, J. Dempsey, S. Y. Jeong, et al. 2010. "The 'five rights' of clinical reasoning: an educational model to enhance nursing students' ability to identify and manage clinically 'at-risk' patients." Nurse Education Today 30, no. 6: 515–520. https://doi.org/10.1016/j.nedt.2009.10.020.
Manetti, W. 2019. "Sound clinical judgment in nursing: A concept analysis." Nursing Forum 54, no. 1: 102–110. https://doi.org/10.1111/nuf.12303.
Rothstein, J. M., and J. L. Echternach. 1986. "Hypothesis-oriented algorithm for clinicians: a method for evaluation and treatment planning." Physical Therapy 66, no. 9: 1388–1394. https://doi.org/10.1093/ptj/66.9.1388.
Hosseinzadeh, T., K. N. Tabrizi, M. Fallahi-Khoshknab, H. Khankeh, et al. 2022. "Barriers to the Development of Clinical Reasoning Skills among Coronary Care Nurses: A Qualitative Study." Iranian journal of nursing and midwifery research 27, no. 6: 567-574. https://doi.org/10.4103/ijnmr.ijnmr_164_21.
Audétat, M. C., S. Laurin, G. Sanche, C. Béïque, et al. 2013. "Clinical reasoning difficulties: a taxonomy for clinical teachers." Medical teacher 35, no. 3: e984-9. https://doi.org/10.3109/0142159X.2012.733041.
Glazebrook, R. M., and S. L. Harrison. 2006. "Obstacles and solutions to maintenance of advanced procedural skills for rural and remote medical practitioners in Australia." Rural and remote health 6, no. 4: 502.
Donroe, J. H., E. Egger, S. Soares, and A. N. Sofair. 2024. "Clinical Reasoning: Perspectives of Expert Clinicians on Reasoning Through Complex Clinical Cases." Cureus 16, no. 1: e51696. https://doi.org/10.7759/cureus.51696.

## Field Challenges & Barriers || 現場の課題と障壁 || 현장의 과제와 장벽 || 一线挑战与障碍

### Decision-making Discrepancies || 意思決定の食い違い || 의사결정의 불일치 || 决策分歧

Blum, L., C. M. Jarach, and M. E. Ellen. 2023. "Perceptions of shared decision making in gastroenterology and inflammatory bowel disease: A qualitative analysis." Patient Education and Counseling 115: 107877. https://doi.org/10.1016/j.pec.2023.107877.
Cranley, L., D. M. Doran, A. E. Tourangeau, et al. 2009. "Nurses' uncertainty in decision-making: a literature review." Worldviews on Evidence-Based Nursing 6, no. 1: 3–15.
Drees, C., et al. 2022. "Clinical Priority Setting and Decision-Making in Sweden: A Cross-sectional Survey Among Physicians," IJHPM 11(7):1148–1157, doi:10.34172/ijhpm.2021.16
Leyva-Moral, J. M., P. A. Palmieri, M. F. Cid, et al. 2018. "Reproductive decision-making in women living with human immunodeficiency virus: A systematic review." International Journal of Nursing Studies 77: 207–221.
Francis, C. J., A. Johnson, and R. L. Wilson. 2024. "Supported decision-making interventions in mental healthcare: A systematic review of current evidence and implementation barriers." Health expectations : an international journal of public participation in health care and health policy 27, no. 2: e14001. https://doi.org/10.1111/hex.14001.

### Diagnostic Error & Reasoning || 診断エラーと推論 || 진단 오류와 추론 || 诊断错误与推理

Jay, R., C. Davenport, and R. Patel. 2024. "Clinical reasoning—the essentials for teaching medical students, trainees and non-medical healthcare professionals." British Journal of Hospital Medicine 85, no. 7: 1–8.
Ritz C, Sader J, Cairo Notari S, Lanier C, Caire Fon N, Nendaz M, Audétat MC. 2021. "Multimorbidity and clinical reasoning through the eyes of GPs: a qualitative study." Fam Med Community Health 2021;9(4):e000798. doi:10.1136/fmch-2020-000798
Smith, S. K., et al. 2022. "Scoping review: Diagnostic reasoning as a component of clinical reasoning in the U.S. primary care nurse practitioner education." Journal of Advanced Nursing 78,no.12:3869–3896. doi:10.1111/jan.15414
Alghamdi, B., S. M. Koroukian, D. Kresevic, and C. K. Drummond. 2022. "Needs assessment survey of healthcare providers' perceptions and practices regarding delirium prevention at a university medical center." Frontiers in aging 3: 912142. https://doi.org/10.3389/fragi.2022.912142.
Schaller-Paule, M. A., H. Steinmetz, F. S. Vollmer, M. Plesac, et al. 2021. "Lessons in clinical reasoning - pitfalls, myths, and pearls: the contribution of faulty data gathering and synthesis to diagnostic error." Diagnosis (Berlin, Germany) 8, no. 4: 515-524. https://doi.org/10.1515/dx-2019-0108.
Durning, S. J., R. L. Trowbridge, and L. Schuwirth. 2020. "Clinical Reasoning and Diagnostic Error: A Call to Merge Two Worlds to Improve Patient Care." Academic medicine : journal of the Association of American Medical Colleges 95, no. 8: 1159-1161. https://doi.org/10.1097/ACM.0000000000003041.
Lxygvsjx. 2012. "Relating faults in diagnostic reasoning with diagnostic errors and patient harm." Academic medicine : journal of the Association of American Medical Colleges 87, no. 2: 149-56. https://doi.org/10.1097/ACM.0b013e31823f71e6.
Stunkel, L., R. A. Sharma, D. D. Mackay, B. Wilson, et al. 2021. "Patient Harm Due to Diagnostic Error of Neuro-Ophthalmologic Conditions." Ophthalmology 128, no. 9: 1356-1362. https://doi.org/10.1016/j.ophtha.2021.03.008.
Nasserie, T., M. Hittle, and S. N. Goodman. 2021. "Assessment of the Frequency and Variety of Persistent Symptoms Among Patients With COVID-19: A Systematic Review." JAMA network open 4, no. 5: e2111417. https://doi.org/10.1001/jamanetworkopen.2021.11417.

### Information Management & Interprofessional Coordination || 情報管理と多職種間の調整 || 정보관리와 직종 간 조정 || 信息管理与跨专业协调

Bouchez T, Cagnon C, Hamouche G, Majdoub M, Charlet J, Schuers M. 2024. "Interprofessional clinical decision-making process in health: A scoping review." J Adv Nurs 80(3):884–907. doi:10.1111/jan.15865
Bucknall TK, Hutchinson AM, Botti M, et al. 2020. "Engaging patients and families in communication across transitions of care: An integrative review." Patient Educ Couns 103(6):1104–1117. doi:10.1016/j.pec.2020.01.017
Casey SD, Reed ME, LeMaster C, Mark DG, Gaskin J, Norris RP, Sax DR. 2023. "Physicians' Perceptions of Clinical Decision Support to Treat Patients With Heart Failure in the ED." JAMA Netw Open 2023;6(11):e2344393. doi:10.1001/jamanetworkopen.2023.44393
Johnson, A., et al. 2017. "Boundary spanning collaboration on overtime shifts." Journal of Health Organization and Management.
Ozavci, G., T. Bucknall, R. Woodward-Kron, C. Hughes, et al. 2022. "Towards patient-centred communication in the management of older patients' medications across transitions of care: A focused ethnographic study." Journal of Clinical Nursing 31, no. 21-22: 3235–3249.
Wisner, K., A. Lyndon, and C. A. Chesla. 2019. "The electronic health record's impact on nurses' cognitive work: An integrative review." International Journal of Nursing Studies 94: 74–84.
Lorente, M., G. Hogg, and J. Ker. 2006. "The challenges of initiating a multi-professional clinical skills project." Journal of interprofessional care 20, no. 3: 290-301. https://doi.org/10.1080/13561820600649755.
van Marum, S., D. Verhoeven, and D. de Rooy. 2022. "The Barriers and Enhancers to Trust in a Just Culture in Hospital Settings: A Systematic Review." Journal of patient safety 18, no. 7: e1067-e1075. https://doi.org/10.1097/PTS.0000000000001012.
Walsh, K., and C. Wroe. 2020. "Mobilising computable biomedical knowledge: challenges for clinical decision support from a medical knowledge provider." BMJ health & care informatics 27, no. 2 https://doi.org/10.1136/bmjhci-2019-100121.
Braaf, S., E. Manias, S. Finch, R. Riley, et al. 2013. "Healthcare service provider perceptions of organisational communication across the perioperative pathway: a questionnaire survey." Journal of clinical nursing 22, no. 1-2: 180-91. https://doi.org/10.1111/j.1365-2702.2012.04228.x.
Paull, D. E., L. D. Deleeuw, S. Wolk, J. T. Paige, et al. 2013. "The effect of simulation-based crew resource management training on measurable teamwork and communication among interprofessional teams caring for postoperative patients." Journal of continuing education in nursing 44, no. 11: 516-24. https://doi.org/10.3928/00220124-20130903-38.
Withall JB, Schwartz JM, Usseglio J, Cato KD. A Scoping Review of Integrated Medical Devices and Clinical Decision Support in the Acute Care Setting. Appl Clin Inform 2022;13(5):1223–1236. doi:10.1055/s-0042-1759513

### Acute Care & Disaster Environment || 急性期・災害の環境 || 급성기·재난 환경 || 急性期与灾害环境

Bijani, M., et al. 2024. "Pre-hospital emergency care personnel's challenges in providing care in mass casualty incidents." International Emergency Nursing 77: 101522.
Luu, T. T. 2022. "Cancer patient management: role of multidisciplinary teams." BMJ Supportive & Palliative Care 12, no. 2: 201–206.
Rietze, L. L., K. I. Stajduhar, M. E. Purkis, and D. Cloutier. 2024. "The Challenges of Advance Care Planning for Acute Care Registered Nurses." Canadian Journal of Nursing Research 56, no. 3: 293–302.
Kavukcu, N., and K. H. Altıntaş. 2019. "The Challenges of the Health Care Providers in Refugee Settings: A Systematic Review." Prehospital and disaster medicine 34, no. 2: 188-196. https://doi.org/10.1017/S1049023X19000190.
Parker, V., M. Giles, and I. Higgins. 2009. "Challenges confronting clinicians in acute care." Journal of nursing management 17, no. 6: 667-78. https://doi.org/10.1111/j.1365-2834.2009.01009.x.
Bijani, M., M. Javad Moradian, H. Najafi, P. Arbon, et al. 2024. "Pre-hospital emergency care personnel's challenges in providing care in mass casualty incidents: A qualitative study." International emergency nursing 77: 101522. https://doi.org/10.1016/j.ienj.2024.101522.
Bijani, M., S. Abedi, S. Karimi, and B. Tehranineshat. 2021. "Major challenges and barriers in clinical decision-making as perceived by emergency medical services personnel: a qualitative content analysis." BMC emergency medicine 21, no. 1: 11. https://doi.org/10.1186/s12873-021-00408-4.
Watson, A. G., J. V. McCoy, J. Mathew, D. A. Gundersen, et al. 2019. "Impact of physician workload on burnout in the emergency department." Psychology, health & medicine 24, no. 4: 414-428. https://doi.org/10.1080/13548506.2018.1539236.
Lasater, K. B., L. H. Aiken, D. M. Sloane, R. French, et al. 2021. "Chronic hospital nurse understaffing meets COVID-19: an observational study." BMJ quality & safety 30, no. 8: 639-647. https://doi.org/10.1136/bmjqs-2020-011512.

### Patient-Centeredness & Moral Distress || 患者中心性と道徳的苦悩 || 환자 중심성과 도덕적 고뇌 || 以患者为中心与道德困扰

Gandini, E. L., D. Moranda, G. Villa, and D. F. Manara. 2021. "Nurses' moral distress in end-of-life care: A qualitative study." Nursing Ethics 28, no. 5: 614–627.
Purkaple, B. A., J. W. Mold, and S. Chen. 2016. "Encouraging Patient-Centered Care by Including Quality-of-Life Questions on Pre-Encounter Forms." Annals of Family Medicine 14, no. 3: 221–226.
Roper KL, Jones J, Rowland C, Thomas-Eapen N, Cardarelli R. "Mixed Methods Study of Patient and Primary Care Provider Perceptions of Chronic Pain Treatment." Patient Education and Counseling 2021;104(3):585–594
van Belle, E., et al. 2020. "Exploring person-centred fundamental nursing care in hospital wards: A multi-site ethnography." Journal of Clinical Nursing.
Kuipers, S. J., A. P. Nieboer, and J. M. Cramm. 2021. "Easier Said Than Done: Healthcare Professionals' Barriers to the Provision of Patient-Centered Primary Care to Patients with Multimorbidity." International journal of environmental research and public health 18, no. 11 https://doi.org/10.3390/ijerph18116057.
Schuttner, L., S. Hockett Sherlock, C. E. Simons, N. L. Johnson, et al. 2022. "My Goals Are Not Their Goals: Barriers and Facilitators to Delivery of Patient-Centered Care for Patients with Multimorbidity." Journal of general internal medicine 37, no. 16: 4189-4196. https://doi.org/10.1007/s11606-022-07533-1.
Kucukarslan, S. N., S. Thomas, A. Bazzi, and D. Virant-Young. 2009. "Using self-regulation theory to examine patient goals, barriers, and facilitators for taking medication." The patient 2, no. 4: 211-20. https://doi.org/10.2165/11313830-000000000-00000.
Johnson, D. C., C. T. Kassner, J. Houser, and J. S. Kutner. 2005. "Barriers to effective symptom management in hospice." Journal of pain and symptom management 29, no. 1: 69-79. https://doi.org/10.1016/j.jpainsymman.2004.09.001.
Roberts, R. L., C. Milani, C. Webber, S. H. Bush, et al. 2024. "Enablers and Barriers for End-of-Life Symptom Management Medications in Long-Term Care Homes: A Qualitative Study." Journal of the American Medical Directors Association 25, no. 8: 105076. https://doi.org/10.1016/j.jamda.2024.105076.
Balogh, E. P., P. A. Ganz, S. B. Murphy, S. J. Nass, et al. 2011. "Patient-centered cancer treatment planning: improving the quality of oncology care. Summary of an Institute of Medicine workshop." The oncologist 16, no. 12: 1800-5. https://doi.org/10.1634/theoncologist.2011-0252.
Maffoni, M., P. Argentero, I. Giorgi, J. Hynes, et al. 2019. "Healthcare professionals' moral distress in adult palliative care: a systematic review." BMJ supportive & palliative care 9, no. 3: 245-254. https://doi.org/10.1136/bmjspcare-2018-001674.
Taboada, M., N. Rodríguez, M. Diaz-Vieito, M. J. Domínguez, et al. 2022. "Quality of life and persistent symptoms after hospitalization for COVID-19. A prospective observational study comparing ICU with non-ICU patients." Revista espanola de anestesiologia y reanimacion 69, no. 6: 326-335. https://doi.org/10.1016/j.redare.2022.06.002.
Crawford, L., J. Maxwell, H. Colquhoun, S. Kingsnorth, et al. 2022. "Facilitators and barriers to patient-centred goal-setting in rehabilitation: A scoping review." Clinical rehabilitation 36, no. 12: 1694-1704. https://doi.org/10.1177/02692155221121006.
McAlinden, F., F. McDermott, and J. Morris. 2013. "Complex patients: social workers' perceptions of complexity in health and rehabilitation services." Social work in health care 52, no. 10: 899-912. https://doi.org/10.1080/00981389.2013.834032.

# 2 | Evidence-Based Practice || 根拠に基づく実践（EBP） || 근거기반실무(EBP) || 循证实践（EBP）

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Albarqouni, L., T. Hoffmann, S. Straus, N. R. Olsen, et al. 2018. "Core competencies in evidence-based practice for health professionals: consensus statement based on a systematic review and Delphi survey." JAMA Network Open 1, no. 2: e180281. https://doi.org/10.1001/jamanetworkopen.2018.0281.
Ayoubian, A., A. A. Nasiripour, S. J. Tabibi, and M. Bahadori. 2020. "Evaluation of Facilitators and Barriers to Implementing Evidence-Based Practice in the Health Services: A Systematic Review." Galen Medical Journal 9: e1645. https://doi.org/10.31661/gmj.v9i0.1645.
Gudeta, T. G., A. B. Terefe, G. T. Mengistu, and S. A. Sori. 2024. "A systematic review and meta-analysis of evidence-based practice and its associated factors among health professionals in Ethiopia." BMC Health Services Research 24, no. 1: 1518. https://doi.org/10.1186/s12913-024-11957-2.
McArthur, C., Y. Bai, P. Hewston, L. Giangregorio, et al. 2021. "Barriers and facilitators to implementing evidence-based guidelines in long-term care: a qualitative evidence synthesis." Implementation Science 16, no. 1: 70. https://doi.org/10.1186/s13012-021-01140-0.

## Field Challenges & Barriers by Profession || 職種別の現場の課題と障壁 || 직종별 현장의 과제와 장벽 || 各职种的一线挑战与障碍

### Physicians and General Practitioners || 医師・一般医 || 의사·일반의 || 医生与全科医生 {p:phys}

Hall, A. M., S. R. Scurrey, A. E. Pike, C. Albury, et al. 2019. "Physician-reported barriers to using evidence-based recommendations for low back pain in clinical practice: a systematic review and synthesis of qualitative studies using the Theoretical Domains Framework." Implementation science : IS 14, no. 1: 49. https://doi.org/10.1186/s13012-019-0884-4.
Freeman, A. C., and K. Sweeney. 2001. "Why general practitioners do not implement evidence: qualitative study." BMJ (Clinical research ed.) 323, no. 7321: 1100-2. https://doi.org/10.1136/bmj.323.7321.1100.
Unadkat, M. B., et al. 2021. "Self-reported knowledge, attitudes, practices and barriers in use of evidence-based medicine among resident physicians in Kenya: a mixed methods study." BMC Medical Education 21, no. 1: 537. https://doi.org/10.1186/s12909-021-02974-4.
Zwolsman, S., E. te Pas, L. Hooft, M. Wieringa-de Waard, et al. 2012. "Barriers to GPs' use of evidence-based medicine: a systematic review." British Journal of General Practice 62, no. 600: e511–e521. https://doi.org/10.3399/bjgp12X652382.

### Nursing Professionals || 看護職 || 간호직 || 护理人员 {p:nurse}

Alqahtani, J. M., R. P. Carsula, H. A. Alharbi, S. M. Alyousef, et al. 2022. "Barriers to Implementing Evidence-Based Practice among Primary Healthcare Nurses in Saudi Arabia: A Cross-Sectional Study." Nursing Reports 12, no. 2: 313–323. https://doi.org/10.3390/nursrep12020031.
Alsadaan, N., et al. 2025. "Barriers and facilitators in implementing evidence-based practice: a parallel cross-sectional mixed methods study among nursing administrators." BMC Nursing 24: 403. https://doi.org/10.1186/s12912-025-03059-z.
Hines, S., J. Ramsbotham, F. Coyer, et al. 2021. "The Experiences and Perceptions of Nurses Interacting With Research Literature: A Qualitative Systematic Review to Guide Evidence-Based Practice." Worldviews on Evidence-Based Nursing 18, no. 6: 371-378. https://doi.org/10.1111/wvn.12542.
Pitsillidou, M., Z. Roupa, A. Farmakas, and M. Noula. 2021. "Factors Affecting the Application and Implementation of Evidence-Based Practice in Nursing." Acta Informatica Medica 29, no. 4: 281–287.
Shafiei, E., et al. 2014. "Nurses' perceptions of evidence-based practice: a quantitative study at a teaching hospital in Iran." Medical Journal of the Islamic Republic of Iran 28: 135.
Wisner, K., A. Lyndon, and C. A. Chesla. 2019. "The electronic health record's impact on nurses' cognitive work: An integrative review." International Journal of Nursing Studies 94: 74–84.
Chen, Y., J. Wang, Y. Zhang, X. Cao, et al. 2026. "Latent Profile Analysis and Influencing Factors of Clinical Nurses' Evidence-Based Practice Implementation: A Cross-Sectional Study." Journal of nursing management 2026, no. 1: e8783451. https://doi.org/10.1155/jonm/8783451.
Majid, S., S. Foo, B. Luyt, X. Zhang, et al. 2011. "Adopting evidence-based practice in clinical decision making: nurses' perceptions, knowledge, and barriers." Journal of the Medical Library Association : JMLA 99, no. 3: 229-36. https://doi.org/10.3163/1536-5050.99.3.010.
Mathieson, A., G. Grande, and K. Luker. 2019. "Strategies, facilitators and barriers to implementation of evidence-based practice in community nursing: a systematic mixed-studies review and qualitative synthesis." Primary health care research & development 20: e6. https://doi.org/10.1017/S1463423618000488.
Giesen, J., A. Bakker-Jacobs, A. van Vught, M. Berings, et al. 2024. "What is needed for nurses to work with evidence-based practice? A qualitative study." Contemporary nurse 60, no. 6: 1-14. https://doi.org/10.1080/10376178.2024.2369660.
Mohamed RA, Alhujaily M, Ahmed FA, Nouh WG, Almowafy AA. Nurses' experiences and perspectives regarding evidence-based practice implementation in healthcare context: A qualitative study. Nurs Open. 2024 Jan;11(1):e2080. doi: 10.1002/nop2.2080. PMID: 38268296 PMCID: PMC10790056

### Pharmacy Professionals || 薬剤師 || 약사 || 药师 {p:pharm}

Toklu, H. Z. 2015. "Promoting evidence-based practice in pharmacies." Integrated Pharmacy Research and Practice 4: 127–131. https://doi.org/10.2147/IPRP.S70406.
Burke, M. D., L. B. Savard, A. S. Rubin, and B. Littenberg. 2020. "Barriers and facilitators to use of a clinical evidence technology in the management of skin problems in primary care: insights from mixed methods." Journal of the Medical Library Association : JMLA 108, no. 3: 428-439. https://doi.org/10.5195/jmla.2020.787.
Gilbert, B. W., and B. D. Bissell Turpin. 2025. "Complexities of evidence-based medicine: Challenges for practice and policy development." American journal of health-system pharmacy : AJHP : official journal of the American Society of Health-System Pharmacists 82, no. 6: 359-363. https://doi.org/10.1093/ajhp/zxae253.
Alexa, J. M., M. Richter, and T. Bertsche. 2023. "Enhancing Evidence-Based Pharmacy by Comparing the Quality of Web-Based Information Sources to the EVInews Database: Randomized Controlled Trial With German Community Pharmacists." Journal of medical Internet research 25: e45582. https://doi.org/10.2196/45582.
Hassan, A. H. F., H. E. Barry, and C. M. Hughes. 2025. "Perspectives of patients on the role of general practice pharmacists: a systematic review and meta-synthesis of qualitative studies." BMC primary care 26, no. 1: 90. https://doi.org/10.1186/s12875-025-02787-0.
Mahmoud, M. A., H. A. Fadil, S. H. Omer, M. F. Alsehli, et al. 2025. "Preparedness and barriers to pharmaceutical care among final-year pharmacy students and recent graduates: a cross-sectional study in Saudi Arabia." BMC medical education 25, no. 1: 381. https://doi.org/10.1186/s12909-025-06947-9.
Moullin, J. C., D. Sabater-Hernández, and S. I. Benrimoj. 2016. "Qualitative study on the implementation of professional pharmacy services in Australian community pharmacies using framework analysis." BMC health services research 16, no. 1: 439. https://doi.org/10.1186/s12913-016-1689-7.
Davey, B., D. Lindsay, J. Cousins, and B. Glass. 2023. "Why Didn't They Teach Us This? A Qualitative Investigation of Pharmacist Stakeholder Perspectives of Business Management for Community Pharmacists." Pharmacy (Basel, Switzerland) 11, no. 3 https://doi.org/10.3390/pharmacy11030098.
Bø, K. E., K. H. Halvorsen, A. Y. Le, and E. C. Lehnbom. 2024. "Barriers and facilitators of pharmacists' integration in a multidisciplinary home care team: a qualitative interview study based on the normalization process theory." BMC health services research 24, no. 1: 567. https://doi.org/10.1186/s12913-024-11014-y.

### Allied Health Professionals || リハ・医療技術職 || 재활·보건의료기술직 || 康复与医技人员 {p:allied}

Patel, D., C. Koehmstedt, R. Jones, N. T. Coffey, et al. 2017. "A qualitative study examining methods of accessing and identifying research relevant to clinical practice among rehabilitation clinicians." Journal of multidisciplinary healthcare 10: 429-435. https://doi.org/10.2147/JMDH.S146097.
Mwololo, T. K., B. Olivier, W. M. Karuguti, and J. M. Matheri. 2021. "Attitudes, perceptions and barriers around evidence-based practice in sports physiotherapy in Kenya." The South African journal of physiotherapy 77, no. 1: 1561. https://doi.org/10.4102/sajp.v77i1.1561.
Swinkels, R. A., R. P. van Peppen, H. Wittink, J. W. Custers, et al. 2011. "Current use and barriers and facilitators for implementation of standardised measures in physical therapy in the Netherlands." BMC musculoskeletal disorders 12: 106. https://doi.org/10.1186/1471-2474-12-106.
Lindström, A. C., and S. Bernhardsson. 2018. "Evidence-Based Practice in Primary Care Occupational Therapy: A Cross-Sectional Survey in Sweden." Occupational therapy international 2018: 5376764. https://doi.org/10.1155/2018/5376764.
Nair, S. P., V. P. Panhale, and N. Nair. 2021. "Perceived barriers to evidence-based practice among Physiotherapy students." Journal of education and health promotion 10: 17. https://doi.org/10.4103/jehp.jehp_410_20.
Jasem, Z., D. Dursia, D. Ahmad, and F. Ahmad. 2024. "Perspectives of paediatric occupational therapists on the use of evidence-based practice in Kuwait: a qualitative study." BMJ open 14, no. 12: e086617. https://doi.org/10.1136/bmjopen-2024-086617.
Fristedt S, Areskoug Josefsson K, Kammerlind A. Factors Influencing the Use of Evidence-Based Practice among Physiotherapists and Occupational Therapists in Their Clinical Work. The Internet Journal of Allied Health Sciences and Practice. 2016 Jan 01;14(3), Article 7.

### Patient & Caregiver Perspectives || 患者・介護者の視点 || 환자·돌봄 제공자의 관점 || 患者与照护者视角 {p:patient}

Kentab, B. Y., H. E. Barry, S. A. Al-Aqeel, and C. M. Hughes. 2025. "Barriers and Facilitators to Medicines Use in Patients With Vision Impairment: A Theory-Informed Qualitative Study of Patients and Caregivers." Health expectations : an international journal of public participation in health care and health policy 28, no. 2: e70234. https://doi.org/10.1111/hex.70234.

## Cross-Disciplinary & General Barriers || 職種横断・一般的な障壁 || 직종 공통·일반적 장벽 || 跨专业与一般性障碍

Newman, M., I. Papadopoulos, and J. Sigsworth. 1998. "Barriers to evidence-based practice." Intensive & critical care nursing 14, no. 5: 231-8. https://doi.org/10.1016/s0964-3397(98)80634-4.
Haynes, A., and V. Loblay. 2024. "Rethinking Barriers and Enablers in Qualitative Health Research: Limitations, Alternatives, and Enhancements." Qualitative health research 34, no. 14: 1371-1383. https://doi.org/10.1177/10497323241230890.
Lai, N. M., C. L. Teng, and M. L. Lee. 2010. "The place and barriers of evidence based practice: knowledge and perceptions of medical, nursing and allied health practitioners in malaysia." BMC research notes 3: 279. https://doi.org/10.1186/1756-0500-3-279.
Khan, M. E., E. Jamil, M. Abubakar, A. Javed, et al. 2026. "Driving factors and barriers to irrational antibiotic prescribing in Pakistan: a qualitative study of physicians', pharmacists' and nurses' perspectives in public and private hospitals." BMJ open 16, no. 6: e107828. https://doi.org/10.1136/bmjopen-2025-107828.

# 3 | Communication || コミュニケーション || 커뮤니케이션 || 沟通

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Baniaghil, A. S., S. Ghasemi, M. Rezaei Aval, and N. Behnampour. 2022. "Effect of communication skills training using the Calgary-Cambridge model on interviewing skills among midwifery students: a randomized controlled trial." Iranian Journal of Nursing and Midwifery Research 27, no. 1: 24–29. https://doi.org/10.4103/ijnmr.IJNMR_42_20.
Haverfield, M. C., A. Tierney, R. Schwartz, M. B. Bass, et al. 2020. "Can patient-provider interpersonal interventions achieve the quadruple aim of healthcare? A systematic review." Journal of General Internal Medicine 35, no. 7: 2107–2117. https://doi.org/10.1007/s11606-019-05525-2.
O'Daniel, M., and A. H. Rosenstein. 2008. "Professional Communication and Team Collaboration." In Patient Safety and Quality: An Evidence-Based Handbook for Nurses, edited by R. G. Hughes. Rockville, MD: Agency for Healthcare Research and Quality.
Nembhard IM, David G, Ezzeddine I, Betts D, Radin J. A systematic review of research on empathy in health care. Health Services Research. 2023 Apr;58(2):250-263. DOI: 10.1111/1475-6773.14016. PMID: 35765156; PMCID: PMC10012244.
Haverfield, M. C., R. Victor, B. Flores, J. Altamirano, et al. 2022. "Qualitatively exploring the impact of a relationship-centered communication skills training program in improving patient perceptions of care." PEC innovation 1: 100069. https://doi.org/10.1016/j.pecinn.2022.100069.

## Field Challenges & Barriers by Profession || 職種別の現場の課題と障壁 || 직종별 현장의 과제와 장벽 || 各职种的一线挑战与障碍

### Physicians and Multidisciplinary Teams || 医師・多職種チーム || 의사·다학제팀 || 医生与多学科团队 {f:phys,multi}

Kamal, S., A. Al-Hassan, M. El-Sherbiny, et al. 2024. "Health professionals' views and experiences of breaking bad news in the Eastern Mediterranean Region: a scoping review." BMC Palliative Care 23, no. 1: 18.
Monden, K. R., L. Gentry, and T. R. Cox. 2016. "Delivering bad news to patients." Proceedings (Baylor University. Medical Center) 29, no. 1: 101–102. https://doi.org/10.1080/08998280.2016.11929380.
Rawlinson, C., T. Carron, C. Cohidon, C. Arditi, et al. 2021. "An Overview of Reviews on Interprofessional Collaboration in Primary Care: Barriers and Facilitators." International journal of integrated care 21, no. 2: 32. https://doi.org/10.5334/ijic.5589.
Ha, J. F., and N. Longnecker. 2010. "Doctor-patient communication: a review." Ochsner journal 10, no. 1: 38-43.
Armoogum, J., and C. Cuthbert. 2026. "Cancer survivors living with chronic pain: patient and healthcare professional perspectives and current recommendations." Current opinion in oncology 38, no. 4: 269-274. https://doi.org/10.1097/CCO.0000000000001240.
Ekberg, S., N. K. Bradford, A. Herbert, S. Danby, et al. 2018. "Healthcare Users' Experiences of Communicating with Healthcare Professionals About Children Who Have Life-Limiting Conditions: A Qualitative Systematic Review." Journal of palliative medicine 21, no. 10: 1518-1528. https://doi.org/10.1089/jpm.2017.0422.
Dietl, J. E., C. Derksen, F. M. Keller, and S. Lippke. 2023. "Interdisciplinary and interprofessional communication intervention: How psychological safety fosters communication and increases patient safety." Frontiers in psychology 14: 1164288. https://doi.org/10.3389/fpsyg.2023.1164288.
Tiwary, A., A. Rimal, B. Paudyal, K. R. Sigdel, et al. 2019. "Poor communication by health care professionals may lead to life-threatening complications: examples from two case reports." Wellcome open research 4: 7. https://doi.org/10.12688/wellcomeopenres.15042.1.
Stewart, M. A.. 2018. "Stuck in the middle: the impact of collaborative interprofessional communication on patient expectations." Shoulder & elbow 10, no. 1: 66-72. https://doi.org/10.1177/1758573217735325.
Sorensen, D., S. Cristancho, M. Soh, and L. Varpio. 2024. "Team Stress and Its Impact on Interprofessional Teams: A Narrative Review." Teaching and learning in medicine 36, no. 2: 163-173. https://doi.org/10.1080/10401334.2022.2163400.
Pun, J. K., E. A. Chan, K. A. Murray, D. Slade, et al. 2017. "Complexities of emergency communication: clinicians' perceptions of communication challenges in a trilingual emergency department." Journal of clinical nursing 26, no. 21-22: 3396-3407. https://doi.org/10.1111/jocn.13699.
Degabriel D, Petrino R, Frau ED, Uccella L. Factors influencing patients' experience of communication with the medical team of the emergency department. Internal and Emergency Medicine. 2023 Oct;18(7):2045-2051. DOI: 10.1007/s11739-023-03298-5. PMID: 37142863; PMCID: PMC10543488.
Afzal, N., A. A. H. Merchant, N. Q. Shaikh, A. A. Noorali, et al. 2024. "Patient-resident physician communication - a qualitative study to assess the current state, challenges and possible solutions." BMC health services research 24, no. 1: 917. https://doi.org/10.1186/s12913-024-11387-0.

### Nursing Professionals || 看護職 || 간호직 || 护理人员 {p:nurse}

Alharazi, R. M., R. J. Abdulrahim, A. H. Mazuzah, R. M. Almutairi, et al. 2025. "Barriers and factors affecting nursing communication when providing patient care in Jeddah." Clinics and Practice 15, no. 1: 19. https://doi.org/10.3390/clinpract15010019.
Mahvar, T., N. Mohammadi, N. Seyedfatemi, and A. Vedadhir. 2020. "Interpersonal communication among critical care nurses: an ethnographic study." Journal of Caring Sciences 9, no. 1: 57–64. https://doi.org/10.34172/jcs.2020.009.
Rosenzweig, M. Q. 2012. "Breaking bad news: A guide for effective and empathetic communication." Nurse Practitioner 37, no. 2: 1–4. https://doi.org/10.1097/01.NPR.0000408626.24599.9e.
Kornhaber, R., K. Walsh, J. Duff, and K. Walker. 2016. "Enhancing adult therapeutic interpersonal relationships in the acute health care setting: an integrative review." Journal of multidisciplinary healthcare 9: 537-546. https://doi.org/10.2147/JMDH.S116957.
Wahyuni, S., M. S. N. Gautama, and T. Y. Simamora. 2023. "A Literature Review of Nurses Challenges and Barriers in Assisting Patients and Families Facing Breaking Bad News." Indian journal of palliative care 29, no. 3: 243-249. https://doi.org/10.25259/IJPC_128_2023.
Agnese, B. L., A. C. Q. G. Daniel, and R. B. D. S. Pedrosa. 2022. "Communicating bad news in the practice of nursing: an integrative review." Einstein (Sao Paulo, Brazil) 20: eRW6632. https://doi.org/10.31744/einstein_journal/2022RW6632.
Vatn, L., and B. M. Dahl. 2022. "Interprofessional collaboration between nurses and doctors for treating patients in surgical wards." Journal of interprofessional care 36, no. 2: 186-194. https://doi.org/10.1080/13561820.2021.1890703.
Ghiyasvandian, S., M. Zakerimoghadam, and H. Peyravi. 2014. "Nurse as a facilitator to professional communication: a qualitative study." Global journal of health science 7, no. 2: 294-303. https://doi.org/10.5539/gjhs.v7n2p294.
Younas, A., S. Inayat, A. Dal Molin, and A. Durante. 2023. "Nurses' Challenges to Developing Interpersonal Relationships During Integrated Care for Complex Patients." Western journal of nursing research 45, no. 10: 894-901. https://doi.org/10.1177/01939459231189789.
Moghadam, M. P., A. Nasiri, and G. Mahmoudirad. 2025. "Patient communication as the missing item in clinical nursing education: A qualitative content analysis study." Journal of education and health promotion 14: 22. https://doi.org/10.4103/jehp.jehp_1686_23.

### Pharmacy Professionals || 薬剤師 || 약사 || 药师 {p:pharm}

Lau, Y., T. Ong, and J. Li. 2024. "Communication barriers faced by pharmacists when managing patients with hypertension in a primary care team: a qualitative study." International Journal of Clinical Pharmacy 46, no. 3: 555–564.
Jairoun, A. A., S. S. Al-Hemyari, M. Shahwan, G. R. Alnuaimi, et al. 2024. "Capturing pharmacists' perspectives on the value, risks, and applications of ChatGPT in pharmacy practice: A qualitative study." Exploratory research in clinical and social pharmacy 16: 100518. https://doi.org/10.1016/j.rcsop.2024.100518.
Kerr, A., J. Strawbridge, C. Kelleher, F. Mertens, et al. 2017. "How can pharmacists develop patient-pharmacist communication skills? A realist review protocol." Systematic reviews 6, no. 1: 14. https://doi.org/10.1186/s13643-016-0396-0.
Cherecheș, M. C., H. Finta, R. M. Prisada, and A. Rusu. 2024. "Pharmacists' Professional Satisfaction and Challenges: A Netnographic Analysis of Reddit and Facebook Discussions." Pharmacy (Basel, Switzerland) 12, no. 5 https://doi.org/10.3390/pharmacy12050155.
Ilardo, M. L., and A. Speciale. 2020. "The Community Pharmacist: Perceived Barriers and Patient-Centered Care Communication." International journal of environmental research and public health 17, no. 2 https://doi.org/10.3390/ijerph17020536.

### Mental Health Professionals || 精神保健専門職 || 정신건강 전문가 || 精神卫生专业人员 {p:psych}

Beyene, L. S., E. B. Strand, A. R. Misund, H. E. Barder, et al. 2024. "Conceptualizing healthcare professionals' relational competence in mental healthcare: an integrative review." International Journal of Nursing Studies Advances 7: 100266. https://doi.org/10.1016/j.ijnsa.2024.100266.
Nordby, K., M. Solheim, and B. S. Hansen. 2024. "Conceptualizing healthcare professionals' relational competence in mental healthcare: an integrative review." BMC Health Services Research 24, no. 1: 1123.
Albright, K., E. I. Navarro, I. Jarad, M. R. Boyd, et al. 2022. "Communication strategies to facilitate the implementation of new clinical practices: a qualitative study of community mental health therapists." Translational behavioral medicine 12, no. 2: 324-334. https://doi.org/10.1093/tbm/ibab139.
Spitzer, E. G., J. Kaitz, G. M. Fix, K. L. L. Harvey, et al. 2023. "Developing Relational Coordination: A Qualitative Study of Outpatient Mental Health Teams." Administration and policy in mental health 50, no. 4: 591-602. https://doi.org/10.1007/s10488-023-01261-2.
McBeath, A. G., S. du Plock, and S. Bager-Charleson. 2020. "The challenges and experiences of psychotherapists working remotely during the coronavirus pandemic." Counselling and psychotherapy research 20, no. 3: 394-405. https://doi.org/10.1002/capr.12326.
Iovoli, F., C. Flückiger, J. M. Gómez Penedo, J. H. Engelhardt, et al. 2024. "The relationship between interpersonal problems and therapeutic alliance in psychotherapy: A three-level mixed-effects meta-analysis." Psychotherapy (Chicago, Ill.) 61, no. 3: 198-211. https://doi.org/10.1037/pst0000534.

# 4 | Interprofessional Collaboration || 多職種連携（IPC） || 전문직 간 협력(IPC) || 跨专业合作（IPC）

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Canadian Interprofessional Health Collaborative (CIHC). 2010. "A National Interprofessional Competency Framework." Vancouver: CIHC.
Centre for Interprofessional Education, Toronto Academic Health Science Network. 2017. "Interprofessional Care Competency Framework and Team Assessment Toolkit." Toronto: Centre for Interprofessional Education.
Interprofessional Education Collaborative (IPEC). 2016. "Core Competencies for Interprofessional Collaborative Practice: 2016 Update." Washington, DC: Interprofessional Education Collaborative.
O'Daniel, M., and A. H. Rosenstein. 2008. "Professional Communication and Team Collaboration." In Patient Safety and Quality: An Evidence-Based Handbook for Nurses, edited by R. G. Hughes. Rockville, MD: Agency for Healthcare Research and Quality.
Thistlethwaite, J. E., D. Forman, L. R. Matthews, G. D. Rogers, et al. 2014. "Competencies and frameworks in interprofessional education: a comparative analysis." Academic Medicine 89, no. 6: 869–875. https://doi.org/10.1097/ACM.0000000000000249.
Thistlethwaite, J. 2012. "Interprofessional education: A review of context, learning and the research agenda." Medical Education 46, no. 1: 58–70. https://doi.org/10.1111/j.1365-2923.2011.04143.x.

## Field Challenges & Barriers || 現場の課題と障壁 || 현장의 과제와 장벽 || 一线挑战与障碍

El-Awaisi, A., O. H. Yakti, A. M. Elboshra, K. H. Jasim, et al. 2024. "Facilitators and barriers to interprofessional collaboration among health professionals in primary healthcare centers in Qatar: a qualitative exploration using the 'Gears' model." BMC Primary Care 25, no. 1: 316. https://doi.org/10.1186/s12875-024-02537-8.
Etherington, C., J. K. Burns, S. Kitto, J. C. Brehaut, et al. 2021. "Barriers and enablers to effective interprofessional teamwork in the operating room: a qualitative study using the theoretical domains framework." PLoS One 16, no. 4: e0249576. https://doi.org/10.1371/journal.pone.0249576.
Fewster-Thuente, L. 2015. "Working together toward a common goal: a grounded theory of nurse-physician collaboration." Medsurg Nursing 24, no. 5: 356–362.
Hall, P. 2005. "Interprofessional teamwork: Professional cultures as barriers." Journal of Interprofessional Care 19, no. Suppl 1: 188–196. https://doi.org/10.1080/13561820500081745.
Hammick, M., D. Freeth, I. Koppel, S. Reeves, and H. Barr. 2007. "A best evidence systematic review of interprofessional education: BEME Guide No. 9." Medical Teacher 29, no. 8: 735–751.
Jabbar, S., H. S. Noor, G. A. Butt, S. M. Zahra, et al. 2023. "A cross-sectional study on attitude and barriers to interprofessional collaboration in hospitals among health care professionals." Inquiry 60: 469580231171014. https://doi.org/10.1177/00469580231171014.
Jensen, C. B., A. Iversen, M. A. Dahlgren, and B. Norbye. 2024. "'Everyone who wants to be able to practice on me' – patients' views on interprofessional clinical placement." BMC Medical Education 24, no. 1: 255. https://doi.org/10.1186/s12909-024-05194-8.
Karukivi, J., H. Leino-Kilpi, L. Kuokkanen, H. Kuusisto, et al. 2023. "Association between work empowerment and interprofessional collaboration among health care professionals working in cancer care settings." Journal of Interprofessional Care 37, no. 1: 21–28. https://doi.org/10.1080/13561820.2021.1997949.
Kvarnström, S. 2008. "Difficulties in collaboration: a critical incident study of interprofessional healthcare teamwork." Journal of Interprofessional Care 22, no. 2: 191–203. https://doi.org/10.1080/13561820701760600.
Lingard, L., S. Espin, S. Whyte, G. Regehr, et al. 2004. "Communication failures in the operating room: an observational classification of recurrent types and effects." Quality and Safety in Health Care 13, no. 5: 330–334. https://doi.org/10.1136/qshc.2003.008425.
Reeves, S., F. Pelone, R. Harrison, J. Goldman, and M. Zwarenstein. 2017. "Interprofessional collaboration to improve professional practice and healthcare outcomes." Cochrane Database of Systematic Reviews 6, no. 6: CD000072. https://doi.org/10.1002/14651858.CD000072.pub3.
Reeves, S., S. Lewin, S. Espin, and M. Zwarenstein. 2010. Interprofessional Teamwork for Health and Social Care. Oxford: Wiley-Blackwell.
Samuriwo, R. 2022. "Interprofessional collaboration—Time for a new theory of action?" Frontiers in Medicine 9: 876715. https://doi.org/10.3389/fmed.2022.876715.
Sangaleti, C., M. C. Schveitzer, M. Peduzzi, E. L. C. P. Zoboli, and C. B. Soares. 2017. "Experiences and shared meaning of teamwork and interprofessional collaboration among health care professionals in primary health care settings: a systematic review." JBI Database of Systematic Reviews and Implementation Reports 15, no. 11: 2723–2788. https://doi.org/10.11124/JBISRIR-2016-003016.
Sherman, D. W., M. Flowers, A. Rodriguez Alfano, F. Alfonso, et al. 2020. "An integrative review of interprofessional collaboration in health care: building the case for university support and resources and faculty engagement." Healthcare (Basel) 8, no. 4: 418. https://doi.org/10.3390/healthcare8040418.
Steihaug, S., A. K. Johannessen, M. Ådnanes, B. Paulsen, and R. Mannion. 2016. "Challenges in achieving collaboration in clinical practice: the case of Norwegian health care." International Journal of Integrated Care 16, no. 3: 3. https://doi.org/10.5334/ijic.2217.
Supper, I., O. Catala, M. Lustman, C. Chemla, et al. 2015. "Interprofessional collaboration in primary health care: a review of facilitators and barriers perceived by involved actors." Journal of Public Health (Oxf) 37, no. 4: 716–727. https://doi.org/10.1093/pubmed/fdu102.
Suter, E., J. Arndt, N. Arthur, J. Parboosingh, et al. 2009. "Role understanding and effective communication as core competencies for collaborative practice." Journal of Interprofessional Care 23, no. 1: 41–51.
Wei, H., P. Horns, S. F. Sears, K. Huang, et al. 2022. "A systematic meta-review of systematic reviews about interprofessional collaboration: facilitators, barriers, and outcomes." Journal of Interprofessional Care 36, no. 5: 735–749. https://doi.org/10.1080/13561820.2021.1973975.
Perron, D., K. Parent, I. Gaboury, and D. A. Bergeron. 2022. "Characteristics, barriers and facilitators of initiatives to develop interprofessional collaboration in rural and remote primary healthcare facilities: a scoping review." Rural and remote health 22, no. 4: 7566. https://doi.org/10.22605/RRH7566.
Moale, A. C., V. Razskazovskiy, K. J. Rak, A. Richardson, et al. 2026. "Clinicians' Perspectives on Strengthening Interprofessional Teamwork to Support Surrogate Decision-Makers of Critically Ill Patients in ICUs." Critical care explorations 8, no. 1: e1365. https://doi.org/10.1097/CCE.0000000000001365.
Bochatay, N., M. Ju, M. Nottingham, L. Tsang, et al. 2026. "Modeling interprofessional collaboration: an instrumental case study of interprofessional co-facilitation in simulation-based team training." Journal of interprofessional care : 1-9. https://doi.org/10.1080/13561820.2026.2674988.
Irajpour, A., and M. Alavi. 2015. "Health professionals' experiences and perceptions of challenges of interprofessional collaboration: Socio-cultural influences of IPC." Iranian journal of nursing and midwifery research 20, no. 1: 99-104.
Geese, F., and K. U. Schmitt. 2023. "Interprofessional Collaboration in Complex Patient Care Transition: A Qualitative Multi-Perspective Analysis." Healthcare (Basel, Switzerland) 11, no. 3 https://doi.org/10.3390/healthcare11030359.
L Gleeson, L., G. L. O'Brien, D. O'Mahony, and S. Byrne. 2023. "Interprofessional communication in the hospital setting : a systematic review of the qualitative literature." Journal of interprofessional care 37, no. 2: 203-213. https://doi.org/10.1080/13561820.2022.2028746.
Escobar Zuluaga, L. J., M. L. M. Ruiz Brunner, E. Cuestas, E. Cieri, et al. 2026. "Development of an assessment protocol to operationalize the core set of the International Classification of Functioning for people with cerebral palsy." Archivos argentinos de pediatria 124, no. 1: e202410550. https://doi.org/10.5546/aap.2024-10550.eng.

# 5 | Professionalism and Ethics || プロフェッショナリズムと倫理 || 프로페셔널리즘과 윤리 || 职业素养与伦理

## Core Competency, Frameworks, and Ethical Practice || 中核コンピテンシー・枠組み・倫理的実践 || 핵심 역량·프레임워크·윤리적 실천 || 核心能力、框架与伦理实践

ABIM Foundation, ACP–ASIM Foundation, and European Federation of Internal Medicine. 2002. "Medical professionalism in the new millennium: a physician charter." Annals of Internal Medicine 136, no. 3: 243-246. https://doi.org/10.7326/0003-4819-136-3-200202050-00012.
Alipour, F., et al. 2020. "Personal factors affecting medical professionalism: a qualitative study in Iran." Journal of Medical Ethics and History of Medicine 13, no. 3: 3.
Egener, B. E., D. J. Mason, W. J. McDonald, S. Okun, et al. 2017. "Charter on professionalism for health care organizations." Academic Medicine 92, no. 8: 1091-1099. https://doi.org/10.1097/ACM.0000000000001561.
Ewuoso, C., S. Hall, and K. Dierickx. 2021. "How do healthcare professionals respond to ethical challenges regarding information management? A review of empirical studies." Global Bioethics 32, no. 1: 67-84.
Gotowiec, S., and E. Cantor-Graae. 2017. "The burden of choice: healthcare professionals' reactions to ethical challenges in humanitarian crises." Journal of International Humanitarian Action 2, no. 2.
Maitra, A., et al. 2021. "Balancing forces: medical students' reflections on professionalism challenges and professional identity formation." Family Medicine 53, no. 3: 200-206.
Buchbinder, M., Browne, A., Berlinger, N., Jenkins, T., & Buchbinder, L. (2024). Moral Stress and Moral Distress: Confronting Challenges in Healthcare Systems under Pressure. The American Journal of Bioethics, 24(12), 8–22.
Tsugawa Y, et al. "Introducing the Professionalism Mini-Evaluation Exercise (P-MEX) in Japan: Results from a Multicenter, Cross-Sectional Study." Academic Medicine 2011;86(8):1026–31. doi:10.1097/ACM.0b013e3182222ba0
Spranzi, M. 2016. "When patients' values challenge professional integrity: which way out?" Perspectives in Biology and Medicine 59, no. 3: 326-336.
Crowe, L., and C.M. Riley. 2024. "Bad behavior in healthcare: an insidious threat to patients, staff, and organizations." Current opinion in cardiology 39(4) :331-337. https://doi.org/10.1097/HCO.0000000000001139.
McMullan, R.D., K. Churruca, P. Hibbert, L. Li, et al.. 2024. "Co-worker unprofessional behaviour and patient safety risks: an analysis of co-worker reports across eight Australian hospitals." International journal for quality in health care : journal of the International Society for Quality in Health Care 36(2). https://doi.org/10.1093/intqhc/mzae030.
Fujimoto, M., M. Shimamura, H. Miyazaki, and K. Inaba. 2023. "Development of a Psychological Scale for Measuring Disruptive Clinician Behavior." Journal of patient safety 19(8) :564-572. https://doi.org/10.1097/PTS.0000000000001162.
Moreno-Leal, P., C. Leal-Costa, J.L. Díaz-Agea, I. Jiménez-Ruiz, et al.. 2021. "Disruptive Behavior at Hospitals and Factors Associated to Safer Care: A Systematic Review." Healthcare (Basel, Switzerland) 10(1). https://doi.org/10.3390/healthcare10010019.
Moreno-Leal, P., C. Leal-Costa, J.L. Díaz-Agea, M.L.Á. Castaño-Molina, et al.. 2024. "Disruptive Behavior and Factors Associated with Patient Safety Climate: A Cross-Sectional Study of Nurses' and Physicians' Perceptions." Journal of nursing management 2024 :5568390. https://doi.org/10.1155/2024/5568390.
Small, C.R., S. Porterfield, and G. Gordon. 2015. "Disruptive behavior within the workplace." Applied nursing research : ANR 28(2) :67-71. https://doi.org/10.1016/j.apnr.2014.12.002.
Aunger, J.A., J. Maben, R. Abrams, J.M. Wright, et al.. 2023. "Drivers of unprofessional behaviour between staff in acute care hospitals: a realist review." BMC health services research 23(1) :1326. https://doi.org/10.1186/s12913-023-10291-3.
Dabekaussen, K.F.A.A., R.A. Scheepers, E. Heineman, A.L. Haber, et al.. 2023. "Health care professionals' perceptions of unprofessional behaviour in the clinical workplace." PloS one 18(1) :e0280444. https://doi.org/10.1371/journal.pone.0280444.
Walrath, J.M., D. Dang, and D. Nyberg. 2010. "Hospital RNs' experiences with disruptive behavior: a qualitative study." Journal of nursing care quality 25(2) :105-16. https://doi.org/10.1097/NCQ.0b013e3181c7b58e.
Aunger, J., J. Maben, and J.I. Westbrook. 2025. "How unprofessional behaviours between healthcare staff threaten patient care and safety." Expert review of pharmacoeconomics & outcomes research 25(5) :635-638. https://doi.org/10.1080/14737167.2025.2460518.
Abate, L.E., and L. Greenberg. 2023. "Incivility in medical education: a scoping review." BMC medical education 23(1) :24. https://doi.org/10.1186/s12909-022-03988-2.
Atashzadeh, S.h.o.o.r.i.d.e.h.F., S. Moosavi, and A. Balouchi. 2021. "Incivility toward nurses: a systematic review and meta-analysis." Journal of medical ethics and history of medicine 14 :15. https://doi.org/10.18502/jmehm.v14i15.7670.
Maben, J., J.A. Aunger, R. Abrams, J.M. Wright, et al.. 2023. "Interventions to address unprofessional behaviours between staff in acute care: what works for whom and why? A realist review." BMC medicine 21(1) :403. https://doi.org/10.1186/s12916-023-03102-3.
Peisah, C., B. Williams, P. Hockey, P. Lees, et al.. 2023. "Pragmatic Systemic Solutions to the Wicked and Persistent Problem of the Unprofessional Disruptive Physician in the Health System." Healthcare (Basel, Switzerland) 11(17). https://doi.org/10.3390/healthcare11172455.
Morrison, J., M. Hasselblad, R. Kleinpell, R. Buie, et al.. 2020. "The Disruptive bEhavior manageMEnt ANd prevention in hospitalized patients using a behaviORal intervention team (DEMEANOR) study protocol: a pragmatic, cluster, crossover trial." Trials 21(1) :417. https://doi.org/10.1186/s13063-020-04278-2.
Hicks, S., and C. Stavropoulou. 2022. "The Effect of Health Care Professional Disruptive Behavior on Patient Care: A Systematic Review." Journal of patient safety 18(2) :138-143. https://doi.org/10.1097/PTS.0000000000000805.
Lewis, C.. 2023. "The impact of interprofessional incivility on medical performance, service and patient care: a systematic review." Future healthcare journal 10(1) :69-77. https://doi.org/10.7861/fhj.2022-0092.
Westbrook, J., N. Sunderland, L. Li, A. Koyama, et al.. 2021. "The prevalence and impact of unprofessional behaviour among hospital workers: a survey in seven Australian hospitals." The Medical journal of Australia 214(1) :31-37. https://doi.org/10.5694/mja2.50849.
Cullati, S., N. Bochatay, F. Maître, T. Laroche, et al.. 2019. "When Team Conflicts Threaten Quality of Care: A Study of Health Care Professionals' Experiences and Perceptions." Mayo Clinic proceedings. Innovations, quality & outcomes 3(1) :43-51. https://doi.org/10.1016/j.mayocpiqo.2018.11.003.
Petrovic, M.A., and A.T. Scholl. 2018. "Why We Need a Single Definition of Disruptive Behavior." Cureus 10(3) :e2339. https://doi.org/10.7759/cureus.2339.
Aunger, J.A., R. Abrams, J.I. Westbrook, J.M. Wright, et al.. 2024. "Why do acute healthcare staff behave unprofessionally towards each other and how can these behaviours be reduced? A realist review." Health and social care delivery research 12(25) :1-195. https://doi.org/10.3310/PAMV3758.

## Patient Safety and Dignity || 患者安全と尊厳 || 환자안전과 존엄 || 患者安全与尊严

Peičius, E., G. Urbonas, W.D. Harrison, A. Urbonienė, et al.. 2022. "Dignity Violations and Barriers to Dignity Assurance for Terminally Ill Patients at the End of Life: A Cross-Sectional Analysis." Medicina (Kaunas, Lithuania) 58(2). https://doi.org/10.3390/medicina58020294.
Perez, B., S.A. Knych, S.J. Weaver, A. Liberman, et al.. 2014. "Understanding the barriers to physician error reporting and disclosure: a systemic approach to a systemic problem." Journal of patient safety 10(1) :45-51. https://doi.org/10.1097/PTS.0b013e31829e4b68.
Stephen, E.k.p.e.n.y.o.n.g.M., M. Nyashanu, C. Ossey-Nweze, and L. Serrant. 2021. "Exploring the perceptions of dignity among patients and nurses in hospital and community settings: an integrative review." Journal of research in nursing : JRN 26(6) :517-537. https://doi.org/10.1177/1744987121997890.
Cheraghi, M.A., A. Manookian, and N.a.s.r.a.b.a.d.i.A. Nikbakht. 2015. "Patients' lived experiences regarding maintaining dignity." Journal of medical ethics and history of medicine 8 :6.
Partel, A.r.a.u.j.o.J., H. Luz, R. Melo, S.o.n.C. Van, et al.. 2026. "Cross-cultural validation of the Refusal of Care Informant Scale (RoCIS) for older adults with dementia in the European Portuguese population." Aging & mental health 30(7) :1486-1499. https://doi.org/10.1080/13607863.2026.2617476.
Cooper, S. 2010. "Taking no for an answer-refusal of life-sustaining treatment." The virtual mentor : VM 12(6) :444-9. https://doi.org/10.1001/virtualmentor.2010.12.6.ccas2-1006.
Garcia, C.L., L.C. Abreu, J.L.S. Ramos, C.F.D. Castro, et al.. 2019. "Influence of Burnout on Patient Safety: Systematic Review and Meta-Analysis." Medicina (Kaunas, Lithuania) 55(9). https://doi.org/10.3390/medicina55090553.
Sun, Q., G. Tang, W. Xu, and S. Zhang. 2024. "Social media stethoscope: unraveling how doctors' social media behavior affects patient adherence and treatment outcome." Frontiers in public health 12 :1459536. https://doi.org/10.3389/fpubh.2024.1459536.

## Professionalism in Medical Education and Training || 医療者教育・研修におけるプロフェッショナリズム || 보건의료 교육·수련에서의 프로페셔널리즘 || 医学教育与培训中的职业素养 {f:student}

Abate, L.E., and L. Greenberg. 2023. "Incivility in medical education: a scoping review." BMC medical education 23(1) :24. https://doi.org/10.1186/s12909-022-03988-2.
Atashzadeh, S.h.o.o.r.i.d.e.h.F., S. Moosavi, and A. Balouchi. 2021. "Incivility toward nurses: a systematic review and meta-analysis." Journal of medical ethics and history of medicine 14 :15. https://doi.org/10.18502/jmehm.v14i15.7670.
Slade, C., K. McCutcheon, N. Devlin, C. Dalais, et al.. 2023. "A Scoping Review of eProfessionalism in Healthcare Education Literature." American journal of pharmaceutical education 87(11) :100124. https://doi.org/10.1016/j.ajpe.2023.100124.
Yavari, N., F. Asghari, Z. Shahvari, S. Nedjat, et al.. 2021. "Developing a comprehensive tool to assess professional attitude among physicians and medical students." Journal of medical ethics and history of medicine 14 :27. https://doi.org/10.18502/jmehm.v14i27.8283.
Song, X., and M.J. Willy. 2024. "Exploring Unprofessional Behaviors and Biased Perceptions in the Clinical Environment: Students' Perspectives." Medical science educator 34(5) :1049-1057. https://doi.org/10.1007/s40670-024-02087-9.
Noreen, H., R. Yasmeen, and S.A. Mohammad. 2024. "Factors leading to lapses in professional behaviour of Gynae residents in Pakistan: a study reflecting through the lenses of patients and family, consultants and residents." BMC medical education 24(1) :611. https://doi.org/10.1186/s12909-024-05509-9.
Keshmiri, F., and M. Raadabadi. 2023. "Perception and engagement in unprofessional behaviors of medical students and residents: a mixed-method study." BMC primary care 24(1) :191. https://doi.org/10.1186/s12875-023-02153-y.
Puschel, K., P. Repetto, M. Bernales, J. Barros, et al.. 2017. "'In our own words': Defining medical professionalism from a Latin American perspective." Education for health (Abingdon, England) 30(1) :11-18. https://doi.org/10.4103/efh.EfH_4_16.
Shaw, M.K., C.E. Rees, N.B. Andersen, L.F. Black, et al.. 2018. "Professionalism lapses and hierarchies: A qualitative analysis of medical students' narrated acts of resistance." Social science & medicine (1982) 219 :45-53. https://doi.org/10.1016/j.socscimed.2018.10.009.
Sibbald, M., U. Sheth, N. Last, A. Keuhl, et al.. 2025. "Professionalism lapses in health professions training: Navigating the 'Yellow Card' moments for transformative learning." Medical education 59(4) :418-427. https://doi.org/10.1111/medu.15540.
Brennan, N., T. Price, J. Archer, and J. Brett. 2020. "Remediating professionalism lapses in medical students and doctors: A systematic review." Medical education 54(3) :196-204. https://doi.org/10.1111/medu.14016.
Ginsburg, S., G. Regehr, D. Stern, and L. Lingard. 2002. "The anatomy of the professional lapse: bridging the gap between traditional frameworks and students' perceptions." Academic medicine : journal of the Association of American Medical Colleges 77(6) :516-22. https://doi.org/10.1097/00001888-200206000-00007.
Flier, L.A., J.B. Richards, M.R. Hacker, A. Hovaguimian, et al.. 2023. "'Should I Say Something?': A Simulation Curriculum on Addressing Lapses in Professionalism to Improve Patient Safety." MedEdPORTAL : the journal of teaching and learning resources 19 :11359. https://doi.org/10.15766/mep_2374-8265.11359.

## Wellbeing, Burnout, and Systemic Challenges || ウェルビーイング・バーンアウト・システム上の課題 || 웰빙·번아웃·시스템상의 과제 || 身心健康、职业倦怠与系统性挑战

Vm, A.E., A. M, I. Thozhanenjan, A. Bhandari, et al.. 2025. "The Mental Health Challenges of Medical Postgraduates in Chengalpattu District, Tamil Nadu: Are they being Educated or Exploited?." Cureus 17(1) :e77157. https://doi.org/10.7759/cureus.77157.
Fan, Z., X. Shi, M. Xu, and H. Wen. 2024. "The Chinese version of Defensive Medicine Scale (DMS): reliability and validity test among physicians." BMC psychology 12(1) :462. https://doi.org/10.1186/s40359-024-01957-6.
Morley, G., D.J. Copley, R. Field, M. Zelinsky, et al.. 2022. "RESPONDER: A qualitative study of ethical issues faced by critical care nurses during the COVID-19 pandemic." Journal of nursing management 30(7) :2403-2415. https://doi.org/10.1111/jonm.13792.
Chatten, F., and S. Burch. 2025. "Examining professional identity in newly integrated care teams." Journal of health organization and management 39(8) :1933-1948. https://doi.org/10.1108/JHOM-09-2024-0387.

# 6 | Leadership and Management || リーダーシップとマネジメント || 리더십과 관리 || 领导力与管理

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Davidson, P. L., R. Azziz, J. Morrison, J. Rocha, et al. 2012. "Identifying and developing leadership competencies in health research organizations: a pilot study." Journal of Health Administration Education 29, no. 2: 135–154.
Day, D. V., J. W. Fleenor, L. E. Atwater, R. E. Sturm, et al. 2014. "Leadership development: a review in context." The Leadership Quarterly 25, no. 1: 63–82.
Galli, F., C. Cavicchi, E. Bruni, et al. 2020. "Leadership styles and outcomes in healthcare settings: a systematic review." Frontiers in Psychology 11: 2148. https://doi.org/10.3389/fpsyg.2020.02148.
Hargett, C. W., J. P. Doty, J. N. Hauck, A. M. B. Webb, et al. 2017. "Developing a model for effective leadership in healthcare: a concept mapping approach." Journal of Healthcare Leadership 9: 69–78. https://doi.org/10.2147/JHL.S141664.
Like, R. L., D. Williams, and M. King. 2018. "Promoting diversity and inclusion in healthcare leadership." Journal of Healthcare Management 63, no. 4: 250–257.
Weekes, A., M. Britland, C. Saha, et al. 2025. "Development of a Competency Framework for Medical Affairs Professionals in Australasia." Pharmaceutical Medicine 38, no. 6: 441-451. https://doi.org/10.1007/s40290-025-00585-8.
West, M., K. Armit, L. Loewenthal, R. Eckert, et al. 2015. Leadership and leadership development in healthcare: the evidence base. London: The King's Fund.
Smith, K., and M. Bhavsar. 2021. "A new era of health leadership." Healthcare management forum 34(6): 332-335. https://doi.org/10.1177/08404704211040817.
Spanos, S., E. Leask, R. Patel, M. Datyner, et al. 2024. "Healthcare leaders navigating complexity: a scoping review of key trends in future roles and competencies." BMC medical education 24(1): 720. https://doi.org/10.1186/s12909-024-05689-4.
Sriharan, A., N. Sekercioglu, C. Mitchell, S. Senkaiahliyan, et al. 2024. "Leadership for AI Transformation in Health Care Organization: Scoping Review." Journal of medical Internet research 26: e54556. https://doi.org/10.2196/54556.
Chubaci, E.F., C.D.D.S. Costa, N.e.t.o.M.F.D. Santos, S.a.n.t.o.s.E.R. Dos, et al. 2024. "Development of Leadership Skills in Medical Education: Protocol for a Scoping Review." JMIR research protocols 13: e62810. https://doi.org/10.2196/62810.
Jaramillo-Restrepo, V., J.E. Losee, G.M. Bump, M. Bison-Huckaby, et al. 2024. "Educating Our Future Medical Leaders: An Innovative Longitudinal Course Across Surgical and Medical Specialties in Graduate Education." Journal of healthcare leadership 16: 255-262. https://doi.org/10.2147/JHL.S468061.
Lerman, C., and J.L. Jameson. 2018. "Leadership Development in Medicine." The New England journal of medicine 378(20): 1862-1863. https://doi.org/10.1056/NEJMp1801610.
Alwazzan, L. 2024. "Leadership Development in Medicine: A Review." Cureus 16(7): e65028. https://doi.org/10.7759/cureus.65028.
Frich, J.C., A.L. Brewster, E.J. Cherlin, and E.H. Bradley. 2015. "Leadership development programs for physicians: a systematic review." Journal of general internal medicine 30(5): 656-74. https://doi.org/10.1007/s11606-014-3141-1.
James, E., M. Evans, and M. Mi. 2021. "Leadership Training and Undergraduate Medical Education: a Scoping Review." Medical science educator 31(4): 1501-1509. https://doi.org/10.1007/s40670-021-01308-9.
Sadowski, B., S. Cantrell, A. Barelski, P.G. O'Malley, et al. 2018. "Leadership Training in Graduate Medical Education: A Systematic Review." Journal of graduate medical education 10(2): 134-148. https://doi.org/10.4300/JGME-D-17-00194.1.

## Field Challenges & Barriers || 現場の課題と障壁 || 현장의 과제와 장벽 || 一线挑战与障碍

Gallagher, T. H., A. D. Waterman, A. G. Ebers, V. J. Fraser, et al. 2007. "Disclosing harmful medical errors to patients: a framework for leaders." Quality and Safety in Health Care 16, no. 3: 208–213.
Henriksen, K., and E. Dayton. 2006. "Organizational silence and hidden threats to patient safety." Health Services Research 41, no. 4 Pt 2: 1539–1554.
Khan, S. T., Y. Xue, and B. Choki. 2025. "The impact of digital transformational leadership on digital intensity among primary healthcare entities." BMC Health Services Research 25: 633.
Kotter, J. P. 1995. "Leading change: why transformation efforts fail." Harvard Business Review 73, no. 2: 59–67.
Lüchinger, R., M. C. Audétat, N. M. Bajwa, et al. 2024. "Physicians' perceptions and experiences regarding leadership: a link between beliefs and identity formation." Journal of Healthcare Leadership 16: 263–276.
Maida, C. A., K. Bookman, and H. Latham. 2022. "Change management in health care." In StatPearls. Treasure Island, FL: StatPearls Publishing.
Matandela, M., G. L. Chisale, and V. E. Matahela. 2025. "Nurse leaders' perceptions of leadership development needs for strengthening the nursing workforce: a South African pilot study." Frontiers in Health Services 5: 1634563.
Panagioti, M., K. Geraghty, J. Johnson, et al. 2018. "Association between physician burnout and patient safety, professionalism, and satisfaction: a systematic review and meta-analysis." JAMA Internal Medicine 178, no. 10: 1317–1330.
Sangal, R. B., C. Snider, D. E. Manthey, J. Bailey, et al. 2021. "Leadership communication, stress, and burnout among frontline emergency department staff amid the COVID-19 pandemic: a mixed-methods approach." Healthcare (Basel) 9, no. 4: 100577.
Thomas, E. J., C. Galla, and C. Cox. 2009. "Conflict and its management in healthcare teams: a review." Journal of Health Organization and Management 23, no. 2: 134–150.
Zajac, S., A. Woods, S. Tannenbaum, E. Salas, et al. 2021. "Overcoming challenges to teamwork in healthcare: a team effectiveness framework and evidence-based guidance." Frontiers in Communication 6: 606445.
Karimi, E., Z. Sohrabi, and M. Aalaa. 2022. "Change Management in Medical Contexts, especially in Medical Education: A Systematized Review." Journal of advances in medical education & professionalism 10(4): 219-227. https://doi.org/10.30476/JAMP.2022.96519.1704.
Ghiasipour, M., A.M. Mosadeghrad, M. Arab, and E. Jaafaripooyan. 2017. "Leadership challenges in health care organizations: The case of Iranian hospitals." Medical journal of the Islamic Republic of Iran 31: 96. https://doi.org/10.14196/mjiri.31.96.
Restivo, V., G. Minutolo, A. Battaglini, A. Carli, et al. 2022. "Leadership Effectiveness in Healthcare Settings: A Systematic Review and Meta-Analysis of Cross-Sectional and Before-After Studies." International journal of environmental research and public health 19(17). https://doi.org/10.3390/ijerph191710995.
Fernandopulle, N. 2021. "To what extent does hierarchical leadership affect health care outcomes?." Medical journal of the Islamic Republic of Iran 35: 117. https://doi.org/10.47176/mjiri.35.117.
King, C., T. Edlington, and B. Williams. 2020. "Avoiding Difficult Conversations in the Australian Health Sector." SAGE open nursing 6: 2377960820941978. https://doi.org/10.1177/2377960820941978.
Khan, R.N., A. Aziz, and N.A. Siddiqui. 2022. "Clinicians as Leaders: Impact and Challenges." Pakistan journal of medical sciences 38(4Part-II): 1069-1072. https://doi.org/10.12669/pjms.38.4.4918.
Saltman, D.C., N.A. O'Dea, and M.R. Kidd. 2006. "Conflict management: a primer for doctors in training." Postgraduate medical journal 82(963): 9-12. https://doi.org/10.1136/pgmj.2005.034306.
Overton, A.R., and A.C. Lowry. 2013. "Conflict management: difficult conversations with difficult people." Clinics in colon and rectal surgery 26(4): 259-64. https://doi.org/10.1055/s-0033-1356728.
Spehar, I., H. Sjøvik, K.I. Karevold, E.O. Rosvold, et al. 2017. "General practitioners' views on leadership roles and challenges in primary health care: a qualitative study." Scandinavian journal of primary health care 35(1): 105-110. https://doi.org/10.1080/02813432.2017.1288819.
Huikko-Tarvainen, S., P. Sajasalo, and T. Auvinen. 2021. "Just a leader? Leadership work challenges and identity contradiction experienced by Finnish physician leaders." Journal of health organization and management 35(9): 195-210. https://doi.org/10.1108/JHOM-10-2020-0421.
Underdahl, L., M. Ditri, and L.M. Duthely. 2024. "Physician Burnout: Evidence-Based Roadmaps to Prioritizing and Supporting Personal Wellbeing." Journal of healthcare leadership 16: 15-27. https://doi.org/10.2147/JHL.S389245.
Lüchinger, R., M.C. Audétat, N.M. Bajwa, A.C. Bréchet-Bachmann, et al. 2024. "Physicians' Perceptions and Experiences Regarding Leadership: A Link Between Beliefs and Identity Formation." Journal of healthcare leadership 16: 263-276. https://doi.org/10.2147/JHL.S464289.
Simard, J., C. Shea, V. Cho, L. Perrier, et al. 2023. "Senior Hospital Physician Leaders' Perspectives on Factors That Impact Physician Engagement: A Qualitative Interview Study." Journal of healthcare leadership 15: 161-167. https://doi.org/10.2147/JHL.S424741.
Berenson, R.A., and E.C. Rich. 2010. "US approaches to physician payment: the deconstruction of primary care." Journal of general internal medicine 25(6): 613-8. https://doi.org/10.1007/s11606-010-1295-z.

## Nursing Leadership || 看護リーダーシップ || 간호 리더십 || 护理领导力 {p:nurse}

Glette, M.K., T. Kringeland, L. Samal, D.W. Bates, et al. 2024. "A qualitative study of leaders' experiences of handling challenges and changes induced by the COVID-19 pandemic in rural nursing homes and homecare services." BMC health services research 24(1): 442. https://doi.org/10.1186/s12913-024-10935-y.
Lysfjord, E.M., E.R. Gjevjon, and S. Skarstein. 2024. "Challenges and Strategies in Nursing Leadership: A Qualitative Study on Leaders in Mental Health Care." Nursing reports (Pavia, Italy) 14(4): 3943-3954. https://doi.org/10.3390/nursrep14040288.
Nene, S.E. 2021. "Exploring the challenges in leadership roles experienced by nurse managers in a mining primary healthcare setting in South Africa." Curationis 44(1): e1-e7. https://doi.org/10.4102/curationis.v44i1.2196.
Hibberd, J.M., C.E. Storoz, and H.A. Andrews. 1992. "Implementing shared governance: a false start." The Nursing clinics of North America 27(1): 11-22.
Julnes, S.G., T. Myrvang, L.S. Reitan, G. Rønning, et al. 2022. "Nurse leaders' experiences of professional responsibility towards developing nursing competence in general wards: A qualitative study." Journal of nursing management 30(7): 2743-2750. https://doi.org/10.1111/jonm.13745.
Jordal, K., V. Saltveit, and S. Tønnessen. 2022. "Nursing leadership and management in home care: A qualitative scoping review." Journal of nursing management 30(8): 4212-4220. https://doi.org/10.1111/jonm.13872.
Assoni, M.A.D.S., A.L.D.N. Braga, V.N.T.D. Cunha, J.B. Francisco, et al. 2025. "Nursing Leadership-Mapping the Challenges of Newly Qualified Nurses in Hospital Units: A Scoping Review Protocol." Nursing reports (Pavia, Italy) 15(6). https://doi.org/10.3390/nursrep15060215.
Lillsjö, E., K. Bjuresäter, and K. Josefsson. 2023. "Registered nurses' challenges and suggestions for improvement of their leadership close to older adults in municipal home healthcare." BMC nursing 22(1): 80. https://doi.org/10.1186/s12912-023-01215-x.
Ghanem, A.t.a.l.l.a.A.D., L.S. Sharif, N.E. Katooa, F.S. Kandil, et al. 2023. "Relationship between nurses' perception of professional shared governance and their career motivation: A cross-sectional study." International journal of nursing sciences 10(4): 485-491. https://doi.org/10.1016/j.ijnss.2023.09.016.
Beglinger, J.E., B. Hauge, S. Krause, and L. Ziebarth. 2011. "Shaping future nurse leaders through shared governance." The Nursing clinics of North America 46(1): 129-35. https://doi.org/10.1016/j.cnur.2010.10.003.
Frilund, M., L. Fagerstrøm, and F. Vasset. 2023. "The challenges of change processes for nurse leaders-a qualitative study of long-term leaders' experiences over 25 years." Nursing open 10(8): 5423-5432. https://doi.org/10.1002/nop2.1781.
Hamdan, M., and A.H. Jaafar. 2024. "The Impact of Shared Governance Model's Implementation on Professional Governance Perceptions of Nurses in Saudi Arabia: A Randomised Controlled Trial." Journal of nursing management 2024: 7263656. https://doi.org/10.1155/2024/7263656.

## Pharmacy Professionals || 薬剤師 || 약사 || 药师 {p:pharm}

Murry, L.T., B.N. Reed, and M.J. Witry. 2024. "An Exploratory Qualitative Study of Student Pharmacist Perspectives on Leadership." American journal of pharmaceutical education 88(2): 100658. https://doi.org/10.1016/j.ajpe.2024.100658.
BinDhim, N.F., N.A. Althumiri, R.A. Albluwi, and H.S. Aljadhey. 2024. "Competencies, skills, and personal characteristics needed for pharmacy leaders: An in-depth interview." Saudi pharmaceutical journal : SPJ : the official publication of the Saudi Pharmaceutical Society 32(11). https://doi.org/10.1016/j.jsps.2024.102181.
Svensberg, K., L. Axelsson, and L. Hellström. 2025. "Exploring the experience of managers, employees, and pharmacists in clinical pharmacy in primary care using the SEIPS model: A focus group study." Exploratory research in clinical and social pharmacy 20: 100657. https://doi.org/10.1016/j.rcsop.2025.100657.
Schmidtke, K.A., and T. Warholak. 2025. "Payment models and the sustainability of community pharmacy practice: a qualitative interview study with community pharmacists." Journal of pharmaceutical policy and practice 18(1): 2450018. https://doi.org/10.1080/20523211.2025.2450018.
Davey, B., D. Lindsay, J. Cousins, and B. Glass. 2023. "Why Didn't They Teach Us This? A Qualitative Investigation of Pharmacist Stakeholder Perspectives of Business Management for Community Pharmacists." Pharmacy (Basel, Switzerland) 11(3). https://doi.org/10.3390/pharmacy11030098.

## Interprofessional Teams & Collaboration || 多職種チームと連携 || 다직종 팀과 협력 || 跨专业团队与合作 {p:multi}

Terregino, C.A., S. Jagpal, P. Parikh, A. Pradhan, et al. 2023. "Critical Care Teamwork in the Future: The Role of TeamSTEPPS(R) in the COVID-19 Pandemic and Implications for the Future." Healthcare (Basel, Switzerland) 11(4). https://doi.org/10.3390/healthcare11040599.
Hassan, A.E., F.A. Mohammed, A.M. Zakaria, and I.A. Ibrahim. 2024. "Evaluating the Effect of TeamSTEPPS on Teamwork Perceptions and Patient Safety Culture among Newly Graduated Nurses." BMC nursing 23(1): 170. https://doi.org/10.1186/s12912-024-01850-y.
Jordan, S.R., S.C. Connors, and K.A. Mastalerz. 2022. "Frontline healthcare workers' perspectives on interprofessional teamwork during COVID-19." Journal of interprofessional education & practice 29: 100550. https://doi.org/10.1016/j.xjep.2022.100550.
Folkman, A.K., B. Tveit, and S. Sverdrup. 2019. "Leadership in interprofessional collaboration in health care." Journal of multidisciplinary healthcare 12: 97-107. https://doi.org/10.2147/JMDH.S189199.
Shi, Y., S. Miao, Y. Fu, C. Sun, et al. 2024. "TeamSTEPPS improves patient safety." BMJ open quality 13(2). https://doi.org/10.1136/bmjoq-2023-002669.

# 7 | Patient Safety and Quality Improvement || 患者安全と質改善 || 환자안전과 질 향상 || 患者安全与质量改进

## Core Patient Safety Culture & Quality Improvement Frameworks || 患者安全文化と質改善の枠組み || 환자안전 문화와 질 향상의 프레임워크 || 患者安全文化与质量改进框架 {core}

Abu Zaitoun, R. S., E. M. Sweity, L. M. Zabin, and L. de Tantillo. 2023. "Clinical nurse competence and its effect on patient safety culture: a systematic review." BMC Nursing 22: 173. https://doi.org/10.1186/s12912-023-01305-w.
Hashish EAA, Alsayed S. 2020. "Evidence-Based Practice and its Relationship to Quality Improvement: A Cross-Sectional Study among Egyptian Nurses." The Open Nursing Journal. DOI: 10.2174/1874434602014010254
Sammer, C. E., K. Lykens, K. P. Singh, D. A. Mains, and N. A. Lackan. 2010. "What is Patient Safety Culture? A Review of the Literature." Journal of Nursing Scholarship 42, no. 2: 156–165.

## Burnout, Stress, and Second Victim Experiences (Well-being & Safety) || バーンアウト・ストレス・セカンドビクティム || 번아웃·스트레스·이차 피해자 경험 || 职业倦怠、压力与第二受害者经历

Garcia, C. d. L., L. C. de Abreu, J. L. S. Ramos, C. F. D. de Castro, et al. 2019. "Influence of burnout on patient safety: systematic review and meta-analysis." Medicina (Kaunas) 55, no. 9: 553. https://doi.org/10.3390/medicina55090553.
Hall, L. H., J. Johnson, I. Watt, A. Tsipa, and D. B. O'Connor. 2016. "Healthcare staff wellbeing, burnout, and patient safety: a systematic review." PLoS One 11, no. 7: e0159015. https://doi.org/10.1371/journal.pone.0159015.
Heiss, K., and M. Clifton. 2019. "The unmeasured quality metric: burn out and the second victim syndrome in healthcare." Seminars in Pediatric Surgery 28, no. 3: 189–194. https://doi.org/10.1053/j.sempedsurg.2019.04.011.
Järvisalo, P., K. Haatainen, M. von Bonsdorff, H. Turunen, and M. Härkänen. 2024. "Interventions to support nurses as second victims of patient safety incidents: a qualitative study of nurse managers' perceptions." Journal of Advanced Nursing 80, no. 6: 2552–2565. https://doi.org/10.1111/jan.16013.
Kruse, J. A., P. Podojil-Kostecki, and B. Smith. 2024. "The Second Victim Experience Among Certified Registered Nurse Anesthetists." AANA Journal 92, no. 3: 173–180.
Meyer, O., et al. 2024. "Association between physician burnout and patient safety: study protocol for an overview of systematic reviews and meta-analyses." BMJ Open 14, no. 11: e089687.
Ziarukh, S., and A. Sabir. 2024. "Burnout and patient safety culture assessment in a secondary care hospital." Pakistan journal of medical sciences 40(2ICON Suppl) :S58-S63. https://doi.org/10.12669/pjms.40.2(ICON).8970.
Card, A.J. 2022. "Burnout and Sources of Stress Among Health Care Risk Managers and Patient Safety Personnel During the COVID-19 Pandemic: A Pilot Study." Disaster medicine and public health preparedness 16(6) :2319-2321. https://doi.org/10.1017/dmp.2021.120.
Mahat, S., H. Lehmusto, A.M. Rafferty, K. Vehviläinen-Julkunen, et al. 2025. "Impact of second victim distress on healthcare professionals' intent to leave, absenteeism and resilience: A mediation model of organizational support." Journal of advanced nursing 81(9) :5376-5388. https://doi.org/10.1111/jan.16291.
Khairallah, G.M., S. Al-Hajj, H. Mowafi, K. El-Asmar, et al. 2025. "Occupational injuries among healthcare workers and objective workload at a tertiary hospital in Lebanon: a retrospective study." BMJ public health 3(1) :e001586. https://doi.org/10.1136/bmjph-2024-001586.
Gemmill, T. 2026. "Second Victim Syndrome: Recognising the Impact of Complications on the Well-Being of Veterinary Surgeons." Veterinary and comparative orthopaedics and traumatology : V.C.O.T 39(2) :iii-iv. https://doi.org/10.1055/a-2773-4735.
Neft, M.W., K. Sekula, R. Zoucha, M.E.S. Glasgow, et al. 2022. "Support Methods for Healthcare Professionals Who Are Second Victims: An Integrative Review." AANA journal 90(3) :189-196.
Al-Ghunaim, T.A., J. Johnson, C.S. Biyani, K.M. Alshahrani, et al. 2022. "Surgeon burnout, impact on patient safety and professionalism: A systematic review and meta-analysis." American journal of surgery 224(1 Pt A) :228-238. https://doi.org/10.1016/j.amjsurg.2021.12.027.
Alishaq, M., H.a.s.s.a.n.A. Kamal, A.H. Assar, S. Elfaki, et al. 2025. "The impact of second-victim syndrome on staff well-being and practice." Medicine 104(6) :e41345. https://doi.org/10.1097/MD.0000000000041345.
Montgomery, A., E. Panagopoulou, and I. Kehoe. 2019. "The influence of burnout on patient safety: a systematic review and meta-analysis." European Journal of Public Health 29, no. 4: 687–693.
Olds, D. M., et al. 2019. "Do perceived working conditions and patient safety culture correlate with objective workload and patient outcomes? A cross-sectional study from a German university hospital." PLoS One 14, no. 1: e0209487.
RiveraChiauzzi, E. Y., L. Huang, A. K. Osborne, A. A. Musch, et al. 2024. "Rapid expansion of the Healing Emotional Lives of Peers program during COVID19: a second victim peer support program for healthcare professionals." Journal of Patient Safety 20, no. 1: 28–37. https://doi.org/10.1097/PTS.0000000000001179.
Sani, M. M., Y. Jafaru, D. O. Ashipala, and A. K. Sahabi. 2024. "Influence of work-related stress on patient safety culture among nurses in a tertiary hospital: a cross-sectional study." BMC Nursing 23: 81. https://doi.org/10.1186/s12912-023-01695-x.
Shin, H., J. S. Kim, and Y. Chung. 2025. "Secondvictim distress, organizational support, and interprofessional collaboration and posttraumatic growth in nurses." International Nursing Review 72, no. 1: e13081. https://doi.org/10.1111/inr.13081.
Zabin, L. M., J. Qaddumi, S. F. Ghawadra, and M. M. Battat. 2025. "Job stress and patient safety culture: a qualitative study among hospital nurses in Palestine." BMC Nursing 24, no. 1: 308. https://doi.org/10.1186/s12912-025-02993-2.

## Moral Distress & Ethical Climate || 道徳的苦悩と倫理的風土 || 도덕적 고뇌와 윤리적 풍토 || 道德困扰与伦理氛围

Čartolovni, A., M. Stolt, P. A. Scott, and R. Suhonen. 2021. "Moral injury in healthcare professionals: a scoping review and discussion." Nursing Ethics 28, no. 5: 590–602. https://doi.org/10.1177/0969733020966776.
Emple, A., L. Fonseca, S. Nakagawa, G. Guevara, et al. 2021. "Moral Distress Associated with Caring for Critically Ill Patients Requiring Mechanical Circulatory Support." American Journal of Critical Care 30, no. 5: 356–362.
Giannetta, N., G. Villa, F. Pennestrì, R. Sala, et al. 2021. "Ethical problems and moral distress in primary care: a scoping review." International Journal of Environmental Research and Public Health 18, no. 14: 7565.
West, L. J., et al. 2024. "Nurses' experiences of moral distress and how it affects daily work in surgical care." Journal of Advanced Nursing 80, no. 5: 2080–2090.
Alimoradi, Z., E. Jafari, C.Y. Lin, R. Rajabi, et al. 2023. "Estimation of moral distress among nurses: A systematic review and meta-analysis." Nursing ethics 30(3) :334-357. https://doi.org/10.1177/09697330221135212.
Lamoureux, S., A.E. Mitchell, and E.M. Forster. 2024. "Moral distress among acute mental health nurses: A systematic review." Nursing ethics 31(7) :1178-1195. https://doi.org/10.1177/09697330241238337.
Dzeng, E., and J.R. Curtis. 2018. "Understanding ethical climate, moral distress, and burnout: a novel tool and a conceptual framework." BMJ quality & safety 27(10) :766-770. https://doi.org/10.1136/bmjqs-2018-007905.
Santos, C., and P.o.n.t.e.G. Da. 2026. "Moral Distress, Work Engagement, and Meaningful Work in Healthcare: A Narrative Review." Acta medica portuguesa. https://doi.org/10.20344/amp.24197.
Wiedemann, A., et al. 2024. "What keeps you up at night? Moral distress in nurse leaders in the USA, Germany, Austria and Switzerland." Leadership in Health Services.

## Field Challenges: Incident Reporting & Quality Improvement Implementation || インシデント報告と質改善の実装 || 사건 보고와 질 향상의 실행 || 不良事件报告与质量改进的实施

Hamed, M. M. M., and S. Konstantinidis. 2022. "Barriers to incident reporting among nurses: a qualitative systematic review." Western Journal of Nursing Research 44, no. 5: 506–523. https://doi.org/10.1177/0193945921999449.
Oweidat, I., K. AlMugheed, S. A. Alsenany, S. M. F. Abdelaliem, et al. 2023. "Awareness of reporting practices and barriers to incident reporting among nurses." BMC Nursing 22, no. 1: 231. https://doi.org/10.1186/s12912-023-01376-9.
Alsararatee, H. 2026. "Effect of artificial intelligence on nursing documentation and patient safety." Nursing standard. https://doi.org/10.7748/ns.2026.e12724.
Boston-Leary, K., M. Lee, and S.E. Mossburg. 2024. "Patient Safety Amid Nursing Workforce Challenges." AHRQ PSNet (Perspectives on Safety, Rockville, MD: Agency for Healthcare Research and Quality)
Powell, C.V. 2003. "How to implement change in clinical practice." Paediatric respiratory reviews 4(4) :340-6. https://doi.org/10.1016/s1526-0542(03)00092-7.
Wang, T., J.B. Tan, X.L. Liu, and I. Zhao. 2023. "Barriers and enablers to implementing clinical practice guidelines in primary care: an overview of systematic reviews." BMJ open 13(1) :e062158. https://doi.org/10.1136/bmjopen-2022-062158.
Koch, A., L. Brust, and M. Weigl. 2024. "Barriers and Facilitators of Patient Engagement Activities to Improve Patient Safety in Healthcare Organizations: A Delphi-Based Expert Survey." Risk management and healthcare policy 17 :3217-3226. https://doi.org/10.2147/RMHP.S489522.
Bergs, J., F. Lambrechts, P. Simons, A. Vlayen, et al. 2015. "Barriers and facilitators related to the implementation of surgical safety checklists: a systematic review of the qualitative evidence." BMJ quality & safety 24(12) :776-86. https://doi.org/10.1136/bmjqs-2015-004021.
Krishnamoorthy, Y., P. Subbiah, S. Rajaa, M. Krishnan, et al. 2023. "Barriers and Facilitators to Implementing the National Patient Safety Implementation Framework in Public Health Facilities in Tamil Nadu: A Qualitative Study." Global health, science and practice 11(6). https://doi.org/10.9745/GHSP-D-22-00564.
Odhus, C.O., R.R. Kapanga, and E. Oele. 2024. "Barriers to and enablers of quality improvement in primary health care in low- and middle-income countries: A systematic review." PLOS global public health 4(1) :e0002756. https://doi.org/10.1371/journal.pgph.0002756.
Gqaleni, T.M.H., and S.W. Mkhize. 2024. "Barriers to implementing patient safety incident reporting and learning guidelines in specialised care units, KwaZulu-Natal: A qualitative study." PloS one 19(3) :e0289857. https://doi.org/10.1371/journal.pone.0289857.
Rutledge, D.N., T. Retrosi, and G. Ostrowski. 2018. "Barriers to medication error reporting among hospital nurses." Journal of clinical nursing 27(9-10) :1941-1949. https://doi.org/10.1111/jocn.14335.
Bijani, M., and A.A. Khaleghi. 2019. "Challenges and Barriers Affecting the Quality of Triage in Emergency Departments: A Qualitative Study." Galen medical journal 8 :e1619. https://doi.org/10.31661/gmj.v8i0.1619.
Madu, A. 2022. "Challenges in conducting quality improvement projects: reflections of a junior doctor." Future healthcare journal 9(3) :333-334. https://doi.org/10.7861/fhj.2022-0076.
Gompertz, L., D. Bogue, J. Hayward, M. Watson, et al. 2026. "The Clinical Pathway Initiative: Identifying role relevant competencies in genomic pathways." Journal of genetic counseling 35(3) :e70170. https://doi.org/10.1002/jgc4.70170.
Liao, Z., and Y. Quintana. 2021. "Challenges to Global Standardization of Outcome Measures." AMIA Joint Summits on Translational Science proceedings. AMIA Joint Summits on Translational Science 2021 :404-409.
Ruatti, E., M. Danielis, and A. Palese. 2021. "The Productive Ward programme to provide high quality care: findings from a scoping review." Assistenza infermieristica e ricerca : AIR 40(4) :221-232. https://doi.org/10.1702/3743.37261.
Dixit, R.A., C.L. Boxley, S. Samuel, V. Mohan, et al. 2023. "Electronic Health Record Use Issues and Diagnostic Error: A Scoping Review and Framework." Journal of patient safety 19(1) :e25-e30. https://doi.org/10.1097/PTS.0000000000001081.
Mistri, I.U., A. Badge, and S. Shahu. 2023. "Enhancing Patient Safety Culture in Hospitals." Cureus 15(12) :e51159. https://doi.org/10.7759/cureus.51159.
Armstrong, L., A. Shepherd, and F. Harris. 2024. "Experiences of Newly Qualified Nurses' Engagement with Quality Improvement in Practice: A Qualitative Follow-Up Study." Nursing reports (Pavia, Italy) 14(4) :2990-3006. https://doi.org/10.3390/nursrep14040218.
Chegini, Z., A. Janati, J. Babaie, and M. Pouraghaei. 2020. "Exploring the barriers to patient engagement in the delivery of safe care in Iranian hospitals: A qualitative study." Nursing open 7(1) :457-465. https://doi.org/10.1002/nop2.411.
Berggren, K., M. Ekstedt, E. Joelsson-Alm, L. Swedberg, et al. 2023. "Healthcare workers' experiences of patient safety in the intensive care unit during the COVID-19 pandemic: A multicentre qualitative study." Journal of clinical nursing 32(19-20) :7372-7381. https://doi.org/10.1111/jocn.16793.
Dhamanti, I., D. Indriani, M. Miftahussurur, E. Kurniawati, et al. 2022. "Impact of hospital readiness on patient safety incidents during the COVID-19 pandemic in Indonesia: health worker perceptions." BMJ open 12(7) :e061702. https://doi.org/10.1136/bmjopen-2022-061702.
Hibbert, P.D., S. Stewart, L.K. Wiles, J. Braithwaite, et al. 2023. "Improving patient safety governance and systems through learning from successes and failures: qualitative surveys and interviews with international experts." International journal for quality in health care : journal of the International Society for Quality in Health Care 35(4) :0. https://doi.org/10.1093/intqhc/mzad088.
Koike, D., H. Kato, Y. Kajino, Y. Kondo, et al. 2026. "Failure-to-Rescue From Intraoperative Massive Hemorrhage and Preventable Deaths: A Retrospective Observational Study From Nationwide Incident Reporting System." The Journal of surgical research 325 :486-495. https://doi.org/10.1016/j.jss.2026.05.071.
Jeffs, L., W. Berta, L. Lingard, and G.R. Baker. 2012. "Learning from near misses: from quick fixes to closing off the Swiss-cheese holes." BMJ quality & safety 21(4) :287-94. https://doi.org/10.1136/bmjqs-2011-000256.
Ljungberg, P.e.r.s.s.o.n.C., H.ä.g.g.A. Nordén, and B. Södergård. 2025. "Measuring the patient safety climate in community pharmacies: an updated national survey." BMJ open 15(1) :e088323. https://doi.org/10.1136/bmjopen-2024-088323.
da, S.i.l.v.a.E.P., P.J. Saturno-Hernández, F.r.e.i.t.a.s.M.R. de, and S.i.l.v.a.G.a.m.a.Z.A. da. 2024. "Motivational drivers for health professionals in a large quality improvement collaborative project in Brazil: a qualitative study." BMC health services research 24(1) :183. https://doi.org/10.1186/s12913-024-10678-w.
Vaismoradi, M., S. Tella, L.o.g.a.n.P. A, J. Khakurel, et al. 2020. "Nurses' Adherence to Patient Safety Principles: A Systematic Review." International journal of environmental research and public health 17(6). https://doi.org/10.3390/ijerph17062028.
El-Awady, S.M.M. 2023. "Overview of Failure Mode and Effects Analysis (FMEA): A Patient Safety Tool." Global journal on quality and safety in healthcare 6(1) :24-26. https://doi.org/10.36401/JQSH-23-X2.
Mah, H., R. Dobson, and A. Thomson. 2025. "The Importance of Lived Experience: A Scoping Review on the Value of Patient and Public Involvement in Health Research." Health expectations : an international journal of public participation in health care and health policy 28(2) :e70205. https://doi.org/10.1111/hex.70205.
Bastemeijer, C.M., H. Boosman, E.w.i.j.k.H. van, L.M. Verweij, et al. 2019. "Patient experiences: a systematic review of quality improvement interventions in a hospital setting." Patient related outcome measures 10 :157-169. https://doi.org/10.2147/PROM.S201737.
Nijor, S., G. Rallis, N. Lad, and E. Gokcen. 2022. "Patient Safety Issues From Information Overload in Electronic Medical Records." Journal of patient safety 18(6) :e999-e1003. https://doi.org/10.1097/PTS.0000000000001002.
Kang, H.J., H. Park, J.M. Oh, and E.K. Lee. 2017. "Perception of reporting medication errors including near-misses among Korean hospital pharmacists." Medicine 96(39) :e7795. https://doi.org/10.1097/MD.0000000000007795.
Lee, D.H., T.A. Cheng, C. Au, T. Lau, et al. 2023. "Perspectives of hospital pharmacists on quality improvement initiatives in patient care: A pilot study from one healthcare system in Canada." Exploratory research in clinical and social pharmacy 9 :100249. https://doi.org/10.1016/j.rcsop.2023.100249.
Deilkås, E.T., J. Rosta, F. Baathe, E. Søfteland, et al. 2022. "Physician participation in quality improvement work- interest and opportunity: a cross-sectional survey." BMC primary care 23(1) :267. https://doi.org/10.1186/s12875-022-01878-6.
Patrician, P.A., C.M. Campbell, M. Javed, K.M. Williams, et al. 2024. "Quality and Safety in Nursing: Recommendations From a Systematic Review." Journal for healthcare quality : official publication of the National Association for Healthcare Quality 46(4) :203-219. https://doi.org/10.1097/JHQ.0000000000000430.
Sinsky, C.A., H. Bavafa, R.G. Roberts, and J.W. Beasley. 2021. "Standardization vs Customization: Finding the Right Balance." Annals of family medicine 19(2) :171-177. https://doi.org/10.1370/afm.2654.
Grattidge, L., D. Haywood, N.H. Hart, B.E. Hamilton, et al. 2026. "Putting Lived Experience at the Centre: A Critical Review of Multidisciplinary, Person-Centred Mental Health Care." Journal of multidisciplinary healthcare 19 :600579. https://doi.org/10.2147/JMDH.S600579.
Chavez-Maisterra, I., A.C. Corona-Pantoja, L.E. Madrigal-Gómez, E.O. Zamora-González, et al. 2024. "Student Engagement in Patient Safety and Healthcare Quality Improvement: A Brief Educational Approach." Healthcare (Basel, Switzerland) 12(16). https://doi.org/10.3390/healthcare12161617.
Spanakis, M., M. Stamou, S. Boultadaki, E. Liantis, et al. 2025. "Enhancing Competencies and Professional Upskilling of Mobile Healthcare Unit Personnel at the Hellenic National Public Health Organization." Healthcare (Basel, Switzerland) 13(14). https://doi.org/10.3390/healthcare13141706.
Dixon-Woods, M., S. McNicol, and G. Martin. 2012. "Ten challenges in improving quality in healthcare: lessons from the Health Foundation's programme evaluations and relevant literature." BMJ quality & safety 21(10) :876-84. https://doi.org/10.1136/bmjqs-2011-000760.
Byrne, A., R. O'Malley, P. O'Connor, and S. Lydon. 2025. "Barriers and facilitators to disseminating quality improvement and patient safety research: a scoping review." International journal for quality in health care : journal of the International Society for Quality in Health Care 37(3). https://doi.org/10.1093/intqhc/mzaf084.

# 8 | Health Promotion and Public Health || 健康増進と公衆衛生 || 건강증진과 공중보건 || 健康促进与公共卫生

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Bashkin, O., R. Otok, O. Kapra, K. Czabanowska, et al. 2022. "Identifying the gaps between public health training and practice: a workforce competencies comparative analysis." International Journal of Public Health 67: 1605303. https://doi.org/10.3389/ijph.2022.1605303.
Council on Linkages Between Academia and Public Health Practice. 2021. Core Competencies for Public Health Professionals. Washington, DC: Public Health Foundation.
Frenk, J., L. Chen, Z. A. Bhutta, J. Cohen, et al. 2010. "Health professionals for a new century: transforming education to strengthen health systems in an interdependent world." Lancet 376, no. 9756: 1923–1958.
One Health High-Level Expert Panel (OHHLEP), W. B. Adisasmito, S. Almuhairi, C. B. Behravesh, et al. 2022. "One Health: A new definition for a sustainable and healthy future." PLoS Pathogens 18, no. 6: e1010537.
WHO Health Workforce Working Group. 2022. "Building the healthcare workforce for pandemics: policy brief by the WHO Health Workforce Working Group." Bulletin of the World Health Organization 100, no. 10: 626–633.
Excellent, M. L., M. Yu, A. Hartranft, W. O. Fleming, et al. 2025. "Advancing Pedagogy in Leadership Practice to Enhance Public Health Impact." Journal of Public Health Management and Practice 31, no. 4: 515–526. https://doi.org/10.1097/PHH.0000000000002123.
Muehlen, M., N. Dhand, H. Simmons, S. Dunkle, et al. 2025. "Competencies for One Health Field Epidemiology (COHFE)—a framework to train the epidemiology workforce." One Health Outlook 7, no. 1: 13. https://doi.org/10.1186/s42522-025-00135-x.
Park, S., B. Bekemeier, and A. D. Flaxman. 2021. "Understanding data use and preference of data visualization for public health professionals: A qualitative study." Public Health Nursing 38, no. 4: 531–541. https://doi.org/10.1111/phn.12863.
Pham, C. N., S. D. Cunningham, and D. L. Humphries. 2023. "Action learning and public health pedagogy: Student reflections from an experiential public health course." Frontiers in Public Health 11: 1128705. https://doi.org/10.3389/fpubh.2023.1128705.
Sherman, D. M. 2010. "A global veterinary medical perspective on the concept of one health: focus on livestock." ILAR Journal 51, no. 3: 281–287. https://doi.org/10.1093/ilar.51.3.281.

## Field Challenges & Barriers by Profession || 職種別の現場の課題と障壁 || 직종별 현장의 과제와 장벽 || 各职种的一线挑战与障碍

### Primary Care, General Practice, and Nursing || プライマリ・ケア、一般診療、看護 || 일차의료·일반진료·간호 || 初级保健、全科诊疗与护理 {f:phys,nurse}

Geense, W. W., I. M. van de Glind, T. L. S. Visscher, and T. van Achterberg. 2013. "Barriers, facilitators and attitudes influencing health promotion activities in general practice: an explorative pilot study." BMC Family Practice 14: 20.
Gilles, I., et al. 2025. "Work experiences of healthcare professionals in a shortage context: analysis of open-ended comments in a Swiss cohort." BMC Health Services Research 25: 520.
Gottlieb, L. M., H. Wing, and N. E. Adler. 2019. "Addressing social determinants of health within clinical settings: the role of healthcare providers." Annals of Family Medicine 17, no. 2: 103–108.
Hajizadeh, A., V. Zamanzadeh, E. Kakemam, et al. 2021. "Factors influencing nurses' participation in the health policy-making process: a systematic review." BMC Nursing 20, no. 1: 128.
Han, N. K., and G. S. Kim. 2024. "The Barriers and Facilitators Influencing Nurses' Political Participation or Healthcare Policy Intervention: A Systematic Review and Qualitative Meta-Synthesis." Journal of Nursing Management.
Kazi, S., C. Starling, A. Milicia, et al. 2024. "Barriers and facilitators to screen for and address social needs in primary care practices in Maryland: a qualitative study." Frontiers in Health Services 4: 1380589.
Keyworth, C., T. Epton, J. Goldthorpe, et al. 2019. "'It's difficult, I think it's complicated': Health care professionals' barriers and enablers to providing opportunistic behaviour change interventions during routine medical consultations." British Journal of Health Psychology 24, no. 3: 571–592.
Keyworth, C., T. Epton, J. Goldthorpe, et al. 2020. "Delivering Opportunistic Behavior Change Interventions: A Systematic Review of Systematic Reviews." Prevention Science 21, no. 3: 319–331.
Ruco, A., A. Khalil, C. Ledwos, et al. 2025. "Exploring barriers and enablers to implementation of cancer screening among primary care professionals seeing marginalized patients." BMC Public Health 25, no. 1: 1578.
Scutchfield, F. D., and C. W. Keck. 2012. "Bridging the gap between public health and primary care." Journal of Public Health Management and Practice 18, no. 4: 348–356.

### Community Health Workers, Multi-disciplinary Teams, and Global Health || 地域保健ワーカー・多職種チーム・グローバルヘルス || 지역사회 보건요원·다직종 팀·글로벌 헬스 || 社区卫生工作者、多学科团队与全球健康 {f:chw,multi}

Adu-Bonsaffoh, K., E. Tamma, A. U. Nwameme, and J. L. Browne. 2022. "Health professionals' perspectives on clinical challenges in managing hypertensive disorders of pregnancy and recommendations for improving care: a multicenter qualitative study." Frontiers in Global Women's Health 3: 968914. https://doi.org/10.3389/fgwh.2022.968914.
Betancourt, J. R., A. R. Green, J. E. Carrillo, and O. Ananeh-Firempong. 2003. "Defining cultural competence: a practical framework for addressing racial/ethnic disparities in health and healthcare." Public Health Reports 118, no. 4: 293–302.
Johnson, L. J., L. H. Schopp, F. Waggie, and J. M. Frantz. 2022. "Challenges experienced by community health workers and their motivation to attend a self-management programme." African Journal of Primary Health Care & Family Medicine 14, no. 1: 2911. https://doi.org/10.4102/phcfm.v14i1.2911.
Li, J., N. Lowres, F. K. Koo, and R. Gallagher. 2021. "A systematic review of quantitative and qualitative literature on health professionals' experiences communicating with Chinese immigrants." International Journal of Nursing Practice 27, no. 6: e12960. https://doi.org/10.1111/ijn.12960.
Milazzo, A., J. Liu, P. Multani, S. Steele, et al. 2025. "One Health implementation: a systematic scoping review using the Quadripartite One Health Joint Plan of Action." One Health 20: 101008. https://doi.org/10.1016/j.onehlt.2025.101008.
Popalis, M., J. P. Leider, A. Mason, M. Najjar, et al. 2025. "Bridging the leadership gap: agency training and support shapes nonsupervisors' perceptions of their leaders." Frontiers in Public Health 13: 1610400. https://doi.org/10.3389/fpubh.2025.1610400.
Silva, K. L., R. R. Sena, S. M. M. F. Belga, et al. 2014. "Health promotion: challenges revealed in successful practices." Revista de Saude Publica 48, no. 1: 76–85.
Sommers, I. J., K. E. Gunter, K. J. McGrath, C. M. Wilkinson, et al. 2023. "Trust dynamics of community health workers in frontier food banks and pantries: a qualitative study." Journal of General Internal Medicine 38, no. Suppl 1: 18–24. https://doi.org/10.1007/s11606-022-07921-7.
Srivastav, A., C. L. Black, C. S. Lutz, et al. 2018. "U.S. clinicians' and pharmacists' reported barriers to implementation of the Standards for Adult Immunization Practice." Vaccine 36, no. 45: 6772–6781.
Wang, G., M. Tang, T. Zhang, and L. Luo. 2025. "Family physicians as street-level bureaucrats: an interview-based study of service supply challenges in Shanghai, China during public health emergencies." Risk Management and Healthcare Policy 18: 3343–3357. https://doi.org/10.2147/RMHP.S555229.
Yopa, D. S., D. M. Massom, G. M. Kiki, R. W. Sophie, et al. 2023. "Barriers and enablers to the implementation of One Health strategies in developing countries: a systematic review." Frontiers in Public Health 11: 1252428. https://doi.org/10.3389/fpubh.2023.1252428.
Astale, T., T. Abebe, and G. Mitike. 2023. "Workload and emerging challenges of community health workers in low- and middle-income countries: A mixed-methods systematic review." PLoS ONE 18, no. 3: e0282717. https://doi.org/10.1371/journal.pone.0282717.
Elizalde, J., J. Lumibao, and L. Lizarondo. 2024. "Barriers and facilitators to health professionals' engagement in quality improvement initiatives: a mixed-methods systematic review." International Journal for Quality in Health Care 36, no. 2. https://doi.org/10.1093/intqhc/mzae041.
Lapidos, A., E. C. Kieffer, R. Guzmán, K. Hess, et al. 2022. "Barriers and Facilitators to Community Health Worker Outreach and Engagement in Detroit, Michigan: A Qualitative Study." Health Promotion Practice 23, no. 6: 1094–1104. https://doi.org/10.1177/15248399211031818.
Nida, S., A. S. A. Tyas, N. E. Putri, A. Larasanti, et al. 2024. "A systematic review of the types, workload, and supervision mechanism of community health workers: lessons learned for Indonesia." BMC Primary Care 25, no. 1: 82. https://doi.org/10.1186/s12875-024-02319-2.
Rogers, H. L., S. P. Hernando, S. Núñez-Fernández, A. Sanchez, et al. 2021. "Barriers and facilitators in the implementation of an evidence-based health promotion intervention in a primary care setting: a qualitative study." Journal of Health Organization and Management ahead-of-print: 349–367. https://doi.org/10.1108/JHOM-12-2020-0512.
Tukamuhebwa, P. M., P. Munyewende, N. M. Tumwesigye, J. Nabirye, et al. 2024. "Health worker perspectives on barriers and facilitators of tuberculosis investigation coverage among index case contacts in rural Southwestern Uganda: a qualitative study." BMC Infectious Diseases 24, no. 1: 867. https://doi.org/10.1186/s12879-024-09798-9.
Wändell, P. E., A. M. de Waard, M. J. Holzmann, C. Gornitzki, et al. 2018. "Barriers and facilitators among health professionals in primary care to prevention of cardiometabolic diseases: A systematic review." Family Practice 35, no. 4: 383–398. https://doi.org/10.1093/fampra/cmx137.

### Infodemics, Pandemic Stressors, and Emergency Preparedness || インフォデミック・パンデミック下のストレス・緊急時の備え || 인포데믹·팬데믹 스트레스·응급 대비 || 信息疫情、大流行压力与应急准备

Batanda, I. 2024. "Prevalence of burnout among healthcare professionals: a survey at Fort Portal Regional Referral Hospital." npj Mental Health Research 3: 16. https://doi.org/10.1038/s44184-024-00061-2.
Daneshvar, E., and S. Otterbach. 2025. "Workplace stressors and burnout among healthcare professionals: insights from the pandemic and implications for future public health crises." Scientific Reports 15: 42015. https://doi.org/10.1038/s41598-025-21540-2.
Khosravani, M., et al. 2018. "Current challenges in health information technology-related patient safety." Health Informatics Journal 24: 181–189.
Kisa, S., and A. Kisa. 2024. "A comprehensive analysis of COVID-19 misinformation, public health impacts, and communication strategies: scoping review." Journal of Medical Internet Research 26: e56931. https://doi.org/10.2196/56931.
Loomba, S., A. de Figueiredo, S. J. Piatek, K. de Graaf, et al. 2021. "Measuring the impact of COVID-19 vaccine misinformation on vaccination intent in the UK and USA." Nature Human Behaviour 5, no. 3: 337–348.
Rodrigues, D. A., M. Roque, R. Mateos-Campos, A. Figueiras, et al. 2024. "Barriers and facilitators of health professionals in adopting digital health-related tools for medication appropriateness: a systematic review." Digital Health 10: 20552076231225133. https://doi.org/10.1177/20552076231225133.
Schofield, B., U. Rolfe, S. McClean, et al. 2022. "What are the barriers and facilitators to effective health promotion in urgent and emergency care? A systematic review." BMC Emergency Medicine 22, no. 1: 95.
Holtzclaw, L., K. R. Arlinghaus, and C. A. Johnston. 2021. "The Health of Health Care Professionals." American Journal of Lifestyle Medicine 15, no. 2: 130–132. https://doi.org/10.1177/1559827620977065.
Sacca, L., C. Markham, B. Hernandez, R. Shegog, et al. 2022. "The Impact of COVID-19 on the Delivery of Educational Programs in Native American Communities: Qualitative Study." JMIR Formative Research 6, no. 4: e32325. https://doi.org/10.2196/32325.
Setiawan, H. W., I. N. Pratiwi, L. Nimah, Z. Pawanis, et al. 2021. "Challenges for Healthcare Workers Caring for COVID-19 Patients in Indonesia: A Qualitative Study." Inquiry 58: 469580211060291. https://doi.org/10.1177/00469580211060291.
Yu, Y., J. T. F. Lau, R. She, X. Chen, et al. 2021. "Prevalence and associated factors of intention of COVID-19 vaccination among healthcare workers in China: application of the Health Belief Model." Human Vaccines & Immunotherapeutics 17, no. 9: 2894–2902. https://doi.org/10.1080/21645515.2021.1909327.
Zhang, W., X. Qi, B. Han, L. Fu, et al. 2024. "Efforts made, challenges faced, and recommendations provided by stakeholders involved in mpox prevention and control in China: a qualitative study." Public Health 236: 115–124. https://doi.org/10.1016/j.puhe.2024.07.014.

# 9 | Cultural and Social Sensitivity || 文化的・社会的感受性 || 문화적·사회적 감수성 || 文化与社会敏感性

## Core Competency, Theory & Implementation Frameworks || 中核コンピテンシー・理論・実装フレームワーク || 핵심 역량·이론·실행 프레임워크 || 核心能力、理论与实施框架 {core}

ACOG Committee on Health Care for Underserved Women. 2011. "ACOG Committee Opinion No. 493: Cultural sensitivity and awareness in the delivery of health care." Obstetrics & Gynecology 117, no. 5: 1258–1261. https://doi.org/10.1097/AOG.0b013e31821d7db0.
Anderson, L. M., S. C. Scrimshaw, M. T. Fullilove, J. E. Fielding, et al. 2003. "Culturally competent healthcare systems. A systematic review." American Journal of Preventive Medicine 24, no. 3 Suppl: 68–79. https://doi.org/10.1016/s0749-3797(02)00657-8.
Chang, E. S., M. Simon, and X. Q. Dong. 2012. "Integrating cultural humility into health care professional education and training." Advances in Health Sciences Education 17, no. 2: 269–278. https://doi.org/10.1007/s10459-010-9264-1.
Faber, L. W. 2021. "Cultural competence education for health professionals: Summary of a Cochrane review." Explore (NY) 17, no. 5: 469–470. https://doi.org/10.1016/j.explore.2021.04.011.
Horvat, L., D. Horey, P. Romios, and J. Kis-Rigo. 2014. "Cultural competence education for health professionals." Cochrane Database of Systematic Reviews 5: CD009405. https://doi.org/10.1002/14651858.CD009405.pub2.
Lie, D. A., E. Lee-Rey, A. Gomez, S. Bereknyei, et al. 2011. "Does cultural competency training of health professionals improve patient outcomes? A systematic review and proposed algorithm for future research." Journal of General Internal Medicine 26, no. 3: 317–325. https://doi.org/10.1007/s11606-010-1529-0.
Terui, S. 2017. "Conceptualizing the Pathways and Processes Between Language Barriers and Health Disparities: Review, Synthesis, and Extension." Journal of Immigrant and Minority Health 19, no. 1: 215–225. https://doi.org/10.1007/s10903-015-0322-x.

## Communication and Language Barriers (Interpreters, LEP Patients) || コミュニケーションと言語の壁（通訳・英語能力が限られた患者） || 의사소통과 언어 장벽(통역·영어 능력이 제한된 환자) || 沟通与语言障碍（口译、英语能力有限的患者）

Aggarwal, N. K., R. DeSilva, A. V. Nicasio, M. Boiler, et al. 2015. "The effect of interpretation method on establishing the alliance in initial psychiatric interviews with depressed, Spanish-speaking immigrants." Journal of Nervous and Mental Disease 203, no. 2: 98–104. https://doi.org/10.1097/NMD.0000000000000248.
Armon-Lotem, S., K. Petinou, C. De Lamo White, S. Kunnari, et al. 2023. "Diagnostic criteria for developmental language disorder in multilingual children: An international survey of speech-language pathologists." International Journal of Language & Communication Disorders 58, no. 5: 1935–1952. https://doi.org/10.1111/1460-6984.12897.
Fois, R., and B. Chaar. 2021. "Community pharmacists' experiences in providing culturally competent pharmaceutical care to culturally and linguistically diverse patients with low English proficiency." International Journal of Pharmacy Practice 29, no. 5: 458–465. https://doi.org/10.1007/s11096-021-01284-5.
Meuter, R. F. I., C. Gallois, N. S. Segalowitz, A. G. Ryder, et al. 2015. "Overcoming language barriers in healthcare: a protocol for investigating safe and effective communication when patients or clinicians use a second language." BMC Health Services Research 15: 371. https://doi.org/10.1186/s12913-015-1024-8.
Pechak, C., L. Dillon, and E. Umucu. 2019. "Improving Patient-Provider Communication: Evolution of a Tool to Assess Physical Therapist Students' Spanish-Language Proficiency." Health Communication 34, no. 12: 1433–1440. https://doi.org/10.1080/10410236.2018.1495161.
Scharff Rethfeldt, W., L. McNeilly, K. Segers, E. Thordardottir, et al. 2024. "Assessment of developmental language disorder in multilingual children: results from an international survey." Folia Phoniatrica et Logopaedica 76, no. 2: 127–150. https://doi.org/10.1159/000533139.
Squires, A., J. Cioffi, J. Paguirigan, J. Storfjell, et al. 2019. "Home healthcare providers' perspectives about how workload changes from managing language barriers influence quality and safety." International Journal of Nursing Studies 99: 103394. https://doi.org/10.1016/j.ijnurstu.2019.103394.
Wagoner, R. C. 2017. "The Use of an Interpreter During a Forensic Interview: Challenges and Considerations." Psychiatric Services 68, no. 5: 507–511. https://doi.org/10.1176/appi.ps.201600020.
Yin, H. S., B. P. Dreyer, K. L. Vivar, S. MacFarland, et al. 2007. "Language barriers to prescriptions for patients with limited English proficiency: a survey of pharmacies." Pediatrics 120, no. 2: e267–e274. https://doi.org/10.1542/peds.2006-3151.

## Field Challenges by Vulnerable Populations & Social Determinants || 脆弱な集団と健康の社会的決定要因 || 취약 집단과 건강의 사회적 결정요인 || 弱势群体与健康的社会决定因素

Alzubaidi, H., K. Mc Namara, C. Browning, and J. Marriott. 2015. "Barriers and enablers to healthcare access and use among Arabic-speaking and Caucasian English-speaking patients with type 2 diabetes mellitus: a qualitative comparative study." BMJ Open 5, no. 11: e008687. https://doi.org/10.1136/bmjopen-2015-008687.
Black, A., E. Guilbert, D. Costescu, S. Dunn, et al. 2015. "Canadian Contraception Consensus (Part 1 of 4)." Journal of Obstetrics and Gynaecology Canada 37, no. 10: 936–942. https://doi.org/10.1016/S1701-2163(16)30033-0.
Bobel, M. C., A. Al Hinai, and A. C. Roslani. 2022. "Cultural sensitivity and ethical considerations." Clinics in Colon and Rectal Surgery 35, no. 5: 371–375. https://doi.org/10.1055/s-0042-1746186.
Boyd, R., S. J. C. Bentley, S. J. Curtis, A. J. Kam, et al. 2024. "Social Determinants of Health and Emergency Department Outcomes in Children: A Systematic Review and Meta-analysis." Annals of Emergency Medicine 83, no. 4: 384–396. https://doi.org/10.1016/j.annemergmed.2023.10.010.
Cassidy, C., M. MacLachlan, S. Svendsen, S. Svendsen, et al. 2017. "Young people's experiences of living with epilepsy: A systematic review of qualitative studies." Seizure 49: 31–40. https://doi.org/10.1016/j.seizure.2017.05.007.
Choi, K. H., E. J. Lee, S. Lee, and Y. S. Kim. 2003. "Adaptation experiences among Asian immigrants in the United States." Journal of Counseling Psychology 50, no. 1: 67–76.
Costescu, D., E. Guilbert, J. Bernardin, A. Black, et al. 2016. "Medical Abortion." Journal of Obstetrics and Gynaecology Canada 38, no. 1: S366–S389. https://doi.org/10.1016/j.jogc.2015.12.001.
Crawford, A., K. Lewis, U. Macleod, and J. Adams. 2019. "Emergency care providers' views on migrant care in emergency departments in high-income countries: a systematic review and meta-synthesis of qualitative studies." BMJ Open 9, no. 7: e028748. https://doi.org/10.1136/bmjopen-2018-028748.
Gooding, H., D. Carter, J. Shandro, M. Rannie, et al. 2024. "Facilitators and Barriers to Pediatric Nurse Practitioner Practice in the United States: A Systematic Review." Journal of Pediatric Health Care 38, no. 4: 446–457. https://doi.org/10.1016/j.pedhc.2023.12.003.
Grennan, T., J. Wong, J. Shoveller, M. Bal, et al. 2024. "User experiences of an online sexually transmitted and blood-borne infection testing service (GetCheckedOnline) in British Columbia, Canada: a qualitative study to inform health equity." BMJ Sexual & Reproductive Health 50: bmjsrh-2023-202097. https://doi.org/10.1136/bmjsrh-2023-202097.
Herlitz, L., E. Ashford, C. Powell, T. Chadborn, et al. 2024. "Access to primary care for children and young people in the UK: a scoping review of facilitators and barriers." BMJ Open 14, no. 5: e081620. https://doi.org/10.1136/bmjopen-2023-081620.
Lee, H. Y., S. Vang, and C. Vang. 2010. "Barriers to cancer screening in Hmong Americans: the influence of health care accessibility, culture, and cancer literacy." Journal of Community Health 35, no. 5: 508–516. https://doi.org/10.1007/s10900-010-9237-y.
Lee, S., E. Lee, S. Sezlik, R. Kudesia, et al. 2021. "Cultural competence in fertility care for LGBTQ+ patients: a systematic review of patient and provider perspectives." Fertility and Sterility 115, no. 4: 1022–1031. https://doi.org/10.1016/j.fertnstert.2020.12.002.
Mengesha, Z. B., C. Perera, D. Hettiarachchi, R. De Silva, et al. 2023. "Beliefs about mental health issues and help-seeking behaviours among culturally and linguistically diverse (CALD) communities in Victoria, Australia." Journal of Psychiatric and Mental Health Nursing 30, no. 3: 437–449. https://doi.org/10.1111/jpm.12919.
Pottie, K., S. Haydt, B. Farrell, N. Kennie, et al. 2024. "The role and contributions of nurses in medication deprescribing: an international systematic review." Expert Opinion on Drug Safety 23, no. 7: 709–725. https://doi.org/10.1080/14740338.2024.2344921.
Robotham, G., A. Stuart, E. Mathie, H. Lloyd, et al. 2023. "Integration of social determinants of health information within the primary care electronic health record: a systematic review of patient perspectives and experiences." British Journal of General Practice 73, no. 737: e920–e929. https://doi.org/10.3399/BJGPO.2023.0155.
Sousa, A., F. J. Herkrath, C. Wallace, J. Farmer, et al. 2022. "Primary health care in the Amazon and its potential impact on health inequities: a scoping review." Rural and Remote Health 22, no. 1: 6747. https://doi.org/10.22605/RRH6747.
Yoo, G. J., E. Lee, and S. Lee. 2010. "Barriers to healthcare among Asian Americans." Social Work in Public Health 25, no. 1: 64–77. https://doi.org/10.1080/19371910903240704.

## Professional Education, Attitudes, and Role-Specific Experiences || 専門職教育・態度・職種固有の経験 || 전문직 교육·태도·직종 고유의 경험 || 专业教育、态度与各职种的特有经历

Auslander, G. K. 2005. "Clinical social work in the hospital: observations from a 20-year 'snapshot'." Social Work in Health Care 40, no. 3: 1–17. https://doi.org/10.1300/J010v40n03_01.
Chew, J., J. Carpenter, and A. M. Haase. 2017. "Young people's experiences of epilepsy: a scoping review of qualitative studies." Health & Social Work 42, no. 3: 167–176. https://doi.org/10.1093/hsw/hlx020.
Hilliard, M. J., C. Rathsack, P. Brannigan, and A. P. Sander. 2008. "Exploring the cultural adaptability of doctoral entry-level physical therapist students during clinical education experiences." Journal of Allied Health 37, no. 3: e199–e220.
Johnson, M., C. Magnusson, K. Lisy, and K. Sullivan. 2008. "Cultural encounters during final clinical education experiences: a qualitative study of physical therapist students." Journal of Physical Therapy Education 22, no. 3: 48–58.
Joseph, M. 2016. "Hospital Social Work and Spirituality: Views of Medical Social Workers." Social Work in Public Health 31, no. 7: 700–710. https://doi.org/10.1080/19371918.2016.1188740.
Korhonen, H., A. M. Tuomikoski, A. Oikarinen, M. Kääriäinen, et al. 2019. "Culturally and linguistically diverse healthcare students' experiences of the clinical learning environment and mentoring: A qualitative study." Nurse Education Today 82: 66–72. https://doi.org/10.1016/j.nedt.2019.08.004.
Arnet I, Messerli M, Oezvegyi J, Hersberger K, Sahm L. 2020 "Translation to English, cross-cultural adaptation, and pilot testing of the self-report questionnaire on swallowing difficulties with medication intake and coping strategies (SWAMECO) for adults with polypharmacy." BMJ Open 10,no.8:e036761. doi: 10.1136/bmjopen-2020-036761.
Lin, W. C., C. H. Chen, J. S. Chen, and C. L. Chan. 2016. "The roles of medical social workers in different systems: an example of burn patients from the explosion at Formosa Fun Coast." Hu Li Za Zhi 63, no. 1: 13–19. https://doi.org/10.6224/JN.63.1.13.
Mohammed, A., T. Kassew, D. Shiferaw, and B. Ayelign. 2024. "Cultural competence and its determining factors among nurses working in public hospitals of South Wollo zone, Northeast Ethiopia: a multicenter cross-sectional study." BMC Nursing 23, no. 1: 487. https://doi.org/10.1186/s12912-024-02162-x.
Okoro, O., F. Odedina, R. Reams, and W. Smith. 2012. "Clinical cultural competency and health disparities knowledge of pharmacy students." American Journal of Pharmaceutical Education 76, no. 3: 40. https://doi.org/10.5688/ajpe76340.
Salazar, R., E. Schkeryantz, A. Villalobos, L. Bolgla, and M. Birkmeier. 2018. "Development and pilot testing of the Physical Therapy Spanish Proficiency Measure." Journal of Allied Health 47, no. 2: e47–e53.
Serrano-Diaz, C. R., J. N. Scanlan, and L. V. Monrouxe. 2025. "Context matters: Speech-language pathologists' perceptions of the impact of barriers and facilitators on culturally responsive professional practice." International Journal of Speech-Language Pathology 1–13. https://doi.org/10.1080/17549507.2025.2459177.
Serrano-Diaz, C. R., J. N. Scanlan, and L. V. Monrouxe. 2025. "Experiences of Inclusion and Belonging Among Minoritized Occupational Therapy Practitioners and Students: A Scoping Review." American Journal of Occupational Therapy 79, no. 2: 7902180070. https://doi.org/10.5014/ajot.2025.050838.
Serrano-Gallardo, P., F. Anguita-Presa, S. Barrientos-Trigo, M. Rich-Ruiz, et al. 2022. "Perceptions of Culture and Experiences of Caring for Culturally Diverse Patients: A Qualitative Study of Nurses in Four European Countries." Nursing Reports 12, no. 2: 350–365. https://doi.org/10.3390/nursrep12020034.
Stanyon, M., N. Khan, A. Buckley, N. Patel, et al. 2025. "Diversity in psychiatry education and patient and public involvement: roundtable analysis." BJPsych Bulletin 49, no. 1: 31–36. https://doi.org/10.1192/bjb.2024.106.
Zhang, L., S. Zhou, J. D. Allen, F. Wang, et al. 2023. "Assessing pharmacogenomic literacy in China through validation of the Chinese version of the Minnesota Assessment of Pharmacogenomic Literacy." Clinical and Translational Science 16, no. 11: 2356–2368. https://doi.org/10.1111/cts.13637.

# 10 | Education and Mentoring || 教育と指導（メンタリング） || 교육과 멘토링 || 教学与导师指导

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Agnel, J., J. Molle, S. Colson, and A. Chays-Amania. 2025. "The Impact of the Evidence-Based Practice Mentor on Nurses: A Scoping Review." Worldviews on Evidence-Based Nursing 22, no. 2: e70016. https://doi.org/10.1111/wvn.70016.
Juntunen, J., A. M. Tuomikoski, S. Pramila-Savukoski, V. Kaarlela, et al. 2025. "Healthcare professionals' experiences of required competencies in mentoring of interprofessional students in clinical practice: a systematic review of qualitative studies." Journal of Advanced Nursing 81, no. 2: 701–729. https://doi.org/10.1111/jan.16347.
Nel, D., A. P. Marty, S. Frick, M. P. Hennus, and M. Linsenmeyer. 2024. "Addressing practical and conceptual challenges in workplace-based assessment." In Entrustable Professional Activities and Entrustment Decision-Making in Health Professions Education, edited by O. ten Cate, V. C. Burch, H. C. Chen, et al., Chapter 20. London: Ubiquity Press.
Samuels, E., E. Champagne, A. K. Lyden, G. J. Harrington, et al. 2023. "Implementing a mentoring program for clinical research professionals: a novel professional development initiative for university health research staff." Journal of Clinical and Translational Science 7, no. 1: e247. https://doi.org/10.1017/cts.2023.655.
Sheri, K., J.Y.J. Too, S.E.L. Chuah, Y.P. Toh, et al. 2019. "A scoping review of mentor training programs in medicine between 1990 and 2017." Medical education online 24(1): 1555435. https://doi.org/10.1080/10872981.2018.1555435.
Gruppen, L., D.M. Irby, S.J. Durning, and L.A. Maggio. 2018. "Interventions Designed to Improve the Learning Environment in the Health Professions: A Scoping Review." MedEdPublish (2016) 7: 211. https://doi.org/10.15694/mep.2018.0000211.1.
Cranfill, J.R., C.E. Deeter, D. Hannah, D.C. Snyder, et al. 2023. "Development and implementation of an on-demand competency-based onboarding program for clinical research professionals in academic medicine." Frontiers in medicine 10: 1249527. https://doi.org/10.3389/fmed.2023.1249527.

## Field Challenges & Barriers || 現場の課題と障壁 || 현장의 과제와 장벽 || 一线挑战与障碍

Aslam, F., U. Mahboob, Q. Zahra, et al. 2022. "The Drudgery of a Doctor's Disciple: Exploring the effects of negative role modelling on medical students' professional development." Medical Teacher.
Badeeb, N., Y. Alsolami, M. Alhamrani, et al. 2025. "Exploring motivators and challenges for preceptors to teach in the clinical settings: a survey-based study." BMC Medical Education 25, no. 1: 229.
Hakim, A. 2023. "Investigating the challenges of clinical education from the viewpoint of nursing educators and students: A cross-sectional study." SAGE Open Medicine 11: 20503121221143578.
Ho, T., A. D. Curtin, E. Taylor, and G. Moreno. 2025. "Barriers to implementing a racial justice curriculum: CERA comparison of family medicine program directors' and residents' perspectives." Family Medicine 57, no. 7: 471–482. https://doi.org/10.22454/FamMed.2025.951379.
Ibrahim, R., M. Varghese, and S. S. Salim. 2024. "A Cross-Sectional Study on Nursing Preceptors' Perspectives About Preceptorship and Organizational Support (insights from Ghana)." SAGE Open Nursing 10: 23779608241288756.
Okpalauwaekwe, U., C. Holinaty, T. Smith-Windsor, J. W. Barton, et al. 2024. "From field of dreams to back to the future? Exploring barriers to participating in continuing professional development (CPD) programs." BMC Medical Education 24, no. 1: 106. https://doi.org/10.1186/s12909-024-05038-5.
Orsini, C., R. Imafuku, B. Jennings, et al. 2025. "What influences clinical educators' motivation to teach? A BEME systematic review and framework synthesis based on self-determination theory (BEME Review No. 90)." Medical Teacher 47, no. 5: 779–787.
Pratt, M. 2020. "Evaluation of unsatisfactory student performance: Navigating the 'failure to fail' phenomenon in clinical nursing education." The Clinical Teacher 17, no. 1: 58–63.
Ramani, S., S. E. Post, K. Könings, et al. 2017. "'It's Just Not the Culture': Understanding Feedback in Postgraduate Medical Education through the Lens of Institutional Culture." Teaching and Learning in Medicine 29, no. 2: 153–161.
Suryanti, C., H. Hamzah, and I. S. Tunru. 2025. "Impact of international trends on medical education curriculum." The Asia Pacific Scholar 10, no. 4: 97–99. https://doi.org/10.29060/TAPS.2025-10-4/II3669.
Tadesse, D., Y. Solomon, M. Hailu, and F. Tigistu. 2024. "Challenges of Clinical Education: From the Perspective of Clinical Instructors and Clinical Staffs at Dire Dawa University, Dire Dawa, Ethiopia (Qualitative Study)." Journal of Medical Education and Curricular Development 11: 23821205241249378.
Younas, A., H. Zeb, S. B. Aziz, et al. 2019. "Perceived challenges of nurse educators while teaching undergraduate nursing students in Pakistan: An exploratory mixed-methods study." Nurse Education Today 81: 39–48.
Ansar, A. 2023. "Inhibitors of curriculum development, implementation, and reception." Health Profession Edu Res 1. doi:10.54844/hper.2023.0484.
Schumann, M., M. Lehmann, and H. Peters. 2025. "Beyond carrots and sticks. Exploring faculty motivation to join a digital health professions educator program." Frontiers in medicine 12: 1554011. https://doi.org/10.3389/fmed.2025.1554011.
Buthelezi, N.D., and K.D. Shopo. 2023. "Challenges experienced by nurse educators developing postgraduate nursing diploma curriculum programmes, Gauteng." Curationis 46(1): e1-e10. https://doi.org/10.4102/curationis.v46i1.2447.
Zhu, G., and T.K. Tan. 2019. "Medical student mistreatment by patients in the clinical environment: prevalence and management." Singapore medical journal 60(7): 353-358. https://doi.org/10.11622/smedj.2019075.
Gupta, S., and V. Menon. 2022. "Psychiatry training for medical students: A global perspective and implications for India's competency-based medical education curriculum." Indian journal of psychiatry 64(3): 240-251. https://doi.org/10.4103/indianjpsychiatry.indianjpsychiatry_187_22.
van Vendeloo, S.N., D.J. Prins, C.C.P.M. Verheyen, J.T. Prins, et al. 2018. "The learning environment and resident burnout: a national study." Perspectives on medical education 7(2): 120-125. https://doi.org/10.1007/s40037-018-0405-1.

## Assessment & Feedback Practices || 評価とフィードバックの実践 || 평가와 피드백의 실천 || 评估与反馈实践 {f:edu}

Daelmans, H. E. M., M. Mak-van der Vossen, G. Croiset, and R. A. Kusurkar. 2016. "What difficulties do faculty members face when conducting workplace-based assessments in undergraduate clerkships?" International Journal of Medical Education 7: 19–24.
McCutcheon, S., and A. M. Duchemin. 2020. "Overcoming barriers to effective feedback: a solution-focused faculty development approach." International Journal of Medical Education 11: 230–232.
Natesan, S., J. Jordan, A. Sheng, G. Carmelli, et al. 2023. "Feedback in medical education: an evidence-based guide to best practices from the Council of Residency Directors in Emergency Medicine." Western Journal of Emergency Medicine 24, no. 3: 479–494. https://doi.org/10.5811/westjem.56544.
Burgess, A., D. van Diggele, C. Roberts, and C. Mellis. 2020. "Feedback in the clinical setting." BMC medical education 20(Suppl 2): 460. https://doi.org/10.1186/s12909-020-02280-5.
Hardavella, G., A. Aamli-Gaagnat, N. Saad, I. Rousalova, et al. 2017. "How to give and receive feedback effectively." Breathe (Sheffield, England) 13(4): 327-333. https://doi.org/10.1183/20734735.009917.
Miller, A., and J. Archer. 2010. "Impact of workplace based assessment on doctors' education and performance: a systematic review." BMJ (Clinical research ed.) 341: c5064. https://doi.org/10.1136/bmj.c5064.
Finn, G.M., J. Tai, and V.D. Nadarajah. 2025. "Inclusive assessment in health professions education: Balancing global goals and local contexts." Medical education 59(1): 88-96. https://doi.org/10.1111/medu.15535.
Smith, H., H. Colangelo, K. Mader, R. Silva, et al. 2026. "Comparability of Preceptor Assessment of Medical Students in a General Practice and Multispecialty Longitudinal Integrated Clerkship in a US Medical School." Teaching and learning in medicine 38(2): 196-205. https://doi.org/10.1080/10401334.2025.2495351.
Swayamprakasam, A.P., A. Segaran, and L. Allery. 2014. "Work-based assessments: making the transition from participation to engagement." JRSM open 5(3): 2042533313515861. https://doi.org/10.1177/2042533313515861.
Magnier, K.M., V.H. Dale, and M.J. Pead. 2012. "Workplace-based assessment instruments in the health sciences." Journal of veterinary medical education 39(4): 389-95. https://doi.org/10.3138/jvme.1211-118R.

# 11 | Research and Scholarship || 研究と学術活動 || 연구와 학술활동 || 研究与学术活动

## Core Competency, Theory & Implementation Frameworks || 中核コンピテンシー・理論・実装フレームワーク || 핵심 역량·이론·실행 프레임워크 || 核心能力、理论与实施框架 {core}

Benner, P., R. G. Hughes, and M. Sutphen. 2008. "Clinical Reasoning, Decisionmaking, and Action: Thinking Critically and Clinically." In Patient Safety and Quality: An Evidence-Based Handbook for Nurses, edited by R. G. Hughes. Rockville, MD: Agency for Healthcare Research and Quality.
Contandriopoulos, D., A. Duhoux, C. Larouche, M. Perroux, et al. 2022. "Co-creation of knowledge to narrow the knowledge-to-action gap." Healthcare Management Forum 35, no. 4: 228–232.
Hosseini, S. Z., P. Shokouh, and Z. Anbari. 2024. "Barriers and facilitators to the implementation of research findings in healthcare: a systematic scoping review." BMC Health Services Research 24, no. 1: 1–18.
Slade, S. C., et al. 2018. "Frameworks for embedding a research culture in allied health practice: a rapid review." Health Research Policy and Systems 16, no. 1: 29.
Storr, J., and D. R. Thompson. 2017. "Understanding context in studies of quality improvement." In Improving Patient Safety: The Implications of Complexity, Context and Culture, 105–118. Cham: Palgrave Macmillan.

## Field Challenges & Barriers (General & Cross-Disciplinary) || 現場の課題と障壁（一般・職種横断） || 현장의 과제와 장벽(일반·직종 공통) || 一线挑战与障碍（通用·跨专业）

Agarwal, R., G. M. Chertow, and R. L. Mehta. 2006. "Strategies for successful patient oriented research: why did I (not) get funded?" Clinical Journal of the American Society of Nephrology 1, no. 2: 340–343.
Bierer, B. E., R. Li, M. Barnes, and I. Sim. 2024. "Formulaic research using large health databases: concerns about quality and a call for greater scrutiny." PLoS Biology 22, no. 5: e3003152.
Cresswell, K., R. Williams, N. Carlile, and A. Sheikh. 2020. "Barriers and facilitators of clinician and researcher collaborations: a qualitative study." BMC Health Services Research 20, no. 1: 1–10.
D'Arrietta, L. M., et al. 2022. "Rethinking Health Professionals' Motivation to Do Research: A Systematic Review." Journal of Multidisciplinary Healthcare 15: 185–216.
de Lusignan, S., H. Liyanage, G. L. Di Tanna, F. Ferreira, et al. 2024. "Availability of social determinants of health data in primary care electronic health records: An international primary care research data landscape review." PLoS One 19, no. 5: e0297751.
Newington, L., et al. 2021. "Impacts of clinical academic activity: Qualitative interviews with healthcare managers and research-active nurses, midwives, allied health professionals and pharmacists." BMJ Open 11, no. 10: e050679.
Oshiro, J., S. L. Caubet, K. E. Viola, and J. M. Huber. 2020. "Going beyond 'Not enough time': barriers to preparing manuscripts for academic medical journals." Teaching and Learning in Medicine 32, no. 1: 71–81. https://doi.org/10.1080/10401334.2019.1659144.
Payne, C. B., and K. Chappell. 2024. "The Steps and Challenges in Preparing a Grant Application." Clinical Nurse Specialist 38, no. 5: 221–224.
Shah, J., A. Shah, and R. Pietrobon. 2009. "Scientific writing of novice researchers: what difficulties and encouragements do they encounter?" Academic Medicine 84, no. 4: 511–516. https://doi.org/10.1097/ACM.0b013e31819a8c3c.

## Field Challenges & Barriers by Profession || 職種別の現場の課題と障壁 || 직종별 현장의 과제와 장벽 || 各职种的一线挑战与障碍

### Physicians and General Practitioners || 医師・一般医 || 의사·일반의 || 医生与全科医生 {p:phys}

Adler, L., et al. 2020. "Primary care physicians' attitudes toward research: A cross-sectional descriptive study." Family Practice 37, no. 3: 306–313.
Ameh, P. O., et al. 2022. "Research activity, facilitators and barriers amongst trainee and early-career family physicians in sub-Saharan Africa: a cross-sectional survey." African Journal of Primary Health Care & Family Medicine 14, no. 1: e1–e10.
Boykins, A. D. 2023. "Exploring Graduate Medical Education Resident Perspectives on Scholarly Publication Production: A Qualitative Case Study." Doctoral dissertation, Walden University.
Girard, A., et al. 2023. "Strategies to engage family physicians in primary care research: A systematic review." Journal of Evaluation in Clinical Practice 29, no. 1: 233–249.
Hummers-Pradier, E., et al. 2008. "Simply no time? Barriers to GPs' participation in primary health care research." Family Practice 25, no. 2: 105–112.
Marshall, R., L. Holden, and X. Golenko. 2024. "Barriers and Enablers of Primary Healthcare Professionals in Health Research Engagement: A Systematic Review of Qualitative Studies." Health Research Policy and Systems 22, no. 1: 1–14.
Matheson, M., et al. 2025. "Barriers and Enablers of Primary Healthcare Professionals in Health Research Engagement: A Systematic Review of Qualitative Studies." Nursing & Health Sciences 27, no. 1: e70022.

### Nursing Professionals || 看護職 || 간호직 || 护理人员 {p:nurse}

Chan, G. K., et al. 2011. "Barriers and perceived needs for understanding and using research among emergency nurses." Journal of Emergency Nursing 37, no. 1: 24–31.
Chan, Z. C. Y., Y. L. Fung, and W. T. Chien. 2013. "Bracing for the challenges in and beyond the ever-changing nursing reality: A qualitative study." Journal of Nursing Scholarship 45, no. 4: 399–405.
Cinar, N., and Y. Uc. 2024. "The impact of nurses' critical thinking disposition, clinical reasoning competency, and nursing practice environment on their medication safety competency." Journal of Nursing Management 2024: 1–11.
Jafari, H., A. Khatony, and A. Abdi. 2016. "The most important barriers to the application of research findings from the nurses' perspective: A cross sectional-analytical study." Iranian Journal of Nursing and Midwifery Research 21, no. 4: 388–393.
Nkrumah, I., C. Atuhaire, and G. Priebe. 2018. "Barriers for nurses' participation in and utilisation of clinical research in three hospitals in Ghana." Pan African Medical Journal 30: 24.
Riegel, M., C. L. Randall, and A. S. Ramelet. 2023. "Barriers to research findings utilization amongst critical care nurses and allied health professionals: An international survey." Australian Critical Care 37, no. 3: 450–458.
Scala, E., et al. 2019. "Engagement in Research: A clinical nurse profile and motivating factors." Journal for Nurses in Professional Development 35, no. 3: 137–143.
Ali, P., A. Younas, A.A. Talpur, and S. Debbage. 2026. "Factors Affecting Nurses, Midwives and Allied Health Professionals' Ability to Engage With Research." Journal of clinical nursing. https://doi.org/10.1111/jocn.70308.

### Allied Health, Public Health, Pharmacy, and Social Work || リハ・医療技術職、公衆衛生、薬剤師、ソーシャルワーク || 재활/보건의료기술직·공중보건·약사·사회복지 || 康复/医技、公共卫生、药学与社会工作 {f:allied,chw,pharm,sw}

Armour, C., et al. 2007. "Pharmacists' views on involvement in pharmacy practice research: Strategies for facilitating participation." Pharmacy Practice 5, no. 2: 59–66.
Chapman, S. A., M. M. Haby, S. M. Mickan, and E. St-Pierre. 2012. "Research capacity building in allied health: a review of the literature." Journal of Allied Health 41, no. 1: e1–e8.
Di Bona, L., et al. 2017. "Enablers and challenges to occupational therapists' research engagement: a qualitative study." British Journal of Occupational Therapy 80, no. 11: 642–650.
Harvey, Desley, David Plummer, Alison Pighills, and Tilley Pain. 2013. "Practitioner Research Capacity: A Survey of Social Workers in Northern Queensland." Australian Social Work 66, no. 4: 540–554. doi:10.1080/0312407X.2012.754916
Kengia, J. T., et al. 2023. "Research capacity, motivators and barriers to conducting research among healthcare providers in Tanzania's public health system: a mixed methods study." Human Resources for Health 21, no. 1: 73.
Kong, S. T., et al. 2023. "Collaborative practice research in social work: Piloting a model for research and professional learning during COVID-19." Social Work Practice 37, no. 2: 123–139.
Leblanc, J., J. Barbier, L. Poiroux, J. Bouix-Picasso, et al. 2024. "Characteristics of studies funded by a national research programme for nursing and allied health professions: A 9-year retrospective descriptive observational study." International Nursing Review 71, no. 2: 219–228.
Andy Pulman, Lee-Ann Fenge, Building Capacity for Social Care Research—Individual-Level and Organisational Barriers Facing Practitioners, The British Journal of Social Work, Volume 53, Issue 8, December 2023, Pages 3923–3942, https://doi.org/10.1093/bjsw/bcad117
Ma T, Tellegen CL, Sanders MR. Facilitators, barriers, and enablers of social workers' utilization of an evidence-based parenting program: An exploratory mixed-method study, Children and Youth Services Review, 2024; 166: 107922. ISSN 0190-7409, https://doi.org/10.1016/j.childyouth.2024.107922.
Leong, C., K.J. Harper, S.S. Han, L. Osborne, et al.. 2025. "Differences in personality and character traits of occupational therapy researchers and non-researchers: A cross-sectional study." Australian occupational therapy journal 72(2) :e70015. https://doi.org/10.1111/1440-1630.70015.
Janssen, J., L. Hale, B. Mirfin-Veitch, and T. Harland. 2016. "Perceptions of physiotherapists towards research: a mixed methods study." Physiotherapy 102(2) :210-6. https://doi.org/10.1016/j.physio.2015.04.007.
Pager, S., et al. 2012. "Motivators, enablers, and barriers to building allied health research capacity." Journal of Multidisciplinary Healthcare 5: 53–59.

### Students and Educators || 学生と教育者 || 학생과 교육자 || 学生与教育者 {f:student,edu}

Al-Ryalat, S. A., A. M. Al-Hadidi, T. S. Al-Nusairat, M. J. Al-Nsour, et al. 2024. "Barriers to Research Participation among Medical Students Internationally: An Updated Systematic Review." Advances in Medical Education and Practice 15: 205–216.
Al Zadjali, M., S. Al Adawi, I. Al Rising, A. Al Habsi, et al. 2024. "Barriers and Enablers of Medical Student Participation in Research." Medical Science Educator 34, no. 3: 709–720.
Chidambaram, S., and M. F. Alshammari. 2024. "Barriers to knowledge sharing among medical students at private and public-sector medical colleges in Riyadh, Saudi Arabia." Cureus 16, no. 10: e60954.
Kapadia, M. Z., L. Grealish, and T. Comans. 2022. "Allied health professional experience of supervising students on research placements in a hospital and health service: An exploratory qualitative study." BMC Medical Education 22, no. 1: 398.
Malekpour, A., M. Gholami, and F. Sharif. 2020. "Challenges of fostering critical thinking in medical education: A qualitative study." Journal of Education and Health Promotion 9: 133.
Pepin, G., E. Skinner, and M. Kennedy. 2021. "Allied health student placements in primary healthcare settings: An integrative review." Australian Journal of Primary Health 27, no. 6: 383–390.
Ramadan, M. I., A. A. Al-Saleh, G. S. Al-Shammari, M. S. Al-Harbi, et al. 2025. "Perceptions of healthcare students towards artificial intelligence in Saudi Arabia: A cross-sectional study." Frontiers in Education 10: 1550671.
Tiwari, V., A. Sankhe, and R. Ittyerah. 2024. "A systematic review of virtual reality applications in healthcare: benefits, challenges, and future directions." Journal of Medical Systems 48, no. 1: 47.

# 12 | Digital Health and Information Management || デジタルヘルスと情報管理 || 디지털 헬스와 정보관리 || 数字健康与信息管理

## Core Competency, Digital Health Literacy, and Change Management || 中核コンピテンシー・デジタルヘルスリテラシー・変革マネジメント || 핵심 역량·디지털 헬스 리터러시·변화관리 || 核心能力、数字健康素养与变革管理 {core}

Khan, R., S. Khan, H. Almohaimeed, A. Almars, et al. 2025. "Utilization, challenges, and training needs of digital health technologies: Perspectives from healthcare professionals." International Journal of Medical Informatics 184: 105833.
Longhini, J., G. Rossettini, and A. Palese. 2022. "Digital Health Competencies Among Health Care Professionals: Systematic Review." Journal of Medical Internet Research 24, no. 8: e36414. https://doi.org/10.2196/36414.
Lorenzi, N. M., R. T. Riley, and N. A. Dewan. 2001. "Barriers and resistance to informatics in behavioral health." Studies in Health Technology and Informatics 84, Pt 2: 1301–1304.
Protogiros, D., T. Tsitsi, C. Cloconi, I. Nicolaidou, et al. 2025. "Mapping and assessing existing digital skills training programs for health care professionals and health managers in Europe: expert-based survey for investigating the landscape, accessibility, and effectiveness of training initiatives." Journal of Medical Internet Research 27: e71657.
Ross, J., F. Stevenson, R. Lau, and E. Murray. 2016. "Factors that influence the implementation of e-health: a systematic review of systematic reviews (an update)." Implementation Science 11: 146.
Argote, LN, and Brooks, JV. 2024. "Challenges and Opportunities for the Medical Laboratory in the Era of Direct Patient Access to Test Results." Clin Lab Sci 00(0): 1–9.
Embi, P. J., and P. R. Payne. 2009. "Clinical research informatics: challenges, opportunities and definition for an emerging domain." Journal of the American Medical Informatics Association 16, no. 3: 316-27. https://doi.org/10.1197/jamia.M3005.
Chen, X., J. L. Hay, E. A. Waters, M. T. Kiviniemi, et al. 2018. "Health Literacy and Use and Trust in Health Information." Journal of health communication 23, no. 8: 724-734. https://doi.org/10.1080/10810730.2018.1511658.
Dixon, B. E., K. Barboza, A. E. Jensen, K. J. Bennett, et al. 2017. "Measuring Practicing Clinicians' Information Literacy. An Exploratory Analysis in the Context of Panel Management." Applied clinical informatics 8, no. 1: 149-161. https://doi.org/10.4338/ACI-2016-06-RA-0083.
White, C. L., and K. C. Hohmeier. 2015. "Pharmacy Informatics: Current and Future Roles for the Pharmacy Technician." The Journal of pharmacy technology 31, no. 6: 247-252. https://doi.org/10.1177/8755122515605517.

## Electronic Health Record (EHR) Usability and Clinician Workload || 電子カルテの使い勝手と業務負荷 || 전자의무기록(EHR)의 사용성과 업무 부담 || 电子病历（EHR）可用性与临床工作负荷

Alobayli, F., S. O'Connor, A. Holloway, and K. Cresswell. 2023. "Electronic Health Record Stress and Burnout Among Clinicians in Hospital Settings: A Systematic Review." Digital Health 9: 20552076231220241. https://doi.org/10.1177/20552076231220241.
Linder, J. A., J. L. Schnipper, R. Tsurikova, A. J. Melnikas, et al. 2006. "Barriers to electronic health record use during patient visits." AMIA Annual Symposium Proceedings 2006: 499–503.
Meltzer, E. C., K. S. Vorseth, I. T. Croghan, Y. H. Chang, et al. 2022. "Use of the electronic health record during clinical encounters: an experience survey." Annals of Family Medicine 20, no. 4: 312–318.
Keenan, Gail, Elizabeth Yakel, Karen Dunn Lopez, Dana Tschannen, Yvonne B Ford. 2013. "Challenges to nurses' efforts of retrieving, documenting, and communicating patient care information." Journal of the American Medical Informatics Association 20, no. 2: 245–251. https://doi.org/10.1136/amiajnl-2012-000894.
Upadhyay, S., and H. F. Hu. 2022. "A Qualitative Analysis of the Impact of Electronic Health Records (EHR) on Healthcare Quality and Safety: Clinicians' Lived Experiences." Health services insights 15: 11786329211070722. https://doi.org/10.1177/11786329211070722.
Nguyen, O. T., N. J. Jenkins, N. Khanna, S. Shah, et al. 2021. "A systematic review of contributing factors of and solutions to electronic health record-related impacts on physician well-being." Journal of the American Medical Informatics Association 28, no. 5: 974-984. https://doi.org/10.1093/jamia/ocaa339.
Forde-Johnston, C., D. Butcher, and H. Aveyard. 2023. "An integrative review exploring the impact of Electronic Health Records (EHR) on the quality of nurse-patient interactions and communication." Journal of advanced nursing 79, no. 1: 48-67. https://doi.org/10.1111/jan.15484.
Budd, J. 2023. "Burnout Related to Electronic Health Record Use in Primary Care." Journal of primary care & community health 14: 21501319231166921. https://doi.org/10.1177/21501319231166921.
Kutney-Lee, A., C. Brooks, D. M. Sloane, K. H. Bowles, et al. 2021. "Electronic Health Record Usability: Associations With Nurse and Patient Outcomes in Hospitals." Medical care 59, no. 7: 625-631. https://doi.org/10.1097/MLR.0000000000001536.
Wu, Y., M. Wu, C. Wang, J. Lin, et al. 2024. "Evaluating the Prevalence of Burnout Among Health Care Professionals Related to Electronic Health Record Use: Systematic Review and Meta-Analysis." JMIR medical informatics 12: e54811. https://doi.org/10.2196/54811.
Ratwani, R., T. Fairbanks, E. Savage, K. Adams, et al. 2016. "Mind the Gap. A systematic review to identify usability and safety challenges and practices during electronic health record implementation." Applied clinical informatics 7, no. 4: 1069-1087. https://doi.org/10.4338/ACI-2016-06-R-0105.
Fraczkowski, D., J. Matson, and K. D. Lopez. 2020. "Nurse workarounds in the electronic health record: An integrative review." Journal of the American Medical Informatics Association 27, no. 7: 1149-1165. https://doi.org/10.1093/jamia/ocaa050.
Melnick, E. R., E. Harry, C. A. Sinsky, L. N. Dyrbye, et al. 2020. "Perceived Electronic Health Record Usability as a Predictor of Task Load and Burnout Among US Physicians: Mediation Analysis." Journal of medical Internet research 22, no. 12: e23382. https://doi.org/10.2196/23382.
Kruse, C. S., M. Mileski, G. Dray, Z. Johnson, et al. 2022. "Physician Burnout and the Electronic Health Record Leading Up to and During the First Year of COVID-19: Systematic Review." Journal of medical Internet research 24, no. 3: e36200. https://doi.org/10.2196/36200.
Kaipio, J., A. Kuusisto, H. Hyppönen, T. Heponiemi, et al. 2020. "Physicians' and nurses' experiences on EHR usability: Comparison between the professional groups by employment sector and system brand." International journal of medical informatics 134: 104018. https://doi.org/10.1016/j.ijmedinf.2019.104018.
Woldemariam, M. T., and W. Jimma. 2023. "Adoption of electronic health record systems to enhance the quality of healthcare in low-income countries: a systematic review." BMJ health & care informatics 30, no. 1. https://doi.org/10.1136/bmjhci-2022-100704.
Sittig, D. F., A. Wright, E. Coiera, F. Magrabi, et al. 2020. "Current challenges in health information technology-related patient safety." Health informatics journal 26, no. 1: 181-189. https://doi.org/10.1177/1460458218814893.
Kim, M. O., E. Coiera, and F. Magrabi. 2017. "Problems with health information technology and their effects on care delivery and patient outcomes: a systematic review." Journal of the American Medical Informatics Association 24, no. 2: 246-250. https://doi.org/10.1093/jamia/ocw154.
Zhang, Y., J. A. Callaghan-Koru, and G. Koru. 2024. "The challenges and opportunities of continuous data quality improvement for healthcare administration data." JAMIA open 7, no. 3: ooae058. https://doi.org/10.1093/jamiaopen/ooae058.
Huang, C., R. Koppel, J. D. McGreevey, C. K. Craven, et al. 2020. "Transitions from One Electronic Health Record to Another: Challenges, Pitfalls, and Recommendations." Applied clinical informatics 11, no. 5: 742-754. https://doi.org/10.1055/s-0040-1718535.

## Telehealth Adoption and Access Barriers || 遠隔医療の導入とアクセスの障壁 || 원격의료 도입과 접근성 장벽 || 远程医疗的推广与可及性障碍

Brooks, E., C. Turvey, and E. F. Augusterfer. 2013. "Provider barriers to telemental health: clinician skepticism, telehealth technologies as inconvenient, and difficulties with medical reimbursement." Telemedicine Journal and e-Health 19, no. 6: 409–411.
Cowan, K. E., A. J. McKean, M. T. Gentry, and D. M. Hilty. 2019. "Barriers to Use of Telepsychiatry: Clinicians as Gatekeepers." Mayo Clinic Proceedings 94, no. 12: 2510–2523.
Hayavi-haghighi, M. H., N. Choobin, and J. Alipour. 2025. "Barriers to widespread adoption of telehealth from physicians' perspective: a survey in southern Iran." PLoS One 20, no. 7: e0327095.
Hung, C., and T. R. Katapally. 2025. "Assessing the Role of Digital Literacy in Accessing and Utilising Virtual Healthcare Services: A Systematic Review Protocol." Journal of evaluation in clinical practice 31, no. 1: e14245. https://doi.org/10.1111/jep.14245.

## Artificial Intelligence Acceptance, Trust, and Bias || AIの受容・信頼・バイアス || AI의 수용·신뢰·편향 || 人工智能的接受度、信任与偏见

Ahmed, M. I., B. Spooner, J. Isherwood, M. Lane, et al. 2023. "A Systematic Review of the Barriers to the Implementation of Artificial Intelligence in Healthcare." Cureus 15, no. 10: e46454.
Gebru, K., A. Abebe, T. Tesfaye, M. Kebede, et al. 2025. "Barriers to and facilitators of clinician acceptance and use of artificial intelligence in healthcare settings: a scoping review." BMJ Open 15, no. 1: e078645.
Hassan, M., A. Kushniruk, and E. Borycki. 2024. "Barriers to and facilitators of artificial intelligence adoption in health care: scoping review." JMIR Human Factors 11: e48633.
Scipion, C. E. A., M. A. Manchester, A. Federman, Y. Wang, et al. 2025. "Barriers to and facilitators of clinician acceptance and use of artificial intelligence in healthcare settings: a scoping review." BMJ Open 15, no. 4: e092624.

# 13 | Emergency and Disaster Response || 救急・災害対応 || 응급·재난 대응 || 急救与灾害应对

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Hung, K. K. C., M. K. MacDermot, T. S. Hui, et al. 2024. "Mapping study for health emergency and disaster risk management competencies and curricula: literature review and cross-sectional survey." Globalization and Health 20: 15.
International Council of Nurses (ICN). 2019. Core Competencies in Disaster Nursing Version 2.0. Geneva: ICN.
Jennings-Sanders, A., N. Frisch, and S. Wing. 2005. "Core competencies in disaster healthcare personnel: a review." Prehospital and Disaster Medicine 20, no. 5: 387–395. https://doi.org/10.1017/S1049023X00008438.

## Field Challenges & Barriers by Profession || 職種別の現場の課題と障壁 || 직종별 현장의 과제와 장벽 || 各职种的一线挑战与障碍

### Multidisciplinary and General Response || 多職種・全般的な対応 || 다직종·전반적 대응 || 多专业与综合应对 {f:multi}

Brooks, S. K., R. Dunn, R. Amlôt, G. J. Rubin, et al. 2020. "Prevention of occupational stress in health-care workers during COVID-19 pandemic." Indian Journal of Psychiatry 62, Suppl 3: S395–S400. https://doi.org/10.4103/psychiatry.IndianJPsychiatry_844_20.
Choi, Y. J. 2020. "Psychological First-Aid Experiences of Disaster Health Care Workers: A Qualitative Analysis." Disaster Medicine and Public Health Preparedness 14, no. 4: 433–436.
Gillani, A. H., S. Li, J. Akbar, et al. 2022. "How Prepared Are the Health Care Professionals for Disaster Medicine Management? An Insight from Pakistan." International Journal of Environmental Research and Public Health 19, no. 1: 200.
Goniewicz, K., and M. Goniewicz. 2020. "Disaster Preparedness and Professional Competence Among Healthcare Providers: Pilot Study Results." Sustainability 12, no. 12: 4931.
Hugelius, K., and N. Harada. 2025. "What is Disaster Readiness Among Health Care Professionals? A Systematic Integrative Review Study." Disaster Medicine and Public Health Preparedness 19: 57.
Labrague, L. J., J. A. A. de los Santos, C. C. Falguera, C. E. Nwafor, et al. 2021. "Emotional and psychological implications for healthcare professionals in disasters or mass casualties: a systematic review." Journal of Nursing Management 29, no. 8: 2599–2611. https://doi.org/10.1111/jonm.13474.
Petrie, K., J. Milligan-Saville, A. Gayed, M. Deady, et al. 2020. "What are the main psychological, physical and social challenges experienced by ambulance personnel?" BMC Psychiatry 20: 348. https://doi.org/10.1186/s12888-020-02752-4.
Schofield, B., S. Voss, A. Proctor, and J. Benger. 2022. "Barriers and facilitators to effective health promotion by urgent and emergency care staff: a systematic review." BMC Emergency Medicine 22, no. 1: 99. https://doi.org/10.1186/s12873-022-00654-9.
Seyedin, H., M. Rostamian, F. B. Shirazi, and H. A. Larijani. 2021. "Challenges of providing health care in complex emergencies: a systematic review." Disaster Medicine and Public Health Preparedness 15: e1–e7. https://doi.org/10.1017/dmp.2021.312.
Tan, A. W. K., H. J. Ho, V. K. Sharma, and N. Liu. 2022. "Training healthcare workers in disaster preparedness increases willingness to report to work during disasters." Southern Medical Journal 115, no. 2: 113–120. https://doi.org/10.14423/SMJ.0000000000001358.
Tanrıverdi, O., and M. Eskin. 2017. "Ethical challenges for healthcare workers in disaster settings: a qualitative study from Turkey." PLoS One 12, no. 3: e0174162. https://doi.org/10.1371/journal.pone.0174162.
Vawter, D. E., J. E. Garrett, K. G. Gervais, J. L. Hick, et al. 2020. "Healthcare ethics during a pandemic." Western Journal of Emergency Medicine 21, no. 3: 477–483. https://doi.org/10.5811/westjem.2020.4.47549.

### Physicians and Emergency Medical Personnel || 医師・救急医療従事者 || 의사·응급의료 종사자 || 医生与急救医疗人员 {f:phys,ems}

Iserson, K. V. 2007. "Should physicians work rather than flee during disasters and epidemics?" Annals of Emergency Medicine 50, no. 4: 447–455. https://doi.org/10.1016/j.annemergmed.2007.07.024.
Iserson, K. V., C. E. Heine, G. L. Larkin, J. C. Moskop, et al. 2008. "Fight or flight: the ethics of emergency physician disaster response." Annals of Emergency Medicine 51, no. 4: 345–353. https://doi.org/10.1016/j.annemergmed.2007.07.015.
West, C. P., L. N. Dyrbye, C. Sinsky, M. Trockel, et al. 2025. "Organisational and systems factors affecting patient care and physician well-being." Journal of General Internal Medicine 40. https://doi.org/10.1186/s13690-025-01609-0.
SteelFisher, G.K., R.J. Blendon, A.S. Brulé, K.M. Lubell, et al. 2015. "Physician Emergency Preparedness: A National Poll of Physicians." Disaster medicine and public health preparedness 9(6): 666-80. https://doi.org/10.1017/dmp.2015.114.
Muslu, A., and E. Yurt 2026. "Paramedics' Experiences in Managing Obstetric Emergencies: A Qualitative Study Based on Reason's Swiss Cheese Model." The journal of obstetrics and gynaecology research 52(6): e70370. https://doi.org/10.1111/jog.70370.

### Nursing Professionals || 看護職 || 간호직 || 护理人员 {p:nurse}

Al Thobaity, A. 2024. "Overcoming challenges in nursing disaster preparedness and response: an umbrella review." BMC Nursing 23: 562.
Azizpour, I., S. Mehri, and A. Habibi Soola. 2022. "Disaster preparedness knowledge and its relationship with triage decision-making among emergency nurses (Ardabil, Iran)." BMC Health Services Research 22: 934.
Chegini, Z., S. Pakmanesh, M. Borhani, M. Mirzaei, et al. 2022. "Disaster preparedness and core competencies among emergency nurses: a cross sectional study." Nursing Open 9, no. 2: 1294–1302. https://doi.org/10.1002/nop2.1172.
Labrague, L. J., K. Hammad, D. S. Gloe, et al. 2018. "Disaster preparedness among nurses: a systematic review of literature." International Nursing Review 65, no. 1: 41–53.
Schoultz, M., C. McGrogan, M. Beattie, et al. 2022. "Uptake and effects of psychological first aid training for healthcare workers' wellbeing in nursing homes: A UK national survey." PLoS One 17, no. 11: e0277062.

### Pharmacy & Allied Health Professionals || 薬剤師・リハ/医療技術職 || 약사·재활/보건의료기술직 || 药师与康复/医技人员 {f:pharm,allied}

Alkhudaydi, K. A., S. H. Algethami, M. Y. Alsaiari, et al. 2024. "The Role of Pharmacists in Disaster Preparedness and Emergency Response." Journal of International Crisis and Risk Communication Research 7, no. S1-2: 2705.
Aruru, M., H. A. Truong, and S. Clark. 2021. "Pharmacy Emergency Preparedness and Response (PEPR): a proposed framework for expanding pharmacy professionals' roles and contributions to emergency preparedness and response during the COVID-19 pandemic and beyond." Research in Social and Administrative Pharmacy 17, no. 1: 1967–1977. https://doi.org/10.1016/j.sapharm.2020.04.002.
Lee, S. Y., B. Amatya, M. P. Galea, and F. Khan. 2020. "Preparedness among Medical Rehabilitation Professionals for Deployment to Future Disaster Settings." Journal of the International Society of Physical and Rehabilitation Medicine 3, no. 1: 5–10.
Tominaga, T., T. Tai, M. Watanabe, S. Yamashita, et al. 2024. "Disaster pharmacists' support and challenges faced by hospital pharmacy departments in the disaster response for the 2024 Noto Peninsula earthquake." Tohoku Journal of Experimental Medicine 264, no. 1: 49–52. https://doi.org/10.1620/tjem.2024.J046. (Note: Alternatively published in Yakugaku Zasshi 144, no. 6: 627-630).
Tan A. Barriers and facilitators to the participation of physical therapists in disaster response following natural hazard-driven sudden-onset disasters: A systematised integrative review of the literature. International Journal of Disaster Risk Reduction, 2024; 100: 104153. https://doi.org/10.1016/j.ijdrr.2023.104153.
Yulanda, N.A., H. Arifin, T. Ligita, L. Makmuriana, et al. 2026. "Nurse-led interventions in enhancing outcomes for patients with tuberculosis: a scoping review." Journal of research in nursing : JRN :17449871261421174. https://doi.org/10.1177/17449871261421174.
Şahin, M., H. Salik, and Ö. Uslu 2026. "Experiences and mental challenges of Turkish healthcare professionals in the Libyan flood disaster: a qualitative study." Emergency medicine journal : EMJ. https://doi.org/10.1136/emermed-2024-214819.

# 14 | Palliative and End-of-Life Care || 緩和ケアと終末期ケア || 완화의료와 임종기 돌봄 || 姑息治疗与临终关怀

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Magalhães, J. C. R., A. Etchegaray, and G. M. S. Gonçalves. 2024. "Comparison of the perception of palliative care by healthcare professionals in some countries around the world: a systematic review." Annals of Palliative Medicine 13, no. 4: 696–709.
Pastrana, T., R. Wenk, and L. De Lima. 2016. "Consensus-Based Palliative Care Competencies for Undergraduate Nurses and Physicians: A Demonstrative Process with Colombian Universities." Journal of Palliative Medicine 19, no. 1: 76–82. https://doi.org/10.1089/jpm.2015.0202.

## Field Challenges & Barriers by Profession || 職種別の現場の課題と障壁 || 직종별 현장의 과제와 장벽 || 各职种的一线挑战与障碍

### Physicians, Nurses, and Multidisciplinary Teams || 医師・看護師・多職種チーム || 의사·간호사·다학제팀 || 医生、护士与多学科团队 {f:phys,nurse,multi}

Alanazi, M. A., et al. 2024. "Navigating end-of-life decision-making in nursing: a systematic review of ethical challenges and palliative care practices." BMC Nursing 23: 467.
Back, A. L., J. A. Tulsky, and R. M. Arnold. 2019. "Communication skills in the age of COVID-19: conversations that matter." JAMA Internal Medicine 179, no. 12: 1571–1577.
Bharmal, A., T. Morgan, I. Kuhn, B. Wee, and S. Barclay. 2022. "Palliative and end-of-life care and junior doctors: a systematic review and narrative synthesis." BMJ Supportive & Palliative Care 12: e862–e868. https://doi.org/10.1136/bmjspcare-2019-001954.
Burke, C., O. Doody, and B. Lloyd. 2023. "Healthcare practitioners' perspectives of providing palliative care to patients from culturally diverse backgrounds: a qualitative systematic review." BMC Palliative Care 22, no. 1: 182.
Clayton, J. M., K. M. Hancock, P. N. Butow, M. H. Tattersall, and D. C. Currow. 2019. "Clinical challenges in communicating prognosis and end-of-life issues: experience of palliative care clinicians." Journal of Palliative Medicine 22, no. 1: 53–60.
Featherstone, H. J., R. McQuillan, and G. Foley. 2024. "Healthcare Professionals' Perspective on Supporting Patients and Family Caregivers in End-of-Life Care Decision-Making: A Qualitative Study in Specialist Palliative Care." American Journal of Hospice and Palliative Medicine 41, no. 5: 500–507.
Gelfman, L. P., D. Kavalieratos, W. G. Teuteberg, A. Lala, and N. E. Goldstein. 2017. "Primary palliative care for heart failure: what is it? How do we implement it?" Heart Failure Reviews 22, no. 5: 611–620. https://doi.org/10.1007/s10741-017-9629-y.
Geng, S., L. Zhang, Q. Zhang, and Y. Wu. 2024. "Ethical dilemmas for palliative care nurses: systematic review." BMJ Supportive & Palliative Care (Mar 27). https://doi.org/10.1136/spcare-2023-004742.
Hudson, P., C. Remedios, K. Thomas, et al. 2018. "Developing family caregiver support in palliative care: challenges and achievements in policy, research, and practice." Palliative Medicine 32, no. 8: 1281–1298.
Kumar, S., S. Zaman, H. Alzubaidi, et al. 2019. "Barriers to effective pain management in advanced cancer: a cross-sectional study among palliative care physicians and nurses." Journal of Pain and Symptom Management 58, no. 6: 1121–1130.
Maffoni, M., P. Argentero, I. Giorgi, J. Hynes, and A. Giardini. 2019. "Healthcare professionals' moral distress in adult palliative care: a systematic review." BMJ Supportive & Palliative Care 9, no. 3: 245–254. https://doi.org/10.1136/bmjspcare-2018-001674.
Magee, A., and J. Lusher. 2023. "Healthcare Professionals' Experiences of End-of-life Care: A Review of the Literature." Journal of Modern Nursing Practice & Research 3, no. 4: 22.
Morley, G., C. Bradbury-Jones, J. Ives, and F. Irvine. 2020. "What is 'moral distress'? A narrative synthesis of the literature." Nursing Ethics 27, no. 3: 649–667.
Peters, L., R. Cant, S. Payne, et al. 2021. "Burnout in palliative care professionals: a systematic review." Palliative Medicine 35, no. 4: 711–724.
Pitzer, S., P. Kutschar, P. Paal, P. Mülleder, et al. 2024. "Barriers for adult patients to access palliative care in hospitals: a mixed methods systematic review." Journal of Pain and Symptom Management 67, no. 1: e16–e33. https://doi.org/10.1016/j.jpainsymman.2023.09.012.
Qian, F., D. Yao, H. Shi, and D. Bi. 2025. "Barriers to healthcare professionals screening, recognizing, and managing delirium in the adult patients receiving specialist palliative care: a mixed-methods systematic review." BMC Palliative Care 24, no. 1: 28. https://doi.org/10.1186/s12904-024-01634-w.
Shen, Y., H. Xu, Y. Zou, and H. Yu. 2024. "Implementing palliative care in the intensive care unit: a systematic review." Intensive Care Medicine 50, no. 5: 512–523. https://doi.org/10.1007/s00134-024-07174-8.
Shen, Y., H. Xu, Y. Zou, and H. Yu. 2025. "Barriers and facilitators to explore palliative care implementation in the ICU from tripartite perspectives: a qualitative systematic review and meta-aggregation." BMJ Open 15, no. 8: e103616. https://doi.org/10.1136/bmjopen-2025-103616.
Shukla, P., P. Leonard, O. Minton, et al. 2019. "The second conversation: improving end-of-life care conversations." Future Healthcare Journal 6, no. 3: 172–175. https://doi.org/10.7861/fhj.2019-0017.
Sinclair, S., T. F. Hack, S. Raffin-Bouchal, et al. 2018. "Compassion fatigue in healthcare: toward a new understanding." Supportive Care in Cancer 26, no. 7: 2263–2271.
van der Stap, L., A. H. de Heij, A. van der Heide, A. K. L. Reyners, and Y. M. van der Linden. 2023. "Barriers and facilitators to multidimensional symptom management in palliative care: a focus group study among patient representatives and clinicians." Palliative & Supportive Care 21, no. 4: 616–627. https://doi.org/10.1017/S147895152200133X.
Wittenberg-Lyles, E., et al. 2017. "Interdisciplinary communication challenges in hospice care: perspectives of hospice staff and caregivers." Journal of Pain and Symptom Management 53, no. 6: 1050–1057.
Chang, C.C., C.Y. Tung, Y.W. Seng, and J.S. Tsai. 2025. "Exploring Spiritual Care Competency in Palliative Medicine: A Narrative Inquiry of Physician Care Notes on Spiritual Distress." The American journal of hospice & palliative care 42(12) :1244-1250. https://doi.org/10.1177/10499091241299413.
Bayley, Z., C. Forward, C. White, H. Elliott-Button, et al.. 2026. "Addressing barriers to interprofessional working with homecare workers in community palliative care: Insights from a multi-site qualitative case study." Palliative medicine 40(1) :62-73. https://doi.org/10.1177/02692163251383385.

### Allied Health, Pharmacy, and Psychosocial Care (Social Workers, Psychologists, Therapists) || リハ・薬剤・心理社会的ケア（SW・心理職・療法士） || 재활·약제·심리사회적 돌봄(사회복지사·심리사·치료사) || 康复、药学与心理社会照护（社工、心理师、治疗师） {f:allied,pharm,sw,psych}

Balboni, M. J., A. Sullivan, A. C. Enzinger, Z. D. Epstein-Peterson, et al. 2014. "Nurse and physician barriers to spiritual care provision at the end of life." Journal of Pain and Symptom Management 48, no. 3: 400–410. https://doi.org/10.1016/j.jpainsymman.2013.09.020.
Best, M., L. Aldridge, P. Butow, and I. Olver. 2016. "Doctors discussing spirituality: a systematic literature review." Palliative Medicine 30, no. 4: 327–337.
Bouquot, P., and A. Sarfo. 2022. "Social workers' challenges in hospice and palliative care settings." Health & Social Work 47, no. 4: 249–257.
Byrne, A. 2023. "How palliative care pharmacists in community practice are improving access to medicines." The Pharmaceutical Journal.
Cramond, L., I. Fletcher, and C. Rehan. 2020. "Experiences of clinical psychologists working in palliative care: A qualitative study." European Journal of Cancer Care 29, no. 3: e13220.
Edwards, A., and N. Pang. 2019. "The role of psychologists in supporting illness-related dying and death." International Journal of Psychology 54, no. S1: 29.
Gijsberts, M. J. H. E., et al. 2019. "Spiritual Care in Palliative Care: A Systematic Review of the Recent European Literature." Medical Sciences (Basel) 7, no. 2: 25.
Hammill, K., R. Bye, and C. Cook. 2015. "Challenges to occupational therapy practice in palliative care: future implications for education and supervision." Australian Occupational Therapy Journal 62, no. S1: 97.
Johnson, S., et al. 2025. "Addressing spirituality-related moral challenges in palliative care." Journal of Hospice & Palliative Nursing 27, no. 1: 15–22.
Kullgren, J. 2023. "Navigating the Complexities of Palliative Care for Patients With Comorbidities and Complicated Symptoms." Pharmacy Times.
McLaughlin, D., et al. 2020. "Social work involvement in palliative care: an international perspective." Journal of Social Work in End-of-Life & Palliative Care 16, no. 4: 290–306.
Schroepfer, T. A., et al. 2020. "Ethical dilemmas in end-of-life care: perspectives of social workers and nurses." Social Work in Health Care 59, no. 3: 195–210.
Twycross, R., et al. 2022. "The role of the pharmacist in palliative care: results of a survey conducted in Australia and Canada." Journal of Palliative Medicine 16, no. 12: 1575–1581.
Volberg, C., et al. 2025. "Physiotherapy in German Palliative Care—A Nationwide Survey Among Physiotherapists." Medicina 61, no. 6: 885.
Dellenborg L, Enstedt D. Balancing hope at the end of life organisational conditions for spiritual care in palliative homecare in Sweden. Social Science & Medicine. 2023;331:116078. ISSN 0277-9536. https://doi.org/10.1016/j.socscimed.2023.116078.
Ruth C, Jay M. Journeys into palliative care: Social workers' narratives of mobilising and sustaining practice. Aotearoa New Zealand Social Work. 2024; 36. 10.11157/anzswj-vol36iss3id1223
Miller, Megan PhD, RN; Addicott, Katie MSN, FNP-C, ACHPN; Rosa, William E. PhD, MBE, AGPCNP-BC, FAANP, FAAN. Spiritual Care as a Core Component of Palliative Nursing. AJN, American Journal of Nursing 123(2):p 54-59, February 2023. | DOI: 10.1097/01.NAJ.0000919748.95749.e5
Wu, C.Y., Y.H. Wu, Y.H. Chang, M.S. Tsay, et al.. 2024. "From comfort zone to front-line care: perspectives and reflections of community pharmacists entering home-based palliative care." BMC palliative care 23(1) :4. https://doi.org/10.1186/s12904-023-01332-z.
Herndon, C.M., D. Nee, R.S. Atayee, D.S. Craig, et al.. 2016. "ASHP Guidelines on the Pharmacist's Role in Palliative and Hospice Care." American journal of health-system pharmacy : AJHP : official journal of the American Society of Health-System Pharmacists 73(17) :1351-67. https://doi.org/10.2146/ajhp160244.
Huang, H., Y. Cai, S. Miao, and L. Luo. 2026. "Meta-synthesis of qualitative research on comfort experiences of family caregivers in hospice care: a systematic review." Frontiers in public health 14 :1819762. https://doi.org/10.3389/fpubh.2026.1819762.

# 15 | Self-Assessment and Lifelong Learning || 自己評価と生涯学習 || 자기평가와 평생학습 || 自我评估与终身学习

## Core Competency & Implementation Frameworks || 中核コンピテンシーと実装フレームワーク || 핵심 역량과 실행 프레임워크 || 核心能力与实施框架 {core}

Artioli, G., L. Deiana, F. De Vincenzo, et al. 2021. "Health professionals and students' experiences of reflective writing in learning: a qualitative meta-synthesis." BMC Medical Education 21: 394. https://doi.org/10.1186/s12909-021-02831-4.
Evans, A. W., C. McKenna, and M. Oliver. 2002. "Self-assessment in medical practice." Journal of the Royal Society of Medicine 95, no. 10: 511-513. PMID: 12356978.
Fraundorf, S. H., Z. A. Caddick, T. J. Nokes-Malach, and B. M. Rottman. 2023. "Cognitive perspectives on maintaining physicians' medical expertise: I. Testing as a tool for learning." Cognitive Research: Principles and Implications 8: 56. https://doi.org/10.1186/s41235-023-00509-7.
Jeong, D., J. Presseau, R. ElChamaa, et al. 2018. "Barriers and facilitators to self-directed learning in continuing professional development for physicians in Canada: a scoping review." Academic Medicine 93, no. 8: 1245-1254. https://doi.org/10.1097/ACM.0000000000002237.
Kent, F., and J. Haruta. 2025. "Culture and context in interprofessional education: expectations in Australia and Japan." Medical Education 59, no. 1: 83-87.
Mlambo, M., C. Silén, and C. McGrath. 2021. "Lifelong learning and nurses' continuing professional development: a metasynthesis of the literature." BMC Nursing 20: 62. https://doi.org/10.1186/s12912-021-00579-2.

## Field Challenges & Barriers || 現場の課題と障壁 || 현장의 과제와 장벽 || 一线挑战与障碍

Alshehri, H. M., A. M. H. Alshehri, A. M. H. Alshehri, et al. 2024. "Primary health care professionals' opinions regarding continuing medical education: a cross-sectional study." Medicine (Baltimore) 103, no. 50: e40865.
Hatem, G., L. Ismaiil, S. Awada, et al. 2022. "Evaluation of pharmacists' preferences and barriers to access continuing education: a cross-sectional study in Lebanon." Evaluation & the Health Professions 45, no. 4: 420-424.
Lera, M., K. Taxtsoglou, C. K. Iliadis, A. A. Frantzana, and L. Kourkouta. 2020. "Nurses' attitudes toward lifelong learning via new technologies." Asian/Pacific Island Nursing Journal 5, no. 2: 89-102.
Qaisi, L., E. Alefishat, R. Abu Farha, et al. 2025. "Professional growth in pharmacy: examining CPD awareness, motivators and barriers among pharmacists." Journal of Pharmaceutical Policy and Practice 18: 2490985.
Wehabe, M., T. Gebreyohannis, and K. Bizuwork. 2024. "Nurses engagement on continuing professional development programmes and its barriers in selected hospitals in Addis Ababa, Ethiopia." SAGE Open Nursing 10: 23779608241307447.
Wong, P. H. H., C. I. Chau, H. Hu, and C. O. L. Ung. 2025. "Evaluation of a competency-based CPD programme for pharmacists on asthma care: a feasibility study." Saudi Pharmaceutical Journal 33, no. 3: 14. https://doi.org/10.1007/s44446-025-00021-7.
Sinha, Tanmay, Fan Wang, and Manu Kapur. 2025. "Shame Regulation in Learning: A Double-Edged Sword" Education Sciences 15, no. 4: 502. https://doi.org/10.3390/educsci15040502
Roveta, Annalisa, Luigi Mario Castello, Costanza Massarino, Alessia Francese, Francesca Ugo, and Antonio Maconi. 2025. "Artificial Intelligence in Medical Education: A Narrative Review on Implementation, Evaluation, and Methodological Challenges" AI 6, no. 9: 227. https://doi.org/10.3390/ai6090227
Müller, J., Meyer, R., Bantjes, J., Archer, E., & Couper, I. (2025). Handle with Care: Transformative Learning as Pedagogy in an Under-Resourced Health Care Context. Teaching and Learning in Medicine, 37(3), 412–421. https://doi.org/10.1080/10401334.2024.2332885

## Assessment, Feedback & Portfolios || 評価・フィードバック・ポートフォリオ || 평가·피드백·포트폴리오 || 评估、反馈与学习档案

Awdishu, L., A. Zheng, G.r.a.n.a.s.A. Gerd, J. Galasso, et al. 2018. "360-Degree Feedback Model to Enhance Interprofessional Learning." MedEdPublish (2016) 7 :154. https://doi.org/10.15694/mep.2018.0000154.1.
Schwartz, R., B. Weimer-Elder, E. Wilkins, D. Deka, et al. 2022. "Developing a feedback-rich culture in academic medicine: the effect of coaching and 360-feedback on physician leadership." BMC medical education 22(1) :733. https://doi.org/10.1186/s12909-022-03809-6.
Hageman, M.G., D.C. Ring, P.J. Gregory, H.E. Rubash, et al. 2015. "Do 360-degree feedback survey results relate to patient satisfaction measures?." Clinical orthopaedics and related research 473(5) :1590-7. https://doi.org/10.1007/s11999-014-3981-3.
Zheng, B., Q. He, and J. Lei. 2024. "Informing factors and outcomes of self-assessment practices in medical education: a systematic review." Annals of medicine 56(1) :2421441. https://doi.org/10.1080/07853890.2024.2421441.
Tan, R., T.i.n.g.J.J. Qi, H.o.n.g.D. Zhihao, L.i.m.A.J. Sing, et al. 2022. "Medical Student Portfolios: A Systematic Scoping Review." Journal of medical education and curricular development 9 :23821205221076022. https://doi.org/10.1177/23821205221076022.
Cole, R., A.G. Garrigan, S.A. Peters, L. Tilley, et al. 2023. "Medical Students' Integration of Formative Feedback During Simulation: A Grounded Theory Study." Military medicine 188(Suppl 3) :48-55. https://doi.org/10.1093/milmed/usac378.
Lu, F.I., S.G. Takahashi, and C. Kerr. 2021. "Myth or Reality: Self-Assessment Is Central to Effective Curriculum in Anatomical Pathology Graduate Medical Education." Academic pathology 8 :23742895211013528. https://doi.org/10.1177/23742895211013528.
Jenkins, L.S. 2025. "Portfolio of learning in clinical training." South African family practice : official journal of the South African Academy of Family Practice/Primary Care 67(1) :e1-e5. https://doi.org/10.4102/safp.v67i1.6080.
Haldane, T. 2014. "'Portfolios' as a method of assessment in medical education." Gastroenterology and hepatology from bed to bench 7(2) :89-93.
Miller, P.A. 2008. "Self-Assessment: The Disconnect between Research and Rhetoric." Physiotherapy Canada. Physiotherapie Canada 60(2) :117-24. https://doi.org/10.3138/physio.60.2.117.
Silver, I., C. Campbell, B. Marlow, and J. Sargeant. 2008. "Self-assessment and continuing professional development: the Canadian perspective." The Journal of continuing education in the health professions 28(1) :25-31. https://doi.org/10.1002/chp.152.
Duffy, F.D., and E.S. Holmboe. 2006. "Self-assessment in lifelong learning and improving performance in practice: physician know thyself." JAMA 296(9) :1137-9. https://doi.org/10.1001/jama.296.9.1137.
Dearnley, C.A., and F.S. Meddings. 2007. "Student self-assessment and its impact on learning - a pilot study." Nurse education today 27(4) :333-40. https://doi.org/10.1016/j.nedt.2006.05.014.
Assadi, H.o.v.e.y.z.i.a.n.S., A. Shariati, S. Haghighi, S.M. Latifi, et al. 2021. "The Effect of Portfolio-Based Education and Evaluation on Clinical Competence of Nursing Students: A Pretest-Posttest Quasiexperimental Crossover Study." Advances in medical education and practice 12 :175-182. https://doi.org/10.2147/AMEP.S231760.
Atrash, H., M. Katz-Leurer, and G. Shahar. 2023. "The effect of self-assessment on student competence in physiotherapy clinical training: a randomized controlled trial." BMC medical education 23(1) :780. https://doi.org/10.1186/s12909-023-04737-9.
Tochel, C., A. Haig, A. Hesketh, A. Cadzow, et al. 2009. "The effectiveness of portfolios for post-graduate assessment and education: BEME Guide No 12." Medical teacher 31(4) :299-318. https://doi.org/10.1080/01421590902883056.
Shafian, S., M. Ilaghi, Y. Shahsavani, M. Okhovati, et al. 2024. "The feedback dilemma in medical education: insights from medical residents' perspectives." BMC medical education 24(1) :424. https://doi.org/10.1186/s12909-024-05398-y.

## Educational Technology, AI & Simulation || 教育テクノロジー・AI・シミュレーション || 교육 테크놀로지·AI·시뮬레이션 || 教育技术、AI与模拟

Khakpaki, A. 2025. "Advancements in artificial intelligence transforming medical education: a comprehensive overview." Medical education online 30(1) :2542807. https://doi.org/10.1080/10872981.2025.2542807.
Panta, R., L. Francois, H. Cordash, and J. Orent. 2026. "Knowledge, Utilization, and Perceptions of Artificial Intelligence in Medical Education Among Preclinical Osteopathic Medical Students and Faculty: A Cross-Sectional Study." Cureus 18(5) :e109675. https://doi.org/10.7759/cureus.109675.
Peddle, M. 2019. "Participant perceptions of virtual simulation to develop non-technical skills in health professionals." Journal of research in nursing : JRN 24(3-4) :167-180. https://doi.org/10.1177/1744987119835873.
Braund, H., A.K. Hall, K. Caners, M. Walker, et al. 2025. "Evaluating the Value of Eye-Tracking Augmented Debriefing in Medical Simulation-A Pilot Randomized Controlled Trial." Simulation in healthcare : journal of the Society for Simulation in Healthcare 20(3) :158-166. https://doi.org/10.1097/SIH.0000000000000825.
Haleem, A., M. Javaid, R.P. Singh, and R. Suman. 2021. "Telemedicine for healthcare: Capabilities, features, barriers, and applications." Sensors international 2 :100117. https://doi.org/10.1016/j.sintl.2021.100117.
Pittmann, R., N. Danaher-Garcia, W.h.i.t.e.B.A. Adair, and A. Thompson. 2025. "The impact of a professional development workshop on healthcare professionals' knowledge and readiness to use telehealth etiquette in virtual care." Journal of telemedicine and telecare 31(9) :1317-1325. https://doi.org/10.1177/1357633X241285938.
Sarfaraz, S., Z. Khurshid, and M.S. Zafar. 2023. "Use of artificial intelligence in medical education: A strength or an infirmity." Journal of Taibah University Medical Sciences 18(6) :1553-1554. https://doi.org/10.1016/j.jtumed.2023.06.008.
Rouleau, G., M.P. Gagnon, J. Ct, L. Richard, et al. 2022. "Virtual patient simulation to improve nurses' relational skills in a continuing education context: a convergent mixed methods study." BMC nursing 21(1) :1. https://doi.org/10.1186/s12912-021-00740-x.
Al, T.u.r.k.i.S., D. Skaff, G. Mujlli, B. Ozdemir, et al. 2025. "Virtual reality vs. Manikin based training on emergency life saving basic rescue skills: a summative evaluation." BMC medical education 25(1) :1375. https://doi.org/10.1186/s12909-025-07971-5.

## Leadership, Coaching & Interprofessional Collaboration || リーダーシップ・コーチング・多職種連携 || 리더십·코칭·전문직 간 협력 || 领导力、教练指导与跨专业合作

Tippit, T.L., I. Chi, and J.T. Servey. 2024. "A Model Curriculum For New Faculty Coaches in Undergraduate Medical Education." Journal of medical education and curricular development 11 :23821205231217896. https://doi.org/10.1177/23821205231217896.
Wang, Q., H. Li, W. Pang, S. Liang, et al. 2016. "Developing an integrated framework of problem-based learning and coaching psychology for medical education: a participatory research." BMC medical education 16 :2. https://doi.org/10.1186/s12909-015-0516-x.
Ohue, T., Y. Ohue, and H. Harada. 2025. "Examining the Long-Term Impact of COVID-19-Induced Clinical Practice Changes on Problem-Solving Behaviors Among Newly Graduated Nurses: A Longitudinal Study." SAGE open nursing 11 :23779608251323836. https://doi.org/10.1177/23779608251323836.
Verbeek, F.H.O., L.i.e.r.o.p.M.E.A. van, J.M.M. Meijers, R.o.s.s.u.m.E. van, et al. 2023. "Facilitators for developing an interprofessional learning culture in nursing homes: a scoping review." BMC health services research 23(1) :178. https://doi.org/10.1186/s12913-023-09092-5.
Wagter, J.M., d.e.B.u.n.t.G. van, M. Honing, M. Eckenhausen, et al. 2012. "Informal interprofessional learning: visualizing the clinical workplace." Journal of interprofessional care 26(3) :173-82. https://doi.org/10.3109/13561820.2012.656773.
Sockalingam, S., T. Rajaratnam, A. Gambin, S. Soklaridis, et al. 2022. "Interprofessional continuing professional development programs can foster lifelong learning in healthcare professionals: experiences from the Project ECHO model." BMC medical education 22(1) :432. https://doi.org/10.1186/s12909-022-03500-w.
"It's Okay to Say 'I Don't Know'": Medical Students Use Transformative Thinking to Cope with Ambiguity and Uncertainty." MedEdPublish (2016) 9 :14. https://doi.org/10.15694/mep.2020.000014.1.
Ong, C.C.P., Y.Y. Foo, F.Y. Chiu, and D. Nestel. 2022. "'It's going to change the way we train': Qualitative evaluation of a transformative faculty development workshop." Perspectives on medical education 11(2) :86-92. https://doi.org/10.1007/s40037-021-00687-4.
Bourke, L., C. Conway, and M.E. Abdalla. 2025. "Mentorship in surgical training; a systematic scoping review to inform a mentorship framework for ophthalmology trainees." BMC medical education 25(1) :373. https://doi.org/10.1186/s12909-025-06901-9.
Lavoie, P., L. Boyer, J. Pepin, J. Dry, et al. 2023. "Multicentre implementation of a nursing competency framework at a provincial scale: A qualitative description of facilitators and barriers." Journal of evaluation in clinical practice 29(2) :263-271. https://doi.org/10.1111/jep.13760.
Minamizono, S., H. Hasegawa, N. Hasunuma, Y. Kaneko, et al. 2013. "Physician's Perceptions of Interprofessional Collaboration in Clinical Training Hospitals in Northeastern Japan." Journal of clinical medicine research 5(5) :350-5. https://doi.org/10.4021/jocmr1474w.
Pardo, I., J.M.G. Ferreira, M.C. Gutfreund, M.K. Hsieh, et al. 2026. "Integrating Entrustable Professional Activities in Simulation-Based Health Care Education: A Systematic Literature Review." Simulation in healthcare : journal of the Society for Simulation in Healthcare. https://doi.org/10.1097/SIH.0000000000000950.
Jordan, J., M.L. Dorfsman, M.J. Wagner, and S.J. Wolf. 2019. "The Council of Emergency Medicine Residency Directors Academy for Scholarship Coaching Program: Addressing the Needs of Academic Emergency Medicine Educators." The western journal of emergency medicine 20(1) :105-110. https://doi.org/10.5811/westjem.2018.9.39416.
Anselmann, V., J. Brouwer, and R.H. Mulder. 2023. "The relationships between perceived individual and team characteristics, individual and team learning activities with effectiveness in nursing teams." Frontiers in psychology 14 :1163494. https://doi.org/10.3389/fpsyg.2023.1163494.
Samjaekr, M.Y., Z.X. Feng, J.W. Jin, and F.C. Liu. 2025. "Transformative learning through the 'Honor Walk' in nursing education: a qualitative study." BMC nursing 24(1) :1015. https://doi.org/10.1186/s12912-025-03634-4.
Ha, M.T., and Z.S. Siddiqui. 2025. "Understanding medical students' transition to clinical training: a qualitative study of transformative learning and professional identity formation." BMJ open 15(6) :e098675. https://doi.org/10.1136/bmjopen-2024-098675.
Rees, C.E., P. Crampton, F. Kent, T. Brown, et al. 2018. "Understanding students' and clinicians' experiences of informal interprofessional workplace learning: an Australian qualitative study." BMJ open 8(4) :e021238. https://doi.org/10.1136/bmjopen-2017-021238.
`;
  if (typeof module !== 'undefined' && module.exports) module.exports = text;
  else root.APPENDIX_H_TEXT = text;
})(typeof window !== 'undefined' ? window : globalThis);
