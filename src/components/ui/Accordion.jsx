import { useState } from 'react'

function Chevron({ expanded }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-ms-muted transition-transform ${expanded ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Accordion({ items, defaultOpen = 0, onActiveChange }) {
  const initialId = items[defaultOpen]?.id ?? items[0]?.id
  const [openId, setOpenId] = useState(initialId)

  const handleToggle = (itemId, isOpen) => {
    const next = isOpen ? null : itemId
    setOpenId(next)
    if (!isOpen) onActiveChange?.(itemId)
  }

  return (
    <div className="border-t border-ms-border">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id} className="accordion-item">
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => handleToggle(item.id, isOpen)}
            >
              <span>{item.title}</span>
              <Chevron expanded={isOpen} />
            </button>
            <div
              className="accordion-panel"
              style={{ maxHeight: isOpen ? '320px' : '0' }}
              aria-hidden={!isOpen}
            >
              <div className="accordion-content">{item.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
