import type { FeaturedProject } from '../types'

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR RESEARCH PROJECTS HERE
// One representative photo per project. Shown in the order listed below;
// `sortKey` ("YYYY-MM") is kept for reference only. Drop the photo at public/projects/<file> and update
// `photo` once you have it — a placeholder is shown until then.
// `detail` (description/keywords/status) is collapsed by default in the UI.
// ─────────────────────────────────────────────────────────────────────────────
export const featuredProjects: FeaturedProject[] = [
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
        { en: 'Electrocatalysis', zh: '电催化' },
        { en: 'Water Splitting', zh: '电解水' },
        { en: 'OER Mechanism Study', zh: 'OER 机理研究' },
        { en: 'Characterization', zh: '材料表征' },
      ],
      status: {
        en: 'Manuscript in preparation (joint first author)',
        zh: '论文在投（共同一作）',
      },
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
    photos: ['projects/pec-02.jpg', 'projects/pec-01.jpg', 'projects/pec-cad.jpg'],
    detail: {
      description: {
        en: 'Designed and assembled a sealed, modular PEC cell for a wired Si–perovskite device. Through multiple design iterations in SolidWorks, the cell was developed with a cathode compartment, a middle compartment holding the anion-exchange membrane (AEM), and an anode compartment with a back window that allows the solar cell to be illuminated. In this wired configuration, the Si–perovskite solar cell is connected to the electrodes through external wiring. The cell is clamped with 12 perimeter screws tightened to 1.5 in·lb to ensure uniform sealing. Both the cathode and anode compartments have dual inlets and dual outlets for electrolyte flow, and barbed ports keep the tubing from detaching at high pump rates. The cell was fabricated by 3D printing, and the final design showed no leakage. Flexible tubing connections allow multiple cells to be linked into a modular, scalable array.',
        zh: '为带引线的硅—钙钛矿器件设计并组装了密封、模块化的 PEC 电池。经过 SolidWorks 中的多轮设计迭代，电池由三部分组成：阴极室、容纳阴离子交换膜（AEM）的中间室，以及带有背窗、可让太阳能电池受光照的阳极室。在这种引线连接构型中，硅—钙钛矿太阳能电池通过外部导线与电极相连。电池四周用 12 颗螺丝以 1.5 in·lb 的扭矩夹紧，保证密封均匀。阴极室与阳极室均设有双进液口和双出液口，倒钩接头可防止高泵速下软管脱落。电池采用 3D 打印制造，最终设计无泄漏。柔性软管接口可将多个电池串联成模块化、可放大的阵列。',
      },
      keywords: [
        { en: 'Device Design', zh: '器件设计' },
        { en: '3D Modeling', zh: '3D 建模' },
        { en: 'CAD', zh: 'CAD' },
        { en: 'Photoelectrocatalysis', zh: '光电催化' },
        { en: 'Water Splitting', zh: '电解水' },
      ],
    },
  },
  {
    id: 'proj-ald',
    title: { en: 'ALD Coating & Semiconductor Processing', zh: 'ALD 镀膜与半导体加工' },
    period: 'Yale, 2026',
    sortKey: '2026-09',
    photo: 'projects/ald-grid.jpg',
    detail: {
      description: {
        en: 'Fabricated ALD-coated solar cell samples for external collaborators. Silicon heterojunction cells were chosen over TOPCon cells because of their higher open-circuit voltage (Voc) and smoother surface, which is better suited to subsequent perovskite coating. After the surface busbars were removed by etching in an SC-1 solution (H₂O:H₂O₂:NH₄OH = 5:1:1), 50 nm of TiO₂ was deposited on the cell by atomic layer deposition (ALD), and multiple samples were delivered to the collaborators. Through this project, completed hands-on training in silicon wafer processing and ALD, and became an independent user of the ALD system.',
        zh: '为外部合作方制备 ALD 镀膜的太阳能电池样品。相比 TOPCon 电池，硅异质结电池的开路电压（Voc）更高、表面更平整，更适合后续的钙钛矿涂覆，因此选用了硅异质结电池。先用 SC-1 溶液（H₂O:H₂O₂:NH₄OH = 5:1:1）刻蚀去除表面 busbar，再通过原子层沉积（ALD）在电池上沉积 50 nm TiO₂，并向合作方交付了多批样品。通过这个项目，完成了硅片加工与 ALD 的实操培训，现在可以独立操作 ALD 设备。',
      },
      keywords: [
        { en: 'Atomic Layer Deposition', zh: '原子层沉积' },
        { en: 'Si Processing', zh: '硅加工' },
        { en: 'BOE Etching', zh: 'BOE 刻蚀' },
        { en: 'Physical Vapor Deposition', zh: '物理气相沉积' },
      ],
    },
  },
  {
    id: 'proj-secm',
    title: { en: 'SECM Cell 3D Printing Design', zh: 'SECM 电解池 3D 打印设计' },
    period: 'Yale, 2026',
    sortKey: '2026-08',
    photo: '', // TODO: add /public/projects/secm.jpg
    photos: [
      'projects/secm-cell-photos-4x3.jpg',
      'projects/secm-solid-assembly.png',
      'projects/secm-transparent-assembly.png',
      'projects/secm-01.jpg',
      'projects/secm-02.jpg',
      'projects/secm-04.jpg',
      'projects/secm-05.jpg',
    ],
    detail: {
      description: {
        en: 'Designed a sealed electrochemical cell for in-situ scanning electrochemical microscopy (SECM) measurements on 1 × 1 cm² Si samples. The Si working electrode, contacted by a back-side wire, sits on the base plate, and an O-ring seals it to prevent electrolyte leakage. The top cover is a two-piece dome: the two halves are kept apart while the SECM probe is positioned with a clear view of the sample, then brought together and screwed down around the probe to protect it from breakage. A port in the dome holds the reference electrode, and two outlets allow gas to flow through the cell. The cell operates with only a droplet of electrolyte.',
        zh: '为 1 × 1 cm² 硅样品设计了用于原位扫描电化学显微镜（SECM）测量的密封电解池。硅工作电极通过背面导线引出，放置在底板上，并用 O 型圈密封以防止电解液泄漏。顶盖是两半式穹顶：定位 SECM 探针时两半分开，便于清楚看到样品；定位完成后再合拢，并用螺丝固定在探针四周，保护探针不被折断。穹顶上设有一个参比电极接口和两个出气口，可让气体流经电解池。电解池只需一滴电解液即可工作。',
      },
      keywords: [
        { en: 'In-situ SECM', zh: '原位 SECM' },
        { en: 'Device Design', zh: '器件设计' },
        { en: '3D Modeling', zh: '3D 建模' },
        { en: 'CAD', zh: 'CAD' },
      ],
    },
  },
]
