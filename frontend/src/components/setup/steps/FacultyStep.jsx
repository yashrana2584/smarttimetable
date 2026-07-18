import { useProject } from "../../../context/ProjectContext";
import FacultyList from "../../catalog/faculty/FacultyList";
import EmptyFaculty from "../../catalog/faculty/EmptyFaculty";
import AddFacultyButton from "../../catalog/faculty/AddFacultyButton";

const FacultyStep = () => {
  const {
    project,
    addFaculty,
  } = useProject();

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-semibold text-white">
            Faculty Catalog
          </h2>

          <p className="text-slate-400">
            Add and manage faculty members.
          </p>
        </div>

        <AddFacultyButton onClick={addFaculty} />

      </div>

      {project.faculty.length === 0 ? (
        <EmptyFaculty onAdd={addFaculty} />
      ) : (
        <FacultyList faculty={project.faculty} />
      )}

    </div>
  );
};

export default FacultyStep;