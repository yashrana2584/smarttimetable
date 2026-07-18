const ProjectSessionDialog = ({
  open,
  projectName,
  onContinue,
  onNewProject,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

        <h2 className="text-2xl font-bold text-white">
          Continue Previous Project?
        </h2>

        <p className="mt-3 text-slate-400">
          We found an unfinished project.
        </p>

        <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800 p-4">
          <p className="text-sm text-slate-400">
            Project Name
          </p>

          <p className="mt-1 text-lg font-semibold text-white">
            {projectName || "Untitled Project"}
          </p>
        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onNewProject}
            className="rounded-xl border border-slate-700 px-5 py-3 text-white hover:bg-slate-800"
          >
            New Project
          </button>

          <button
            onClick={onContinue}
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 hover:bg-cyan-400"
          >
            Continue
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProjectSessionDialog;