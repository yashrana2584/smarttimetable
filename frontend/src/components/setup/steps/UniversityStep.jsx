import { useProject } from "../../../context/ProjectContext";
import SearchableSelect from "../../common/SearchableSelect";
import { DEPARTMENTS } from "../../../data/academicStructure";

const UniversityStep = () => {
  const {
    project,
    updateProject,
    updateUniversity,
  } = useProject();

  const selectedDepartment = DEPARTMENTS.find(
    (dept) => dept.id === project.university.department
  );

  const programOptions = selectedDepartment?.programs ?? [];

  return (
    <div className="space-y-8">

      {/* Project Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Project Name
        </label>

        <input
          type="text"
          placeholder="e.g. Diploma CE Semester 5"
          value={project.projectName}
          onChange={(e) =>
            updateProject({
              projectName: e.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
        />
      </div>

      {/* University */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          University
        </label>

        <input
          type="text"
          placeholder="Enter university name"
          value={project.university.name}
          onChange={(e) =>
            updateUniversity({
              name: e.target.value,
            })
          }
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
        />
      </div>

      {/* Department & Program */}
      <div className="grid grid-cols-2 gap-6">

        <SearchableSelect
          label="Department"
          placeholder="Search department..."
          options={DEPARTMENTS}
          value={project.university.department}
          onChange={(id) =>
            updateUniversity({
              department: id,
              program: null, // Reset program when department changes
            })
          }
        />

        <SearchableSelect
          label="Program"
          placeholder="Search program..."
          options={programOptions}
          value={project.university.program}
          onChange={(id) =>
            updateUniversity({
              program: id,
            })
          }
        />

      </div>

      {/* Academic Year & Semester */}
      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Academic Year
          </label>

          <select
            value={project.university.academicYear}
            onChange={(e) =>
              updateUniversity({
                academicYear: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          >
            <option value="">Select Academic Year</option>
            <option value="2026-27">2026-27</option>
            <option value="2027-28">2027-28</option>
            <option value="2028-29">2028-29</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Semester
          </label>

          <select
            value={project.university.semester}
            onChange={(e) =>
              updateUniversity({
                semester: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          >
            <option value="">Select Semester</option>
            <option value="Semester 1">Semester 1</option>
            <option value="Semester 2">Semester 2</option>
            <option value="Semester 3">Semester 3</option>
            <option value="Semester 4">Semester 4</option>
            <option value="Semester 5">Semester 5</option>
            <option value="Semester 6">Semester 6</option>
            <option value="Semester 7">Semester 7</option>
            <option value="Semester 8">Semester 8</option>
          </select>
        </div>

      </div>

    </div>
  );
};

export default UniversityStep;