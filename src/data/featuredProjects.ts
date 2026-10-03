import type { FeaturedProject } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR RESEARCH PROJECTS HERE
// One representative photo per project. Sorted newest-first by `sortKey`
// (ISO-ish "YYYY-MM"). Drop the photo at public/projects/<file> and update
// `photo` once you have it — a placeholder is shown until then.
// `detail` (description/keywords/status) is collapsed by default in the UI.
// ─────────────────────────────────────────────────────────────────────────────
export const featuredProjects: FeaturedProject[] = [
  {
    id: 'proj-ald',
    title: { en: 'ALD Coating & Semiconductor Processing', zh: 'ALD 镀膜与半导体加工' },
    period: 'Yale, 2026',
    sortKey: '2026-09',
    photo: '', // TODO: add /public/projects/ald.jpg
  },
  {
    id: 'proj-secm',
    title: { en: 'SECM Cell 3D Printing Design', zh: 'SECM 电解池 3D 打印设计' },
    period: 'Yale, 2026',
    sortKey: '2026-08',
    photo: '', // TODO: add /public/projects/secm.jpg
    photos: [
      'projects/secm-cell-photos.jpg',
      'projects/secm-solid-assembly.png',
      'projects/secm-transparent-assembly.png',
      'projects/secm-01.jpg',
      'projects/secm-02.jpg',
      'projects/secm-04.jpg',
      'projects/secm-05.jpg',
    ],
    detail: {
      description: {
        en: 'Designed and 3D-printed scanning electrocatalysis microscopy (SECM) reactor cells for photoelectrocatalytic water-splitting studies.',
        zh: '设计并 3D 打印扫描电化学显微镜（SECM）反应电解池，用于光电催化水分解研究。',
      },
      keywords: [
        { en: 'SECM', zh: 'SECM' },
        { en: '3D Printing', zh: '3D 打印' },
        { en: 'Reactor Cell', zh: '反应电解池' },
      ],
      status: { en: 'Yale summer research (2026)', zh: '耶鲁暑期研究（2026）' },
    },
  },
  {
    id: 'proj-pec',
    title: {
      en: 'Scalable Perovskite-Based Photoelectrocatalytic (PEC) Water Splitting',
      zh: '可放大钙钛矿基光电催化（PEC）水分解',
    },
    period: 'Yale, 2026',
    sortKey: '2026-07',
    photo: '', // TODO: add /public/projects/pec.jpg
    detail: {
      description: {
        en: 'Summer research at Yale University on photoelectrocatalytic water splitting in alkaline water. Designed perovskite–Si photoelectrocatalysis (PEC) and fabricated Pt-coated AEMWE anodes by sputtering.',
        zh: '耶鲁大学暑期研究，面向碱性水环境中的光电催化水分解。设计钙钛矿—硅光电催化（PEC），并以溅射法制备 Pt 修饰的 AEMWE 阳极。',
      },
      keywords: [
        { en: 'Photoelectrocatalysis', zh: '光电催化' },
        { en: 'Perovskite–Si', zh: '钙钛矿—硅' },
        { en: 'PEC', zh: 'PEC' },
        { en: 'AEMWE', zh: 'AEMWE' },
      ],
      status: { en: 'Yale summer research (2026)', zh: '耶鲁暑期研究（2026）' },
    },
  },
  {
    id: 'proj-pemwe',
    title: {
      en: 'Sb-Doped Co₃O₄ for Proton Exchange Membrane Water Electrolysis (PEMWE)',
      zh: 'Sb 掺杂 Co₃O₄ 质子交换膜水电解（PEMWE）',
    },
    period: 'Nanjing University, 2025',
    sortKey: '2025-02',
    photo: '', // TODO: add /public/projects/pemwe.jpg
    photos: [
      'projects/cso-01.jpg',
      'projects/cso-02.jpg',
      'projects/cso-03.jpg',
      'projects/cso-04.jpg',
      'projects/cso-05.jpg',
    ],
    detail: {
      description: {
        en: 'Engineered a cobalt-based composite catalyst (CSO) integrating transition-metal oxides to overcome the intrinsic instability of non-precious metals in acidic OER. Fabricated high-performance catalyst-coated membranes (CCM) via optimized sol–gel synthesis and ink formulation for PEMWE integration, achieving stable operation for over 800 hours at 100 mA cm⁻² with a 1.70 V cell voltage. Characterized the OER mechanism and material structure with TEM, SEM, XRD, XPS, XAS, DEMS and in-situ FTIR, studied surface-pH evolution using a rotating ring-disk electrode (RRDE), and resolved Co–O / Co–Co / Sb–O coordination environments by EXAFS fitting.',
        zh: '设计了一种钴基复合催化剂（CSO），集成过渡金属氧化物以克服非贵金属在酸性 OER 中的本征不稳定性。通过优化的溶胶—凝胶合成与浆料配制制备高性能催化层膜（CCM）用于 PEMWE，在 100 mA cm⁻² 下稳定运行超过 800 小时，槽电压 1.70 V。利用 TEM、SEM、XRD、XPS、XAS、DEMS 与原位 FTIR 表征 OER 机理与材料结构，通过旋转环盘电极（RRDE）研究表面 pH 演变，并以 EXAFS 拟合解析 Co–O / Co–Co / Sb–O 配位环境。',
      },
      keywords: [
        { en: 'PEMWE', zh: 'PEMWE' },
        { en: 'OER', zh: 'OER' },
        { en: 'Cobalt catalyst', zh: '钴基催化剂' },
        { en: 'Hydrogen', zh: '制氢' },
        { en: 'XAS / EXAFS', zh: 'XAS / EXAFS' },
        { en: 'In-situ FTIR', zh: '原位 FTIR' },
        { en: 'RRDE', zh: 'RRDE' },
        { en: 'Mechanism', zh: '机理' },
      ],
      status: {
        en: 'Manuscript in preparation (joint first author)',
        zh: '论文在投（共同一作）',
      },
    },
  },
]
