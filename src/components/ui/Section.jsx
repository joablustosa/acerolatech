export default function Section({
  children,
  className = '',
  id,
  variant = 'default',
  containerClass = '',
}) {
  const bg =
    variant === 'surface'
      ? 'bg-ms-surface'
      : variant === 'tint'
        ? 'bg-ms-tint'
        : 'bg-ms-bg'

  return (
    <section id={id} className={`w-full py-16 md:py-20 lg:py-24 ${bg} ${className}`}>
      <div className={`site-container ${containerClass}`}>{children}</div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  className = '',
}) {
  return (
    <div
      className={`mb-12 md:mb-14 ${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight text-ms-ink md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ms-muted">{description}</p>
      )}
    </div>
  )
}
