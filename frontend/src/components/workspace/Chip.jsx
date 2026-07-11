/**
 * Chip — small pill for tags such as days, room types, or subject codes.
 * Presentational only.
 */
export default function Chip({ children, tone = 'default' }) {
  const tones = {
    default: 'bg-white/[0.05] text-white/70 border-white/10',
    active: 'bg-signal/15 text-signal border-signal/30',
  }

  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-3 py-1 font-body text-xs font-medium',
        tones[tone] ?? tones.default,
      ].join(' ')}
    >
      {children}
    </span>
  )
}
