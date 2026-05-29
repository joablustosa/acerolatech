import { whatsappUrl, whatsappDefaultMessage } from '../../content/site'

const variants = {
  primary: 'pill pill-cta shadow-sm hover:opacity-95',
  secondary: 'pill pill-blue',
  outline:
    'pill border-2 border-ms-cta bg-transparent text-ms-ink hover:bg-ms-cta hover:text-white',
  ghost: 'text-ms-blue hover:underline underline-offset-4 bg-transparent shadow-none rounded-none px-0 py-0',
  light: 'pill bg-white text-ms-ink border border-ms-border hover:bg-ms-tint',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  whatsapp,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ms-blue focus-visible:ring-offset-2 active:scale-[0.98]'

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (whatsapp) {
    return (
      <a
        href={whatsappUrl(whatsapp === true ? whatsappDefaultMessage : whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
