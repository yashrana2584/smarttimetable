/**
 * GlassCard — generic glassmorphism container used across the workspace.
 * Purely presentational: no state, no data handling.
 */
export default function GlassCard({
  as: Tag = 'div',
  className = '',
  hoverable = false,
  padding = 'p-6',
  children,
  ...rest
}) {
  return (
    <Tag
      className={[
        'rounded-3xl border border-glassBorder bg-glass backdrop-blur-xl',
        'shadow-[0_8px_40px_-16px_rgba(2,8,23,0.7)]',
        hoverable &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-glassHover',
        padding,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}
