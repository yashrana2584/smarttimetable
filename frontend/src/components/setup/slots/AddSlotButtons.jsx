import { Plus, Coffee, UtensilsCrossed } from 'lucide-react'
import { useProject } from "../../../context/ProjectContext";

/**
 * AddSlotButtons — action row for the Lecture Slots step.
 *
 * Renders only the three add-slot triggers (no slot cards, no time
 * inputs — those are owned by whatever renders alongside this
 * component). Click handlers call straight through to ProjectContext;
 * this component holds no local state or validation of its own.
 *
 * Assumes `useProject()` is exported from `src/context/ProjectContext`
 * and exposes `addLectureSlot`, `addShortBreak`, and `addLunchBreak`.
 * Update the import path above if your context lives elsewhere.
 */
export default function AddSlotButtons() {
  const { addLectureSlot, addShortBreak, addLunchBreak } = useProject()

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button
        type="button"
        onClick={addLectureSlot}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-signalDim to-signal px-5 py-2.5 font-display text-sm font-semibold text-abyss shadow-lg shadow-signal/20 transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 active:scale-[0.98] sm:w-auto"
      >
        <Plus size={16} strokeWidth={2.4} />
        Add Lecture Slot
      </button>

      <button
        type="button"
        onClick={addShortBreak}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-glassBorder bg-white/[0.03] px-5 py-2.5 font-display text-sm font-medium text-white/75 backdrop-blur-xl transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 active:scale-[0.98] sm:w-auto"
      >
        <Coffee size={16} strokeWidth={1.8} />
        Add Short Break
      </button>

      <button
        type="button"
        onClick={addLunchBreak}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-glassBorder bg-white/[0.03] px-5 py-2.5 font-display text-sm font-medium text-white/75 backdrop-blur-xl transition-all duration-200 hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal/60 active:scale-[0.98] sm:w-auto"
      >
        <UtensilsCrossed size={16} strokeWidth={1.8} />
        Add Lunch Break
      </button>
    </div>
  )
}
