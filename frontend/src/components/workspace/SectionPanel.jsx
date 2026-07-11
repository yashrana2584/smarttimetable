import GlassCard from './GlassCard.jsx'

/**
 * SectionPanel — consistent heading + glass card wrapper for a
 * workspace section's content. Renders whatever is passed as children;
 * holds no data or validation logic itself.
 */
export default function SectionPanel({ eyebrow, title, description, children }) {
  return (
    <section className="animate-fade-up">
      {(eyebrow || title || description) && (
        <div className="mb-5">
          {eyebrow && (
            <p className="font-body text-xs font-semibold uppercase tracking-wider text-signal/80">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-1 font-display text-lg font-semibold text-white">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-1 font-body text-sm text-white/55">{description}</p>
          )}
        </div>
      )}
      <GlassCard padding="p-6 sm:p-8">{children}</GlassCard>
    </section>
  )
}
