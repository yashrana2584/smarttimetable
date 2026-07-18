import { DoorOpen } from "lucide-react";

const EmptyRoom = () => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center">

      <DoorOpen
        size={50}
        className="mx-auto mb-5 text-slate-500"
      />

      <h2 className="text-xl font-semibold text-white">
        No Rooms Added
      </h2>

      <p className="mt-2 text-slate-400">
        Add classrooms and labs for AI room allocation.
      </p>

    </div>
  );
};

export default EmptyRoom;