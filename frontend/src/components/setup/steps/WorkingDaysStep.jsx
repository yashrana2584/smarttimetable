import { CalendarDays, Check, Info } from 'lucide-react'

/**
 * WorkingDaysStep — setup-wizard step for choosing an institution's
 * working days and default weekly holiday.
 *
 * Presentation only: selection visuals are driven entirely by native
 * `:checked` state read via CSS `:has()` (`group` + `group-has-[:checked]`),
 * seeded with `defaultChecked` for a sensible demo state. No `useState`,
 * handlers, or persistence live here — wire real selection state up from
 * the parent wizard.
 */

const DAYS = [
  { id: 'monday', label: 'Monday', defaultChecked: true },
  { id: 'tuesday', label: 'Tuesday', defaultChecked: true },
  { id: 'wednesday', label: 'Wednesday', defaultChecked: true },
  { id: 'thursday', label: 'Thursday', defaultChecked: true },
  { id: 'friday', label: 'Friday', defaultChecked: true },
  { id: 'saturday', label: 'Saturday', defaultChecked: false },
  { id: 'sunday', label: 'Sunday', defaultChecked: false },
]

const HOLIDAY_OPTIONS = [
  { id: 'sunday', label: 'Sunday', defaultChecked: true },
  { id: 'saturday', label: 'Saturday', defaultChecked: false },
  { id: 'custom', label: 'Custom', defaultChecked: false },
]

export default function WorkingDaysStep() {
  return (
    <div className="space-y-8">
      {/* Step header */}
    
      {/* Day selection */}
      <section className="rounded-3xl border border-glassBorder bg-glass p-6 backdrop-blur-xl sm:p-8">
        <h3 className="font-display text-sm font-semibold text-white">
          Select working days
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {DAYS.map((day) => (
            <label key={day.id} className="group relative block cursor-pointer">
              <input
                type="checkbox"
                name="working-day"
                defaultChecked={day.defaultChecked}
                className="sr-only"
              />
              <div
                className={[
                  'flex items-center gap-3 rounded-2xl border border-glassBorder bg-white/[0.03] px-4 py-3.5',
                  'transition-all duration-200',
                  'group-has-[:checked]:border-signal/50 group-has-[:checked]:bg-signal/10',
                  'group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-signal/60',
                  'group-hover:border-white/25 group-hover:bg-white/[0.06]',
                ].join(' ')}
              >
                <span
                  className={[
                    'relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl',
                    'bg-white/[0.05] text-white/40',
                    'transition-colors duration-200',
                    'group-has-[:checked]:bg-signal group-has-[:checked]:text-abyss',
                  ].join(' ')}
                >
                  <CalendarDays
                    size={15}
                    strokeWidth={1.8}
                    className="transition-opacity duration-150 group-has-[:checked]:opacity-0"
                  />
                  <Check
                    size={15}
                    strokeWidth={2.5}
                    className="absolute opacity-0 transition-opacity duration-150 group-has-[:checked]:opacity-100"
                  />
                </span>

                <span className="font-body text-sm font-medium text-white/75 transition-colors duration-200 group-has-[:checked]:text-white">
                  {day.label}
                </span>

                {/* Checked indicator */}
                <span className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-all duration-200 group-has-[:checked]:border-signal group-has-[:checked]:bg-signal">
                  <Check
                    size={12}
                    strokeWidth={3}
                    className="text-abyss opacity-0 transition-opacity duration-150 group-has-[:checked]:opacity-100"
                  />
                </span>
              </div>
            </label>
          ))}
        </div>

        {/* Helper text */}
        <p className="mt-5 flex items-start gap-2 font-body text-xs leading-relaxed text-white/45">
          <Info size={14} className="mt-0.5 shrink-0 text-white/30" />
          Choose the working days for your institution. The timetable
          generator will only schedule lectures on the selected days.
        </p>
      </section>

      {/* Default weekly holiday */}
      <section className="rounded-3xl border border-glassBorder bg-glass p-6 backdrop-blur-xl sm:p-8">
        <h3 className="font-display text-sm font-semibold text-white">
          Default Weekly Holiday
        </h3>
        <p className="mt-1 font-body text-xs text-white/45">
          Applied automatically unless overridden for a specific week.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {HOLIDAY_OPTIONS.map((option) => (
            <label key={option.id} className="group relative block cursor-pointer">
              <input
                type="radio"
                name="weekly-holiday"
                defaultChecked={option.defaultChecked}
                className="sr-only"
              />
              <div
                className={[
                  'flex items-center gap-2.5 rounded-xl border border-glassBorder bg-white/[0.03] px-4 py-2.5',
                  'transition-all duration-200',
                  'group-has-[:checked]:border-signal/50 group-has-[:checked]:bg-signal/10',
                  'group-has-[:focus-visible]:ring-2 group-has-[:focus-visible]:ring-signal/60',
                  'group-hover:border-white/25 group-hover:bg-white/[0.06]',
                ].join(' ')}
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/25 transition-colors duration-200 group-has-[:checked]:border-signal">
                  <span className="h-2 w-2 scale-0 rounded-full bg-signal transition-transform duration-150 group-has-[:checked]:scale-100" />
                </span>
                <span className="font-body text-sm font-medium text-white/75 transition-colors duration-200 group-has-[:checked]:text-white">
                  {option.label}
                </span>
              </div>
            </label>
          ))}
        </div>
      </section>
    </div>
  )
}
