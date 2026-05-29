import { useState } from 'react'
import { contact, whatsappUrl } from '../content/site'
import Button from '../components/ui/Button'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', empresa: '', mensagem: '' })

  const buildWhatsAppMessage = () => {
    const parts = [
      'Olá! Gostaria de consultoria em IA, software ou digitalização com a Acerola Tech.',
      form.nome && `Nome: ${form.nome}`,
      form.empresa && `Empresa: ${form.empresa}`,
      form.mensagem && `Mensagem: ${form.mensagem}`,
    ].filter(Boolean)
    return parts.join('\n')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(whatsappUrl(buildWhatsAppMessage()), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale sobre IA, software ou digitalização"
        description="Solicite consultoria em inteligência artificial, desenvolvimento de software ou automação de processos. Preencha o formulário e envie sua mensagem pelo WhatsApp."
      />

      <Section>
        <div className="section-grid-2 lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold text-ms-ink">Informações</h2>
            <dl className="mt-8">
              <div className="card-ms p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ms-muted">Horário de atendimento</dt>
                <dd className="mt-2 text-ms-muted">{contact.hours}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <Button variant="primary" whatsapp>
                Abrir WhatsApp
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card-ms p-6 md:p-8">
            <h2 className="text-xl font-semibold text-ms-ink">Envie uma mensagem</h2>
            <p className="mt-2 text-sm text-ms-muted">
              Ao enviar, você será direcionado ao WhatsApp com a mensagem preenchida.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-ms-ink">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="input-field mt-1.5"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-ms-ink">
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="input-field mt-1.5"
                  placeholder="Nome da empresa"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-ms-ink">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="input-field mt-1.5 resize-none"
                  placeholder="Descreva brevemente seu desafio ou projeto"
                />
              </div>
            </div>
            <button type="submit" className="pill pill-cta mt-6 w-full justify-center">
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </Section>
    </>
  )
}
