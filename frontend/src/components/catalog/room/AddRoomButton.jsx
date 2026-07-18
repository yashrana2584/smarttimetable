import { Plus } from "lucide-react";
import { useProject } from "../../../context/ProjectContext";

const AddRoomButton = () => {
  const { addRoom } = useProject();

  return (
    <button
      onClick={addRoom}
      className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-900 transition hover:bg-cyan-400"
    >
      <Plus size={18} />
      Add Room
    </button>
  );
};

export default AddRoomButton;