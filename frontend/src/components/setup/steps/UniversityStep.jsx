import { useProject } from "../../../context/ProjectContext";

const UniversityStep = () => {
  const { project, updateProject } = useProject();
  return (
    <div className="space-y-6">

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          University Name
        </label>

        <input
          type="text"
          placeholder="Enter university name"
          value={project.university.name}
          onChange={(e) =>
            updateProject({
              university: {
                ...project.university,
                name: e.target.value,
              },
            })
          }
  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
/>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Department
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
            <option>Select Department</option>
            <option>Computer Engineering</option>
            <option>Information Technology</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Academic Year
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
            <option>2026-27</option>
            <option>2027-28</option>
            <option>2028-29</option>
          </select>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Semester
          </label>

          <select className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white">
            <option>Semester 1</option>
            <option>Semester 2</option>
            <option>Semester 3</option>
            <option>Semester 4</option>
            <option>Semester 5</option>
            <option>Semester 6</option>
            <option>Semester 7</option>
            <option>Semester 8</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Number of Divisions
          </label>

          <input
            type="number"
            min="1"
            max="20"
            defaultValue="1"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
          />
        </div>

      </div>

    </div>
  );
};

export default UniversityStep;