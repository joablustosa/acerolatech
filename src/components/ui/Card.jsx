import { Link } from 'react-router-dom'
import ServiceIcon from './ServiceIcon'
import Mockup from './Mockup'

export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`card-ms p-6 md:p-8 ${!hover ? 'hover:shadow-[var(--shadow-ms-subtle)]' : ''} ${className}`}>
      {children}
    </div>
  )
}

export function ServiceCard({ service, showLink = true }) {
  return (
    <article className="card-ms flex h-full flex-col p-6">
      <div className="card-icon-wrap mb-4">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="text-lg font-semibold text-ms-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ms-muted">{service.short}</p>
      {showLink && (
        <Link
          to="/servicos"
          className="pill pill-cta mt-5 inline-flex w-fit !py-2 !px-4 !text-xs"
        >
          Saiba mais
        </Link>
      )}
    </article>
  )
}

export function HighlightCard({ title, description, mockupType = 'dashboard' }) {
  return (
    <article className="card-ms overflow-hidden flex flex-col">
      <Mockup type={mockupType} className="!min-h-[140px] !rounded-none !border-0 !shadow-none !p-4" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ms-ink">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ms-muted">{description}</p>
        <Link to="/contato" className="pill pill-cta mt-4 inline-flex w-fit !py-2 !px-4 !text-xs">
          Saiba mais
        </Link>
      </div>
    </article>
  )
}
