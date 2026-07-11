/**
 * SidebarItem — single nav row. Active/collapsed state and the click
 * handler are all supplied by the parent; this component only renders.
 */
export default function SidebarItem({
  icon: Icon,
  label,
  active = false,
  collapsed = false,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={collapsed ? label : undefined}
      aria-current={active ? 'page' : undefined}
      className={[
        'group relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200',
        active
          ? 'bg-signal/15 text-white'
          : 'text-white/60 hover:bg-white/[0.06] hover:text-white/90',
        collapsed ? 'justify-center' : '',
      ].join(' ')}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-signal" />
      )}
      <Icon
        size={18}
        strokeWidth={1.8}
        className={active ? 'text-signal' : 'text-white/50 group-hover:text-white/80'}
      />
      <span
        className={[
          'whitespace-nowrap font-body text-sm font-medium transition-all duration-200',
          collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100',
        ].join(' ')}
      >
        {label}
      </span>
    </button>
  )
}
