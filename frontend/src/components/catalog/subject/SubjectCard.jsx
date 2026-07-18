import { Trash2, BookOpen } from "lucide-react";
import { useProject } from "../../../context/ProjectContext";

const ROOM_TYPES = [
  "Any Classroom",
  "Computer Lab",
  "Mechanical Lab",
  "Electronics Lab",
  "Civil Lab",
  "Seminar Hall",
];

const SUBJECT_TYPES = [
  "Theory",
  "Practical",
  "Theory + Practical",
  "Laboratory",
  "Elective",
];

const SubjectCard = ({ subject }) => {
  const {
  project,
  updateSubject,
  deleteSubject,
} = useProject();

const duplicateCode =
  subject.code.trim() !== "" &&
  project.subjects.filter(
    (s) =>
      s.code.trim().toUpperCase() ===
        subject.code.trim().toUpperCase() &&
      s.id !== subject.id
  ).length > 0;

  const validationErrors = [];

if (!subject.code.trim())
  validationErrors.push("Subject code is required");

if (!subject.name.trim())
  validationErrors.push("Subject name is required");

if (duplicateCode)
  validationErrors.push("Duplicate subject code");

if (subject.divisionIds.length === 0)
  validationErrors.push("No division assigned");

if (subject.lecturesPerWeek === 0 &&
    subject.practicalsPerWeek === 0)
  validationErrors.push("No weekly lectures configured");

const isAiReady = validationErrors.length === 0;

  const update = (field, value) => {
    updateSubject(subject.id, {
      [field]: value,
    });
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <div className="mb-6 flex items-start justify-between">

       <div>

  <div className="flex items-center gap-3">

    <BookOpen
      size={22}
      className="text-cyan-400"
    />

    <h2 className="text-lg font-semibold text-white">
      {subject.code ||
        subject.shortName ||
        subject.name ||
        "New Subject"}
    </h2>

  </div>

  <div className="mt-3">

  {isAiReady ? (

    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
      ✅ AI Ready
    </span>

  ) : (

    <div className="flex flex-wrap gap-2">

      {validationErrors.map((error) => (

        <span
          key={error}
          className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400"
        >
          ⚠ {error}
        </span>

      ))}

    </div>

  )}

</div>

</div>

        <button
          onClick={() => deleteSubject(subject.id)}
          className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
        >
          <Trash2 size={18} />
        </button>

      </div>

      <div className="grid grid-cols-2 gap-5">

        {/* Subject Code */}

        <div>
  <label className="mb-2 block text-sm text-slate-300">
    Subject Code
  </label>

  <input
    value={subject.code}
    onChange={(e) =>
      update("code", e.target.value.toUpperCase())
    }
    placeholder="DBMS401"
    className={`w-full rounded-xl border ${
      duplicateCode
        ? "border-red-500"
        : "border-slate-700"
    } bg-slate-800 px-4 py-3 text-white`}
  />

  {duplicateCode && (
    <p className="mt-2 text-sm text-red-400">
      Subject code already exists.
    </p>
  )}

</div>
        

        {/* Subject Name */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Subject Name
          </label>

          <input
            value={subject.name}
            onChange={(e) =>
              update("name", e.target.value)
            }
            placeholder="Database Management System"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />
        </div>

        {/* Short Name */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Short Name
          </label>

          <input
            value={subject.shortName}
            onChange={(e) =>
              update("shortName", e.target.value.toUpperCase())
            }
            placeholder="DBMS"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />
        </div>

        {/* Subject Type */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Subject Type
          </label>

          <select
            value={subject.type}
            onChange={(e) =>
              update("type", e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          >
            {SUBJECT_TYPES.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Lectures */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Lectures / Week
          </label>

          <input
            type="number"
            min="0"
            value={subject.lecturesPerWeek}
            onChange={(e) =>
              update(
                "lecturesPerWeek",
                Number(e.target.value)
              )
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />
        </div>

        {/* Practicals */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Practicals / Week
          </label>

          <input
            type="number"
            min="0"
            value={subject.practicalsPerWeek}
            onChange={(e) =>
              update(
                "practicalsPerWeek",
                Number(e.target.value)
              )
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />
        </div>

        {/* Credits */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Credits
          </label>

          <input
            type="number"
            min="1"
            value={subject.credits}
            onChange={(e) =>
              update(
                "credits",
                Number(e.target.value)
              )
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />
        </div>

        {/* Room */}

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Preferred Room
          </label>

          <select
            value={subject.preferredRoomType}
            onChange={(e) =>
              update(
                "preferredRoomType",
                e.target.value
              )
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          >
            {ROOM_TYPES.map((room) => (
              <option
                key={room}
                value={room}
              >
                {room}
              </option>
            ))}
          </select>
        </div>

      </div>
            {/* Assigned Divisions */}

<div className="mt-6">

  <label className="mb-3 block text-sm font-medium text-slate-300">
    Assigned Divisions
  </label>

  <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

    {project.divisions.map((division) => {

      const checked = subject.divisionIds.includes(division.id);

      return (
        <label
          key={division.id}
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 transition hover:border-cyan-500"
        >

          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {

              if (e.target.checked) {

                update("divisionIds", [
                  ...subject.divisionIds,
                  division.id,
                ]);

              } else {

                update(
                  "divisionIds",
                  subject.divisionIds.filter(
                    (id) => id !== division.id
                  )
                );

              }

            }}
          />

          <span className="text-white">
            {division.name}
          </span>

        </label>
      );

    })}

  </div>

</div>
    
    {/* Assigned Faculty */}

<div className="mt-6">

  <label className="mb-3 block text-sm font-medium text-slate-300">
    Assigned Faculty
  </label>

  {project.faculty.length === 0 ? (

    <div className="rounded-xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
      No faculty added yet.
      <br />
      You will assign teachers after creating the Faculty Catalog.
    </div>

  ) : (

    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">

      {project.faculty.map((faculty) => {

        const checked =
          subject.facultyIds.includes(faculty.id);

        return (

          <label
            key={faculty.id}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 hover:border-cyan-500"
          >

            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => {

                if (e.target.checked) {

                  update("facultyIds", [
                    ...subject.facultyIds,
                    faculty.id,
                  ]);

                } else {

                  update(
                    "facultyIds",
                    subject.facultyIds.filter(
                      (id) => id !== faculty.id
                    )
                  );

                }

              }}
            />

            <span className="text-white">
              {faculty.name}
            </span>

          </label>

        );

      })}

    </div>

  )}

</div>
      <div className="mt-5">

        <label className="mb-2 block text-sm text-slate-300">
          Notes
        </label>

        <textarea
          rows={3}
          value={subject.notes}
          onChange={(e) =>
            update("notes", e.target.value)
          }
          placeholder="Optional notes..."
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
        />

      </div>

      <div className="mt-5 flex items-center gap-3">

        <input
          type="checkbox"
          checked={subject.requiresLab}
          onChange={(e) =>
            update("requiresLab", e.target.checked)
          }
        />

        <label className="text-sm text-slate-300">
          Requires Laboratory
        </label>

      </div>

    </div>
  );
};

export default SubjectCard;