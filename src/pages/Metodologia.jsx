import { methodologySteps, scopeIncluded, scopeExcluded } from '../content/site'
import Button from '../components/ui/Button'
import Section, { SectionHeader } from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'

export default function Metodologia() {
  return (
    <>
      <PageHero
        eyebrow="Metodologia"
        title="Somente projetos fechados"
        description="Metodologia para digitalização e modernização tecnológica com escopo, prazo e investimento definidos antes do início. Transparência do diagnóstico à entrega."
      />

      <Section>
        <SectionHeader
          eyebrow="Processo"
          title="Da conversa inicial à entrega"
          description="Quatro etapas claras para transformar sua necessidade em software em produção."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methodologySteps.map((step) => (
            <div key={step.step} className="card-ms p-6">
              <span className="step-badge">{step.step}</span>
              <h3 className="mt-4 text-lg font-semibold text-ms-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ms-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="surface">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-ms border-l-4 border-l-ms-blue p-8">
            <h2 className="text-xl font-semibold text-ms-ink">O que está no escopo</h2>
            <ul className="mt-6 space-y-3">
              {scopeIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ms-muted">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-ms-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-ms p-8">
            <h2 className="text-xl font-semibold text-ms-ink">O que não fazemos</h2>
            <ul className="mt-6 space-y-3">
              {scopeExcluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ms-muted">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-ms-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="tint">
        <div className="card-ms mx-auto max-w-2xl p-10 text-center">
          <h2 className="text-2xl font-semibold text-ms-ink">Vamos definir o escopo do seu projeto?</h2>
          <p className="mt-4 text-ms-muted">
            Primeira conversa sem compromisso. Entendemos o cenário e indicamos o caminho.
          </p>
          <div className="mt-8">
            <Button variant="primary" whatsapp>
              Agendar conversa
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
