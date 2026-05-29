export default function Blobs({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="absolute -right-[10%] -top-[20%] h-[70%] w-[55%] opacity-90 blur-2xl"
        viewBox="0 0 400 400"
        fill="none"
      >
        <ellipse cx="200" cy="200" rx="180" ry="160" fill="url(#blobAcerola)" />
        <defs>
          <radialGradient id="blobAcerola" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fce7e9" />
            <stop offset="100%" stopColor="#faf9f8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        className="absolute -left-[15%] top-[30%] h-[50%] w-[45%] opacity-80 blur-2xl"
        viewBox="0 0 400 400"
        fill="none"
      >
        <ellipse cx="200" cy="200" rx="160" ry="140" fill="url(#blobRose)" />
        <defs>
          <radialGradient id="blobRose" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ffd9de" />
            <stop offset="100%" stopColor="#faf9f8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        className="absolute bottom-0 left-[20%] h-[40%] w-[40%] opacity-70 blur-xl"
        viewBox="0 0 300 300"
        fill="none"
      >
        <ellipse cx="150" cy="150" rx="130" ry="120" fill="url(#blobNeutral)" />
        <defs>
          <radialGradient id="blobNeutral" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#f5e6e7" />
            <stop offset="100%" stopColor="#faf9f8" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
