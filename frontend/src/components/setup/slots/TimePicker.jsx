import { useId } from 'react'
import { Clock } from 'lucide-react'

/**
 * TimePicker — labeled, styled `<input type="time">`.
 *
 * Purely presentational and fully controlled by the parent: no local
 * state, no ProjectContext, no validation. `useId` is used only to link
 * the label to the input for accessibility — it holds no data.
 *
 * @param {string} label
 * @param {string} value       - "HH:MM" (native time input format)
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} onChange
 * @param {boolean} [disabled=false]
 * @param {string} [min]
 * @param {string} [max]
 */
export default function TimePicker({
  label,
  value,
  onChange,
  disabled = false,
  min,
  max,
}) {
  const inputId = useId()

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block font-body text-xs font-medium text-white/55"
        >
          {label}
        </label>
      )}

      <div
        className={[
          'flex items-center gap-2.5 rounded-xl border border-glassBorder bg-white/[0.03] px-3.5 py-2.5',
          'transition-colors duration-200',
          disabled
            ? 'cursor-not-allowed opacity-50'
            : 'focus-within:border-signal/50 hover:border-white/20',
        ].join(' ')}
      >
        <Clock size={15} strokeWidth={1.8} className="shrink-0 text-white/35" />
        <input
          id={inputId}
          type="time"
          value={value}
          onChange={onChange}
          disabled={disabled}
          min={min}
          max={max}
          className={[
            'w-full bg-transparent font-body text-sm text-white/85 outline-none [color-scheme:dark]',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer',
            '[&::-webkit-calendar-picker-indicator]:cursor-pointer',
            '[&::-webkit-calendar-picker-indicator]:opacity-60',
            '[&::-webkit-calendar-picker-indicator]:transition-opacity',
            'hover:[&::-webkit-calendar-picker-indicator]:opacity-100',
          ].join(' ')}
        />
      </div>
    </div>
  )
}
