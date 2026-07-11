/**
 * FieldPlaceholder — visually represents a labeled input/select without
 * wiring any state, validation, or submission logic. Meant as a layout
 * building block for section content.
 */
export default function FieldPlaceholder({ label, value = '', hint }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-body text-xs font-medium text-white/55">
        {label}
      </span>
      <div className="rounded-xl border border-glassBorder bg-white/[0.03] px-3.5 py-2.5 font-body text-sm text-white/80 transition-colors focus-within:border-signal/50">
        {value || <span className="text-white/30">—</span>}
      </div>
      {hint && <span className="mt-1 block font-body text-xs text-white/35">{hint}</span>}
    </label>
  )
}
