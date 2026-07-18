import { Plus, Trash2, Copy, Users } from "lucide-react";
import { useProject } from "../../../context/ProjectContext";

const DivisionsStep = () => {
  const {
    project,
    addDivision,
    updateDivision,
    deleteDivision,
  } = useProject();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Division Management
          </h2>

          <p className="mt-1 text-slate-400">
            Configure every division before generating the timetable.
          </p>
        </div>

        <button
          onClick={addDivision}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 hover:bg-cyan-400"
        >
          <Plus size={18} />
          Add Division
        </button>
      </div>

      {project.divisions.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-700 py-16 text-center">
          <Users
            className="mx-auto text-slate-500"
            size={48}
          />

          <h3 className="mt-4 text-xl font-semibold text-white">
            No divisions created
          </h3>

          <p className="mt-2 text-slate-400">
            Start by creating your first division.
          </p>

          <button
            onClick={addDivision}
            className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900"
          >
            Create First Division
          </button>
        </div>
      )}

      {project.divisions.map((division) => (
        <div
          key={division.id}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
        >
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="h-5 w-5 rounded-full border"
                style={{
                  background: division.sectionColor,
                }}
              />

              <h3 className="text-lg font-semibold text-white">
                {division.name}
              </h3>
            </div>

            <div className="flex gap-2">
              <button
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800"
              >
                <Copy size={18} />
              </button>

              <button
                onClick={() =>
                  deleteDivision(division.id)
                }
                className="rounded-lg p-2 text-red-400 hover:bg-red-500/10"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Division Name
              </label>

              <input
                value={division.name}
                onChange={(e) =>
                  updateDivision(division.id, {
                    name: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Short Name
              </label>

              <input
                value={division.shortName}
                onChange={(e) =>
                  updateDivision(division.id, {
                    shortName: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Semester
              </label>

              <input
                value={division.semester}
                onChange={(e) =>
                  updateDivision(division.id, {
                    semester: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Student Strength
              </label>

              <input
                type="number"
                min="1"
                value={division.strength}
                onChange={(e) =>
                  updateDivision(division.id, {
                    strength: Number(e.target.value),
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Shift
              </label>

              <select
                value={division.shift}
                onChange={(e) =>
                  updateDivision(division.id, {
                    shift: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              >
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Preferred Room
              </label>

              <input
                value={division.roomPreference}
                onChange={(e) =>
                  updateDivision(division.id, {
                    roomPreference: e.target.value,
                  })
                }
                placeholder="Optional"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Division Color
              </label>

              <input
                type="color"
                value={division.sectionColor}
                onChange={(e) =>
                  updateDivision(division.id, {
                    sectionColor: e.target.value,
                  })
                }
                className="h-12 w-full rounded-xl border border-slate-700 bg-slate-800"
              />
            </div>

            <div className="col-span-2">
              <label className="mb-2 block text-sm text-slate-300">
                Notes
              </label>

              <textarea
                rows={3}
                value={division.notes}
                onChange={(e) =>
                  updateDivision(division.id, {
                    notes: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default DivisionsStep;