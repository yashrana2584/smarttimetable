import { Clock } from 'lucide-react'
import SectionPanel from '../SectionPanel.jsx'
import GlassCard from '../GlassCard.jsx'

const SLOTS = [
  '08:00 – 08:50',
  '09:00 – 09:50',
  '10:00 – 10:50',
  '11:10 – 12:00',
  '12:10 – 13:00',
  '14:00 – 14:50',
  '15:00 – 15:50',
]

/**
 * LectureSlotsSection — static list of time blocks. Purely presentational.
 */
export default function LectureSlotsSection() {
  return (
    <SectionPanel
      eyebrow="Lecture Slots"
      title="Time blocks per working day"
      description="These slots repeat across every active working day."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SLOTS.map((slot) => (
          <GlassCard
            key={slot}
            hoverable
            padding="p-4"
            className="flex items-center gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
              <Clock size={16} />
            </span>
            <span className="font-body text-sm font-medium text-white/80">
              {slot}
            </span>
          </GlassCard>
        ))}
      </div>
    </SectionPanel>
  )
}
