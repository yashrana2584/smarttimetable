import { BookOpen } from "lucide-react";

const EmptySubjects = ({ onAdd }) => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 py-16 text-center">

      <BookOpen
        size={56}
        className="mx-auto text-slate-500"
      />

      <h2 className="mt-5 text-2xl font-semibold text-white">
        No Subjects Added
      </h2>

      <p className="mt-2 text-slate-400">
        Start building your curriculum by adding your first subject.
      </p>

      <button
        onClick={onAdd}
        className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-900 hover:bg-cyan-400"
      >
        Add First Subject
      </button>

    </div>
  );
};

export default EmptySubjects;