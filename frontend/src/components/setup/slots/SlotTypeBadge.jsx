import { BookOpen, Coffee, UtensilsCrossed, HelpCircle } from 'lucide-react'

/**
 * SlotTypeBadge — compact icon + label badge for a lecture-slot's type.
 * Presentation only: no local state, no ProjectContext.
 *
 * @param {'lecture'|'break'} type
 * @param {'short'|'lunch'} [breakType] - required when type is "break"
 */
const BADGES = {
  lecture: {
    label: 'Lecture',
    Icon: BookOpen,
    classes: 'border-signal/30 bg-signal/10 text-signal',
  },
  'break-short': {
    label: 'Short Break',
    Icon: Coffee,
    classes: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  },
  'break-lunch': {
    label: 'Lunch Break',
    Icon: UtensilsCrossed,
    classes: 'border-orange-400/30 bg-orange-400/10 text-orange-300',
  },
}

const FALLBACK_BADGE = {
  label: 'Unknown',
  Icon: HelpCircle,
  classes: 'border-white/15 bg-white/[0.04] text-white/50',
}

export default function SlotTypeBadge({ type, breakType }) {
  const key = type === 'lecture' ? 'lecture' : `break-${breakType}`
  const { label, Icon, classes } = BADGES[key] ?? FALLBACK_BADGE

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
        'font-body text-xs font-medium backdrop-blur-sm',
        classes,
      ].join(' ')}
    >
      <Icon size={12} strokeWidth={2} />
      {label}
    </span>
  )
}
