import { CalendarX2 } from 'lucide-react'
import { useProject } from '../../context/ProjectContext'
import AddSlotButtons from "../slots/AddSlotButtons";
import SlotCard from "../slots/SlotCard";

/**
 * LectureSlotsStep — setup-wizard step for building the daily schedule
 * of lecture and break slots.
 *
 * Pure composition: `AddSlotButtons` already wires its own add* actions
 * to ProjectContext, and `SlotCard` already renders the badge/time
 * pickers/delete button, so this component only reads
 * `project.lectureSlots` and forwards per-slot update/delete calls. No
 * local state, no UI duplicated from the components it composes.
 */
export default function LectureSlotsStep() {
  const { project, updateLectureSlot, deleteLectureSlot } = useProject()
  const slots = project?.lectureSlots ?? []

  return (
    <div className="space-y-8">
      {/* Step header */}

      <AddSlotButtons />

      {slots.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-glassBorder bg-glass/40 py-16 text-center">
          <CalendarX2 size={28} strokeWidth={1.5} className="mb-1 text-white/25" />
          <p className="font-body text-sm font-medium text-white/60">
            No lecture slots added yet.
          </p>
          <p className="max-w-xs font-body text-xs text-white/40">
            Click one of the buttons above to start building your daily
            schedule.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((slot) => (
            <SlotCard
              key={slot.id}
              slot={slot}
              onUpdate={(updates) => updateLectureSlot(slot.id, updates)}
              onDelete={() => deleteLectureSlot(slot.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
