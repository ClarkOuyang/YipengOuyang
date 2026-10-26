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
    authors: ['Yipeng Ouyang', 'Mingyue Zhao', 'Jianyong Feng', 'Zhaosheng Li', 'Zhigang Zou'],
    equalContribution: ['Yipeng Ouyang', 'Mingyue Zhao'],
    venue: {
      en: 'In preparation — targeting Advanced Materials or Angewandte Chemie',
      zh: '投稿中，计划投 Advanced Materials 或 Angewandte Chemie',
    },
    year: 2026,
    kind: { en: 'Preprint', zh: '预印本' },
    highlight: true,
    tags: [
      { en: 'PEMWE', zh: 'PEMWE' },
      { en: 'OER', zh: 'OER' },
      { en: 'Electrocatalysis', zh: '电催化' },
      { en: 'Hydrogen', zh: '制氢' },
    ],
    links: [],
    bibtex: `@article{ouyang2026sbco3o4,
  title   = {Coupled Regulation of the Oxygen Evolution Pathway and Interfacial Proton Transfer in Sb-Doped Co3O4 for Acidic Water Oxidation},
  author  = {Ouyang, Yipeng and Zhao, Mingyue and Feng, Jianyong and Li, Zhaosheng and Zou, Zhigang},
  journal = {In preparation},
  year    = {2026}
}`,
  },
]
