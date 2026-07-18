import { DoorOpen, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useProject } from "../../../context/ProjectContext";

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    className="bg-white rounded-xl border border-slate-200 px-4 py-3 flex items-center gap-3 hover:shadow-md transition-all"
  >
    <div className={`p-2 rounded-lg ${color}`}>
    <Icon className="w-5 h-5 text-white" />
</div>

    <div>
      <p className="text-xs text-slate-500">{title}</p>

<h2 className="text-lg font-bold text-slate-800">
  {String(value).padStart(2, "0")}
</h2>
    </div>
  </motion.div>
);

export default function RoomStats() {
  const { project } = useProject();

  const totalRooms = project.rooms.length;

  const readyRooms = project.rooms.filter((room) => {
    const errors = [];

    if (!room.roomNumber.trim()) errors.push(true);
    if (!room.building.trim()) errors.push(true);
    if (!room.department.trim()) errors.push(true);
    if (room.capacity <= 0) errors.push(true);

    switch (room.type) {
      case "Classroom":
        if (!room.hasProjector) errors.push(true);
        break;

      case "Computer Lab":
        if (!room.hasComputers) errors.push(true);
        if (!room.hasInternet) errors.push(true);
        break;

      case "Seminar Hall":
        if (!room.hasProjector) errors.push(true);
        break;

      default:
        break;
    }

    return errors.length === 0;
  }).length;

  const pendingRooms = totalRooms - readyRooms;

  return (
    <div className="grid grid-cols-3 gap-3 mb-5">
      <StatCard
        icon={DoorOpen}
        title="Total Rooms"
        value={totalRooms}
        color="bg-cyan-500"
      />

      <StatCard
        icon={CheckCircle2}
        title="AI Ready"
        value={readyRooms}
        color="bg-emerald-500"
      />

      <StatCard
        icon={AlertTriangle}
        title="Pending"
        value={pendingRooms}
        color="bg-amber-500"
      />
    </div>
  );
}