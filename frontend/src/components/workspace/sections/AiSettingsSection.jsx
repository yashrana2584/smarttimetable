import SectionPanel from '../SectionPanel.jsx'
import GlassCard from '../GlassCard.jsx'

const PREFERENCES = [
  { label: 'Conflict avoidance', value: 90 },
  { label: 'Faculty workload balance', value: 75 },
  { label: 'Room utilization', value: 60 },
  { label: 'Student gap minimization', value: 45 },
]

/**
 * AiSettingsSection — displays optimization preference weights as static
 * bars. Values are illustrative props/constants; the AI engine and its
 * scoring logic are intentionally out of scope for this component.
 */
export default function AiSettingsSection() {
  return (
    <SectionPanel
      eyebrow="AI Settings"
      title="Optimization preferences"
      description="Relative weight given to each objective when generating a timetable."
    >
      <div className="space-y-5">
        {PREFERENCES.map((pref) => (
          <div key={pref.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-body text-sm text-white/70">{pref.label}</span>
              <span className="font-display text-xs font-semibold text-signal">
                {pref.value}%
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-signalDim to-signal"
                style={{ width: `${pref.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <GlassCard padding="p-4" className="mt-6">
        <p className="font-body text-xs text-white/45">
          These weights guide the AI engine but do not guarantee a specific
          outcome. Adjust and regenerate to compare results.
        </p>
      </GlassCard>
    </SectionPanel>
  )
}
