import { Plus } from "lucide-react";

const AddSubjectButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-900 hover:bg-cyan-400"
    >
      <Plus size={18} />

      Add Subject
    </button>
  );
};

export default AddSubjectButton;