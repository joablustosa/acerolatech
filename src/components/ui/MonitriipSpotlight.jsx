import { Link } from 'react-router-dom'
import { monitriipBrand, implementationLevels, monitriipWhatsappMessage } from '../../content/monitriip'
import Button from './Button'

export default function MonitriipSpotlight() {
  const targetLevel = implementationLevels.find((l) => l.level === 1)
  const lowerLevels = implementationLevels.filter((l) => l.level > 1).reverse()

  return (
    <section id="monitriip" className="monitriip-spotlight" aria-labelledby="monitriip-spotlight-title">
      <div className="site-container monitriip-spotlight-inner">
        <div className="monitriip-spotlight-grid">
          <div className="monitriip-spotlight-copy">
            <span className="monitriip-badge">Produto principal</span>
            <p className="eyebrow mt-4 text-white/60">{monitriipBrand.tagline}</p>
            <h2 id="monitriip-spotlight-title" className="monitriip-spotlight-title">
              {monitriipBrand.name}: {monitriipBrand.headline}
            </h2>
            <p className="monitriip-spotlight-desc">{monitriipBrand.subheadline}</p>

            <div className="monitriip-spotlight-actions">
              <Link to="/monitriip" className="pill pill-cta shadow-sm">
                Conhecer o Monitriip
              </Link>
              <Button variant="light" whatsapp={monitriipWhatsappMessage} className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/20">
                Avaliar meu nível
              </Button>
            </div>
          </div>

          <div className="monitriip-levels-preview" aria-hidden="true">
            <div className="monitriip-levels-path">
              {lowerLevels.map((level) => (
                <div key={level.level} className={`monitriip-level-chip level-${level.level}`}>
                  <span className="monitriip-level-num">Nível {level.level}</span>
                  <span className="monitriip-level-label">{level.status}</span>
                </div>
              ))}
              <div className="monitriip-level-arrow">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <div className="monitriip-level-chip level-1 is-target">
                <span className="monitriip-level-num">Nível 1</span>
                <span className="monitriip-level-label">{targetLevel?.status}</span>
                <p className="monitriip-level-summary">{targetLevel?.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
