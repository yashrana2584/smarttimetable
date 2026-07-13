import { createContext, useContext, useMemo, useState } from "react";

const ProjectContext = createContext();

const initialProject = {
  projectId: "",
  projectName: "",
  academicYear: "",

  university: {
  name: "",
  department: "",
  semester: "",
  divisions: 1,
},
  workingDays: {
  selected: [],
  weeklyHoliday: "Sunday",
},

  lectureSlots: [],

  divisions: [],

  faculty: [],

  subjects: [],

  rooms: [],

  aiSettings: {
    optimizeFacultyTime: true,
    avoidConflicts: true,
    balanceWorkload: true,
  },

  timetable: null,
};

export function ProjectProvider({ children }) {
  const [project, setProject] = useState(initialProject);

  const updateProject = (updates) => {
    setProject((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const completion = useMemo(() => {
    let completed = 0;
    const total = 7;

    if (project.projectName) completed++;
    if (project.university.name) completed++;
    if (project.workingDays.length) completed++;
    if (project.lectureSlots.length) completed++;
    if (project.subjects.length) completed++;
    if (project.faculty.length) completed++;
    if (project.rooms.length) completed++;

    return Math.round((completed / total) * 100);
  }, [project]);

  const value = {
    project,
    updateProject,
    completion,
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  return useContext(ProjectContext);
}