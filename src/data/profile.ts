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
  nativeName: '歐陽益鵬',
  nationality: 'Taoyuan, Taiwan',
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
      period: 'Sep.2023 ~ Jun.2027 (expected)',
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
      period: 'Jul.2026 ~ Oct.2026',
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
  email: '231880021@smail.nju.edu.cn',
  phone: '+86 13927434134',
  phoneTW: '+886 0936232628',
  // Put your photo at public/images/avatar.jpg (square, ~400×400 looks best).
  photo: '/images/avatar.jpg',
  bio: [
    {
      en: 'My name is Yipeng Ouyang, and I am a senior from Taiwan in the College of Engineering and Applied Sciences at Nanjing University, where I conduct research under the supervision of Prof. Zhaosheng Li and Prof. Jianyong Feng in Prof. Zhigang Zou’s group. This summer, I also had the opportunity to conduct research in Prof. Shu Hu’s group at Yale University.',
      zh: '我是欧阳益鹏，来自台湾，现为南京大学工程与应用科学学院大四学生，在邹志刚教授课题组中师从李朝升教授与冯建勇教授开展研究。今年夏天，我也有机会在耶鲁大学胡澍教授课题组进行科研。',
    },
    {
      en: 'My research has evolved from energy materials toward semiconductor materials and devices. At Nanjing University, I developed a cobalt-based composite catalyst (CSO) that overcomes the intrinsic instability of non-precious metals in the acidic oxygen evolution reaction (OER), and built catalyst-coated membranes for proton exchange membrane water electrolysis (PEMWE) that operated stably for over 800 h at 100 mA cm⁻² with a cell voltage of 1.70 V. I then spent several months investigating the kinetic origin of this improvement using in-situ Fourier-transform infrared spectroscopy (FTIR) and differential electrochemical mass spectrometry (DEMS), together with kinetic isotope effect (KIE) measurements, and found that CSO markedly accelerates proton transfer during the OER. This work developed my interests in materials chemistry, interfaces, and the connection between material properties and device performance.',
      zh: '我的研究方向已从能源材料逐步转向半导体材料与器件。在南京大学，我设计了一种钴基复合催化剂（CSO），克服了非贵金属在酸性析氧反应（OER）中的本征不稳定性，并构建了用于质子交换膜水电解（PEMWE）的催化层膜，在 100 mA cm⁻² 下稳定运行超过 800 小时，槽电压 1.70 V。随后，我花了数月时间，借助原位傅里叶变换红外光谱（FTIR）、微分电化学质谱（DEMS）以及动力学同位素效应（KIE）测试，探究这一性能提升背后的动力学原因，发现 CSO 能显著加速 OER 过程中的质子转移。这段研究让我对材料化学、界面，以及材料性质与器件性能之间的联系产生了浓厚兴趣。',
    },
    {
      en: 'During my summer at Yale, I extended these interests to semiconductor and photoelectrode systems. I designed and assembled a sealed, modular perovskite–Si photoelectrochemical (PEC) cell for alkaline water splitting; deposited TiO₂ by atomic layer deposition (ALD) and Ni by physical vapor deposition (PVD) to protect semiconductor electrodes, passivate their surfaces and improve their electrical contact; and designed an in-situ scanning electrochemical microscopy (SECM) cell for spatially resolved measurements. Through this work, I gained hands-on experience in thin-film growth, surface passivation, silicon processing, and device design. These experiences have motivated me to further investigate how semiconductor materials and interfaces can be engineered to improve device performance.',
      zh: '在耶鲁的暑期研究中，我把这些兴趣拓展到半导体与光电极体系：设计并组装了用于碱性光解水的密封、模块化钙钛矿—硅光电化学（PEC）电池；通过原子层沉积（ALD）沉积 TiO₂、通过物理气相沉积（PVD）沉积 Ni，用于半导体电极的保护、表面钝化与改善电接触；并设计了用于空间分辨测量的原位扫描电化学显微镜（SECM）电解池。通过这些工作，我积累了薄膜生长、表面钝化、硅加工与器件设计方面的实操经验。这些经历促使我进一步研究如何通过调控半导体材料与界面来提升器件性能。',
    },
    {
      en: 'Skills\n1. Materials characterization: TEM, SEM, XRD, XPS, XAS, DEMS and in-situ FTIR.\n2. Si processing: ALD, PVD, BOE etching and photoresist edge sealing.\n3. Electrochemical testing: proficient in a wide range of electrochemical characterization techniques, and in analyzing reaction kinetics from the results.\n4. Device design and assembly: CAD design, 3D printing and hands-on assembly of sealed devices.',
      zh: '技能\n1. 材料表征方法：TEM、SEM、XRD、XPS、XAS、DEMS 与原位 FTIR。\n2. 硅加工：ALD、PVD、BOE 刻蚀与光刻胶封边。\n3. 电化学测试方法：熟练掌握各种电化学表征方法，并能结合测试结果分析反应动力学。\n4. 器件设计与组装：CAD 设计、3D 打印与密封器件的实际组装。',
    },
  ],
  researchInterests: [
    { en: 'Interface Stability of Energy-Conversion Materials', zh: '能量转换材料的界面稳定性' },
    { en: 'ALD Thin Films and Surface Passivation', zh: 'ALD 薄膜与表面钝化' },
    { en: 'Semiconductor Photoelectrodes', zh: '半导体光电极' },
    { en: 'Electrocatalyst Durability in Acidic Media', zh: '酸性介质中电催化剂的耐久性' },
    { en: 'In-situ Interface Characterization', zh: '原位界面表征' },
  ],
  socials: [
    { type: 'email', href: 'mailto:231880021@smail.nju.edu.cn', label: 'Email' },
    { type: 'cv', href: '/cv.pdf', label: 'Curriculum Vitae' },
  ],
}
