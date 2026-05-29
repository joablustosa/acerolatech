import Blobs from './Blobs'

export default function PageHero({ eyebrow, title, description, centered = true }) {
  return (
    <section className="page-hero py-16 md:py-20 lg:py-24">
      <Blobs />
      <div
        className={`site-container relative z-10 ${centered ? 'text-center' : ''}`}
      >
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1
          className={`heading-display mt-4 animate-fade-up animate-fade-up-delay-1 ${
            centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-5 text-lg leading-relaxed text-ms-muted animate-fade-up animate-fade-up-delay-2 ${
              centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
