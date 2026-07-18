import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";

const tasks = [
  "Loading project...",
  "Validating faculty...",
  "Checking room conflicts...",
  "Optimizing lecture schedule...",
  "Generating final timetable...",
];

export default function AIGenerationScreen() {
  const [currentTask, setCurrentTask] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTask((prev) => {
        if (prev < tasks.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/80 p-10 backdrop-blur-xl">

        <div className="flex items-center justify-center gap-3">

          <Sparkles className="text-cyan-400" size={32} />

          <h1 className="text-4xl font-bold text-white">
            AI Timetable Engine
          </h1>

        </div>

        <p className="mt-4 text-center text-slate-400">
          Please wait while we generate the optimal timetable.
        </p>

        <div className="mt-10 space-y-4">

          {tasks.map((task, index) => (

            <div
              key={task}
              className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-800/40 px-5 py-4"
            >

              <span className="text-slate-300">
                {task}
              </span>

              {index < currentTask ? (
                <CheckCircle2 className="text-emerald-400" />
              ) : index === currentTask ? (
                <Loader2 className="animate-spin text-cyan-400" />
              ) : (
                <div className="h-5 w-5 rounded-full border border-slate-600" />
              )}

            </div>

          ))}

        </div>

        <div className="mt-10 h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full bg-cyan-400 transition-all duration-700"
            style={{
              width: `${((currentTask + 1) / tasks.length) * 100}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}