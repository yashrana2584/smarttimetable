import { Trash2, UserRound } from "lucide-react";
import { useProject } from "../../../context/ProjectContext";

const FacultyCard = ({ faculty }) => {
  const {
    project,
    updateFaculty,
    deleteFaculty,
  } = useProject();

  const duplicateEmployeeId =
    faculty.employeeId.trim() !== "" &&
    project.faculty.filter(
      (f) =>
        f.employeeId.trim().toUpperCase() ===
          faculty.employeeId.trim().toUpperCase() &&
        f.id !== faculty.id
    ).length > 0;

  const validationErrors = [];

  if (!faculty.employeeId.trim())
    validationErrors.push("Employee ID is required");

  if (!faculty.name.trim())
    validationErrors.push("Faculty name is required");

  if (faculty.maxLecturesPerDay <= 0)
  validationErrors.push("Max lectures/day must be greater than 0");

if (faculty.maxLecturesPerWeek <= 0)
  validationErrors.push("Max lectures/week must be greater than 0");

if (faculty.subjectIds.length === 0)
  validationErrors.push("No subjects assigned");

  const isAiReady = validationErrors.length === 0;

  const update = (field, value) => {
    updateFaculty(faculty.id, {
      [field]: value,
    });
  };

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

      <div className="mb-6 flex items-start justify-between">

        <div>

          <div className="flex items-center gap-3">

            <UserRound
              size={22}
              className="text-cyan-400"
            />

            <h2 className="text-lg font-semibold text-white">
              {faculty.employeeId ||
                faculty.name ||
                "New Faculty"}
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
          onClick={() => deleteFaculty(faculty.id)}
          className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
        >
          <Trash2 size={18} />
        </button>

      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {/* Employee ID */}

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Employee ID
  </label>

  <input
    value={faculty.employeeId}
    onChange={(e) =>
      update("employeeId", e.target.value.toUpperCase())
    }
    placeholder="EMP001"
    className={`w-full rounded-xl border ${
      duplicateEmployeeId
        ? "border-red-500"
        : "border-slate-700"
    } bg-slate-800 px-4 py-3 text-white`}
  />

  {duplicateEmployeeId && (
    <p className="mt-2 text-sm text-red-400">
      Employee ID already exists.
    </p>
  )}
</div>

{/* Faculty Name */}

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Faculty Name
  </label>

  <input
    value={faculty.name}
    onChange={(e) =>
      update("name", e.target.value)
    }
    placeholder="Dr. John Smith"
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
  />
</div>

{/* Designation */}

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Designation
  </label>

  <select
    value={faculty.designation}
    onChange={(e) =>
      update("designation", e.target.value)
    }
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
  >
    <option>Professor</option>
    <option>Associate Professor</option>
    <option>Assistant Professor</option>
    <option>Lecturer</option>
    <option>Lab Instructor</option>
    <option>Visiting Faculty</option>
  </select>
</div>

{/* Department */}

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Department
  </label>

  <input
    value={faculty.department}
    onChange={(e) =>
      update("department", e.target.value)
    }
    placeholder="Computer Science"
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
  />
</div>

{/* Email */}

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Email
  </label>

  <input
    type="email"
    value={faculty.email}
    onChange={(e) =>
      update("email", e.target.value)
    }
    placeholder="faculty@university.edu"
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
  />
</div>

{/* Phone */}

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Phone
  </label>

  <input
    value={faculty.phone}
    onChange={(e) =>
      update("phone", e.target.value)
    }
    placeholder="+91 9876543210"
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
  />
</div>

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Max Lectures / Day
  </label>

  <input
    type="number"
    min="1"
    value={faculty.maxLecturesPerDay}
    onChange={(e) =>
      update(
        "maxLecturesPerDay",
        Number(e.target.value)
      )
    }
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
  />
</div>

<div>
  <label className="mb-2 block text-sm text-slate-300">
    Max Lectures / Week
  </label>

  <input
    type="number"
    min="1"
    value={faculty.maxLecturesPerWeek}
    onChange={(e) =>
      update(
        "maxLecturesPerWeek",
        Number(e.target.value)
      )
    }
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
  />
</div>

{/* Subjects This Faculty Can Teach */}

<div className="mt-6">

  <label className="mb-3 block text-sm font-medium text-slate-300">
    Subjects This Faculty Can Teach
  </label>

  {project.subjects.length === 0 ? (

    <div className="rounded-xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
      No subjects available.
      <br />
      Add subjects in Step 5 first.
    </div>

  ) : (

    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

      {project.subjects
  .filter(
  (subject) =>
    subject.code.trim() !== "" &&
    subject.name.trim() !== "" &&
    subject.divisionIds.length > 0
)
  .map((subject) => {

        const checked =
          faculty.subjectIds.includes(subject.id);

        return (

          <label
            key={subject.id}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 transition hover:border-cyan-500"
          >

            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => {

                if (e.target.checked) {

                  update("subjectIds", [
                    ...faculty.subjectIds,
                    subject.id,
                  ]);

                } else {

                  update(
                    "subjectIds",
                    faculty.subjectIds.filter(
                      (id) => id !== subject.id
                    )
                  );

                }

              }}
            />

            <span className="text-white">
  {subject.code} — {subject.name}
</span>

          </label>

        );

      })}

    </div>

  )}

</div>

      </div>

    </div>
  );
};

export default FacultyCard;