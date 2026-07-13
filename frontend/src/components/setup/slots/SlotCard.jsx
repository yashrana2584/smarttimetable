import { Trash2 } from 'lucide-react'
import TimePicker from './TimePicker.jsx'
import SlotTypeBadge from './SlotTypeBadge.jsx'

/**
 * SlotCard — displays a single lecture/break slot: its type badge, start
 * and end time pickers, and a delete action.
 *
 * Presentation only: no local state, no ProjectContext. All mutation is
 * delegated to the parent via `onUpdate` / `onDelete`.
 *
 * @param {{ id: string, type: 'lecture'|'break', breakType?: 'short'|'lunch', startTime: string, endTime: string }} slot
 * @param {(patch: { startTime?: string, endTime?: string }) => void} onUpdate
 * @param {() => void} onDelete
 */
export default function SlotCard({ slot, onUpdate, onDelete }) {
  return (
    <div className="rounded-3xl border border-glassBorder bg-glass p-5 backdrop-blur-xl transition-colors duration-200 hover:border-white/20">
      <div className="flex items-center justify-between">
        <SlotTypeBadge type={slot.type} breakType={slot.breakType} />

        <button
          type="button"
          onClick={() => onDelete()}
          aria-label="Delete slot"
          className="rounded-lg p-1.5 text-white/35 transition-colors duration-200 hover:bg-rose-400/10 hover:text-rose-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/50"
        >
          <Trash2 size={16} strokeWidth={1.8} />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <TimePicker
          label="Start Time"
          value={slot.startTime}
          onChange={(e) => onUpdate({ startTime: e.target.value })}
        />
        <TimePicker
          label="End Time"
          value={slot.endTime}
          onChange={(e) => onUpdate({ endTime: e.target.value })}
        />
      </div>
    </div>
  )
}
