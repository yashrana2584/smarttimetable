import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
const ProjectContext = createContext();

const initialProject = {
  projectId: "",

  projectName: "",

  description: "",

  university: {
    name: "",

    department: null,

    program: null,

    academicYear: "",

    semester: "",
  },

  workingSchedule: {
    activeDays: [],

    holidayStrategy: "AI",

    fixedHoliday: null,

    allowAlternateSaturday: false,

    maxLecturesPerDay: 7,
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
    preferMorningLabs: false,
    minimizeRoomChanges: true,
  },

  timetable: null,

  metadata: {
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: "1.0.0",
},
};

export function ProjectProvider({ children }) {
  const [project, setProject] = useState(() => {
  const saved = localStorage.getItem("schedulai-project");

  if (saved) {
    return JSON.parse(saved);
  }

  return initialProject;
});

  const updateProject = (updates) => {
  setProject((prev) => ({
    ...prev,
    ...updates,
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

  const updateUniversity = (updates) => {
  setProject((prev) => ({
    ...prev,
    university: {
      ...prev.university,
      ...updates,
    },
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const updateWorkingSchedule = (updates) => {
  setProject((prev) => ({
    ...prev,
    workingSchedule: {
      ...prev.workingSchedule,
      ...updates,
    },
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const updateAiSettings = (updates) => {
  setProject((prev) => ({
    ...prev,
    aiSettings: {
      ...prev.aiSettings,
      ...updates,
    },
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const addLectureSlot = () => {
  setProject((prev) => ({
    ...prev,
    lectureSlots: [
      ...prev.lectureSlots,
      {
        id: crypto.randomUUID(),
        type: "lecture",
        title: "Lecture",
        startTime: "",
        endTime: "",
      },
    ],
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const addShortBreak = () => {
  setProject((prev) => ({
    ...prev,
    lectureSlots: [
      ...prev.lectureSlots,
      {
        id: crypto.randomUUID(),
        type: "break",
        breakType: "short",
        title: "Short Break",
        startTime: "",
        endTime: "",
      },
    ],
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const addLunchBreak = () => {
  setProject((prev) => ({
    ...prev,
    lectureSlots: [
      ...prev.lectureSlots,
      {
        id: crypto.randomUUID(),
        type: "break",
        breakType: "lunch",
        title: "Lunch Break",
        startTime: "",
        endTime: "",
      },
    ],
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const updateLectureSlot = (id, updates) => {
  setProject((prev) => ({
    ...prev,
    lectureSlots: prev.lectureSlots.map((slot) =>
      slot.id === id
        ? {
            ...slot,
            ...updates,
          }
        : slot
    ),
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const deleteLectureSlot = (id) => {
  setProject((prev) => ({
    ...prev,
    lectureSlots: prev.lectureSlots.filter(
      (slot) => slot.id !== id
    ),
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

useEffect(() => {
  localStorage.setItem(
    "schedulai-project",
    JSON.stringify(project)
  );
}, [project]);
  const completion = useMemo(() => {
    let completed = 0;
    const total = 7;

    if (project.projectName) completed++;
    if (project.university.name) completed++;
    if (project.workingSchedule.activeDays.length) completed++;
    if (project.lectureSlots.length) completed++;
    if (project.subjects.length) completed++;
    if (project.faculty.length) completed++;
    if (project.rooms.length) completed++;

    return Math.round((completed / total) * 100);
  }, [project]);

 const value = {
  project,

  updateProject,
  updateUniversity,
  updateWorkingSchedule,
  updateAiSettings,

  addLectureSlot,
  addShortBreak,
  addLunchBreak,
  updateLectureSlot,
  deleteLectureSlot,

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