import { services, serviceMockups } from '../content/site'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'
import Mockup from '../components/ui/Mockup'
import ServiceIcon from '../components/ui/ServiceIcon'

export default function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Consultoria em IA, software e digitalização"
        description="Desenvolvimento de software, agentes de IA, apps mobile, integração de sistemas e modernização de legado — para automatizar processos e acelerar a transformação digital da sua empresa."
      />

      <Section>
        <div className="space-y-12">
          {services.map((service, index) => {
            const mockupType = serviceMockups[service.id] || 'dashboard'
            const reversed = index % 2 === 1
            return (
              <article
                key={service.id}
                className={`section-grid-2 items-center ${reversed ? 'lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1' : ''}`}
              >
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="card-icon-wrap">
                      <ServiceIcon name={service.icon} />
                    </div>
                    <span className="text-sm font-semibold text-ms-muted">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-ms-ink md:text-3xl">{service.title}</h2>
                  <p className="mt-4 leading-relaxed text-ms-muted">{service.description}</p>
                  <p className="eyebrow mt-8 mb-3">Entregáveis típicos</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ms-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ms-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Mockup type={mockupType} />
              </article>
            )
          })}
        </div>
      </Section>

      <Section variant="surface">
        <div className="card-ms mx-auto max-w-3xl p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-ms-ink">Qual serviço se encaixa no seu cenário?</h2>
          <p className="mx-auto mt-4 max-w-lg text-ms-muted">
            Descreva seu desafio no WhatsApp. Ajudamos a definir o escopo ideal para um projeto fechado.
          </p>
          <div className="mt-8">
            <Button variant="primary" whatsapp>
              Iniciar conversa
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
