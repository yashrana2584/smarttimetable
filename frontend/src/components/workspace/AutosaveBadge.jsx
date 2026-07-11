import { Check, Loader2, CloudOff } from 'lucide-react'

const STATUS_CONFIG = {
  saved: {
    Icon: Check,
    text: 'All changes saved',
    dot: 'bg-emerald-400',
    textColor: 'text-white/70',
  },
  saving: {
    Icon: Loader2,
    text: 'Saving…',
    dot: 'bg-signal',
    textColor: 'text-white/70',
  },
  error: {
    Icon: CloudOff,
    text: 'Could not save',
    dot: 'bg-rose-400',
    textColor: 'text-rose-300',
  },
}

/**
 * AutosaveBadge — presentational status pill.
 * `status` is supplied by a parent; this component renders only.
 *
 * @param {'saved'|'saving'|'error'} status
 */
export default function AutosaveBadge({ status = 'saved', className = '' }) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.saved
  const { Icon, text, dot, textColor } = config

  return (
    <div
      className={[
        'inline-flex items-center gap-2 rounded-full border border-glassBorder bg-glass px-3.5 py-1.5 backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${dot} ${
            status === 'saving' ? 'animate-pulse-soft' : ''
          }`}
        />
      </span>
      <Icon
        size={13}
        className={status === 'saving' ? 'animate-spin text-signal' : textColor}
      />
      <span className={`font-body text-xs font-medium ${textColor}`}>
        {text}
      </span>
    </div>
  )
}
