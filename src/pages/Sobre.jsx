import { brand, aboutHighlights } from '../content/site'
import Button from '../components/ui/Button'
import Blobs from '../components/ui/Blobs'
import Section, { SectionHeader } from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Consultoria em IA, software e transformação digital"
        description={`A ${brand.name} conduz a revolução tecnológica de empresas com inteligência artificial, software sob medida e automação de processos — saindo do improviso digital para sistemas que escalam e geram resultado.`}
      />

      <Section>
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="Nossa missão"
            title="Tecnologia a serviço do negócio"
            description="Não vendemos horas soltas nem promessas vagas. Vendemos projetos com começo, meio e fim — onde cada entrega tem valor mensurável para a operação."
          />
          <div className="space-y-4 text-ms-muted leading-relaxed">
            <p>
              Atuamos em desenvolvimento de soluções, apps mobile, integração entre sistemas,
              agentes de automação com IA e modernização de legados para web ou desktop.
            </p>
            <p>
              Você trabalha diretamente com quem entende o problema e executa a solução — sem
              intermediários desnecessários.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader eyebrow="Diferenciais" title="Por que escolher a Acerola Tech" />
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutHighlights.map((item) => (
            <div key={item.title} className="card-ms p-6 md:p-8">
              <h3 className="text-lg font-semibold text-ms-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ms-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="tint">
        <div className="relative overflow-hidden rounded-2xl border border-ms-border bg-ms-surface p-8 md:p-12">
          <Blobs className="opacity-40" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl font-semibold text-ms-ink">Stack e abordagem</h2>
            <div className="mt-4 space-y-4 text-ms-muted leading-relaxed">
              <p>
                Utilizamos tecnologias consolidadas: .NET, Node.js, React, React Native, Flutter,
                SQL Server, PostgreSQL, Azure e OpenAI. A escolha da stack é orientada pelo
                problema — não pelo hype.
              </p>
              <p>
                Projetos podem resultar em aplicações web, apps mobile, APIs, agentes de IA,
                integrações ou desktop, conforme a necessidade do seu negócio.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="primary" whatsapp>
                Conhecer a consultoria
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
