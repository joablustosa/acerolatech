const mockups = {
  chat: (
    <div className="w-full max-w-sm rounded-lg border border-ms-border bg-white p-4 shadow-ms-card">
      <div className="mb-3 flex items-center gap-2 border-b border-ms-border pb-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ms-blue text-xs font-bold text-white">
          IA
        </span>
        <div>
          <p className="text-sm font-semibold text-ms-ink">Agente Acerola</p>
          <p className="text-xs text-ms-muted">Modo assistente</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="rounded-lg bg-ms-tint px-3 py-2 text-xs text-ms-subtle">
          Como posso automatizar o atendimento ao cliente?
        </div>
        <div className="rounded-lg bg-acerola-soft px-3 py-2 text-xs text-ms-ink">
          Posso integrar ao seu CRM e responder dúvidas frequentes 24h, com escalonamento humano.
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <span className="h-8 flex-1 rounded-full border border-ms-border bg-ms-bg" />
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ms-cta text-white text-xs">→</span>
      </div>
    </div>
  ),
  dashboard: (
    <div className="w-full max-w-sm rounded-lg border border-ms-border bg-white shadow-ms-card overflow-hidden">
      <div className="flex gap-1 border-b border-ms-border bg-ms-tint px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-yellow-300" />
        <span className="h-2 w-2 rounded-full bg-green-300" />
      </div>
      <div className="p-4">
        <div className="mb-3 h-3 w-24 rounded bg-ms-border" />
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 rounded bg-gradient-to-br from-[#fce7e9] to-[#ffd9de]" />
          ))}
        </div>
        <div className="space-y-2">
          {[80, 60, 90, 45].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2 flex-1 rounded bg-ms-tint" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  phone: (
    <div className="relative mx-auto w-[140px]">
      <div className="rounded-[1.5rem] border-4 border-ms-ink bg-white p-2 shadow-ms-card">
        <div className="mb-2 mx-auto h-1 w-8 rounded-full bg-ms-border" />
        <div className="rounded-xl bg-gradient-to-b from-[#fce7e9] to-[#ffd9de] p-3 min-h-[200px]">
          <div className="mb-2 h-2 w-16 rounded bg-white/60" />
          <div className="space-y-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 rounded-lg bg-white/80" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  nodes: (
    <div className="flex w-full max-w-xs items-center justify-center gap-3">
      <div className="rounded-lg border border-ms-border bg-white px-3 py-2 text-xs font-semibold shadow-sm">ERP</div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="h-px w-8 bg-ms-blue" />
        <span className="text-[10px] text-ms-blue font-medium">API</span>
        <span className="h-px w-8 bg-ms-blue" />
      </div>
      <div className="rounded-lg border-2 border-ms-blue bg-acerola-soft px-3 py-2 text-xs font-semibold">Hub</div>
      <div className="flex flex-col items-center gap-0.5">
        <span className="h-px w-8 bg-ms-blue" />
        <span className="text-[10px] text-ms-blue font-medium">sync</span>
        <span className="h-px w-8 bg-ms-blue" />
      </div>
      <div className="rounded-lg border border-ms-border bg-white px-3 py-2 text-xs font-semibold shadow-sm">CRM</div>
    </div>
  ),
  code: (
    <div className="w-full max-w-sm rounded-lg border border-ms-border bg-[#1e1e1e] p-4 font-mono text-xs text-gray-300 shadow-ms-card">
      <div className="text-gray-500 mb-2">// modernização legado</div>
      <div><span className="text-[#569cd6]">async function</span> migrate() {'{'}</div>
      <div className="pl-4 text-[#ce9178]">await validateRules();</div>
      <div className="pl-4 text-[#ce9178]">await deployCloud();</div>
      <div>{'}'}</div>
      <div className="mt-2 flex gap-1">
        <span className="rounded bg-green-900/50 px-1.5 text-green-400">✓ build</span>
        <span className="rounded bg-blue-900/50 px-1.5 text-blue-400">deploy</span>
      </div>
    </div>
  ),
}

export default function Mockup({ type = 'dashboard', className = '' }) {
  return (
    <div className={`mockup-frame ${className}`}>
      {mockups[type] || mockups.dashboard}
    </div>
  )
}
