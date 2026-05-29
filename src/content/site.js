export const brand = {
  name: 'Acerola Tech',
  tagline: 'Consultoria em IA, Software e Processos',
  description:
    'Consultoria em inteligência artificial, desenvolvimento de software, automação de processos e digitalização de empresas — com projetos fechados, escopo definido e entrega mensurável.',
}

export const contact = {
  whatsapp: '5521984813307',
  whatsappDisplay: '+55 (21) 98481-3307',
  email: 'contato.rjo@gmail.com',
  hours: 'Segunda a sexta, 9h às 18h',
}

export function whatsappUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${contact.whatsapp}?text=${text}`
}

export const whatsappDefaultMessage =
  'Olá! Tenho interesse em consultoria em IA, software e digitalização da Acerola Tech. Gostaria de conversar sobre um projeto.'

export const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/metodologia', label: 'Metodologia' },
  { to: '/showcase', label: 'Showcase' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export const services = [
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento de soluções',
    short:
      'Aplicações web e desktop sob medida, com arquitetura moderna e stack atual do mercado.',
    description:
      'Projetamos e construímos software que resolve problemas reais do seu negócio — portais, painéis administrativos, apps internos e produtos digitais completos.',
    deliverables: [
      'Arquitetura e documentação técnica',
      'Aplicações web responsivas',
      'Aplicações desktop quando necessário',
      'APIs REST e integrações',
      'Testes, deploy e handover',
    ],
    icon: 'code',
  },
  {
    id: 'mobile',
    title: 'Apps mobile',
    short:
      'Aplicativos nativos e híbridos para iOS e Android, alinhados à sua operação e à experiência do usuário.',
    description:
      'Desenvolvemos apps mobile que estendem seu negócio até o bolso do cliente ou do colaborador — com performance, segurança e integração aos sistemas que você já usa.',
    deliverables: [
      'Apps iOS e Android (nativo ou cross-platform)',
      'UX/UI mobile orientada ao negócio',
      'Integração com APIs e backends existentes',
      'Publicação nas lojas (App Store / Play Store)',
      'Monitoramento e evolução pós-lançamento',
    ],
    icon: 'mobile',
  },
  {
    id: 'integracao',
    title: 'Integração de sistemas',
    short:
      'Conectamos ERPs, legados e nuvem para fluxos automatizados e dados consistentes.',
    description:
      'Eliminamos silos de informação integrando sistemas que hoje não conversam — com segurança, rastreabilidade e monitoramento.',
    deliverables: [
      'Mapeamento de fluxos e APIs',
      'Integração ERP, CRM e legados',
      'Sincronização de dados em tempo real ou batch',
      'Filas, webhooks e orquestração',
      'Observabilidade e tratamento de erros',
    ],
    icon: 'link',
  },
  {
    id: 'ia-automacao',
    title: 'Agentes de automação com IA',
    short:
      'Agentes inteligentes que automatizam atendimento, processos internos e rotinas repetitivas com segurança.',
    description:
      'Implementamos agentes de IA conectados aos seus sistemas e dados — para responder clientes, triar demandas, gerar relatórios e executar fluxos com supervisão humana quando necessário.',
    deliverables: [
      'Diagnóstico de processos automatizáveis',
      'Agentes conversacionais e assistentes internos',
      'Integração com CRM, ERP e bases de conhecimento',
      'Guardrails, logs e governança de uso',
      'Treinamento e ajuste contínuo do agente',
    ],
    icon: 'ai',
  },
  {
    id: 'modernizacao',
    title: 'Modernização de legado',
    short:
      'Refatoração e migração de sistemas antigos para web ou desktop, preservando regras de negócio.',
    description:
      'Renovamos sistemas legados sem perder o que funciona: regras de negócio, dados históricos e operação — com tecnologia atual e manutenção sustentável.',
    deliverables: [
      'Diagnóstico técnico do legado',
      'Plano de migração por fases',
      'Refatoração incremental ou rewrite',
      'Migração de dados validada',
      'Treinamento e documentação operacional',
    ],
    icon: 'refresh',
  },
]

export const methodologySteps = [
  {
    step: 1,
    title: 'Diagnóstico e escopo',
    description:
      'Entendemos o negócio, mapeamos sistemas atuais e definimos o problema com clareza antes de qualquer linha de código.',
  },
  {
    step: 2,
    title: 'Proposta fechada',
    description:
      'Entregamos proposta com escopo, prazo, entregáveis e investimento fixo. Sem surpresas no meio do caminho.',
  },
  {
    step: 3,
    title: 'Execução em sprints',
    description:
      'Desenvolvimento iterativo com checkpoints regulares, demos e validação contínua com stakeholders.',
  },
  {
    step: 4,
    title: 'Entrega e estabilização',
    description:
      'Deploy em produção, documentação, suporte de estabilização e transferência de conhecimento para sua equipe.',
  },
]

export const scopeIncluded = [
  'Escopo documentado e aprovado antes do início',
  'Entregas parciais com validação',
  'Código versionado e documentado',
  'Comunicação direta com quem executa',
]

export const scopeExcluded = [
  'Horas avulsas sem escopo definido',
  'Mudanças de escopo sem aditivo contratual',
  'Suporte ilimitado pós-projeto sem contrato',
]

export const whyDigital = [
  {
    title: 'Eficiência operacional',
    description: 'Automatize processos manuais e reduza erros com sistemas integrados.',
    mockup: 'nodes',
  },
  {
    title: 'Decisão baseada em dados',
    description: 'Tenha visibilidade em tempo real sobre operação, vendas e indicadores.',
    mockup: 'dashboard',
  },
  {
    title: 'Escalabilidade',
    description: 'Cresça sem depender de planilhas e workarounds que não escalam.',
    mockup: 'code',
  },
  {
    title: 'Competitividade',
    description: 'Ofereça experiências digitais no nível que seus clientes já esperam.',
    mockup: 'phone',
  },
]

export const aboutHighlights = [
  {
    title: 'Foco em resultado',
    description: 'Cada projeto começa com o problema de negócio, não com a tecnologia da moda.',
  },
  {
    title: 'Projetos fechados',
    description: 'Escopo, prazo e investimento definidos antes da execução. Transparência total.',
  },
  {
    title: 'Atendimento direto',
    description: 'Você fala com quem projeta e desenvolve — sem camadas desnecessárias.',
  },
  {
    title: 'Stack atual',
    description:
      '.NET, Node.js, React, React Native, Flutter, SQL Server, PostgreSQL, Azure, OpenAI e ferramentas consolidadas do mercado.',
  },
]

export const footerLinks = [
  { to: '/servicos', label: 'Serviços' },
  { to: '/metodologia', label: 'Metodologia' },
  { to: '/showcase', label: 'Showcase' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export const audienceSegments = [
  {
    id: 'pequenas',
    label: 'Pequenas empresas',
    description:
      'Digitalize operações com projetos enxutos: sistemas sob medida, apps mobile e automação com IA sem equipe interna de TI.',
  },
  {
    id: 'medias',
    label: 'Médias empresas',
    description:
      'Integre ERPs, legados e nuvem; modernize processos críticos com escopo fechado e entregas parciais validadas.',
  },
  {
    id: 'grandes',
    label: 'Grandes empresas',
    description:
      'Projetos complexos de modernização de legado, integração em escala e agentes de IA com governança e rastreabilidade.',
  },
]

export const capabilities = [
  {
    id: 'diagnostico',
    title: 'Diagnóstico e escopo claro',
    description:
      'Mapeamos seu cenário atual, sistemas e objetivos de negócio antes de propor qualquer solução. Você sabe exatamente o que será entregue.',
    mockup: 'dashboard',
  },
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento sob medida',
    description:
      'Web, desktop e mobile com stack atual (.NET, React, Node, Flutter). Arquitetura pensada para manutenção e evolução.',
    mockup: 'dashboard',
  },
  {
    id: 'integracao',
    title: 'Integração e dados unificados',
    description:
      'Conectamos ERPs, CRMs e legados para eliminar retrabalho manual e inconsistência de informação entre áreas.',
    mockup: 'nodes',
  },
  {
    id: 'ia',
    title: 'Agentes de automação com IA',
    description:
      'Assistentes inteligentes para atendimento, triagem e rotinas internas — com guardrails, logs e supervisão humana.',
    mockup: 'chat',
  },
  {
    id: 'legado',
    title: 'Modernização de legado',
    description:
      'Migração e refatoração preservando regras de negócio e dados históricos, com plano por fases e risco controlado.',
    mockup: 'code',
  },
]

export const faqs = [
  {
    id: 'fechado',
    title: 'O que significa projeto fechado?',
    description:
      'Escopo, prazo e investimento são definidos e aprovados antes do início. Mudanças de escopo passam por aditivo contratual — sem surpresas no meio do caminho.',
  },
  {
    id: 'prazo',
    title: 'Qual o prazo típico de um projeto?',
    description:
      'Depende da complexidade. Após o diagnóstico, entregamos proposta com cronograma em sprints e marcos de validação. Projetos menores podem levar semanas; modernizações de legado, meses.',
  },
  {
    id: 'stack',
    title: 'Quais tecnologias vocês utilizam?',
    description:
      'Escolhemos a stack pelo problema: .NET, Node.js, React, React Native, Flutter, SQL Server, PostgreSQL, Azure e OpenAI, entre outras ferramentas consolidadas.',
  },
  {
    id: 'suporte',
    title: 'Há suporte após a entrega?',
    description:
      'Incluímos período de estabilização na entrega. Suporte contínuo ou evoluções podem ser contratados em novo projeto fechado, conforme necessidade.',
  },
]

export const homeAnchors = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'por-que-digital', label: 'Por que digital' },
  { id: 'faq', label: 'Perguntas frequentes' },
]

/** Mockup type per service id for Servicos page */
export const serviceMockups = {
  desenvolvimento: 'dashboard',
  mobile: 'phone',
  integracao: 'nodes',
  'ia-automacao': 'chat',
  modernizacao: 'code',
}
