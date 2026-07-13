import { ArrowRight, FolderOpen, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center px-4 pt-24 pb-16 sm:px-6">
      <div
        className="w-full max-w-3xl animate-fade-up rounded-[28px] border border-glassBorder bg-glass p-8 text-center shadow-[0_8px_60px_-12px_rgba(30,20,90,0.6)] backdrop-blur-2xl sm:p-12 md:p-14"
        style={{ animationDelay: '0.1s' }}
      >
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-glassBorder bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-aqua/90">
          <Sparkles size={14} strokeWidth={2} />
          <span>Powered by AI scheduling engine</span>
        </div>

        <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          AI Powered University
          <br className="hidden sm:block" /> Timetable Generator
        </h1>

        <p className="mx-auto mt-5 max-w-xl font-body text-base leading-relaxed text-white/70 sm:text-lg">
          Generate optimized, conflict-free university timetables in minutes
          using AI.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
         <button
              type="button"
              onClick={() => navigate("/setup")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cobalt via-indigo to-violet px-8 py-4 font-display text-base font-semibold text-white shadow-lg shadow-indigo/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet/40 hover:brightness-110 focus-visible:outline-none active:scale-[0.98] sm:w-auto"
          >
            Create New Timetable
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-glassBorder bg-white/5 px-8 py-4 font-display text-base font-semibold text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus-visible:outline-none active:scale-[0.98] sm:w-auto"
          >
            <FolderOpen size={18} />
            Open Existing Project
          </button>
        </div>
      </div>
    </section>
  )
}
