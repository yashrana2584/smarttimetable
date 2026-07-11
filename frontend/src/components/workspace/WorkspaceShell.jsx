import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

/**
 * WorkspaceShell — top-level layout for the workspace page.
 * Composes Sidebar + Topbar around whatever content is passed in.
 * All state (active section, collapse, autosave status) is owned by
 * the parent and passed down as props.
 */
export default function WorkspaceShell({
  sections,
  activeId,
  onSelect,
  collapsed,
  onToggleCollapse,
  completedSteps,
  topbarTitle,
  topbarDescription,
  autosaveStatus,
  projectName,
  children,
}) {
  return (
    <div className="relative flex min-h-screen w-full">
      <Sidebar
        sections={sections}
        activeId={activeId}
        onSelect={onSelect}
        collapsed={collapsed}
        onToggleCollapse={onToggleCollapse}
        completedSteps={completedSteps}
      />

      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar
          title={topbarTitle}
          description={topbarDescription}
          autosaveStatus={autosaveStatus}
          projectName={projectName}
        />

        <main className="flex-1 px-6 py-8 sm:px-8">
          <div className="mx-auto max-w-5xl">{children}</div>
        </main>
      </div>
    </div>
  )
}
