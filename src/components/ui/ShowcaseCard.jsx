export default function ShowcaseCard({ item, onOpen }) {
  return (
    <article className="card-ms flex h-full flex-col overflow-hidden !p-0">
      <div className="aspect-[16/10] overflow-hidden bg-ms-tint">
        <img
          src={item.preview}
          alt={`Captura de tela do ${item.name}`}
          className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-3">
          <img
            src={item.logo}
            alt={`Logo ${item.name}`}
            className="h-10 w-10 shrink-0 object-contain"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold text-ms-ink">{item.name}</h3>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-ms-muted">{item.short}</p>
        <button
          type="button"
          onClick={() => onOpen(item)}
          className="pill pill-cta mt-5 inline-flex w-fit !px-4 !py-2 !text-xs"
        >
          Saiba mais
        </button>
      </div>
    </article>
  )
}
