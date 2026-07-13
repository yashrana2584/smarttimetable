import { CalendarDays, Check, Info } from "lucide-react";
import { useProject } from "../../../context/ProjectContext";

const DAYS = [
  { id: "monday", label: "Monday" },
  { id: "tuesday", label: "Tuesday" },
  { id: "wednesday", label: "Wednesday" },
  { id: "thursday", label: "Thursday" },
  { id: "friday", label: "Friday" },
  { id: "saturday", label: "Saturday" },
  { id: "sunday", label: "Sunday" },
];

const HOLIDAY_OPTIONS = [
  { id: "sunday", label: "Sunday" },
  { id: "saturday", label: "Saturday" },
];

export default function WorkingDaysStep() {
  const { project, updateWorkingSchedule } = useProject();

  const selectedDays = project.workingSchedule.activeDays;

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      updateWorkingSchedule({
        activeDays: selectedDays.filter((d) => d !== day),
      });
    } else {
      updateWorkingSchedule({
        activeDays: [...selectedDays, day],
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Working Days */}
      <section className="rounded-3xl border border-glassBorder bg-glass p-6 backdrop-blur-xl sm:p-8">
        <h3 className="font-display text-sm font-semibold text-white">
          Select Working Days
        </h3>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {DAYS.map((day) => (
            <label
              key={day.id}
              className="group relative block cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedDays.includes(day.label)}
                onChange={() => toggleDay(day.label)}
                className="sr-only"
              />

              <div
                className={[
                  "flex items-center gap-3 rounded-2xl border border-glassBorder bg-white/[0.03] px-4 py-3.5",
                  "transition-all duration-200",
                  "group-has-[:checked]:border-signal/50 group-has-[:checked]:bg-signal/10",
                ].join(" ")}
              >
                <span
                  className={[
                    "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
                    "bg-white/[0.05] text-white/40",
                    "group-has-[:checked]:bg-signal group-has-[:checked]:text-abyss",
                  ].join(" ")}
                >
                  <CalendarDays
                    size={15}
                    className="group-has-[:checked]:hidden"
                  />

                  <Check
                    size={15}
                    className="hidden group-has-[:checked]:block"
                  />
                </span>

                <span className="text-sm text-white">
                  {day.label}
                </span>
              </div>
            </label>
          ))}
        </div>

        <p className="mt-5 flex items-start gap-2 text-xs text-white/45">
          <Info size={14} className="mt-0.5 shrink-0" />
          AI will schedule lectures only on the selected working days.
        </p>
      </section>

      {/* Holiday */}
      <section className="rounded-3xl border border-glassBorder bg-glass p-6 backdrop-blur-xl sm:p-8">
        <h3 className="font-display text-sm font-semibold text-white">
          Weekly Holiday
        </h3>

        <p className="mt-1 text-xs text-white/45">
          Select the fixed weekly holiday.
        </p>

        <div className="mt-4 flex gap-3 flex-wrap">
          {HOLIDAY_OPTIONS.map((option) => (
            <label
              key={option.id}
              className="group cursor-pointer"
            >
              <input
                type="radio"
                name="holiday"
                checked={
                  project.workingSchedule.fixedHoliday === option.label
                }
                onChange={() =>
                  updateWorkingSchedule({
                    fixedHoliday: option.label,
                  })
                }
                className="sr-only"
              />

              <div className="rounded-xl border border-glassBorder bg-white/[0.03] px-4 py-3 transition-all group-has-[:checked]:border-signal group-has-[:checked]:bg-signal/10">
                {option.label}
              </div>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}