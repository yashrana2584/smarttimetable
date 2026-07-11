import { ShieldCheck, Scale, BrainCircuit, FileDown } from 'lucide-react'
import FeatureCard from './FeatureCard.jsx'

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Zero Faculty Conflicts',
    description:
      'Automatically detects and eliminates overlapping faculty, room, and section assignments before they happen.',
  },
  {
    icon: Scale,
    title: 'Balanced Workload',
    description:
      'Distributes teaching hours evenly across faculty so no one is overloaded and no slot sits empty.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Optimized Scheduling',
    description:
      'A constraint-aware AI engine finds the most efficient timetable across thousands of possible combinations.',
  },
  {
    icon: FileDown,
    title: 'One-Click PDF & Excel Export',
    description:
      'Export polished, ready-to-share timetables to PDF or Excel instantly, formatted for print or review.',
  },
]

export default function Features() {
  return (
    <section className="relative w-full px-4 pb-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Built for how universities actually schedule
          </h2>
          <p className="mt-3 font-body text-sm text-white/60 sm:text-base">
            Four core strengths that make SchedulAI the fastest path from
            blank term to finished timetable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`${0.15 + i * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
