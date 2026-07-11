import { CheckCircle2, BookOpen, Users, DoorOpen, Clock } from 'lucide-react'
import SectionPanel from '../SectionPanel.jsx'
import StatCard from '../StatCard.jsx'
import GlassCard from '../GlassCard.jsx'
import Chip from '../Chip.jsx'

/**
 * OverviewSection — static summary view. All figures are illustrative
 * props/constants; no data fetching or computation happens here.
 */
export default function OverviewSection() {
  return (
    <SectionPanel
      eyebrow="Project Overview"
      title="Fall 2026 — Main Campus"
      description="A snapshot of this project's configuration and readiness."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={BookOpen} label="Subjects" value="42" hint="across 6 departments" />
        <StatCard icon={Users} label="Faculty" value="28" hint="assigned this term" />
        <StatCard icon={DoorOpen} label="Rooms" value="16" hint="lecture halls & labs" />
        <StatCard icon={Clock} label="Lecture Slots" value="35" hint="per week" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <GlassCard padding="p-5">
          <h3 className="font-display text-sm font-semibold text-white">
            Setup checklist
          </h3>
          <ul className="mt-3 space-y-2.5">
            {[
              'University details added',
              'Working days configured',
              'Lecture slots defined',
              'Subjects imported',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 font-body text-sm text-white/70">
                <CheckCircle2 size={16} className="text-signal" />
                {item}
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard padding="p-5">
          <h3 className="font-display text-sm font-semibold text-white">Tags</h3>
          <p className="mt-1 font-body text-xs text-white/45">
            Labels applied to this project for quick filtering.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip tone="active">Fall 2026</Chip>
            <Chip>Main Campus</Chip>
            <Chip>Undergraduate</Chip>
            <Chip>6 Departments</Chip>
          </div>
        </GlassCard>
      </div>
    </SectionPanel>
  )
}
