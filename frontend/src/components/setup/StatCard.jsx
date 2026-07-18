export default function StatCard({
  icon,
  label,
  value,
}) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-800/70">
      <div className="mb-3 flex items-center justify-between">

        <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
          {icon}
        </div>

        <span className="text-3xl font-bold text-white">
          {value}
        </span>

      </div>

      <p className="text-sm font-medium text-slate-400">
        {label}
      </p>
    </div>
  );
}