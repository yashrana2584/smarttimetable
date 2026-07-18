import { Sparkles, CalendarDays } from "lucide-react";
import { useProject } from "../../context/ProjectContext";

export default function HeroBanner() {
  const { project } = useProject();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 p-8">

      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative flex items-center justify-between">

        <div>

          <div className="flex items-center gap-3">

            <CalendarDays
              className="text-cyan-400"
              size={34}
            />

            <h1 className="text-4xl font-bold text-white">
              Generated Timetable
            </h1>

          </div>

          <p className="mt-4 text-slate-400">

            {project.university.department} •

            {" "}

            Semester {project.university.semester}

            {" • "}

            {project.divisions.length} Divisions

          </p>

        </div>

        <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3">

          <div className="flex items-center gap-2">

            <Sparkles
              className="text-cyan-400"
              size={18}
            />

            <span className="font-semibold text-cyan-300">

              AI Optimized

            </span>

          </div>

        </div>

      </div>

    </div>
  );
}