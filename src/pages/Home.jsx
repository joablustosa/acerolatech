import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  brand,
  services,
  audienceSegments,
  capabilities,
  whyDigital,
  faqs,
} from '../content/site'
import Button from '../components/ui/Button'
import Blobs from '../components/ui/Blobs'
import PillTabs from '../components/ui/PillTabs'
import Accordion from '../components/ui/Accordion'
import Mockup from '../components/ui/Mockup'
import Section, { SectionHeader } from '../components/ui/Section'
import { ServiceCard, HighlightCard } from '../components/ui/Card'
import SubNav from '../components/layout/SubNav'

export default function Home() {
  const [activeMockup, setActiveMockup] = useState(capabilities[0]?.mockup ?? 'dashboard')

  const handleCapabilityChange = (id) => {
    const item = capabilities.find((c) => c.id === id)
    if (item?.mockup) setActiveMockup(item.mockup)
  }

  return (
    <>
      <section className="ms-hero pb-10 pt-12 md:pb-14 md:pt-16 lg:pt-20">
        <Blobs />
        <div className="site-container relative z-10 text-center">
          <p className="eyebrow animate-fade-up">{brand.tagline.toUpperCase()}</p>
          <h1 className="heading-display mx-auto mt-5 max-w-4xl animate-fade-up animate-fade-up-delay-1">
            Consultoria em IA, software e digitalização para empresas
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ms-muted animate-fade-up animate-fade-up-delay-2">
            {brand.description} Impulsionamos a revolução tecnológica do seu negócio com
            automação de processos, agentes de IA e sistemas sob medida — do diagnóstico à
            estabilização em produção.
          </p>
          <div className="hero-actions mt-8 animate-fade-up animate-fade-up-delay-3">
            <Button variant="primary" whatsapp>
              Solicitar proposta
            </Button>
            <Link
              to="/servicos"
              className="pill border border-ms-border bg-ms-surface text-ms-ink hover:bg-ms-tint"
            >
              Ver serviços
            </Link>
          </div>
          <div className="mt-12 md:mt-16">
            <PillTabs items={audienceSegments} />
          </div>
        </div>
      </section>

      <SubNav />

      <Section id="como-funciona" variant="surface">
        <SectionHeader
          eyebrow="Como funciona"
          title="Digitalização e automação de processos com a Acerola Tech"
          description="Do diagnóstico à entrega — consultoria em IA, software e transformação digital com projetos fechados e comunicação direta."
        />
        <div className="section-grid-2">
          <Accordion
            items={capabilities}
            defaultOpen={0}
            onActiveChange={handleCapabilityChange}
          />
          <div className="w-full lg:sticky lg:top-36">
            <Mockup type={activeMockup} />
          </div>
        </div>
      </Section>

      <Section id="servicos">
        <SectionHeader
          eyebrow="Serviços"
          title="Tudo o que sua empresa precisa em um só parceiro"
          description="Cinco frentes para levar sua operação ao digital com entrega previsível."
        />
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/servicos" className="text-sm font-semibold text-ms-blue hover:underline">
            Ver detalhes de todos os serviços →
          </Link>
        </div>
      </Section>

      <Section id="por-que-digital" variant="surface">
        <SectionHeader
          eyebrow="Por que digital"
          title="Descubra o que a revolução tecnológica pode fazer pelo seu negócio"
          centered
        />
        <div className="grid w-full gap-5 sm:grid-cols-2">
          {whyDigital.map((item) => (
            <HighlightCard
              key={item.title}
              title={item.title}
              description={item.description}
              mockupType={item.mockup}
            />
          ))}
        </div>
      </Section>

      <Section id="faq">
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title="Tire suas dúvidas sobre nossos projetos"
        />
        <div className="mx-auto w-full max-w-3xl">
          <Accordion items={faqs} defaultOpen={0} />
        </div>
      </Section>

      <Section variant="tint" className="!py-16">
        <div className="relative w-full overflow-hidden rounded-2xl border border-ms-border bg-ms-surface p-10 text-center md:p-14">
          <Blobs className="opacity-50" />
          <div className="relative z-10">
            <h2 className="text-2xl font-semibold text-ms-ink md:text-3xl">
              Pronto para o próximo projeto?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ms-muted">
              Conte seu desafio. Respondemos com clareza sobre escopo, prazo e investimento.
            </p>
            <div className="mt-8 flex justify-center">
              <Button variant="primary" whatsapp>
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
