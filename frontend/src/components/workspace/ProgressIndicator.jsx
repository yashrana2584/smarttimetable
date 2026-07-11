/**
 * ProgressIndicator — displays setup completion as a labeled bar.
 * Fully controlled by props; contains no calculation logic of its own.
 *
 * @param {number} completedSteps
 * @param {number} totalSteps
 * @param {string} label
 */
export default function ProgressIndicator({
  completedSteps = 0,
  totalSteps = 1,
  label = 'Setup progress',
  className = '',
}) {
  const safeTotal = Math.max(totalSteps, 1)
  const percent = Math.min(
    100,
    Math.max(0, Math.round((completedSteps / safeTotal) * 100))
  )

  return (
    <div className={`w-full max-w-xs ${className}`}>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-body text-xs font-medium text-white/60">
          {label}
        </span>
        <span className="font-display text-xs font-semibold text-signal">
          {completedSteps}/{totalSteps}
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-white/10"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-signalDim to-signal transition-all duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
