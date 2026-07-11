/**
 * WorkspaceBackground — fixed dark-blue gradient backdrop for the workspace.
 * Decorative only; contains no logic.
 */
export default function WorkspaceBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-abyss">
      <div className="absolute inset-0 bg-gradient-to-br from-abyss via-navy to-deep" />
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-steel/30" />

      {/* Signature schedule-grid texture, slowly panning */}
      <div className="absolute inset-0 schedule-grid animate-grid-pan opacity-70" />

      {/* Soft ambient glow */}
      <div className="absolute -top-24 left-1/4 h-[26rem] w-[26rem] rounded-full bg-signal/10 blur-[130px] animate-glow-drift" />
      <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-steel/40 blur-[120px] animate-glow-drift" />

      <div className="absolute inset-0 bg-gradient-to-b from-abyss/20 via-transparent to-abyss/70" />
    </div>
  )
}
