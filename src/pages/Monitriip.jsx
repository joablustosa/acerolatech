import {
  monitriipBrand,
  implementationLevels,
  performanceMetrics,
  monitriipPillars,
  monitriipSteps,
  monitriipFaqs,
  monitriipWhatsappMessage,
} from '../content/monitriip'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import MetricIcon from '../components/ui/MetricIcon'
import Section, { SectionHeader } from '../components/ui/Section'
import Blobs from '../components/ui/Blobs'

function LevelCard({ level, featured = false }) {
  return (
    <article className={`monitriip-level-card level-${level.level} ${featured ? 'is-featured' : ''}`}>
      <div className="monitriip-level-card-head">
        <span className="monitriip-level-card-num">Nível {level.level}</span>
        <span className="monitriip-level-card-status">{level.status}</span>
      </div>
      <h3 className="monitriip-level-card-title">{level.title.replace(/^Nível \d — /, '')}</h3>
      <p className="monitriip-level-card-summary">{level.summary}</p>
      <ul className="monitriip-level-card-traits">
        {level.traits.map((trait) => (
          <li key={trait}>{trait}</li>
        ))}
      </ul>
      <div className="monitriip-level-card-tags">
        {level.indicators.map((tag) => (
          <span key={tag} className="monitriip-level-tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Monitriip() {
  const level1 = implementationLevels.find((l) => l.level === 1)
  const otherLevels = implementationLevels.filter((l) => l.level !== 1).sort((a, b) => b.level - a.level)

  return (
    <>
      <section className="monitriip-hero">
        <Blobs className="opacity-30" />
        <div className="site-container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="monitriip-badge">Produto principal · Acerola Tech</span>
            <p className="eyebrow mt-6">{monitriipBrand.tagline}</p>
            <h1 className="heading-display mt-4">{monitriipBrand.name}</h1>
            <p className="mt-5 text-xl font-medium text-ms-ink md:text-2xl">{monitriipBrand.headline}</p>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ms-muted">
              {monitriipBrand.subheadline} Entendemos onde você está hoje e desenhamos o caminho
              para melhorar todos os índices de desempenho — com inteligência artificial,
              integração de sistemas e desenvolvimento sob medida.
            </p>
            <div className="hero-actions mt-8">
              <Button variant="primary" whatsapp={monitriipWhatsappMessage}>
                Solicitar assessment
              </Button>
              <a href="#niveis" className="pill border border-ms-border bg-ms-surface text-ms-ink hover:bg-ms-tint">
                Ver níveis de implantação
              </a>
            </div>
          </div>

          <div className="monitriip-hero-stats">
            {[
              { value: '4 → 1', label: 'Evolução de maturidade' },
              { value: 'IA + Dev', label: 'Integração e automação' },
              { value: '100%', label: 'Diagnóstico objetivo' },
            ].map((stat) => (
              <div key={stat.label} className="monitriip-stat">
                <p className="monitriip-stat-value">{stat.value}</p>
                <p className="monitriip-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="niveis" variant="surface">
        <SectionHeader
          eyebrow="Níveis de implantação"
          title="Do Nível 4 ao Nível 1 — excelência operacional"
          description="Classificamos a maturidade digital da sua empresa e conduzimos a evolução com plano claro, prioridades definidas e entrega mensurável."
          centered
        />

        {level1 && (
          <div className="mb-8">
            <LevelCard level={level1} featured />
          </div>
        )}

        <div className="grid gap-5 lg:grid-cols-3">
          {otherLevels.map((level) => (
            <LevelCard key={level.level} level={level} />
          ))}
        </div>

        <div className="monitriip-evolution-banner">
          <div>
            <h3 className="text-xl font-semibold text-ms-ink md:text-2xl">
              Sua empresa está no Nível 2, 3 ou 4?
            </h3>
            <p className="mt-2 max-w-2xl text-ms-muted">
              O Monitriip identifica gaps de integração, automação e visibilidade — e define o
              plano para alcançar o Nível 1 com ganhos reais em eficiência, indicadores e controle.
            </p>
          </div>
          <Button variant="primary" whatsapp={monitriipWhatsappMessage} className="shrink-0">
            Quero evoluir de nível
          </Button>
        </div>
      </Section>

      <Section id="indicadores">
        <SectionHeader
          eyebrow="Indicadores de desempenho"
          title="O que melhora ao chegar no Nível 1"
          description="Cada nível abaixo do ideal custa tempo, dinheiro e oportunidade. Estes são os índices que trabalhamos para elevar."
          centered
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {performanceMetrics.map((metric) => (
            <article key={metric.title} className="card-ms p-6">
              <div className="card-icon-wrap mb-4">
                <MetricIcon name={metric.icon} />
              </div>
              <h3 className="text-lg font-semibold text-ms-ink">{metric.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ms-muted">{metric.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <SectionHeader
          eyebrow="Como evoluímos"
          title="IA, integração e desenvolvimento a serviço do seu nível"
          description="Quatro frentes complementares para sair do estado atual e construir uma operação integrada, monitorada e eficiente."
          centered
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {monitriipPillars.map((pillar) => (
            <article key={pillar.id} className="monitriip-pillar-card">
              <h3 className="text-lg font-semibold text-ms-ink">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ms-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Metodologia Monitriip"
          title="Do diagnóstico ao Nível 1"
          description="Processo estruturado para empresas que querem melhorar com previsibilidade — não com promessas vagas."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {monitriipSteps.map((step) => (
            <article key={step.step} className="monitriip-step-card">
              <span className="step-badge">{step.step}</span>
              <h3 className="mt-4 text-lg font-semibold text-ms-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ms-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="tint">
        <SectionHeader eyebrow="Perguntas frequentes" title="Dúvidas sobre o Monitriip" centered />
        <div className="mx-auto max-w-3xl">
          <Accordion items={monitriipFaqs} defaultOpen={0} />
        </div>
      </Section>

      <Section className="!py-16">
        <div className="monitriip-cta-panel">
          <Blobs className="opacity-20" />
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <p className="eyebrow text-white/70">Próximo passo</p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Descubra seu nível e o caminho para o Nível 1
            </h2>
            <p className="mt-4 text-white/80">
              Assessment Monitriip com diagnóstico objetivo, plano priorizado e proposta fechada
              para elevar os índices de desempenho da sua operação.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                variant="light"
                whatsapp={monitriipWhatsappMessage}
                className="!border-white/30 !bg-white !text-ms-ink hover:!bg-white/90"
              >
                Agendar assessment
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
