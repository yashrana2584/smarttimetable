import AutosaveBadge from './AutosaveBadge.jsx'

/**
 * Topbar — header strip above the active section's content.
 * Purely presentational; title/description/status come from props.
 */
export default function Topbar({
  title,
  description,
  autosaveStatus = 'saved',
  projectName = 'Untitled Project',
}) {
  return (
    <header className="sticky top-0 z-10 flex flex-col gap-4 border-b border-glassBorder bg-abyss/40 px-6 py-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <div>
        <p className="font-body text-xs font-medium uppercase tracking-wider text-signal/80">
          {projectName}
        </p>
        <h1 className="mt-1 font-display text-xl font-semibold text-white sm:text-2xl">
          {title}
        </h1>
        {description && (
          <p className="mt-1 max-w-xl font-body text-sm text-white/55">
            {description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <AutosaveBadge status={autosaveStatus} />
        <div className="h-9 w-9 shrink-0 rounded-full border border-glassBorder bg-gradient-to-br from-steel to-deep" />
      </div>
    </header>
  )
}
