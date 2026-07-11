import { Wand2, CheckCircle2, Circle } from 'lucide-react'
import SectionPanel from '../SectionPanel.jsx'
import GlassCard from '../GlassCard.jsx'

const READINESS = [
  { label: 'University details complete', done: true },
  { label: 'Working days configured', done: true },
  { label: 'Lecture slots defined', done: true },
  { label: 'Subjects and faculty linked', done: true },
  { label: 'Rooms assigned capacity', done: false },
]

/**
 * GenerateTimetableSection — final step CTA. The button is presentational
 * only; wiring it to the actual generation process is left to the parent
 * application.
 */
export default function GenerateTimetableSection() {
  return (
    <SectionPanel
      eyebrow="Generate Timetable"
      title="Run the AI scheduling engine"
      description="Review readiness below, then generate this term's timetable."
    >
      <GlassCard padding="p-5">
        <h3 className="font-display text-sm font-semibold text-white">
          Readiness checklist
        </h3>
        <ul className="mt-3 space-y-2.5">
          {READINESS.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 font-body text-sm text-white/70"
            >
              {item.done ? (
                <CheckCircle2 size={16} className="text-signal" />
              ) : (
                <Circle size={16} className="text-white/25" />
              )}
              <span className={item.done ? '' : 'text-white/45'}>{item.label}</span>
            </li>
          ))}
        </ul>
      </GlassCard>

      <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-glassBorder bg-gradient-to-br from-signalDim/10 to-signal/5 p-8 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-signalDim to-signal text-abyss shadow-lg shadow-signal/20">
          <Wand2 size={22} />
        </span>
        <p className="font-display text-base font-semibold text-white">
          Ready to generate this term's timetable
        </p>
        <p className="max-w-sm font-body text-sm text-white/55">
          The AI engine will use your configuration to produce a
          conflict-free schedule for review.
        </p>
        <button
          type="button"
          className="mt-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-signalDim to-signal px-6 py-3 font-display text-sm font-semibold text-abyss shadow-lg shadow-signal/25 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Wand2 size={16} />
          Generate Timetable
        </button>
      </div>
    </SectionPanel>
  )
}
