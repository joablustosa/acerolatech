import { faqs, services } from './site'

export const siteUrl = 'https://acerolatech.com.br'
export const siteName = 'Acerola Tech'
export const defaultOgImage = `${siteUrl}/assets/logo.png`

export const globalKeywords = [
  'consultoria de IA',
  'consultoria em inteligência artificial',
  'consultoria de software',
  'desenvolvimento de software sob medida',
  'automação de processos',
  'digitalização de empresas',
  'transformação digital',
  'revolução tecnológica empresas',
  'modernização de sistemas',
  'agentes de IA',
  'integração de sistemas',
  'consultoria digital B2B',
  'projetos fechados',
  'Acerola Tech',
].join(', ')

export const defaultDescription =
  'Consultoria em IA, software e digitalização de empresas. Automatizamos processos, desenvolvemos sistemas sob medida e conduzimos a revolução tecnológica do seu negócio com projetos fechados e entrega mensurável.'

const pages = {
  '/': {
    title: 'Acerola Tech | Consultoria em IA, Software e Digitalização de Empresas',
    description:
      'Consultoria especializada em inteligência artificial, desenvolvimento de software, automação de processos e digitalização. Impulsione a revolução tecnológica da sua empresa com projetos fechados.',
    keywords: `${globalKeywords}, consultoria transformação digital, software empresarial, IA para empresas`,
  },
  '/servicos': {
    title: 'Serviços de Consultoria em IA e Software | Acerola Tech',
    description:
      'Desenvolvimento de software, agentes de IA, apps mobile, integração de sistemas e modernização de legado. Soluções digitais para automatizar processos e digitalizar operações.',
    keywords: `${globalKeywords}, desenvolvimento web, apps mobile, agentes de automação, modernização de legado`,
  },
  '/metodologia': {
    title: 'Metodologia de Projetos Digitais | Consultoria Acerola Tech',
    description:
      'Metodologia com diagnóstico, escopo fechado, sprints e entrega mensurável. Como conduzimos a digitalização e a modernização tecnológica de empresas com previsibilidade.',
    keywords: `${globalKeywords}, metodologia ágil, projeto fechado, escopo definido, entrega digital`,
  },
  '/showcase': {
    title: 'Showcase — Produtos e Sistemas Desenvolvidos | Acerola Tech',
    description:
      'Cases reais de software, IA e digitalização: sistemas para frotas, eventos, lanchonetes, excursões e mais. Veja produtos entregues pela consultoria Acerola Tech.',
    keywords: `${globalKeywords}, cases de sucesso, produtos digitais, sistemas sob medida, portfólio software`,
  },
  '/sobre': {
    title: 'Sobre a Acerola Tech | Consultoria Digital e de IA',
    description:
      'Conheça a Acerola Tech: consultoria em IA, software e processos com foco em resultado. Projetos fechados, stack atual e atendimento direto para empresas em transformação digital.',
    keywords: `${globalKeywords}, consultoria tecnológica, parceiro digital, inovação empresarial`,
  },
  '/contato': {
    title: 'Contato | Consultoria em IA e Software — Acerola Tech',
    description:
      'Fale com a Acerola Tech sobre consultoria em IA, desenvolvimento de software, automação de processos e digitalização. Solicite proposta com escopo, prazo e investimento definidos.',
    keywords: `${globalKeywords}, orçamento software, proposta consultoria IA, contato consultoria digital`,
  },
}

export function getPageSeo(pathname) {
  const path = pathname.replace(/\/$/, '') || '/'
  const page = pages[path] || pages['/']
  return {
    ...page,
    path,
    canonical: path === '/' ? siteUrl : `${siteUrl}${path}`,
    ogImage: defaultOgImage,
  }
}

function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: defaultOgImage,
    },
    description: defaultDescription,
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-21-98481-3307',
      contactType: 'sales',
      availableLanguage: 'Portuguese',
    },
  }
}

function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    publisher: { '@id': `${siteUrl}/#organization` },
    inLanguage: 'pt-BR',
  }
}

function professionalServiceSchema() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#service`,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    areaServed: 'BR',
    serviceType: [
      'Consultoria em inteligência artificial',
      'Consultoria de software',
      'Automação de processos',
      'Digitalização de empresas',
      'Transformação digital',
      'Desenvolvimento de software sob medida',
      'Agentes de automação com IA',
      'Integração de sistemas',
      'Modernização de sistemas legados',
      'Aplicativos mobile',
    ],
    provider: { '@id': `${siteUrl}/#organization` },
  }
}

function faqSchema() {
  return {
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.description,
      },
    })),
  }
}

function servicesSchema() {
  return {
    '@type': 'ItemList',
    '@id': `${siteUrl}/#services`,
    name: 'Serviços de consultoria Acerola Tech',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.short,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: 'BR',
      },
    })),
  }
}

function breadcrumbSchema(path) {
  const labels = {
    '/': 'Início',
    '/servicos': 'Serviços',
    '/metodologia': 'Metodologia',
    '/showcase': 'Showcase',
    '/sobre': 'Sobre',
    '/contato': 'Contato',
  }

  const crumbs = [{ path: '/', name: 'Início' }]
  if (path !== '/') {
    crumbs.push({ path, name: labels[path] || path })
  }

  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.path === '/' ? siteUrl : `${siteUrl}${crumb.path}`,
    })),
  }
}

export function getJsonLd(pathname) {
  const path = pathname.replace(/\/$/, '') || '/'
  const graph = [
    organizationSchema(),
    websiteSchema(),
    professionalServiceSchema(),
    breadcrumbSchema(path),
  ]

  if (path === '/') {
    graph.push(faqSchema(), servicesSchema())
  }

  if (path === '/servicos') {
    graph.push(servicesSchema())
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}

export const sitemapRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/servicos', priority: '0.9', changefreq: 'monthly' },
  { path: '/metodologia', priority: '0.8', changefreq: 'monthly' },
  { path: '/showcase', priority: '0.8', changefreq: 'monthly' },
  { path: '/sobre', priority: '0.7', changefreq: 'monthly' },
  { path: '/contato', priority: '0.8', changefreq: 'monthly' },
]
