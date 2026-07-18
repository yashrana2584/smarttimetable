import { useProject } from "../../../context/ProjectContext";
import StatCard from "../StatCard";

import {
  Building2,
  CalendarDays,
  Clock3,
  Users,
  BookOpen,
  GraduationCap,
  DoorOpen,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Wand2,
} from "lucide-react";


export default function ReviewStep({
  onBack,
  onGenerate,
}) {

  const { project } = useProject();

const university = project.university;
const workingDays = project.workingSchedule.activeDays;
const lectureSlots = project.lectureSlots;
const divisions = project.divisions;
const subjects = project.subjects;
const faculty = project.faculty;
const rooms = project.rooms;

const validations = [
  {
    title: "University configured",
    valid: !!university?.name,
  },
  {
    title: "Working days selected",
    valid: workingDays.length > 0,
  },
  {
    title: "Lecture slots added",
    valid: lectureSlots.length > 0,
  },
  {
    title: "Divisions added",
    valid: divisions.length > 0,
  },
  {
    title: "Subjects added",
    valid: subjects.length > 0,
  },
  {
    title: "Faculty added",
    valid: faculty.length > 0,
  },
  {
    title: "Rooms added",
    valid: rooms.length > 0,
  },
];

  return (
    <div className="min-h-screen bg-slate-950">

      <div className="mx-auto max-w-7xl px-8 py-10">

        <div className="mb-10 text-center">

          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-400">

            <Sparkles className="mr-2" size={18} />

            Review & Generate

          </div>

          <h1 className="text-5xl font-bold text-white">
            Review Your Setup
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Everything looks good. Review your configuration before AI
            generates an optimized timetable.
          </p>

        </div>

        {/* Next step starts here */}

        <div className="grid gap-8 lg:grid-cols-3">

  {/* LEFT COLUMN */}

  <div className="space-y-6 lg:col-span-2">

    {/* University Card */}

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">

      <div className="mb-6 flex items-center gap-3">

        <Building2 className="text-cyan-400" />

        <h2 className="text-xl font-semibold text-white">
          University
        </h2>

      </div>

      <div className="space-y-2">
  <p className="text-lg font-medium text-white">
    {university.name || "Not Configured"}
  </p>

  <p className="text-slate-400">
    {university.department}
  </p>

  <p className="text-slate-400">
    {university.program}
  </p>

  <p className="text-slate-400">
    {university.academicYear}
  </p>

  <p className="text-slate-400">
    {university.semester}
  </p>
</div>

    </div>

    {/* Working Days Card will go here */}

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">

  <div className="mb-6 flex items-center gap-3">

    <CalendarDays className="text-cyan-400" />

    <h2 className="text-xl font-semibold text-white">
      Working Days
    </h2>

  </div>

  <div className="flex flex-wrap gap-3">

    {workingDays.length > 0 ? (
      workingDays.map((day) => (
        <span
          key={day}
          className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 border border-cyan-500/20"
        >
          {day}
        </span>
      ))
    ) : (
      <p className="text-slate-400">
        No working days configured.
      </p>
    )}

  </div>

</div>

    {/* Lecture Slots Card will go here */}

<div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">

  <div className="mb-6 flex items-center gap-3">

    <Clock3 className="text-cyan-400" />

    <h2 className="text-xl font-semibold text-white">
      Lecture Slots
    </h2>

  </div>

  <div className="space-y-3">

    {lectureSlots.length > 0 ? (
      lectureSlots.map((slot, index) => (
        <div
          key={index}
          className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/40 px-4 py-3"
        >
          <span className="font-medium text-white">
            Slot {index + 1}
          </span>

          <span className="text-slate-300">
            {slot.startTime} - {slot.endTime}
          </span>
        </div>
      ))
    ) : (
      <p className="text-slate-400">
        No lecture slots added.
      </p>
    )}

  </div>

</div>
  </div>

  {/* RIGHT COLUMN */}

  <div className="space-y-6">

    {/* Summary Card */}

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">

  <h2 className="mb-6 text-xl font-semibold text-white">
    Summary
  </h2>

  <div className="grid grid-cols-2 gap-4">

    <StatCard
      icon={<BookOpen size={20} />}
      label="Subjects"
      value={subjects.length}
    />

    <StatCard
      icon={<GraduationCap size={20} />}
      label="Faculty"
      value={faculty.length}
    />

    <StatCard
      icon={<DoorOpen size={20} />}
      label="Rooms"
      value={rooms.length}
    />

    <StatCard
      icon={<Users size={20} />}
      label="Divisions"
      value={divisions.length}
    />

  </div>

</div>

    {/* AI Validation Card */}

    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">

  <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-white">
    <CheckCircle2 className="text-cyan-400" size={22} />
    AI Validation
  </h2>

  <div className="space-y-4">

    {validations.map((item) => (

      <div
        key={item.title}
        className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/40 px-4 py-3"
      >

        <span className="text-slate-300">
          {item.title}
        </span>

        {item.valid ? (
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
            ✓ Ready
          </span>
        ) : (
          <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-400">
            Missing
          </span>
        )}

      </div>

    ))}

  </div>

</div>

  </div>

</div>

      </div>

      <div className="sticky bottom-0 mt-10 rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-5">

  <div className="flex items-center justify-between">

    <button
      onClick={onBack}
      className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-cyan-500 hover:bg-slate-800"
    >
      ← Previous
    </button>

    <button
      onClick={onGenerate}
      className="rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
    >
      🚀 Generate Timetable
    </button>

  </div>

</div>

    </div>
  );
}