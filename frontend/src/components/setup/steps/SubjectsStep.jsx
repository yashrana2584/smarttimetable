import { BookOpen } from "lucide-react";

import { useProject } from "../../../context/ProjectContext";

import SubjectList from "../../catalog/subject/SubjectList";
import EmptySubjects from "../../catalog/subject/EmptySubjects";
import AddSubjectButton from "../../catalog/subject/AddSubjectButton";

const SubjectsStep = () => {
  const {
    project,
    addSubject,
  } = useProject();

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <BookOpen
              className="text-cyan-400"
              size={28}
            />

            <h2 className="text-2xl font-bold text-white">
              Subject Catalog
            </h2>

          </div>

          <p className="mt-2 text-slate-400">
            Create every subject that the AI will schedule.
          </p>

        </div>

        {project.subjects.length > 0 && (
          <AddSubjectButton
            onClick={addSubject}
          />
        )}

      </div>

      {project.subjects.length === 0 ? (
        <EmptySubjects
          onAdd={addSubject}
        />
      ) : (
        <SubjectList
          subjects={project.subjects}
        />
      )}

    </div>
  );
};

export default SubjectsStep;