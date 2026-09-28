import type { Profile } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR PERSONAL INFORMATION HERE
// Photo: drop a square image at public/photo.jpg and set photo: '/photo.jpg'.
// Text fields accept either a plain string (same in both languages) or
// { en, zh } for separate translations.
// ─────────────────────────────────────────────────────────────────────────────
export const profile: Profile = {
  name: 'Yipeng Ouyang',
  firstName: 'Yipeng',
  fullName: 'Yipeng Clark Ouyang',
  title: {
    en: 'Undergraduate Researcher · B.S. Candidate in New Energy Science and Engineering',
    zh: '本科生研究员 · 新能源科学与工程专业学士候选人',
  },
  affiliation: {
    en: 'Nanjing University — Group of Prof. Zhigang Zou',
    zh: '南京大学 — 邹志刚教授课题组',
  },
  location: 'Nanjing, China',
  // Two affiliation blocks shown directly under the name in the hero.
  // supervisorParts render as inline runs of text; any run with `href` is a link
  // on that exact name (no separate line).
  affiliations: [
    {
      school: { en: 'Nanjing University', zh: '南京大学' },
      role: { en: 'Undergraduate', zh: '本科' },
      period: 'Sep.2023 ~ Jun.2027',
      supervisorPrefix: { en: 'Supervisor: ', zh: '导师：' },
      supervisorParts: [
        {
          text: { en: 'Zhaosheng Li', zh: '李朝升' },
          href: 'https://scholar.google.com/citations?user=e5fz9VAAAAAJ&hl=zh-CN',
        },
        { text: { en: ' and ', zh: '、' } },
        { text: { en: 'Jianyong Feng', zh: '冯建勇' }, highlight: true },
        { text: { en: ', affiliated with Group of ', zh: '，隶属于' } },
        {
          text: { en: 'Zhigang Zou', zh: '邹志刚教授课题组' },
          href: 'https://eng.nju.edu.cn/intl/3d/bb/c34798a474555/page.htm',
        },
      ],
      major: {
        en: 'Major: New Energy Science and Engineering',
        zh: '专业：新能源科学与工程',
      },
      direction: {
        en: 'Research: Electrocatalytic materials and characterization',
        zh: '研究方向：电催化材料与表征',
      },
    },
    {
      school: { en: 'Yale University', zh: '耶鲁大学' },
      role: { en: 'Summer Research Intern', zh: '暑期科研实习生' },
      period: 'Jul.2026 ~ Sep.2026',
      supervisorPrefix: { en: 'Supervisor: ', zh: '导师：' },
      supervisorParts: [
        {
          text: { en: 'Shu Hu', zh: '胡澍' },
          href: 'https://engineering.yale.edu/research-and-faculty/faculty-directory/shu-hu',
        },
      ],
      direction: {
        en: 'Research: Silicon processing, Photoelectrocatalysis and 3D printing design',
        zh: '研究方向：硅加工、光电催化与 3D 打印设计',
      },
    },
  ],
  // Contact (shown under the portrait).
  email: 'yipeng.ouyang@yale.edu',
  emailGmail: '231880021@smail.nju.edu.cn',
  phone: '+86 13927434134',
  phoneTW: '+886 0912841316',
  // Put your photo at public/images/avatar.jpg (square, ~400×400 looks best).
  photo: '/images/avatar.jpg',
  bio: [
    {
      en: 'I am Yipeng Ouyang, an undergraduate in New Energy Science and Engineering at Nanjing University, supervised by Prof. Zhaosheng Li and Prof. Jianyong Feng in the group of Prof. Zhigang Zou. In summer 2026, I joined the group of Prof. Shu Hu at Yale University as a summer research intern. I am applying for Ph.D. programs in semiconductor materials, aiming to study how the synthesis, surfaces and interfaces of semiconductor materials govern the performance and stability of devices.',
      zh: '我是欧阳益鹏，南京大学新能源科学与工程专业本科生，师从李朝升教授与冯建勇教授，隶属于邹志刚教授课题组。2026 年夏天，我加入耶鲁大学胡澍教授课题组进行暑期科研。我正在申请半导体材料方向的博士项目，希望研究半导体材料的合成、表面与界面如何决定器件的性能与稳定性。',
    },
    {
      en: 'My research began in electrocatalysis, which gave me solid training in electrochemistry and materials characterization. At Nanjing University, I engineer cobalt-based composite catalysts (CSO) that overcome the intrinsic instability of non-precious metals in acidic oxygen evolution (OER), and build durable catalyst-coated membranes for proton exchange membrane water electrolysis (PEMWE), reaching over 800 h of stable operation at 100 mA cm⁻² with a cell voltage of 1.70 V.',
      zh: '我的科研从电催化起步，这段经历让我在电化学与材料表征方面打下了扎实的基础。在南京大学，我设计钴基复合催化剂（CSO），克服非贵金属在酸性析氧反应（OER）中的本征不稳定性，并构建用于质子交换膜水电解（PEMWE）的耐久催化层膜，在 100 mA cm⁻² 下稳定运行超过 800 小时，槽电压 1.70 V。',
    },
    {
      en: 'At Yale, my work moved to semiconductors, in three parts: (1) a scalable perovskite–Si photoelectrochemical (PEC) cell for alkaline water splitting, which uses photoelectrochemistry as a way to probe how semiconductor absorbers behave in real operating conditions; (2) atomic layer deposition (ALD) of TiO₂ coatings for the protection and surface passivation of semiconductor electrodes; and (3) the design and 3D printing of a scanning electrochemical microscopy (SECM) cell for in-situ, spatially resolved measurements.',
      zh: '在耶鲁，我的研究转向半导体，分为三部分：（1）用于碱性光解水的可放大钙钛矿—硅光电化学（PEC）电池，借助光电化学考察半导体吸光材料在真实工况下的行为；（2）原子层沉积（ALD）TiO₂ 镀膜，用于半导体电极的保护与表面钝化；（3）设计并 3D 打印扫描电化学显微镜（SECM）电解池，用于原位、空间分辨测量。',
    },
    {
      en: 'Skills\n1. Materials characterization: TEM, SEM, XRD, XPS, XAS, DEMS and in-situ FTIR.\n2. Si processing: ALD, PVD, BOE etching, NMP stripping and photoresist edge sealing.\n3. Electrochemical testing: proficient in a wide range of electrochemical characterization techniques, and in analyzing reaction kinetics from the results.\n4. Device design and assembly: CAD design (SolidWorks) and hands-on assembly of sealed devices.',
      zh: '技能\n1. 材料表征方法：TEM、SEM、XRD、XPS、XAS、DEMS 与原位 FTIR。\n2. 硅加工：ALD、PVD、BOE 刻蚀、NMP 去胶与光刻胶封边。\n3. 电化学测试方法：熟练掌握各种电化学表征方法，并能结合测试结果分析反应动力学。\n4. 器件设计与组装：擅长密封器件的 CAD 设计（SolidWorks）与实际组装。',
    },
  ],
  researchInterests: [
    { en: 'Semiconductor Surfaces & Interfaces', zh: '半导体表面与界面' },
    { en: 'Thin-Film Growth', zh: '薄膜生长' },
    { en: '2D Nanomaterials', zh: '二维纳米材料' },
    { en: 'Photovoltaic Devices', zh: '光伏器件' },
  ],
  socials: [
    { type: 'email', href: 'mailto:yipeng.ouyang@yale.edu', label: 'Email' },
    { type: 'cv', href: '/cv.pdf', label: 'Curriculum Vitae' },
  ],
}
