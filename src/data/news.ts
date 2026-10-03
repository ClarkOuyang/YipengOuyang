import type { NewsItem } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR NEWS / ANNOUNCEMENTS HERE
// Newest first; the component also sorts by `iso`/`date` as a fallback.
// ─────────────────────────────────────────────────────────────────────────────
export const news: NewsItem[] = [
  {
    id: 'yale-2026',
    date: 'Jul 2026',
    iso: '2026-07-01',
    title: {
      en: 'Summer research intern at Yale University',
      zh: '耶鲁大学暑期科研实习',
    },
    description: {
      en: 'Joined the Shu Hu Lab at **Yale University** to work on scalable perovskite–Si photoelectrocatalysis for water splitting and designed PEC / SECM cells via 3D printing.',
      zh: '加入**耶鲁大学** Shu Hu 课题组，研究可放大的钙钛矿—硅光电催化水分解，并通过 3D 打印设计 PEC / SECM 电解池。',
    },
  },
  {
    id: 'research-2025',
    date: 'Feb 2025',
    iso: '2025-02-01',
    title: {
      en: 'Started undergraduate research on PEMWE electrocatalysis',
      zh: '开始 PEMWE 电催化本科科研',
    },
    description: {
      en: 'Joined Prof. Zhaosheng Li and Prof. Jianyong Feng, affiliated with Group of Prof. Zhigang Zou at **Nanjing University**.',
      zh: '加入李朝升教授与冯建勇教授团队，隶属于**南京大学**邹志刚教授课题组。',
    },
  },
  {
    id: 'sunwoda-2025',
    date: 'Aug 2025',
    iso: '2025-08-01',
    title: {
      en: 'R&D internship at Sunwoda Energy Technology',
      zh: '欣旺达能源科技研发实习',
    },
    description: {
      en: 'Conducted electrochemical performance and safety evaluation of lithium-ion batteries and assisted CNAS certification documentation at **Sunwoda Energy Technology Co.**',
      zh: '在**欣旺达能源科技**开展锂离子电池电化学性能与安全性评估，并协助 CNAS 认证技术文档整理。',
    },
  },
  {
    id: 'nju-2023',
    date: 'Sep 2023',
    iso: '2023-09-01',
    title: {
      en: 'Began studies at Nanjing University',
      zh: '进入南京大学学习',
    },
    description: { en: 'Major: New Energy Science and Engineering at **Nanjing University**.', zh: '专业：**南京大学**新能源科学与工程。' },
  },
]
