import SectionPanel from '../SectionPanel.jsx'
import Chip from '../Chip.jsx'

const DAYS = [
  { label: 'Monday', active: true },
  { label: 'Tuesday', active: true },
  { label: 'Wednesday', active: true },
  { label: 'Thursday', active: true },
  { label: 'Friday', active: true },
  { label: 'Saturday', active: false },
  { label: 'Sunday', active: false },
]

/**
 * WorkingDaysSection — static display of which days are included in
 * scheduling. Toggle behavior is intentionally not wired up.
 */
export default function WorkingDaysSection() {
  return (
    <SectionPanel
      eyebrow="Working Days"
      title="Days included in scheduling"
      description="Lectures are only ever placed on the days marked active."
    >
      <div className="flex flex-wrap gap-2.5">
        {DAYS.map((day) => (
          <Chip key={day.label} tone={day.active ? 'active' : 'default'}>
            {day.label}
          </Chip>
        ))}
      </div>
    </SectionPanel>
  )
}
