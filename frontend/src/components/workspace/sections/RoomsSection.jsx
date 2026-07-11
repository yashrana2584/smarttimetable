import { DoorOpen } from 'lucide-react'
import SectionPanel from '../SectionPanel.jsx'
import GlassCard from '../GlassCard.jsx'
import Chip from '../Chip.jsx'

const ROOMS = [
  { name: 'Room 101', type: 'Lecture Hall', capacity: 120 },
  { name: 'Room 204', type: 'Seminar Room', capacity: 40 },
  { name: 'Lab A', type: 'Computer Lab', capacity: 30 },
  { name: 'Lab B', type: 'Physics Lab', capacity: 25 },
]

/**
 * RoomsSection — static grid of room cards. Presentational only.
 */
export default function RoomsSection() {
  return (
    <SectionPanel
      eyebrow="Rooms"
      title="Available spaces"
      description="Capacity and type are used to match rooms to sections."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ROOMS.map((room) => (
          <GlassCard key={room.name} hoverable padding="p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal/10 text-signal">
              <DoorOpen size={18} />
            </span>
            <p className="mt-3 font-display text-sm font-semibold text-white">
              {room.name}
            </p>
            <p className="mt-0.5 font-body text-xs text-white/45">
              Capacity: {room.capacity}
            </p>
            <div className="mt-3">
              <Chip>{room.type}</Chip>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionPanel>
  )
}
