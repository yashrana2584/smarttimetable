import { CalendarDays, Sparkles } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">

      <div>

        <div className="flex items-center gap-3">

          <CalendarDays className="text-cyan-400" size={34} />

          <h1 className="text-3xl font-bold text-white">
            Generated Timetable
          </h1>

        </div>

        <p className="mt-2 text-slate-400">
          AI has successfully generated your university timetable.
        </p>

      </div>

      <div className="flex items-center gap-2 rounded-2xl bg-cyan-500/10 px-4 py-2">

        <Sparkles className="text-cyan-400" />

        <span className="font-medium text-cyan-300">
          AI Optimized
        </span>

      </div>

    </div>
  );
}