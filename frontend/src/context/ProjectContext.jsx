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

const addDivision = () => {
  setProject((prev) => ({
    ...prev,
    divisions: [
      ...prev.divisions,
      {
  id: crypto.randomUUID(),

  name: `Division ${String.fromCharCode(65 + prev.divisions.length)}`,

  shortName: String.fromCharCode(65 + prev.divisions.length),

  semester: prev.university.semester || "",

  strength: "",

  shift: "Morning",

  roomPreference: "",

  sectionColor: "#06B6D4",

  notes: "",
}
    ],
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const updateDivision = (id, updates) => {
  setProject((prev) => ({
    ...prev,
    divisions: prev.divisions.map((division) =>
      division.id === id
        ? {
            ...division,
            ...updates,
          }
        : division
    ),
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const deleteDivision = (id) => {
  setProject((prev) => ({
    ...prev,
    divisions: prev.divisions.filter(
      (division) => division.id !== id
    ),
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const addSubject = () => {
  setProject((prev) => ({
    ...prev,
    subjects: [
      ...prev.subjects,
      {
    id: crypto.randomUUID(),

    code: "",

    name: "",

    shortName: "",

    type: "Theory",

    lecturesPerWeek: 1,

    practicalsPerWeek: 0,

    credits: 1,

    requiresLab: false,

    preferredRoomType: "Any Classroom",

    facultyIds: [],

    divisionIds: [],

    notes: "",
}
    ],
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const updateSubject = (id, updates) => {
  setProject((prev) => ({
    ...prev,
    subjects: prev.subjects.map((subject) =>
      subject.id === id
        ? {
            ...subject,
            ...updates,
          }
        : subject
    ),
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

const deleteSubject = (id) => {
  setProject((prev) => ({
    ...prev,
    subjects: prev.subjects.filter(
      (subject) => subject.id !== id
    ),
    metadata: {
      ...prev.metadata,
      updatedAt: new Date().toISOString(),
    },
  }));
};

// ============================
// Faculty CRUD
// ============================

const addFaculty = () => {
  setProject((prev) => ({
    ...prev,
    faculty: [
      ...prev.faculty,
      {
        id: crypto.randomUUID(),

        employeeId: "",

        name: "",

        designation: "Assistant Professor",

        email: "",

        phone: "",

        department: "",

        subjectIds: [],

        availableDays: [],

        unavailableSlots: [],

        maxLecturesPerDay: 4,

        maxLecturesPerWeek: 20,

        notes: "",
      },
    ],
  }));
};

const updateFaculty = (id, updates) => {
  setProject((prev) => ({
    ...prev,
    faculty: prev.faculty.map((faculty) =>
      faculty.id === id
        ? { ...faculty, ...updates }
        : faculty
    ),
  }));
};

const deleteFaculty = (id) => {
  setProject((prev) => ({
    ...prev,
    faculty: prev.faculty.filter(
      (faculty) => faculty.id !== id
    ),
  }));
};

const addRoom = () => {
  updateProject({
    rooms: [
      ...project.rooms,
      {
        id: crypto.randomUUID(),

        roomNumber: "",
        building: "",

        type: "Classroom",
        capacity: 60,

        department: "",

        hasProjector: false,
        hasComputers: false,
        hasInternet: false,
        hasAC: false,

        notes: "",
      },
    ],
  });
};

const updateRoom = (id, updates) => {
  updateProject({
    rooms: project.rooms.map((room) =>
      room.id === id
        ? { ...room, ...updates }
        : room
    ),
  });
};

const deleteRoom = (id) => {
  updateProject({
    rooms: project.rooms.filter(
      (room) => room.id !== id
    ),
  });
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

  const resetProject = () => {
  localStorage.removeItem("schedulai-project");
  localStorage.removeItem("schedulai-current-step");

  setProject(initialProject);
};
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
  addDivision,
updateDivision,
deleteDivision,
addSubject,
updateSubject,
deleteSubject,
addFaculty,
updateFaculty,
deleteFaculty,
addRoom,
updateRoom,
deleteRoom,
resetProject,

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