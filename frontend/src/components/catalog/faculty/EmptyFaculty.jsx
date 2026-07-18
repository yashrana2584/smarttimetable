import { Users } from "lucide-react";

const EmptyFaculty = ({ onAdd }) => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center">

      <Users
        size={52}
        className="mx-auto text-slate-500"
      />

      <h2 className="mt-5 text-xl font-semibold text-white">
        No Faculty Added
      </h2>

      <p className="mt-2 text-slate-400">
        Add your first faculty member to begin.
      </p>

      <button
        onClick={onAdd}
        className="mt-6 rounded-xl bg-cyan-600 px-6 py-3 text-white hover:bg-cyan-500"
      >
        Add First Faculty
      </button>

    </div>
  );
};

export default EmptyFaculty;