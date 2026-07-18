import { Plus } from "lucide-react";

const AddFacultyButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-white transition hover:bg-cyan-500"
    >
      <Plus size={18} />
      Add Faculty
    </button>
  );
};

export default AddFacultyButton;