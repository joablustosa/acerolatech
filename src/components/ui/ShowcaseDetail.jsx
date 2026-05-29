export default function ShowcaseDetail({ item }) {
  if (!item) return null

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-4">
        <img src={item.logo} alt={`Logo ${item.name}`} className="h-12 w-12 object-contain" />
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-ms-blue hover:underline"
          >
            {item.url.replace(/^https?:\/\//, '')}
          </a>
        )}
      </div>
      <div className="overflow-hidden rounded-xl border border-ms-border bg-ms-tint">
        <img
          src={item.preview}
          alt={`Interface do ${item.name}`}
          className="w-full object-cover object-top"
        />
      </div>
      <p className="text-base leading-relaxed text-ms-muted">{item.description}</p>
    </div>
  )
}
