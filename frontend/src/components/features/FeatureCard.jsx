export default function FeatureCard({ icon: Icon, title, description, delay }) {
  return (
    <div
      className="group animate-fade-up rounded-3xl border border-glassBorder bg-glass p-6 text-left backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.08] sm:p-7"
      style={{ animationDelay: delay }}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cobalt/40 to-violet/40 text-aqua ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-white/60">
        {description}
      </p>
    </div>
  )
}
