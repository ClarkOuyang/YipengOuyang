import type { Lang } from './LanguageContext'

// All static UI chrome (labels that are NOT your personal data) lives here,
// keyed by language. Values are strings; use {n} as a placeholder where a
// number is substituted at the call site.
export type StringValue = string

const en: Record<string, StringValue> = {
  'nav.about': 'About',
  'nav.news': 'News',
  'nav.projects': 'Projects',
  'nav.gallery': 'Research',
  'nav.publications': 'Publications',
  'nav.honors': 'Honors',
  'nav.experience': 'Experience',
  'nav.interests': 'Interests',
  'nav.toggleTheme.light': 'Light mode',
  'nav.toggleTheme.dark': 'Dark mode',
  'nav.toggleLang': 'Switch language',

  'section.recent': 'Recent',
  'section.what': 'What I work on',
  'section.selected': 'Selected works',
  'section.background': 'Background',
  'section.data': 'Research data',

  'heading.news': 'News',
  'heading.projects': 'Research & Projects',
  'heading.gallery': 'Research',
  'heading.publications': 'Publications',
  'heading.honors': 'Honors & Awards',
  'heading.experience': 'Education & Experience',
  'heading.education': 'Education',
  'heading.experienceTitle': 'Experience',
  'heading.internship': 'Internship',

  'detail.show': 'Show details',
  'detail.hide': 'Hide details',

  'gallery.intro':
    'One representative photo per project, ordered newest to oldest.',
  'gallery.click': 'Click any figure to enlarge.',
  'gallery.photoPending': 'Photo coming soon',

  'pub.yearPapers': '{n} papers',

  'link.pdf': 'PDF',
  'link.code': 'Code',
  'link.project': 'Project',
  'link.slides': 'Slides',
  'link.doi': 'DOI',
  'link.paper': 'Paper',
  'link.demo': 'Demo',
  'link.bibtex': 'BibTeX',
  'link.copy': 'Copy',
  'link.copied': 'Copied',

  'label.researchInterests': 'Research Interests',
  'section.beyond': 'Beyond the lab',
  'heading.interests': 'Interests & Hobbies',

  'footer.rights': 'All rights reserved.',
  'footer.built': 'Built with React & Tailwind CSS.',

  'contact.email': 'Email',
  'contact.phone': 'Phone',
}

const zh: Record<string, StringValue> = {
  'nav.about': '关于',
  'nav.news': '动态',
  'nav.projects': '项目',
  'nav.gallery': '研究',
  'nav.publications': '论文',
  'nav.honors': '荣誉',
  'nav.experience': '经历',
  'nav.interests': '兴趣',
  'nav.toggleTheme.light': '浅色模式',
  'nav.toggleTheme.dark': '深色模式',
  'nav.toggleLang': '切换语言',

  'section.recent': '近期',
  'section.what': '研究方向',
  'section.selected': '精选作品',
  'section.background': '背景',
  'section.data': '研究数据',

  'heading.news': '动态',
  'heading.projects': '研究与项目',
  'heading.gallery': '研究',
  'heading.publications': '发表论文',
  'heading.honors': '荣誉奖项',
  'heading.experience': '教育与经历',
  'heading.education': '教育背景',
  'heading.experienceTitle': '科研与实习',
  'heading.internship': '实习经历',

  'detail.show': '展开详情',
  'detail.hide': '收起详情',

  'gallery.intro':
    '每个项目一张代表性照片，按时间从新到旧排列。',
  'gallery.click': '点击任意图可放大查看。',
  'gallery.photoPending': '照片待补充',

  'pub.yearPapers': '{n} 篇论文',

  'link.pdf': 'PDF',
  'link.code': '代码',
  'link.project': '项目',
  'link.slides': '幻灯片',
  'link.doi': 'DOI',
  'link.paper': '论文',
  'link.demo': '演示',
  'link.bibtex': 'BibTeX',
  'link.copy': '复制',
  'link.copied': '已复制',

  'label.researchInterests': 'Research Interests',
  'section.beyond': '课余生活',
  'heading.interests': '兴趣爱好',

  'footer.rights': '保留所有权利。',
  'footer.built': '使用 React 与 Tailwind CSS 构建。',
}

export function getString(key: string, lang: Lang): string {
  const raw = (lang === 'zh' ? zh : en)[key] ?? en[key] ?? key
  return typeof raw === 'string' ? raw : key
}
