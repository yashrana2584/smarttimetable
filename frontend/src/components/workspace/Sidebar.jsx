import { PanelLeftClose, PanelLeftOpen, CalendarClock } from 'lucide-react'
import SidebarItem from './SidebarItem.jsx'
import ProgressIndicator from './ProgressIndicator.jsx'

/**
 * Sidebar — collapsible workspace navigation.
 * Fully controlled: collapse state, active section, and selection are
 * all passed in as props. No data fetching or business rules live here.
 *
 * @param {Array<{id:string,label:string,icon:Function}>} sections
 * @param {string} activeId
 * @param {(id: string) => void} onSelect
 * @param {boolean} collapsed
 * @param {() => void} onToggleCollapse
 * @param {number} completedSteps
 */
export default function Sidebar({
  sections = [],
  activeId,
  onSelect = () => {},
  collapsed = false,
  onToggleCollapse = () => {},
  completedSteps = 0,
}) {
  return (
    <aside
      className={[
        'thin-scrollbar sticky top-0 flex h-screen flex-col overflow-y-auto border-r border-glassBorder bg-glass backdrop-blur-2xl transition-[width] duration-300 ease-in-out',
        collapsed ? 'w-[84px]' : 'w-[276px]',
      ].join(' ')}
    >
      {/* Brand + collapse toggle */}
      <div
        className={[
          'flex items-center gap-2 border-b border-glassBorder px-4 py-5',
          collapsed ? 'justify-center' : 'justify-between',
        ].join(' ')}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-signalDim to-signal shadow-md shadow-signal/20">
            <CalendarClock size={18} className="text-abyss" strokeWidth={2.2} />
          </span>
          <span
            className={[
              'whitespace-nowrap font-display text-base font-semibold text-white transition-all duration-200',
              collapsed ? 'w-0 opacity-0' : 'w-auto opacity-100',
            ].join(' ')}
          >
            SchedulAI
          </span>
        </div>

        {!collapsed && (
          <button
            type="button"
            onClick={onToggleCollapse}
            aria-label="Collapse sidebar"
            className="rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            <PanelLeftClose size={18} />
          </button>
        )}
      </div>

      {collapsed && (
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label="Expand sidebar"
          className="mx-auto mt-3 rounded-lg p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
        >
          <PanelLeftOpen size={18} />
        </button>
      )}

      {/* Nav sections */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {sections.map((section) => (
          <SidebarItem
            key={section.id}
            icon={section.icon}
            label={section.label}
            active={section.id === activeId}
            collapsed={collapsed}
            onClick={() => onSelect(section.id)}
          />
        ))}
      </nav>

      {/* Footer progress */}
      <div
        className={[
          'border-t border-glassBorder px-4 py-4',
          collapsed ? 'flex justify-center' : '',
        ].join(' ')}
      >
        {collapsed ? (
          <span className="font-display text-[10px] font-semibold text-signal">
            {completedSteps}/{sections.length}
          </span>
        ) : (
          <ProgressIndicator
            completedSteps={completedSteps}
            totalSteps={sections.length}
            label="Workspace setup"
          />
        )}
      </div>
    </aside>
  )
}
