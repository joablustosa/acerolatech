import { homeAnchors } from '../../content/site'
import Button from '../ui/Button'

export default function SubNav() {
  return (
    <nav className="subnav" aria-label="Navegação da página">
      <div className="site-container subnav-inner">
        <div className="subnav-links">
          {homeAnchors.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-sm font-medium text-ms-subtle transition-colors hover:text-ms-blue"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden shrink-0 sm:block">
          <Button variant="primary" whatsapp className="!py-2 !px-4 !text-sm">
            Solicitar proposta
          </Button>
        </div>
      </div>
    </nav>
  )
}
