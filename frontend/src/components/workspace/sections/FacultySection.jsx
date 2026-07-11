import SectionPanel from '../SectionPanel.jsx'
import GlassCard from '../GlassCard.jsx'
import Chip from '../Chip.jsx'

const FACULTY = [
  { name: 'Dr. Elena Ruiz', dept: 'Computer Science', load: '12 hrs/wk' },
  { name: 'Prof. Marcus Lee', dept: 'Mathematics', load: '10 hrs/wk' },
  { name: 'Dr. Ayesha Khan', dept: 'Physics', load: '14 hrs/wk' },
  { name: 'Prof. Daniel Osei', dept: 'Computer Science', load: '9 hrs/wk' },
]

/**
 * FacultySection — static grid of instructor cards. Presentational only.
 */
export default function FacultySection() {
  return (
    <SectionPanel
      eyebrow="Faculty"
      title="Instructors available this term"
      description="Teaching load is shown for reference during assignment."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {FACULTY.map((person) => (
          <GlassCard key={person.name} hoverable padding="p-4" className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-steel to-deep font-display text-sm font-semibold text-white">
              {person.name
                .split(' ')
                .map((w) => w[0])
                .slice(-2)
                .join('')}
            </div>
            <div className="min-w-0">
              <p className="truncate font-body text-sm font-medium text-white/85">
                {person.name}
              </p>
              <div className="mt-1 flex items-center gap-2">
                <Chip>{person.dept}</Chip>
                <span className="font-body text-xs text-white/40">{person.load}</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionPanel>
  )
}
