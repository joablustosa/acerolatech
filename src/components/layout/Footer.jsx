import { Link } from 'react-router-dom'
import { brand, contact, footerLinks } from '../../content/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto w-full border-t border-ms-border bg-ms-footer text-ms-subtle">
      <div className="site-container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/assets/logo.png"
                alt="Acerola Tech"
                className="h-9 w-9 object-contain"
              />
              <p className="font-semibold text-ms-ink">{brand.name}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed">{brand.description}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ms-muted">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-ms-blue transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ms-muted">Contato</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ms-blue transition-colors"
                >
                  {contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-ms-blue transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="text-ms-muted">{contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-ms-border pt-8 text-center text-xs text-ms-muted">
          © {year} {brand.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
