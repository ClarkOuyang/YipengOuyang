import type { Publication } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PUBLICATIONS HERE
// Sorted by year (newest first) automatically in the component.
// The author matching profile.name is highlighted automatically.
// Add links (pdf / code / project / slides / doi) once available.
// ─────────────────────────────────────────────────────────────────────────────
export const publications: Publication[] = [
  {
    id: 'sb-co3o4-pemwe-2026',
    title: {
      en: 'Coupled Regulation of the Oxygen Evolution Pathway and Interfacial Proton Transfer in Sb-Doped Co₃O₄ for Acidic Water Oxidation',
      zh: 'Sb 掺杂 Co₃O₄ 中析氧反应路径与界面质子转移的耦合调控用于酸性水氧化',
    },
    authors: ['Minyue Zhao', 'Yipeng Ouyang', 'Huiting Huang', 'Rongli Fan', 'Zhonghua Li', 'Zhihao Zhang', 'Zijian Song', 'Jianyong Feng', 'Zhigang Zou', 'Zhaosheng Li'],
    equalContribution: ['Minyue Zhao', 'Yipeng Ouyang'],
    venue: {
      en: 'Manuscript in Preparation, 2026.',
      zh: '稿件撰写中，2026 年。',
    },
    year: 2026,
    kind: { en: 'Manuscript', zh: '稿件' },
    highlight: true,
    tags: [
      { en: 'PEMWE', zh: 'PEMWE' },
      { en: 'OER', zh: 'OER' },
      { en: 'Electrocatalysis', zh: '电催化' },
      { en: 'Hydrogen', zh: '制氢' },
    ],
    links: [{ type: 'request', href: 'mailto:231880021@smail.nju.edu.cn?subject=Manuscript%20request%3A%20Coupled%20Regulation%20of%20the%20Oxygen%20Evolution%20Pathway%20and%20Interfacial%20Proton%20Transfer%20in%20Sb-Doped%20Co%E2%82%83O%E2%82%84%20for%20Acidic%20Water%20Oxidation', label: 'Request manuscript' }],
    bibtex: `@article{ouyang2026sbco3o4,
  title   = {Coupled Regulation of the Oxygen Evolution Pathway and Interfacial Proton Transfer in Sb-Doped Co3O4 for Acidic Water Oxidation},
  author  = {Zhao, Minyue and Ouyang, Yipeng and Huang, Huiting and Fan, Rongli and Li, Zhonghua and Zhang, Zhihao and Song, Zijian and Feng, Jianyong and Zou, Zhigang and Li, Zhaosheng},
  note    = {Manuscript in preparation; Zhao and Ouyang contributed equally},
  year    = {2026}
}`,
  },
]
