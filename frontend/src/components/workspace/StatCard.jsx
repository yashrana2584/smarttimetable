import GlassCard from './GlassCard.jsx'

/**
 * StatCard — small metric tile. Values are supplied by the parent;
 * no calculation happens here.
 */
export default function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <GlassCard hoverable padding="p-5" className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal ring-1 ring-white/10">
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <div>
        <p className="font-body text-xs font-medium text-white/50">{label}</p>
        <p className="mt-0.5 font-display text-2xl font-semibold text-white">
          {value}
        </p>
        {hint && <p className="mt-0.5 font-body text-xs text-white/40">{hint}</p>}
      </div>
    </GlassCard>
  )
}
