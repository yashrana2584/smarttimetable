const EmptySubjects = ({ onAdd }) => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 p-10 text-center">
      <p className="mb-5 text-slate-400">
        No subjects added yet.
      </p>

      <button
        onClick={onAdd}
        className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900"
      >
        Create First Subject
      </button>
    </div>
  );
};

export default EmptySubjects;