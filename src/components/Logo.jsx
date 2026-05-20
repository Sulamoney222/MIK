export default function Logo({ className = '', showText = true, size = 'md' }) {
  const sizes = {
    sm: { ring: 'h-8 w-8', icon: 'h-4 w-4', text: 'text-sm' },
    md: { ring: 'h-10 w-10', icon: 'h-5 w-5', text: 'text-lg' },
    lg: { ring: 'h-14 w-14', icon: 'h-7 w-7', text: 'text-2xl' },
  }
  const s = sizes[size] || sizes.md

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${s.ring} flex shrink-0 items-center justify-center rounded-full border-2 border-mik-red bg-white`}
      >
        <svg
          className={`${s.icon} text-mik-red`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 2v10" />
          <circle cx="12" cy="2" r="1.5" fill="currentColor" stroke="none" />
          <path d="M8 14l4 4 4-4" />
        </svg>
      </div>
      {showText && (
        <div className="leading-tight">
          <span className={`font-display font-bold text-mik-red ${s.text}`}>
            MIK InforTech
          </span>
          {size !== 'sm' && (
            <p className="hidden text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:block">
              ICT Training & Consultancy
            </p>
          )}
        </div>
      )}
    </div>
  )
}
