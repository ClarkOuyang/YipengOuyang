import type { TimelineItem } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR EDUCATION HERE
// `detail` is collapsed by default in the UI — put major/research bullets there.
// `logo` is optional: path under /public/logos/<file>. Until you add real logo
// files, the UI falls back to a colored initial badge.
// ─────────────────────────────────────────────────────────────────────────────
export const education: TimelineItem[] = [
  {
    id: 'edu-nju',
    role: { en: 'Nanjing University', zh: '南京大学' },
    organization: { en: 'B.S. in New Energy Science and Engineering', zh: '新能源科学与工程 学士' },
    location: 'Nanjing, China',
    start: 'Sep 2023',
    end: 'Present',
    logo: 'logos/nju-badge.webp',
    detail: {
      major: {
        en: 'Major courses: Materials Science, Optics, Thermology, Electrochemistry, Catalysis, Physical Chemistry.',
        zh: '主要课程：材料科学、光学、热力学、电化学、催化、物理化学。',
      },
      bullets: [
        {
          en: 'Designed a Sb-doped Co₃O₄ composite catalyst for acidic OER in PEMWE; >800 h stability at 100 mA cm⁻², 1.70 V cell voltage.',
          zh: '设计用于 PEMWE 酸性 OER 的 Sb 掺杂 Co₃O₄ 复合催化剂；100 mA cm⁻² 下 >800 h 稳定，槽电压 1.70 V。',
        },
        {
          en: 'Characterized materials with TEM/SEM/XRD/XPS/XAS/DEMS/in-situ FTIR and quantified surface pH with RRDE.',
          zh: '利用 TEM/SEM/XRD/XPS/XAS/DEMS/原位 FTIR 表征材料，并以 RRDE 量化表面 pH。',
        },
        {
          en: 'Built catalyst-coated membranes (CCM) via sol–gel synthesis and ink formulation for device integration.',
          zh: '通过溶胶—凝胶合成与浆料配制构建催化层膜（CCM）用于器件集成。',
        },
        {
          en: 'Manuscript in preparation for submission (joint first author, expected late 2026).',
          zh: '论文在准备投稿中（共同一作，预计 2026 年底）。',
        },
      ],
    },
  },
  {
    id: 'edu-tbds',
    role: { en: "Taiwan Businessmen's Dongguan School", zh: '东莞台商子弟学校' },
    organization: { en: 'High School', zh: '中学' },
    location: 'Dongguan, China',
    start: 'Mar 2019',
    end: 'Jun 2023',
    logo: 'logos/tbds-badge.jpg',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR INTERNSHIP HERE — collapsed by default, same as Education.
// ─────────────────────────────────────────────────────────────────────────────
export const experience: TimelineItem[] = [
  {
    id: 'exp-yale',
    role: { en: 'Yale University, Energy Center Ⅱ', zh: '耶鲁大学 Energy Center Ⅱ' },
    organization: { en: 'Summer Research Visiting Student', zh: '暑期科研访问学生' },
    location: 'New Haven, CT, USA',
    start: 'Jul 2026',
    end: 'Present',
    logo: 'logos/yale-shield.svg',
    detail: {
      bullets: [
        {
          en: 'ALD coating for surface passivation and protection.',
          zh: 'ALD 镀膜用于表面钝化与保护。',
        },
        {
          en: 'Designed and 3D-printed an SECM reactor cell.',
          zh: '设计并 3D 打印 SECM 反应电解池。',
        },
        {
          en: 'Built a scalable perovskite-based photoelectrocatalytic (PEC) water-splitting device.',
          zh: '搭建可放大的钙钛矿基光电催化（PEC）水分解器件。',
        },
      ],
    },
  },
  {
    id: 'exp-sunwoda',
    role: { en: 'Sunwoda Energy Technology Co., Ltd.', zh: '欣旺达能源科技股份有限公司' },
    organization: { en: 'R&D Department Intern', zh: '研发部实习生' },
    location: 'Shenzhen, China',
    start: 'Jul 2025',
    end: 'Aug 2025',
    logo: 'logos/sunwoda-logo.png',
    detail: {
      bullets: [
        {
          en: 'Evaluated electrochemical performance and safety of Li-ion batteries (overcharge protection, charge–discharge cycling).',
          zh: '评估锂离子电池电化学性能与安全性（过充保护、充放电循环）。',
        },
        {
          en: 'Assisted in preparing technical documentation for CNAS certification.',
          zh: '协助准备 CNAS 认证技术文档。',
        },
      ],
    },
  },
  {
    id: 'exp-yongdali',
    role: { en: 'Everpro Insurance Brokers Co., Ltd.', zh: '永达理保险经纪公司' },
    organization: { en: 'Assistant to General Manager', zh: '总经理助理' },
    location: 'Shenzhen, China',
    start: 'Jul 2024',
    end: 'Aug 2024',
    logo: 'logos/yongdali-logo.png',
    detail: {
      bullets: [
        {
          en: 'Produced presentations (PPT) for internal briefings and client meetings.',
          zh: '为内部会议与客户洽谈制作演示文稿（PPT）。',
        },
        {
          en: 'Received and entertained high-end clients, supporting relationship management.',
          zh: '接待并服务高端客户，协助客户关系维护。',
        },
        {
          en: 'Planned and coordinated company marketing and networking events.',
          zh: '策划并协办公司市场推广与客户活动。',
        },
      ],
    },
  },
  {
    id: 'exp-tutoring',
    role: { en: 'Private Tutor', zh: '家教' },
    organization: { en: 'Middle School Math & English', zh: '初中数学与英文' },
    location: '',
    start: 'Jan 2022',
    end: 'Aug 2025',
    logo: 'logos/private-tutor.png',
    detail: {
      bullets: [
        {
          en: 'Tutored five students, on and off, from high school through junior year of college.',
          zh: '从高一到大三，陆陆续续教了五个小孩。',
        },
        {
          en: 'Focused primarily on middle-school math and English.',
          zh: '主要教初中数学与英文。',
        },
      ],
    },
  },
]
