import { CalendarClock } from 'lucide-react'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center justify-center px-6 py-6 sm:justify-start">
      <div className="flex items-center gap-2 text-white/90">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cobalt to-violet shadow-md shadow-indigo/30">
          <CalendarClock size={18} strokeWidth={2} />
        </span>
        <span className="font-display text-lg font-semibold tracking-tight">
          SchedulAI
        </span>
      </div>
    </header>
  )
}
