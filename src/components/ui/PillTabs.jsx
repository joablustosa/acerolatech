import { useState } from 'react'

export default function PillTabs({ items, className = '' }) {
  const [activeId, setActiveId] = useState(items[0]?.id)
  const active = items.find((i) => i.id === activeId) ?? items[0]

  return (
    <div className={`pill-tabs-wrap ${className}`}>
      <div className="pill-tabs-list" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeId === item.id}
            onClick={() => setActiveId(item.id)}
            className={`pill-tab ${activeId === item.id ? 'pill-tab-active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {active?.description && (
        <p className="mt-6 max-w-2xl text-center text-base leading-relaxed text-ms-muted px-2">
          {active.description}
        </p>
      )}
    </div>
  )
}
