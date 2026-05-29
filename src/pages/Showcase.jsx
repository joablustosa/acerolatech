import { useState } from 'react'
import { showcaseItems } from '../content/showcase'
import PageHero from '../components/ui/PageHero'
import Section, { SectionHeader } from '../components/ui/Section'
import ShowcaseCard from '../components/ui/ShowcaseCard'
import Modal from '../components/ui/Modal'
import ShowcaseDetail from '../components/ui/ShowcaseDetail'
import Button from '../components/ui/Button'

export default function Showcase() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <PageHero
        eyebrow="Showcase"
        title="Produtos desenvolvidos com a consultoria"
        description="Cases reais de software, IA e digitalização de empresas — de lanchonetes a frotas rodoviárias. Veja sistemas entregues pela consultoria Acerola Tech."
      />

      <Section>
        <SectionHeader
          eyebrow="Para negócios"
          title="Soluções que já estão no ar"
          description="Cada produto abaixo nasceu de um problema concreto de operação, com escopo fechado e entrega mensurável."
        />
        <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {showcaseItems.map((item) => (
            <ShowcaseCard key={item.id} item={item} onOpen={setSelected} />
          ))}
        </div>
      </Section>

      <Section variant="tint" className="!py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-ms-ink md:text-3xl">
            Quer um sistema como estes para o seu negócio?
          </h2>
          <p className="mt-4 text-ms-muted">
            Conte seu desafio. Respondemos com clareza sobre escopo, prazo e investimento.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="primary" whatsapp>
              Solicitar proposta
            </Button>
          </div>
        </div>
      </Section>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name ?? ''}>
        <ShowcaseDetail item={selected} />
      </Modal>
    </>
  )
}
