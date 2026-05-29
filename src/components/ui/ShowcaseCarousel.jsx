import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { showcaseItems } from '../../content/showcase'
import Modal from './Modal'
import ShowcaseDetail from './ShowcaseDetail'

const INTERVAL_MS = 6000

export default function ShowcaseCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [selected, setSelected] = useState(null)

  const goTo = useCallback((index) => {
    const total = showcaseItems.length
    setActive(((index % total) + total) % total)
  }, [])

  const goNext = useCallback(() => goTo(active + 1), [active, goTo])
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (paused) return undefined

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % showcaseItems.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [paused])


  return (
    <>
      <section
        id="showcase"
        className="showcase-carousel"
        aria-roledescription="carousel"
        aria-label="Produtos desenvolvidos pela consultoria"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="site-container showcase-carousel-inner">
          <p className="eyebrow text-center">Showcase</p>

          <div className="showcase-carousel-stage" aria-live="polite">
            {showcaseItems.map((slide, index) => (
              <div
                key={slide.id}
                className={`showcase-carousel-slide ${index === active ? 'is-active' : ''}`}
                aria-hidden={index !== active}
              >
                <div className="showcase-carousel-copy">
                  <h2 className="showcase-carousel-title">{slide.name}</h2>
                  <p className="showcase-carousel-desc">{slide.short}</p>
                  <div className="showcase-carousel-actions">
                    <button
                      type="button"
                      className="pill pill-cta shadow-sm"
                      onClick={() => setSelected(slide)}
                    >
                      Saiba mais
                    </button>
                    <Link
                      to="/showcase"
                      className="pill border border-ms-blue bg-transparent text-ms-blue hover:bg-acerola-soft"
                    >
                      Ver showcase
                    </Link>
                  </div>
                </div>

                <div className="showcase-carousel-visual">
                  <img
                    src={slide.preview}
                    alt={`Interface do ${slide.name}`}
                    className="showcase-carousel-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="showcase-carousel-controls">
            <button
              type="button"
              className="showcase-carousel-arrow"
              onClick={goPrev}
              aria-label="Produto anterior"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="showcase-carousel-dots" role="tablist" aria-label="Selecionar produto">
              {showcaseItems.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-label={`${slide.name}, slide ${index + 1} de ${showcaseItems.length}`}
                  className={`showcase-carousel-dot ${index === active ? 'is-active' : ''}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className="showcase-carousel-arrow"
              onClick={goNext}
              aria-label="Próximo produto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.name ?? ''}>
        <ShowcaseDetail item={selected} />
      </Modal>
    </>
  )
}
